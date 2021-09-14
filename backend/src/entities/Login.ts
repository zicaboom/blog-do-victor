import { Entity, PrimaryColumn} from "typeorm";
import { v4 as uuid} from "uuid";

@Entity("login")
class Login {
    @PrimaryColumn()
    readonly secret: string

    constructor(){
        this.secret = uuid()
    }
}
export { Login }