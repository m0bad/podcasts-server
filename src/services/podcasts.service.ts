import {PodcastsInterface} from '../interfaces/podcasts.interface';
import podcastModel from '../models/podcasts.model';

class PodcastService {
  private podcast = podcastModel;

  public async findAllPodcasts(): Promise<PodcastsInterface[]> {
    return this.podcast.find({});
  }

}

export default PodcastService;
