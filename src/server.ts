import * as bodyParser from "body-parser";
// tslint:disable-next-line:comment-format
import ScoreController from "./Controllers/ScoreController";
import WorkerController from "./Controllers/WorkerController";
import maxApplication from "./maxApplication";
import loggerMiddleware from "./Middleware/loggerMiddleware ";
import { BaseRepository } from "./Persistance/BaseRepository";

BaseRepository.seedWokers()
const app = new maxApplication({
    // tslint:disable-next-line:object-literal-sort-keys
    controllers: [
        new ScoreController(),
        new WorkerController()],
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        loggerMiddleware
    ]
});
app.listen();
