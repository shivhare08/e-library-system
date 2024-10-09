const usermodel = require('../model/user');
const zod = require('zod');
const bcrypt = require('bcrypt');
// const element = document.querySelector('.msg');
class usercontroller{
    static signup =async (req,res)=>{
        try{
            const {name , email , password , repassword , city , whoareyou , state , nationality} = req.body;  
            
            const requiredBody = zod.object({
                name:zod.string().min(4).max(25),
                email:zod.string().email().min(12).max(50),
                password:zod.string().min(4).max(100)
            })

            const parsedata = requiredBody.safeParse(req.body);

            if(!parsedata.success){
                req.flash('error','wrong format');
                res.redirect("/signup")
                return;
            }

            if(password != repassword){
                req.flash('error','password and conform password are not same');
                res.redirect('/signup')
                return;
            }

            const hashpassword = await bcrypt.hash(password,10);

            const data = await usermodel.create({
                name:name,
                email:email,
                city:city,
                state:state,
                whoareyou:whoareyou,
                nationality:nationality,
                password:hashpassword
            }) 
            await data.save();
            req.flash('success','Registration successfully you can login here')
            res.redirect('/signin')
        }catch(e){
            console.log(e);
        }
    }
}


module.exports = {
    usercontroller
}