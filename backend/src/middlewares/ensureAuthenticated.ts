import { Request, Response, NextFunction} from "express"
import { verify } from "jsonwebtoken"
import { getCustomRepository } from "typeorm"
import { LoginRepositories } from "../repositories/LoginRepositories"

export async function ensureAuthenticated(req: Request, res: Response, next: NextFunction){
    const loginRepositories = getCustomRepository(LoginRepositories)

    let login = await loginRepositories.findOne()

    const authToken = req.headers.authorization

    if(!authToken){
        return res.status(401).end() 
    }

    const [, token] = authToken.split(" ")

    try{
        verify(token, login.secret)

        return next()
    }catch(err){
        return res.status(401).end() 
    }
}