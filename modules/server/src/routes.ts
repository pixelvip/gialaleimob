import { Application as expressApp, Request, Response } from "express";
import Route from "./interfaces/Route";
import { Routes as UserRoutes } from "./routes/UserRoutes";

export const routeList = [ ...UserRoutes ];

export function useRoute(app: expressApp, route: Route) {
    app[route.method](`/api${route.route}`, (req: Request, res: Response, next: Function) => {
        const result = (new (route.controller as any))[route.action](req, res, next);
        if (result instanceof Promise) {
            result.then(result => {
                if (result !== null && result !== undefined) {
                    res.send(result);
                }
            });

        } else if (result !== null && result !== undefined) {
            res.json(result);
        }
    });
}