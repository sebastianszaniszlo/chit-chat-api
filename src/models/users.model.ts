// users-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
import { Application } from '../declarations';
import { Schema, model } from 'mongoose';

export default function (app: Application) {
  // const mongooseClient = app.get('mongooseClient');

  const userSchema = new Schema({
    email: { type: String, unique: true, lowercase: true, required: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  }, {
    timestamps: true,
  });

  return model('users', userSchema);
}
