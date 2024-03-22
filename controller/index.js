import { UserModel } from "../model/user.js";
import { join } from "path";

export const addUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (req.file && email && password) {
            const imgUrl = '/' + req.file.destination + req.file.filename
            const user = await UserModel.create({ email, password, imgUrl: imgUrl })
            if (user) {
                return res.status(200).json({ status: 200, message: 'data saved', data: user });
            }
        }
    } catch (error) {
        return res.status(400).json({ status: 400, message: 'data no saved', data: user });

    }
}