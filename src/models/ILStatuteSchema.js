import mongoose from 'mongoose';
const { Schema } = mongoose;

const ActSchema = new Schema({
  number: Number,
  title: String,
  text: String,
});

const ChapterSchema = new Schema({
  number: Number,
  title: String,
  acts: [ActSchema],
});

const ILStatuteSchema = new Schema({
  chapter: String,
  act: String,
  title: String,
  section: String,
  text: String,
  keywords: [String],
});
