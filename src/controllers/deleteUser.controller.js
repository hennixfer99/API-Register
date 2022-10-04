import DeleteUserService from '../services/deleteUser.service'

const DeleteUserController = async(req, res) => {
    
    const { id } = req.params;

    try{

        const deleteUser = await DeleteUserService(id);
        return res.status(204).json(deleteUser)
        
    }catch(err){
        return res.status(400).json({message: err.message})
    }
}

export default DeleteUserController