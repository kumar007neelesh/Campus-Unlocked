const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const randomstring = require("randomstring");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path"); 
const router = express.Router();

const oatModel = require("./models/oat.model");
const ccdModel = require("./models/ccd.model");
const rm_kdModel = require("./models/rm_kd.model");
const p_k_kelkar_libraryModel = require("./models/p_k_kelkar_library.model");
const nurseryModel = require("./models/nursery.model");
const pronite_groundModel = require("./models/pronite_ground.model");
const mama_mioModel = require("./models/mama_mio.model");
const hockey_groundModel = require("./models/hockey_ground.model");
const stadiumModel = require("./models/stadium.model");
const auditoriumModel = require("./models/auditorium.model");
const swimming_poolModel = require("./models/swimming_pool.model");
const mtModel = require("./models/mt.model");
const tennis_courtModel = require("./models/tennis_court.model");
const old_sacModel = require("./models/old_sac.model");
const new_sacModel = require("./models/new_sac.model");
const oxidation_pondModel = require("./models/oxidation_pond.model");
const outreachModel = require("./models/outreach.model");
const doaa_canteenModel = require("./models/doaa_canteen.model");
const flight_laboratoryModel = require("./models/flight_laboratory.model");
const park67Model = require("./models/park67.model");
const imageModel = require("./models/image.model");

app.use(express.json({limit: "10mb", extended: true}))
app.use(express.urlencoded({limit: "10mb", extended: true, parameterLimit: 50000}))
// var bodyParser = require('body-parser');

// app.use(bodyParser.json({limit: '50mb'}));
// app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

const JWT_SECRET = "fghrgndcyhikljuhygrfvedcavkdbvabvahbvhsebkavdsvdvvhs";
const mongoUrl =
  "mongodb+srv://sathwik:reddy@cluster0.fs9rbc2.mongodb.net/?retryWrites=true&w=majority";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "campusunlockediitk24@gmail.com",
    pass: "jjagqagoeyarbsho",
  },
  port : 465,
  host : "smtp.gmail.com"
});

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));

require("./userDetails");

const User = mongoose.model("UserInfo");

app.use(express.json());
app.use(cors());

