import { Router } from 'express';
import Route from '../interfaces/routes.interface';
import validationMiddleware from '../middlewares/validation.middleware';

class PodcastsRoute implements Route {
    public path = '/podcasts';
    public router = Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(`${this.path}`, () => console.log('Podcasts Route'));
    }
}

export default PodcastsRoute;
