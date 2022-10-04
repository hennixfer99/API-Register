import database from "../database"

const DeleteUserService = async(id) => {

    try{
        const res = await database.query("DELETE FROM users WHERE id = $1 RETURNING *", [id])
        if (res.rows.length === 0) {
            throw "Undefined id";
        }
        return "User deleted"
    
    }catch(err){
        throw new Error(err);
    }
};

export default DeleteUserService