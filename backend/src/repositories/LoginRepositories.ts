import {EntityRepository, Repository} from "typeorm"
import { Login } from "../entities/Login";

@EntityRepository(Login)
class LoginRepositories extends Repository<Login>{}

export { LoginRepositories }