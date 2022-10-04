import database from "../database";

const ListUsersService = async () => {

    try{
        const res = await database.query("SELECT * FROM users");
        return res.rows;
    }catch(err){
        throw new Error(err);
    }
};

export default ListUsersService