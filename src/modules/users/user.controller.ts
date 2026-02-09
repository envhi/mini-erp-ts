import type { RequestHandler } from 'express'
import { UserService } from './interfaces/user.service.interface'

export function makeUserController(userService: UserService) {
  const createUser: RequestHandler = async (req, res) => {
    const user = await userService.createUser(req.body)
    res.status(201).json(user)
  }

  return {
    createUser
  }
}