import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import AppUser from "../entity/AppUser";

export class AppUserController {
    private userRepository = getRepository(AppUser);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.userRepository.findOne(request.params.id);
        return this.userRepository.remove(userToRemove);
    }

}