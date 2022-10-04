

const userLoginController = async(req, res) => {
    try{

        const {email, password} = req.body;
        const token = await userLoginService({email, password})

        return res.status(201).json({token})

    }catch(err){
        return res.status(404).json({message: err.message})
    }
}

export default userLoginController