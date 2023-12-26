import mongoose from 'mongoose';
const { Schema } = mongoose;

const ILStatuteSchema = new Schema({
  title: String,
  chapter: String,
  section: String,
  subsection: String,
  text: String,
  keywords: [String],
});
