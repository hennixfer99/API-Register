import * as bycrypt from "bcryptjs"
import database from "../database/database"
import jwt from "jsonwebtoken";

const userLoginService = async({email, password}) => {

    const userRepository = database.getRepository(Users);
    const user = await userRepository.find();

    const account = user.find((user) => user.email === email);

    if(!account){
        throw new Error("Wrong email/password")
    }
    if(!bycrypt.compareSync(password, account.password)) {
        throw new Error("Wrong email/password")
    }


    const token = jwt.sign({email: email}, String(process.env.JWT_SECRET), {
        expiresIn: "1d"
    });

    return token;


}

export default userLoginService;

