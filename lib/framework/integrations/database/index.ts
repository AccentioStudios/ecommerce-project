import mongoose = require("mongoose");

export default mongoose
  .connect(process.env.MONGOURL || '')
  .then(() => {
    console.log("Db Connected");
  })
  .catch((error: any) => {
    console.error(error);
  });