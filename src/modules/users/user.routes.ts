import { makeUserService } from "./user.service"
import * as userRepository from "./user.repository"
import { makeUserController } from "./user.controller"

import { Router } from "express"

const userRoutes = Router()

const userService = makeUserService(userRepository)
const userController = makeUserController(userService)

// POST
userRoutes.post("/user", userController.createUser)

export default userRoutes

