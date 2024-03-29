import  express, {Request, Response, NextFunction}  from "express";
import cors from "cors"
import "express-async-errors"
import "reflect-metadata"
import "./database"
import { router } from "./routes";

const app = express()
const PORT = 4000

app.use(cors())
app.use(express.json())
app.use(router)


app.use((err: Error, req: Request, res: Response, next: NextFunction)=>{
    if(err instanceof Error){
        return res.status(400).json({
            error: err.message
        })
    }
    return res.status(500).json({
        error: "Internal server error"
    })
})

app.listen(PORT, ()=>console.log(`Server is running on port http://localhost:${PORT}`))