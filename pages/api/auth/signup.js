import bcryptjs from 'bcryptjs';
import User from '../../../backend/models/User';
import db from '../../../utils/db';

async function handler(req, res) { 
  if (req.method !== 'POST') { //hvis forespørsel fra database er ikke lik "Post"
    return;
  }
  const { name, email, password } = req.body; //det som skal ha forespørsel
  
  if ( 
    !name || //hvis ikke navn eller
    !email || //hvis ikke email eller
    !email.includes('@') ||
    !password ||
    password.trim().length < 5
  ) {
    res.status(422).json({ //sender beskjeden til siden
      message: 'Validation error',
    });
    return;
  }

  await db.connect(); //venter på beskjeden og connect.

  const existingUser = await User.findOne({ email: email }); // venter og fra User finner ut email

  if (existingUser) { //hvis allerede eksisterer 
    res.status(422).send({ message: 'User exists already!' });
    await db.disconnect(); 
    return;
  }

  const newUser = new User({
    name,
    email,
    password: bcryptjs.hashSync(password),
    isAdmin: false,
  });

  const user = await newUser.save(); //save the new user
  await db.disconnect(); //mongodb database disconnect
  res.status(201).send({ //send beskjed at brukeren er lagret
    message: 'Created user!',
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
  });
  alert("User created!")
}

export default handler;
