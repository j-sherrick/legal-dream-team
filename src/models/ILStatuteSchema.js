import mongoose from 'mongoose';
const { Schema } = mongoose;

const ILStatuteSchema = new Schema({
  chapter: String,
  act: String,
  title: String,
  section: String,
  text: String,
  keywords: [String],
});
