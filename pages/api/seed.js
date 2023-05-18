import db from "../../utils/db"
import User from "../../backend/models/User"
import users from "../../utils/users"
import Product from "../../backend/models/productModel"

const importData = async () => {
    try {
      await Order.deleteMany()
      await Product.deleteMany()
      await User.deleteMany()
 
      const createdUsers = await User.insertMany(users)
 
      const adminUser = createdUsers[0]._id
 
      const sampleProducts = products.map((product) => {
        return { ...product, user: adminUser }
      })
 
      await Product.insertMany(sampleProducts)
 
      console.log('Data Imported!')
      process.exit()
    } catch (error) {
      console.error(`${error}`)
      process.exit(1)
    }
  }
 
const handler = async (req, res) => {
    await db.connect()
    await User.deleteMany()
    await User.insertMany(users.users)
    await db.disconnect()
    res.send({ message: "seeded" })
}
export default handler
