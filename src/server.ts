import 'dotenv/config';
import App from './app';
import IndexRoute from './routes/index.route';
import validateEnv from './utils/validateEnv';
import PodcastsRoute from "./routes/podcasts.route";

validateEnv();

const app = new App([new IndexRoute(), new PodcastsRoute()]);

app.listen();
