require("dotenv").config();
const express = require("express");
const ConnectDB = require("./utils/db");
const bodyParser = require("body-parser");
const app = express();
const router = require("./router/index");
const cors = require("cors");
const admin = require("firebase-admin");
const serviceAccount = require("./helper/serviceAccountKey.json");
// const { OAuth2Client } = require("google-auth-library");

// const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const corsOptions = {
  origin: process.env.ClIENT_URL,
  methods: "GET,POST,PUT,PATCH,DELETE,OPTIONS,HEAD",
  credentials: true,
};

app.post("/verify-token", async (req, res) => {
  // const idToken = req.body.idToken;
  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    res.json({ uid: decodedToken.uid });
  } catch (error) {
    res.status(401).send("Unauthorized");
  }
});
PORT = 5000;
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(express.json());
app.use("/api", router);

ConnectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on port ", PORT);
  });
});
