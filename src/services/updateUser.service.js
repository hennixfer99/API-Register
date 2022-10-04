import database from "../database"

const UpdateUserService = async(password, email, contact, id) => {

    try{
        const user = await database.query("SELECT * FROM users WHERE id = $1", [id])
        if(!user.rows.length){
            throw new Error("User not found")
        }

        const userUpdated = user.rows[0]

        password && (userUpdated.password = password)
        email && (userUpdated.email = email)
        contact && (userUpdated.contact = contact)

        const res = await database.query(
            "UPDATE users SET password = 1$, email = 2$, contact = 3$ WHERE id = $4 RETURNING *",
            [userUpdated.password, userUpdated.email, userUpdated.contact]
            );

            return res.rows[0]
    
    }catch(err){
        throw new Error(err);
    }
}


export default UpdateUserService
