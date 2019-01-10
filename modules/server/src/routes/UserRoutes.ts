import Route from "../interfaces/Route";
import { AppUserController } from "../controller/UserController";

export const Routes: Array<Route> = [{
    method: "get",
    route: "/users",
    controller: AppUserController,
    action: "all"
}, {
    method: "get",
    route: "/users/:id",
    controller: AppUserController,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: AppUserController,
    action: "save"
}, {
    method: "delete",
    route: "/users/:id",
    controller: AppUserController,
    action: "remove"
}];