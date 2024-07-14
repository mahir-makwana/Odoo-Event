// const serviceAccount = require("./path/to/serviceAccountKey.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
// });

// // Endpoint to verify ID token and manage user sessions
// app.post("/verify-token", async (req, res) => {
//   const { idToken } = req.body;

//   try {
//     const decodedToken = await admin.auth().verifyIdToken(idToken);
//     console.log("Decoded Token:", decodedToken);
//     res.json({ message: "Token verified successfully", decodedToken });
//   } catch (error) {
//     console.error("Error verifying ID token:", error);
//     res.status(401).json({ error: "Unauthorized" });
//   }
// });
