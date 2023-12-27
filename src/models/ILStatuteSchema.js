import mongoose from 'mongoose';
const { Schema } = mongoose;


const SectionSchema = new Schema({
  number: Number,
  text: String,
});

const ActSchema = new Schema({
  prefix: Number,
  title: String,
  sections: [SectionSchema],
});

const ChapterSchema = new Schema({
  number: Number,
  topic: String,
  acts: [ActSchema],
});

const ILCSSchema = new Schema({
  chapters: [ChapterSchema],
});