// Register user
app.post("/register", async (req, res) => {
  const { fname, lname, email, password } = req.body;

  if (!email.endsWith("@iitk.ac.in")) {
    return res.status(400).send({ status:'Invalidemail',error: "Invalid email domain" });
  }

  try {
    // Check if user already exists
    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.send({ status:'userexist',error: "User already exists" });
    }

    // Generate email verification token
    const token = randomstring.generate();

    // Create user with encrypted password and verification token
    const encryptedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      fname,
      lname,
      email,
      password: encryptedPassword,
      emailVerificationToken: token,
      isEmailVerified: false,
    });

    // Send verification email to user
    const mailOptions = {
      from: "campusunlockediitk24@gmail.com",
      to: email,
      subject: "Email Verification",
      text: `Hi ${fname} ${lname},\n\nPlease click on the following link to verify your email address:\n\nhttp://localhost:3000/verify-email?token=${token}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log(`Email sent to ${email}: ${info.response}`);
      }
    });

    res.send({ status: "ok" });
  } catch (error) {
    console.log(error);
    res.send({ status: "error" });
  }
});

// Verify user's email
app.get("/verify-email", async (req, res) => {
  const { token } = req.query;
  try {
    // Find user with given verification token
    const user = await User.findOne({ emailVerificationToken: token });
    if (!user) {
      return res.send({ error: "Invalid verification token" });
    }

    // Update user's email verification status
    user.isEmailVerified = true;
    user.emailVerificationToken = null;
    await user.save();

    res.send({ status: "ok" });
  } catch (error) {
    console.log(error);
    res.send({ status: "error" });
  }
});
    
app.post("/login_user", async(req, res)=>{
    const {email, password}= req.body;

    const user = await User.findOne({email});
    if(!user){
        return res.json({status:'user_notfound',error:"User not found"});
    }
    
    if(!user.isEmailVerified){
        return res.json({ status: 'email_not_verified',error:"Email not verified"});
    }
    
    if(await bcrypt.compare(password, user.password)){
        const token=jwt.sign({email:user.email},JWT_SECRET);
        
        // localStorage.setItem('email', user.email);

        if(res.status(201)){
          return res.json({ status: "ok", data: { token: token, email: user.email } });
        }else{
            return res.json({error:"error"});
        }
    }
    
    res.json({status:"error", error:"Invalid Password"});
});
// Upload Image

app.post("/upload-image", async (req, res) => {
  // const { base64 } = req.body;
  
  try {
    const obj = {
      name: req.body.name,
      desc: req.body.desc,
      img: req.body.image,
    }
    
    if (req.body.location === "oat") {
      const item = await oatModel.create(obj);
  } else if (req.body.location === "ccd") {
      const item = await ccdModel.create(obj);
  } else if (req.body.location === "nursery") {
      const item = await nurseryModel.create(obj);
  } else if (req.body.location === "pronite_ground") {
      const item = await pronite_groundModel.create(obj);
  } else if (req.body.location === "mama_mio") {
      const item = await mama_mioModel.create(obj);
  } else if (req.body.location === "hockey_ground") {
      const item = await hockey_groundModel.create(obj);
  } else if (req.body.location === "stadium") {
      const item = await stadiumModel.create(obj);
  } else if (req.body.location === "swimming_pool") {
      const item = await swimming_poolModel.create(obj);
  } else if (req.body.location === "mt") {
      const item = await mtModel.create(obj);
  } else if (req.body.location === "auditorium") {
      const item = await auditoriumModel.create(obj);
  } else if (req.body.location === "tennis_court") {
      const item = await tennis_courtModel.create(obj);
  } else if (req.body.location === "old_sac") {
      const item = await old_sacModel.create(obj);
  } else if (req.body.location === "new_sac") {
      const item = await new_sacModel.create(obj);
  } else if (req.body.location === "oxidation_pond") {
      const item = await oxidation_pondModel.create(obj);
  } else if (req.body.location === "doaa_canteen") {
      const item = await doaa_canteenModel.create(obj);
  } else if (req.body.location === "outreach") {
      const item = await outreachModel.create(obj);
  } else if (req.body.location === "flight_laboratory") {
      const item = await flight_laboratoryModel.create(obj);
  } else if (req.body.location === "park67") {
      const item = await park67Model.create(obj);
  } else if (req.body.location === "p_k_kelkar_library") {
      const item = await p_k_kelkar_libraryModel.create(obj);
  } else if (req.body.location === "rm_kd") {
      const item = await rm_kdModel.create(obj);
  }
  console.log(obj.image);
  res.send({ Status: "ok" })

  } catch (error) {
    res.send({ Status: "error", data: error });

  }
})
app.listen(3000, ()=>{
  console.log("Server Started");
});


app.get("/getimageoat", async (req, res) => {
  try {
    await oatModel.find({}).then(data => {
      res.send({ status: "ok", data: data })
    })

  } catch (error) {

  }
})

app.get("/getimageccd", async (req, res) => {
  try {
    await ccdModel.find({}).then(data => {
      res.send({ status: "ok", data: data })
    })

  } catch (error) {

  }
})

app.get("/getimagedoaa", async (req, res) => {
  try {
    await doaa_canteenModel.find({}).then(data => {
      res.send({ status: "ok", data: data })
    })

  } catch (error) {

  }
})

app.get("/getimagedoaa", async (req, res) => {
  try {
    await doaa_canteenModel.find({}).then(data => {
      res.send({ status: "ok", data: data })
    })

  } catch (error) {

  }
})

app.get("/getimageaudi", async (req, res) => {
  try {
    await auditoriumModel.find({}).then(data => {
      res.send({ status: "ok", data: data })
    })

  } catch (error) {

  }
})

app.get("/getimageflight", async (req, res) => {
  try {
    await flight_laboratoryModel.find({}).then(data => {
      res.send({ status: "ok", data: data })
    })

  } catch (error) {

  }
})

app.get("/getimagehockey", async (req, res) => {
  try {
    await hockey_groundModel.find({}).then(data => {
      res.send({ status: "ok", data: data })
    })

  } catch (error) {

  }
})

app.get("/getimagelibrary", async (req, res) => {
  try {
    await p_k_kelkar_libraryModel.find({}).then(data => {
      res.send({ status: "ok", data: data })
    })

  } catch (error) {

  }
})


app.get("/getimagemamamio", async (req, res) => {
  try {
    await mama_mioModel.find({}).then(data => {
      res.send({ status: "ok", data: data })
    })

  } catch (error) {

  }
})

app.get("/getimagemt", async (req, res) => {
  try {
    await mtModel.find({}).then(data => {
      res.send({ status: "ok", data: data })
    })

  } catch (error) {

  }
})

app.get("/getimagenewsac", async (req, res) => {
  try {
    await new_sacModel.find({}).then(data => {
      res.send({ status: "ok", data: data })
    })

  } catch (error) {

  }
})

app.get("/getimagenursery", async (req, res) => {
  try {
    await nurseryModel.find({}).then(data => {
      res.send({ status: "ok", data: data })
    })

  } catch (error) {

  }
})

app.get("/getimageoldsac", async (req, res) => {
  try {
    await old_sacModel.find({}).then(data => {
      res.send({ status: "ok", data: data })
    })

  } catch (error) {

  }
})

app.get("/getimageoutreach", async (req, res) => {
  try {
    await outreachModel.find({}).then(data => {
      res.send({ status: "ok", data: data })
    })

  } catch (error) {

  }
})

app.get("/getimageoxdn", async (req, res) => {
  try {
    await oxidation_pondModel.find({}).then(data => {
      res.send({ status: "ok", data: data })
    })

  } catch (error) {

  }
})

app.get("/getimagepark67", async (req, res) => {
  try {
    await park67Model.find({}).then(data => {
      res.send({ status: "ok", data: data })
    })

  } catch (error) {

  }
})

app.get("/getimagepronite", async (req, res) => {
  try {
    await pronite_groundModel.find({}).then(data => {
      res.send({ status: "ok", data: data })
    })

  } catch (error) {

  }
})

app.get("/getimagerm", async (req, res) => {
  try {
    await rm_kdModel.find({}).then(data => {
      res.send({ status: "ok", data: data })
    })

  } catch (error) {

  }
})

app.get("/getimagestadium", async (req, res) => {
  try {
    await stadiumModel.find({}).then(data => {
      res.send({ status: "ok", data: data })
    })

  } catch (error) {

  }
})

app.get("/getimageswim", async (req, res) => {
  try {
    await swimming_poolModel.find({}).then(data => {
      res.send({ status: "ok", data: data })
    })

  } catch (error) {

  }
})

app.get("/getimagetennis", async (req, res) => {
  try {
    await tennis_courtModel.find({}).then(data => {
      res.send({ status: "ok", data: data })
    })

  } catch (error) {

  }
})

app.put('/likeimageoat/:id', async (req, res) => {
  try {
    const imageId = req.params.id;
    const email = req.headers.authorization.split(' ')[1];

    // Check if user has already liked the image
    const image = await oatModel.findOne({ _id: imageId });
    if (image.likedBy.includes(email)) {
      return res.status(400).json({ message: 'You have already liked this image' });
    }

    // Update the image with the user's like
    const updatedImage = await oatModel.findOneAndUpdate(
      { _id: imageId },
      { $inc: { likes: 1 }, $push: { likedBy: email } },
      { new: true }
    );

    res.json(updatedImage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});


app.put('/likeimageaudi/:id', async (req, res) => {
  try {
    const imageId = req.params.id;
    const email = req.headers.authorization.split(' ')[1];

    // Check if user has already liked the image
    const image = await auditoriumModel.findOne({ _id: imageId });
    if (image.likedBy.includes(email)) {
      return res.status(400).json({ message: 'You have already liked this image' });
    }

    // Update the image with the user's like
    const updatedImage = await auditoriumModel.findOneAndUpdate(
      { _id: imageId },
      { $inc: { likes: 1 }, $push: { likedBy: email } },
      { new: true }
    );

    res.json(updatedImage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.put('/likeimageccd/:id', async (req, res) => {
  try {
    const imageId = req.params.id;
    const email = req.headers.authorization.split(' ')[1];

    // Check if user has already liked the image
    const image = await ccdModel.findOne({ _id: imageId });
    if (image.likedBy.includes(email)) {
      return res.status(400).json({ message: 'You have already liked this image' });
    }

    // Update the image with the user's like
    const updatedImage = await ccdModel.findOneAndUpdate(
      { _id: imageId },
      { $inc: { likes: 1 }, $push: { likedBy: email } },
      { new: true }
    );

    res.json(updatedImage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.put('/likeimagedoaa/:id', async (req, res) => {
  try {
    const imageId = req.params.id;
    const email = req.headers.authorization.split(' ')[1];

    // Check if user has already liked the image
    const image = await doaa_canteenModel.findOne({ _id: imageId });
    if (image.likedBy.includes(email)) {
      return res.status(400).json({ message: 'You have already liked this image' });
    }

    // Update the image with the user's like
    const updatedImage = await doaa_canteenModel.findOneAndUpdate(
      { _id: imageId },
      { $inc: { likes: 1 }, $push: { likedBy: email } },
      { new: true }
    );

    res.json(updatedImage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.put('/likeimageflight/:id', async (req, res) => {
  try {
    const imageId = req.params.id;
    const email = req.headers.authorization.split(' ')[1];

    // Check if user has already liked the image
    const image = await flight_laboratoryModel.findOne({ _id: imageId });
    if (image.likedBy.includes(email)) {
      return res.status(400).json({ message: 'You have already liked this image' });
    }

    // Update the image with the user's like
    const updatedImage = await flight_laboratoryModel.findOneAndUpdate(
      { _id: imageId },
      { $inc: { likes: 1 }, $push: { likedBy: email } },
      { new: true }
    );

    res.json(updatedImage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.put('/likeimagehockey/:id', async (req, res) => {
  try {
    const imageId = req.params.id;
    const email = req.headers.authorization.split(' ')[1];

    // Check if user has already liked the image
    const image = await hockey_groundModel.findOne({ _id: imageId });
    if (image.likedBy.includes(email)) {
      return res.status(400).json({ message: 'You have already liked this image' });
    }

    // Update the image with the user's like
    const updatedImage = await hockey_groundModel.findOneAndUpdate(
      { _id: imageId },
      { $inc: { likes: 1 }, $push: { likedBy: email } },
      { new: true }
    );

    res.json(updatedImage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.put('/likeimagelibrary/:id', async (req, res) => {
  try {
    const imageId = req.params.id;
    const email = req.headers.authorization.split(' ')[1];

    // Check if user has already liked the image
    const image = await p_k_kelkar_libraryModel.findOne({ _id: imageId });
    if (image.likedBy.includes(email)) {
      return res.status(400).json({ message: 'You have already liked this image' });
    }

    // Update the image with the user's like
    const updatedImage = await p_k_kelkar_libraryModel.findOneAndUpdate(
      { _id: imageId },
      { $inc: { likes: 1 }, $push: { likedBy: email } },
      { new: true }
    );

    res.json(updatedImage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.put('/likeimagemamamio/:id', async (req, res) => {
  try {
    const imageId = req.params.id;
    const email = req.headers.authorization.split(' ')[1];

    // Check if user has already liked the image
    const image = await mama_mioModel.findOne({ _id: imageId });
    if (image.likedBy.includes(email)) {
      return res.status(400).json({ message: 'You have already liked this image' });
    }

    // Update the image with the user's like
    const updatedImage = await mama_mioModel.findOneAndUpdate(
      { _id: imageId },
      { $inc: { likes: 1 }, $push: { likedBy: email } },
      { new: true }
    );

    res.json(updatedImage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.put('/likeimagetennis/:id', async (req, res) => {
  try {
    const imageId = req.params.id;
    const email = req.headers.authorization.split(' ')[1];

    // Check if user has already liked the image
    const image = await tennis_courtModel.findOne({ _id: imageId });
    if (image.likedBy.includes(email)) {
      return res.status(400).json({ message: 'You have already liked this image' });
    }

    // Update the image with the user's like
    const updatedImage = await tennis_courtModel.findOneAndUpdate(
      { _id: imageId },
      { $inc: { likes: 1 }, $push: { likedBy: email } },
      { new: true }
    );

    res.json(updatedImage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.put('/likeimageswim/:id', async (req, res) => {
  try {
    const imageId = req.params.id;
    const email = req.headers.authorization.split(' ')[1];

    // Check if user has already liked the image
    const image = await swimming_poolModel.findOne({ _id: imageId });
    if (image.likedBy.includes(email)) {
      return res.status(400).json({ message: 'You have already liked this image' });
    }

    // Update the image with the user's like
    const updatedImage = await swimming_poolModel.findOneAndUpdate(
      { _id: imageId },
      { $inc: { likes: 1 }, $push: { likedBy: email } },
      { new: true }
    );

    res.json(updatedImage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.put('/likeimagemt/:id', async (req, res) => {
  try {
    const imageId = req.params.id;
    const email = req.headers.authorization.split(' ')[1];

    // Check if user has already liked the image
    const image = await mtModel.findOne({ _id: imageId });
    if (image.likedBy.includes(email)) {
      return res.status(400).json({ message: 'You have already liked this image' });
    }

    // Update the image with the user's like
    const updatedImage = await mtModel.findOneAndUpdate(
      { _id: imageId },
      { $inc: { likes: 1 }, $push: { likedBy: email } },
      { new: true }
    );

    res.json(updatedImage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.put('/likeimagenewsac/:id', async (req, res) => {
  try {
    const imageId = req.params.id;
    const email = req.headers.authorization.split(' ')[1];

    // Check if user has already liked the image
    const image = await new_sacModel.findOne({ _id: imageId });
    if (image.likedBy.includes(email)) {
      return res.status(400).json({ message: 'You have already liked this image' });
    }

    // Update the image with the user's like
    const updatedImage = await new_sacModel.findOneAndUpdate(
      { _id: imageId },
      { $inc: { likes: 1 }, $push: { likedBy: email } },
      { new: true }
    );

    res.json(updatedImage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.put('/likeimagenursery/:id', async (req, res) => {
  try {
    const imageId = req.params.id;
    const email = req.headers.authorization.split(' ')[1];

    // Check if user has already liked the image
    const image = await nurseryModel.findOne({ _id: imageId });
    if (image.likedBy.includes(email)) {
      return res.status(400).json({ message: 'You have already liked this image' });
    }

    // Update the image with the user's like
    const updatedImage = await nurseryModel.findOneAndUpdate(
      { _id: imageId },
      { $inc: { likes: 1 }, $push: { likedBy: email } },
      { new: true }
    );

    res.json(updatedImage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.put('/likeimageoldsac/:id', async (req, res) => {
  try {
    const imageId = req.params.id;
    const email = req.headers.authorization.split(' ')[1];

    // Check if user has already liked the image
    const image = await old_sacModel.findOne({ _id: imageId });
    if (image.likedBy.includes(email)) {
      return res.status(400).json({ message: 'You have already liked this image' });
    }

    // Update the image with the user's like
    const updatedImage = await old_sacModel.findOneAndUpdate(
      { _id: imageId },
      { $inc: { likes: 1 }, $push: { likedBy: email } },
      { new: true }
    );

    res.json(updatedImage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.put('/likeimageoutreach/:id', async (req, res) => {
  try {
    const imageId = req.params.id;
    const email = req.headers.authorization.split(' ')[1];

    // Check if user has already liked the image
    const image = await outreachModel.findOne({ _id: imageId });
    if (image.likedBy.includes(email)) {
      return res.status(400).json({ message: 'You have already liked this image' });
    }

    // Update the image with the user's like
    const updatedImage = await outreachModel.findOneAndUpdate(
      { _id: imageId },
      { $inc: { likes: 1 }, $push: { likedBy: email } },
      { new: true }
    );

    res.json(updatedImage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.put('/likeimagestadium/:id', async (req, res) => {
  try {
    const imageId = req.params.id;
    const email = req.headers.authorization.split(' ')[1];

    // Check if user has already liked the image
    const image = await stadiumModel.findOne({ _id: imageId });
    if (image.likedBy.includes(email)) {
      return res.status(400).json({ message: 'You have already liked this image' });
    }

    // Update the image with the user's like
    const updatedImage = await stadiumModel.findOneAndUpdate(
      { _id: imageId },
      { $inc: { likes: 1 }, $push: { likedBy: email } },
      { new: true }
    );

    res.json(updatedImage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.put('/likeimageoxdn/:id', async (req, res) => {
  try {
    const imageId = req.params.id;
    const email = req.headers.authorization.split(' ')[1];

    // Check if user has already liked the image
    const image = await oxidation_pondModel.findOne({ _id: imageId });
    if (image.likedBy.includes(email)) {
      return res.status(400).json({ message: 'You have already liked this image' });
    }

    // Update the image with the user's like
    const updatedImage = await oxidation_pondModel.findOneAndUpdate(
      { _id: imageId },
      { $inc: { likes: 1 }, $push: { likedBy: email } },
      { new: true }
    );

    res.json(updatedImage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.put('/likeimagepark67/:id', async (req, res) => {
  try {
    const imageId = req.params.id;
    const email = req.headers.authorization.split(' ')[1];

    // Check if user has already liked the image
    const image = await park67Model.findOne({ _id: imageId });
    if (image.likedBy.includes(email)) {
      return res.status(400).json({ message: 'You have already liked this image' });
    }

    // Update the image with the user's like
    const updatedImage = await park67Model.findOneAndUpdate(
      { _id: imageId },
      { $inc: { likes: 1 }, $push: { likedBy: email } },
      { new: true }
    );

    res.json(updatedImage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.put('/likeimagepronite/:id', async (req, res) => {
  try {
    const imageId = req.params.id;
    const email = req.headers.authorization.split(' ')[1];

    // Check if user has already liked the image
    const image = await pronite_groundModel.findOne({ _id: imageId });
    if (image.likedBy.includes(email)) {
      return res.status(400).json({ message: 'You have already liked this image' });
    }

    // Update the image with the user's like
    const updatedImage = await pronite_groundModel.findOneAndUpdate(
      { _id: imageId },
      { $inc: { likes: 1 }, $push: { likedBy: email } },
      { new: true }
    );

    res.json(updatedImage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.put('/likeimagerm/:id', async (req, res) => {
  try {
    const imageId = req.params.id;
    const email = req.headers.authorization.split(' ')[1];

    // Check if user has already liked the image
    const image = await rm_kdModel.findOne({ _id: imageId });
    if (image.likedBy.includes(email)) {
      return res.status(400).json({ message: 'You have already liked this image' });
    }

    // Update the image with the user's like
    const updatedImage = await rm_kd.findOneAndUpdate(
      { _id: imageId },
      { $inc: { likes: 1 }, $push: { likedBy: email } },
      { new: true }
    );

    res.json(updatedImage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

