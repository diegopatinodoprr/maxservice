import App from "./app";

import * as bodyParser from "body-parser";
import loggerMiddleware from "./Middleware/loggerMiddleware ";

// tslint:disable-next-line:comment-format

import ScoreController from "./controllers/ScoreController";

import { ScoreQuery } from './Queries/ScoreQuery';
import { Repository } from './Persistance/Repository';

const scoreQuery = new ScoreQuery(new Repository())
const app = new App({
    port: 3000,
    // tslint:disable-next-line:object-literal-sort-keys
    controllers: [

        new ScoreController(scoreQuery)],

    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        loggerMiddleware
    ]
});
app.listen();
