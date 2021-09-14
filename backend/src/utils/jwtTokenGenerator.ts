import { sign } from "jsonwebtoken"
import { getCustomRepository } from "typeorm"
import { LoginRepositories } from "../repositories/LoginRepositories"
import logger from './logger'
import { createConnection } from "typeorm";
async function execute(){
    await createConnection()
    const loginRepositories = getCustomRepository(LoginRepositories)

    let login = await loginRepositories.findOne()
    if(login){
        await loginRepositories.remove(login)
    }
    login = loginRepositories.create()
    loginRepositories.save(login)
    
    const token = sign({
    },login.secret, {
        expiresIn: "30d"
    })

    logger.info(token) 
};

execute()