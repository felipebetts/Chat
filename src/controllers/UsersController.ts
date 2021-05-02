import { Request, Response } from "express";
import { UsersService } from "../services/UsersService";


export class UsersController {
    async create(req: Request, res: Response): Promise<Response> {

        const { email } = req.body

        const usersService = new UsersService()

        const user = await usersService.create({ email })
        
        return res.json(user)
        // try {
        // } catch (err) {
        //     return res.status(400).json({
        //         message: err.message
        //     })
        // }

    }
}