import type { RequestHandler } from 'express'

export function makeUserController(userService: any) {
  const createUser: RequestHandler = async (req, res) => {
    const user = await userService.createUser(req.body)
    res.status(201).json(user)
  }

  return {
    createUser
  }
}