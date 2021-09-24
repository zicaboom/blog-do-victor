import { getCustomRepository } from "typeorm";
import { PostsRepositories } from "../repositories/PostsRepositories";

class DeletePostService{
    async execute(id: string){
        const postRepositories = getCustomRepository(PostsRepositories)

        const post = await postRepositories.findOne(id)

        if(!post){
            throw new Error("This post don't exists")
        }

        await postRepositories.delete(id)

        return
    }
}