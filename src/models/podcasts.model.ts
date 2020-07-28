import * as mongoose from 'mongoose';
import { PodcastsInterface } from '../interfaces/podcasts.interface';

const podcastSchema = new mongoose.Schema(
  {
    title: String,
    audioUrl: String,
    imageUrl: String,
    numOfListeners: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);

const podcastModel = mongoose.model<PodcastsInterface & mongoose.Document>(
  'Podcast',
  podcastSchema
);

export default podcastModel;
