 import jwt from "jsonwebtoken";
const authUser= async(req,res,next)=>{
    const {token} =req.cookies;
    if(!token){
        return res.json({success:false,message:'Not Authrozed'});

    }
    try{
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
        if(tokenDecode.id){
               req.userId = tokenDecode.id
        }else{
            return res.json({success:false,message:'Not Authrozed'});
        }
        next();
    }catch(error){
           res.json({success:true,message:error.message});

    }
}
export default authUser;

// import jwt from "jsonwebtoken";

// const authUser = async(req, res, next) => {
//     const {token} = req.cookies;
    
    
    
//     if(!token){
       
//         return res.json({success : false , message:"Not Authorized"});

//         }

//         // try {
//         //     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         //     req.user = await User.findById(decoded.id).select("-password"); // safe to exclude password
            
//         //     next();
//         //   } catch (err) {
//         //     console.error(err);
//         //     res.status(401).json({ message: "Invalid token" });
//         //   }
//     try{
//     const tokenDecode= jwt.verify(token, process.env.JWT_SECRET)
//     if(tokenDecode.id){
    
//         req.user =tokenDecode.id;
        
//     }
//     else{
//         return res.json({success : false ,message : "Not Authorized"});
//     }
//         next();
//     }catch(error){
//         console.log(error.message);
//         res.json({success: false , message: error.message});
//     }
// }

// export default authUser;