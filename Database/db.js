import mongoose from "mongoose";
const dbConnection = async () => {
  // const DB_URL = 'c8pJSWsRpUMgnAFV:   username:learnhighlight121 ';
  const DB_URL = `mongodb+srv://learnhighlight121:c8pJSWsRpUMgnAFV@mern.s2qw3qu.mongodb.net/fileSharingApp?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(DB_URL);
    console.log("connected to db");
  } catch (err) {
    console.log("error occors in db connection");
  }
};

export default dbConnection;
