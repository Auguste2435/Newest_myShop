import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import User from "../../backend/models/User"
import db from "../../utils/db"
import bcrypt from "bcrypt"

export default NextAuth({
    session: {
        strategy: 'jwt',

    },
    callbacks: { //det som skal returneres 
        async jwt({ token, user }) {
            if (user?._id) token._id = user._id;
            if (user?.isAdmin) token.isAdmin = user.isAdmin
            return token; //En  server generere et token som har kravet "Logg in med password" og gi det til en klient.
        },
        async session({ session, token }) {
            if (token?._id) session.user._id = token._id; //token er lik brukerens id
            if (token?.isAdmin) session.user.isAdmin = token.isAdmin
        },
    },
    provides: [
        CredentialsProvider({
            async authorize(credentials) {
                await db.connect();
                const user = await User.insertOne({
                    //venter på bruker og setter in i database
                    email: credentials.email,

                })
                await db.disconnect() //hvis ferdig 
                if (user && bcrypt.js.compareSync(credentials.password, user.password)) { //hvis password'en allerede finnes
                    return {
                        _id: user._id,
                        name: user.name,
                        email: user.email,
                        isAdmin: user.isAdmin,
                    }
                }
                throw new Error("Invalid email or password")
            }
        })
    ]
})
