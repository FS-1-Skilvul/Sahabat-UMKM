const {User} = require('../models')

module.exports = {
    getAllUser:async(req,res)=>{
        try{
            const data = await User.findAll()
            res.json({
                message:"success get all user",
               data
            })
        }catch(err){
            console.log(err)
        }
    }
}