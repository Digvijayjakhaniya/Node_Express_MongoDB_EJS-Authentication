import loginModel from "../models/loginModel.js";
import bcrypt from 'bcrypt'

class loginControllers {

    static index = (req,res)=>{
        res.render('index',{title:'Home'})
    }

    static registration = (req,res)=>{
        res.render('registration',{title:'registration'})
    }

    static store = async (req,res)=>{
        try {
            const {name,email,password} = req.body
            const hashpassword = await bcrypt.hash(password,10)
            const newUser = new loginModel({
                name:name,
                email:email,
                password:hashpassword
            })

            await newUser.save()
            res.redirect('/login')
        } catch (error) {
            console.log(error)
            res.redirect('/registration')
        }
    }

    static login = (req,res)=>{
        res.render('login',{title:'login'})
    }

    static check_login = async (req,res)=>{
        try {
            const {email,password} = req.body
            const filterUser = await loginModel.findOne({email:email})
            const isMatch = await bcrypt.compare(password,filterUser.password)

            if(filterUser.email == email && isMatch ){
                res.redirect('/')
            }else{
                res.redirect('/login')
            }

        } catch (error) {
            console.log(error)
            res.redirect('/login')
        }
    }

    static logout = async (req,res)=>{

    }

    
}

export default loginControllers