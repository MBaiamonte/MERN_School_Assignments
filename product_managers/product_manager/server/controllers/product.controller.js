const Product = require('../models/product.model');

module.exports.createNewProduct=(req,res)=>{
    Product.create(req.body)
    .then(newlyCreatedProduct=>{
        res.json({product: newlyCreatedProduct})
    })//end then
    .catch((err)=>{
        res.json({message: "Something went wrong with create xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", error:err})
    }); //end catch
}//end create method

module.exports.findAllProducts=(req,res)=>{
    Product.find()
        .then((allProducts)=>{
            res.json({products:allProducts})
        })//end then
        .catch((err)=>{
            res.json({message: "Something went wrong with find all xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", error:err})
        });//end catch
}//end find all method

module.exports.getOneProduct= (req,res)=>{
    Product.findOne({_id: req.params.id}) // the first id must match the db the second matches the routes
        .then(product=>res.json(product))
        .catch((err)=>{
            res.json({message: "Something went wrong with find one xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", error:err})
    }); //end catch
}//end find one

module.exports.deleteProduct= (req,res)=>{
    Product.deleteOne({_id:req.params.id})
        .then(deleteConfirmation=>res.json(deleteConfirmation))
        .catch((err)=>{
            res.json({message: "Something went wrong with delete one xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", error:err})
    }); //end catch
}//end delete

module.exports.updateProduct=(req,res)=>{
    Product.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
    .then(updatedProduct=>res.json(updatedProduct))
    .catch((err)=>{
        res.json({message: "Something went wrong with Update Product xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", error:err})
}); //end catch

}//end update 