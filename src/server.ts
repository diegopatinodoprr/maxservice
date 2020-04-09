import maxApplication from "./maxApplication";

import * as bodyParser from "body-parser";
import loggerMiddleware from "./Middleware/loggerMiddleware ";

// tslint:disable-next-line:comment-format

import ScoreController from "./Controllers/ScoreController";
import WorkerController from "./Controllers/WorkerController";

import { ScoreQuery } from './Queries/ScoreQuery';
import { Repository } from './Persistance/Repository';
import { WorkerQuery } from "./Queries/WorkerQuery";

const reposotory = new Repository()
const scoreQuery = new ScoreQuery(reposotory)
const workersquery =  new WorkerQuery(reposotory)
const app = new maxApplication({
   
    // tslint:disable-next-line:object-literal-sort-keys
    controllers: [
        new ScoreController(scoreQuery),
        new WorkerController(workersquery)],
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        loggerMiddleware
    ]
});
app.listen();
