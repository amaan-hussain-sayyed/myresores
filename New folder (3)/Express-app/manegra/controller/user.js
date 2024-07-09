// controllers/UserController.js
import { User } from '../models/User';
import { validate } from '../middlewares/validate';
import { UserSchema } from '../schema/UserSchema';

class UserController {
    async createUser(req, res) {
        try {
            const { name, email, password, designation, department } = req.body;
            const userData = { name, email, password, designation, department };
            const validatedData = await validate(UserSchema, userData);
            
            const user = await User.createUser(validatedData);
            res.status(201).json({ message: "User created successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error creating user" });
        }
    }

    async loginUser(req, res) {
        try {
            const { email, password } = req.body;
            const userData = { email, password };
            const validatedData = await validate(UserSchema, userData);
            const user = await User.getUserByEmail(validatedData.email);
            if (!user) {
                return res.status(401).json({ message: "Invalid email or password" });
            }
            const isValid = await user.comparePassword(validatedData.password);
            if (!isValid) {
                return res.status(401).json({ message: "Invalid email or password" });
            }
            const token = await user.generateToken();
            res.json({ token });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error logging in" });
        }
    }

    async getUser(req, res) {
        try {
            const id = req.params.id;
            const user = await User.getUserById(id);
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            res.json(user);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error retrieving user" });
        }
    }

    async updateUser(req, res) {
        try {
            const id = req.params.id;
            const { name, email, designation, department } = req.body;
            const userData = { name, email, designation, department };
            const validatedData = await validate(UserSchema, userData);
            await User.updateUser(id, validatedData);
            res.json({ message: "User updated successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error updating user" });
        }
    }

    async deleteUser(req, res) {
        try {
            const id = req.params.id;
            await User.deleteUser(id);
            res.json({ message: "User deleted successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error deleting user" });
        }
    }
}

module.exports = UserController;