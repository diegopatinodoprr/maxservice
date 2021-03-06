import express = require("express");
import { Application } from "express";

class maxApplication {
    public app: Application;
    public port = process.env.PORT || 5000;

    constructor(appInit: {  middleWares: any; controllers: any; }) {
        this.app = express();
        this.middlewares(appInit.middleWares);
        this.routes(appInit.controllers);
        this.assets();
        this.template();
    }

    private middlewares(middleWares: { forEach: (arg0: (middleWare: any) => void) => void; }) {
        middleWares.forEach((middleWare) => {
            this.app.use(middleWare);
        });
    }

    private routes(controllers: { forEach: (arg0: (controller: any) => void) => void; }) {
        controllers.forEach((controller) => {
            this.app.use("/", controller.router);
        });
    }

    private assets() {
        this.app.use(express.static("public"));
        this.app.use(express.static("views"));
    }

    private template() {
        this.app.set("view engine", "pug");
    }

    // tslint:disable-next-line:member-ordering
    public listen() {
        this.app.listen(this.port, () => {
            // tslint:disable-next-line:no-console
            console.log("App listening on the http://localhost:" + this.port);
        });
    }
}

export default maxApplication;
