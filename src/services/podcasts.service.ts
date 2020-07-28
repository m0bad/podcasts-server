import { PodcastsInterface } from '../interfaces/podcasts.interface';
import podcastModel from '../models/podcasts.model';
import { isEmptyObject } from '../utils/util';
import HttpException from '../exceptions/HttpException';
import { CreatePodcastDto, FindPodcastDto } from '../dtos/podcasts.dto';

class PodcastService {
  private podcast = podcastModel;

  public async findAllPodcasts(
    filters: FindPodcastDto = {}
  ): Promise<PodcastsInterface[]> {
    return this.podcast.find(filters);
  }

  public async createPodcast(
    podcastData: CreatePodcastDto
  ): Promise<PodcastsInterface> {
    if (isEmptyObject(podcastData))
      throw new HttpException(400, 'Podcast Data is incorrect');

    const foundPodcast: PodcastsInterface = await this.podcast.findOne({
      title: podcastData.title
    });
    if (foundPodcast)
      throw new HttpException(
        409,
        `A podcast with the same title '${podcastData.title}' already exists`
      );

    return await this.podcast.create(podcastData);
  }
}

export default PodcastService;
