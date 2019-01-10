import * as express from "express";
import * as bodyParser from "body-parser";
import "reflect-metadata";
import { routeList, useRoute } from "./routes";
import { createConnection } from "typeorm";

import AppUser from "./entity/AppUser";

class App {
    public app: express.Application;
    
    constructor() {
        this.app = express();
        this.config();
        
        // Use routes
        routeList.forEach(route => useRoute(this.app, route));

        // Establish connection to db
        this.connectDB();
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));

        this.app.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header(
                "Access-Control-Allow-Headers",
                "Origin, X-Requested-With, Content-Type, Accept, Authorization"
            );
            if (req.method === 'OPTIONS') {
                res.header('Access-Control-Allow-Methods', 'PUT, POST, DELETE, GET');
                return res.status(200).json({});
            }
            next();
        });
    }

    private connectDB(): void {
        createConnection().then(async connection => {
            console.log("Connection to DB established");
            
            return;
            // insert new users for test
            await connection.manager.save(connection.manager.create(AppUser, {
                firstName: "Yannick",
                lastName: "Ebi",
                age: 999
            })).then(user => {
                console.log(`User ${user.firstName} ${user.lastName} at age ${user.age} saved.`);
            });
            await connection.manager.save(connection.manager.create(AppUser, {
                firstName: "Jerome",
                lastName: "von Allmen",
                age: 8548529
            })).then(user => {
                console.log(`User ${user.firstName} ${user.lastName} at age ${user.age} saved.`);
            });

        }).catch(error => console.log(error));
    }
}

export default new App().app;