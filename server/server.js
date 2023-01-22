const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const Joi = require("joi");
const PORT = 8080;
let index = 1
app.use(bodyParser());
app.use(cors());
//#region Mangoose schemas
const nftsSchema = new mongoose.Schema({
  title: String,
  price: Number,
  highestBid: String,
  user: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  ],
});
const usersSchema = new mongoose.Schema({
  fullName: String,
  img: String,
  change: String,
  nftsSold: Number,
  volume: String,
});

const UsersModel = mongoose.model("User", usersSchema);
const NftsModel = mongoose.model("Nft", nftsSchema);

//#endregion
//#region Mongoose connection
mongoose.set("strictQuery", false);
mongoose
  .connect(
    `mongodb+srv://Fatima:sKy0VxzjSiCa1zFo@nft-cluster.lkpcrzn.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => console.log("Connected to database"))
  .catch((err) => console.error(err));
app.get("/", (req, res) => {
  res.send("Hello World!");
});
//#endregion

//#region Yui schemas
const nftSchema = Joi.object({
  title: Joi.string().required(),
  user: Joi.string().required(),
  price: Joi.number().required(),
  highestBid: Joi.string().required(),
});

const userSchema = Joi.object({
  fullName: Joi.string().required(),
  img: Joi.string().required(),
  change: Joi.string().required(),
  nftsSold: Joi.number().required(),
  volume: Joi.string().required(),
});
//#endregion



app.post(
    "/api/users",
    (req, res, next) => {
      const { error } = userSchema.validate(req.body);
  
      if (error == null) next();
      else {
        const { details } = error;
        const message = details.map((i) => i.message).join(",");
        res.status(422).json({ error: message });
      }
    },
    async (req, res) => {
      const newUser = new UsersModel({ ...req.body });
        
      await newUser.save();
      index++
      res
        .status(201)
        .send({ message: "Product succesfully added!", user: newUser });
    }
  );

app.post(
  "/api/nfts",
  (req, res, next) => {
    let { error } = nftSchema.validate(req.body);
    if (!error) {
      next();
    } else {
      const { details } = error;
      const message = details.map((i) => i.message).join(",");
      res.status(422).json({ error: message });
    }
  },
  async (req, res) => {
   let nft = await NftsModel.findOne({ title: req.body.title });

     if (nft)
      return res
        .status(400)
         .send({ message: "nft already exist with this email" });

     const newNft = new NftsModel({
      ...req.body,
     });

     newNft
      .save()
       .then(() => res.send({ message: "Nft succesfully created!" }))
       .catch((err) => res.status(500).send({ err }));
  }
);
app.post("/api/user/nfts/:nftId", (req, res) => {
    UserModel.findByIdAndUpdate(
      loggedUser._id,
      {
        $push: {
          cart: req.params.productId,
        },
      },
      (error, data) => {
        if (error) return res.status(500).send({ error });
  
        res.send(data);
      }
    );
  });

/*
app.get("/api/nfts", (req, res) => {
    NftsModel.find(null, "name surname age email cart")
      .so.populate("users")
      .exec((error, data) => {
        if (error) return res.status(500).send({ error });
  
        res.send(data);
      });
  });

*/

  app.get("/api/nfts", (req, res) => {
    NftsModel.find(null, (error, nfts) => {
      if (error) return res.status(500).send({ error });
      res.send(nfts);
    });
  });


app.get("/api/users", (req, res) => {
    UsersModel.find(null, (error, users) => {
      if (error) return res.status(500).send({ error });
      res.send(users);
    
    });
  });

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
