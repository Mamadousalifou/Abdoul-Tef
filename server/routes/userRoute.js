import express from 'express'
import { addUser, getUsers } from '../controllers/userController.js'
const route =express.Router()

route.get('/2',getUsers)
route.post('/add',addUser)

export default route