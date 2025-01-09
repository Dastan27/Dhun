import mongoose, { mongo } from "mongoose";

const SongSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    singer: {
      type: String,
      required: true,
    },
    audio: {
      id: String,
      url: String,
    },
    album: {
      type: String,
      required: true,
    },
    thumbnail: {
      id: String,
      url: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Song = mongoose.model("Song", SongSchema);
