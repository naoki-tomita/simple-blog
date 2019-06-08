const admin = require("firebase-admin");
const serviceAccount = process.env.SERVICE_ACCOUNT
  ? JSON.parse(process.env.SERVICE_ACCOUNT)
  : require("../credential.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://simple-blog-ef2c7.firebaseio.com"
});

async function cleanTestData() {
  console.log("Starting clean test data.");
  const db = admin.firestore();
  const snapshot = await db.collection("e2e-articles").get();
  const batch = db.batch();
  snapshot.docs.forEach(it => {
    batch.delete(it.ref);
    console.log(it.data());
  });
  await batch.commit();
  if ((await db.collection("e2e-articles").get()).size !== 0) {
    await cleanTestData();
  }
}

exports.cleanTestData = cleanTestData;
