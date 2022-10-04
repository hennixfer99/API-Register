import UpdateUserService from "../services/updateUser.service";

const UpdateUserController = async(req, res) => {
    
    const {id} = req.params;
    const {password, email, contact} = req.body;


    try{

        const newUser = await UpdateUserService(password, email, contact, id);
        return res.status(200).json({message:"User Updated", newUser})

        
    }catch(err){
        return res.status(400).json({message: err.message})
    }
}

export default UpdateUserController