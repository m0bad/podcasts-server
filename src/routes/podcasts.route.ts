import { Router } from 'express';
import Route from '../interfaces/routes.interface';
import PodcastsController from "../controllers/podcasts.controller";

class PodcastsRoute implements Route {
    public path = '/podcasts';
    public router = Router();
    public podcastsController = new PodcastsController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(`${this.path}`, this.podcastsController.getAllPodcasts);
    }
}

export default PodcastsRoute;
