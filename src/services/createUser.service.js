import database from "../database";
import {v4 as uuidv4} from "uuid";
import * as bycrypt from "bcryptjs"

const CreateUserService = async (name, password, email, contact) => {


try{
    const id = uuidv4()
    const rightPassword = bcrypt.hashSync(password, 10)
    const createdOn = new Date()

    const rest = await database.query(
       "INSERT INTO users(id,name,password,email,contact,createdOn) VALUES($1,$2,$3,$4,$5,$6) RETURNING * "
       [id,name,rightPassword,email,contact,createdOn] 
    );
    return rest.rows[0]
}catch(err){
    throw new Error(err)
}

}

export default CreateUserService;