import mongoose from 'mongoose';

mongoose.connect(
  `mongodb://localhost:27017/hapi_db`,
  { poolSize: 10 }
);

mongoose.connection.on('connected', () => {
  console.log('connected');
});
mongoose.connection.on('error', () => {
  console.log('error');
});
