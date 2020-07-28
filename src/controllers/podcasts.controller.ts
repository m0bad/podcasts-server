import { NextFunction, Request, Response } from 'express';
import PodcastService from "../services/podcasts.service";
import {PodcastsInterface} from "../interfaces/podcasts.interface";

class PodcastsController {
  private podcastsService = new PodcastService();

  public getAllPodcasts = async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log('HERE');
      const allPodcasts: PodcastsInterface[] = await this.podcastsService.findAllPodcasts();
      res.status(200).json({ data: allPodcasts, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  }

}

export default PodcastsController;
