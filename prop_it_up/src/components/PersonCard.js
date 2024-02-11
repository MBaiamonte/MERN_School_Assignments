import React, {useState} from "react";



const PersonCard = (props) =>{
    const {firstName,lastName,age,hairColor}=props;
    const[birthday, setBirthday]= useState(age);

return(
    <>
        <h1>{lastName}, {firstName}</h1>
        <p>Age: {birthday}</p> 
        <p>Hair Color: {hairColor}</p>
        <button onClick={(event)=> setBirthday(Number(birthday) + 1)}>Birthday Button for {firstName} {lastName}</button>
    </>
)
}
export default PersonCard;

//this one above the return i destructed our props into local variables
//     this allowed me to just use the variable name and not dot notation
//     from previous screenshot.  