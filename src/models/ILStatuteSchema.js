import mongoose from 'mongoose';
const { Schema } = mongoose;

const ActSchema = new Schema({
  prefix: String,
  title: String,
  text: String,
});

const ChapterSchema = new Schema({
  number: String,
  topic: String,
  acts: [ActSchema],
});

const MajorTopicSchema = new Schema({
  topic: String,
  chapters: [ChapterSchema],
});