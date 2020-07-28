import { Router } from 'express';
import Route from '../interfaces/routes.interface';
import PodcastsController from "../controllers/podcasts.controller";
import validationMiddleware from "../middlewares/validation.middleware";
import {CreatePodcastDto} from "../dtos/podcasts.dto";

class PodcastsRoute implements Route {
    public path = '/podcasts';
    public router = Router();
    public podcastsController = new PodcastsController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(`${this.path}`, this.podcastsController.getAllPodcasts);
        this.router.post(`${this.path}`, validationMiddleware(CreatePodcastDto, true) ,this.podcastsController.createNewPodcast);
    }
}

export default PodcastsRoute;
