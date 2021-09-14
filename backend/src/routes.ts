import { Router } from "express"
import { CreatePostController } from "./controllers/CreatePostController"
import { ListPostsController } from "./controllers/ListPostsController"
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated"

const router = Router()

const createPostController = new CreatePostController()
const listPostsController = new ListPostsController()

router.post("/posts", ensureAuthenticated, createPostController.handle)

router.get("/posts", listPostsController.handle)
export{ router }