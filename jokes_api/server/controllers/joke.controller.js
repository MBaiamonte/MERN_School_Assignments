const Joke = require('../models/joke.model'); 

module.exports.findAllJokes=(req,res)=>{
    Joke.find() 
        .then((allJokes)=>{
            res.json({jokes: allJokes})
        })
        .catch((err)=>{
            res.join({message:"Something went wrong with get all jokes XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx",error: err});
        })   
}//end get all

module.exports.findOneJoke=(req, res)=>{
    Joke.findOne({_id:req.params.id})
    .then(OneJoke=>{
        res.json({joke: OneJoke})
    })
    .catch((err)=>{
        res.json({message:"Something went wrong with get one jokes XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx",error: err})
    });
}//end find one

module.exports.createNewJoke=(req,res)=>{
    Joke.create(req.body)
    .then(newlyCreatedJoke=>{
        res.json({joke: newlyCreatedJoke})
    })
    .catch((err)=>{
        res.json({message:"Something went wrong with create jokes XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx",error: err})
    });
}//end create joke

module.exports.updateExistingJoke=(req,res)=>{
    Joke.findOneAndUpdate(
        {_id: req.params.id}, 
        req.body,
        {new:true,runValidators:true}) 
        .then(updateJoke=>{
            res.json({joke: updateJoke})
        })
        .catch((err)=>{
            res.json({message:"Something went wrong with update jokes XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx",error: err})
        });
} //end update joke

module.exports.deleteExistingJoke=(req,res)=>{
    console.log('req',req.query._id)   // placed this to try a diffrent way of using path vars in dojo hall with the help of trae. everything should be converted back to params not query.
    console.log('req',req.params)
    Joke.deleteOne({_id:req.params.id})
    .then(result=>{
        res.json({result:result})
    })
    .catch((err)=>{
        res.json({message:"Something went wrong with delete jokes XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx",error: err})
    });
}//end delete
