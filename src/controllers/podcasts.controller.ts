import { NextFunction, Request, Response } from 'express';
import PodcastService from '../services/podcasts.service';
import { PodcastsInterface } from '../interfaces/podcasts.interface';
import { CreatePodcastDto, FindPodcastDto } from '../dtos/podcasts.dto';

class PodcastsController {
  private podcastsService = new PodcastService();

  public getAllPodcasts = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const filters: FindPodcastDto = req.query ;
    try {
      const allPodcasts: PodcastsInterface[] = await this.podcastsService.findAllPodcasts(filters);
      res.status(200).json({ data: allPodcasts, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public createNewPodcast = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const podcastData: CreatePodcastDto = req.body;

    try {
      const createdPodcast: PodcastsInterface = await this.podcastsService.createPodcast(
        podcastData
      );
      res.status(201).json({ data: createdPodcast, message: 'created' });
    } catch (error) {
      next(error);
    }
  };
}

export default PodcastsController;
