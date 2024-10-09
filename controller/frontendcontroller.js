class frontendcontroller{
    static home = async (req,res)=>{
        try{
            res.render('commonFronts/home.ejs')
        }catch(e){
            console.log(e);
        }
    }

    static about = async (req,res)=>{
        try{
            res.render('commonFronts/about.ejs')
        }catch(e){
            console.log(e);
        }
    }

    static contact = async (req,res)=>{
        try{
            res.render('commonFronts/contact.ejs')
        }catch(e){
            console.log(e);
        }
    }

    static signin = async (req,res)=>{
        try{
            res.render('userauth/signin.ejs',{message: req.flash('success')})
        }catch(e){
            console.log(e);
        }
    }

    static signup = async (req,res)=>{
        try{
            res.render('userauth/signup.ejs',{message: req.flash('error')})
        }catch(e){
            console.log(e);
        }
    }

    static admin = async (req,res)=>{
        try{
            res.render('commonFronts/admin.ejs')
        }catch(e){
            console.log(e);
        }
    }
}

module.exports = frontendcontroller;