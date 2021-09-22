import express from "express";
import { Migrations } from "../../data/Migrations";
import { UserController } from "../UserController";

export const userRouter = express.Router()

const userController = new UserController()

userRouter.get("/", userController.findUser )
userRouter.get("/list", userController.findAllStudents )
userRouter.get("/:id", userController.findUserById )

userRouter.post("/", userController.createUser )
userRouter.post("/login", userController.login  )

userRouter.put("/", userController.editUser ) 
userRouter.put("/validaton", userController.sendValidationCode ) 
userRouter.put("/changePassword", userController.changePassword  ) 
userRouter.put("/:id", userController.editUserByID ) 

userRouter.delete("/:id", userController.deleteUser )

