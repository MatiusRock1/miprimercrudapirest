const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

module.exports = connectDataBase = async () => {
  try {
    const databaseConnection = await mongoose.connect('mongodb+srv://MatiusRock:3CASL3u1Kpibt7Yi@cluster0.xglab.mongodb.net/myFirstDatabaseApiRest?retryWrites=true&w=majority', {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`Database connected ::: ${databaseConnection.connection.host}`);
  } catch (error) {
    console.error(`Error::: ${error.message}`);
    process.exit(1);
  }
};