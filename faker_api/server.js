const express = require("express");
const {faker} = require('@faker-js/faker');
const app = express();
const port = 8000;

const allUsers=[]
const allCompanyProducts=[]

const createUser=()=>({
    password:faker.internet.password(),
    email:faker.internet.email(),
    phoneNumber: faker.phone.number(),
    lastName: faker.person.lastName(),
    firstName:faker.person.firstName(),
    id:faker.database.mongodbObjectId()
});

const createCompany=()=>({
    id:faker.database.mongodbObjectId(),
    productName: faker.commerce.productName(),
    address:{
        street:faker.commerce.productName(),
        city:faker.location.city(),
        state: faker.location.state(),
        zipCode:faker.location.zipCode(),
        country:faker.location.country()
    }
});

// you can only have res.json run once for each route. for example in the route below I cant have a json for each product and user instead I need one json that incorporates both or only the first will be read/ 
app.get("/api/user/company", (req,res)=>{
    const newUser=createUser();
    console.log("This is the new user: "+newUser);
    allUsers.push(newUser);
    console.log("list of all users"+allUsers);
    const newCompany=createCompany();
    console.log("this is the new company: "+newCompany);
    allCompanyProducts.push(newCompany);
    console.log("all company products:" +allCompanyProducts);
    const companyAndUser={
    user: newUser,
    company:newCompany
    };  
    res.json(companyAndUser);
    console.log("company and user" + companyAndUser);
});


app.get("/api/users/new", (req,res)=>{
    const newUser=createUser();
    allUsers.push(newUser)
    res.json(newUser);
    console.log(newUser);
    console.log("list of all users: " +allUsers)
});

app.get("/api/companies/new",(req,res)=>{
    const newCompany=createCompany();
    allCompanyProducts.push(newCompany);
    res.json(newCompany);
    console.log("New Product made is: " +newCompany)
    console.log("List of all company products: "+ allCompanyProducts)
});

app.listen(port,()=>console.log("Server is up and running on port " + port)); 