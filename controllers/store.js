import express from "express";
import Categories from "../models/category.js";
const router = express.Router();

//CRUD
//Create category (POST)
router.post('/createCategory',(req,res)=>{
    const { categoryName, categoryDesc,categoryImage}=req.body;
    Category.create({
        categoryName:categoryName,
        categoryDesc:categoryDesc,
        categoryImage: categoryImage
    })
    .then(results =>{
        return res.status(200).json({message: 'Category saved'})
    })
    .catch(err=>{
        return res.status(500).json({message: err})
    })
})
//Get categoris (GET)
router.get('/getCategories',(req,res)=>{
    category.findByPk()
    .then(results =>{
        return res.status(200).json({message: results})
    })
    .catch(err=>{
        return res.status(500).json({message: err})

    })
})
//Get category by id (GET)
router.get('/getCategoryById/:id',(req,res)=>{


    const cid = req.params.id;

    category.findAll()
    .then(results =>{
        return res.status(200).json({message: results})
    })
    .catch(err=>{
        return res.status(500).json({message: err})

    })
})  
//Update category (PUT)
router.put('/updateCategoryById/:id ',(req,res)=>{

    const cid = req.params.id;

})
//Delete category (DELETE)
router.delete('/deleteCategoryById/:id',(req,res)=>{

    const cid = req.params.id;


    category.findByPk(cid)
    .then(cat =>{
        return cat.destroy();
    })
    .then(results =>{
        return res.status(200).json({message: results})
    })
    .catch(err =>{
        return res.status(500).json({message: err})
    })
})


export default router;