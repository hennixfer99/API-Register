import ListUsersService from "../services/listUsers.service"


const ListUsersController = async(req, res) => {
    
    try{
        
        const users = await ListUsersService();

        return res.status(200).json(users)

    }catch(err){
        return res.status(400).json({message: err.message})
    }
}

export default ListUsersController