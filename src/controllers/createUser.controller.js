import CreateUserService from "../services/createUser.service"

const CreateUserController = async(req, res) => {
    const {name, password, email, contact} = req.body;

    try{
        const user = await CreateUserService(name, password, email, contact)
        return res.status(201).json({message:"User Created"}, user)
    }catch(err){
        return res.status(400).json({message: err.message})
    }
}

export default CreateUserController