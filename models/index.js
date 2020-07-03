import mongoose from 'mongoose';

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGODB;

const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  lastModified: {
    type: Date,
    default: Date.now,
  },
});

db.studentModel = mongoose.model('student', studentSchema);

export { db };
