import React, {useState} from 'react';

const HookForm= (props)=>{
    const [firstName,setFirstName]= useState("");
    const [lastName,setLastName]= useState("");
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");
    const [confirmPassword,setConfirmPassword]= useState("");
    const[firstNameError,setFirstNameError]=useState("")
    const[lastNameError, setLastNameError]=useState("")
    const[emailError,setEmailError]=useState("")

    const firstNameErrors=(event)=>{
        setFirstName(event.target.value);
        if (event.target.value.length<2) {
            setFirstNameError("First name must be 2+ character's long")
        }
        else{
            setFirstNameError("")
        }
    }



    const createUser=(event)=>{
        event.preventDefault();
        const newUser={firstName,lastName,email,password,confirmPassword};
        console.log("welcome", newUser)
    ///  ^^^^ not seeing this print?
    } 
return(
    <>
{/* //fist name called function to handle validation since its set to an on change event when first rendered it wont show errors*/}
        <form onSubmit={createUser}>
            <div>
                <label>First Name: </label>
                <input type='text' onChange={firstNameErrors}/>
                {
                    firstNameError?
                        <p>{firstNameError}</p>:
                        ''
                }
            </div>

{/* last name didnt call a function like first name and returns empty string if passing validations */}
            <div>
                <label>Last Name: </label>
                <input type='text' onChange={(event)=>setLastName(event.target.value)}/>
                {lastName.length<2?<p>Last Name Must be 2 chars long </p>:""
                }
            </div>

{/* email else used null instead of "" empty sting */}
            <div>
                <label>Email: </label>
                <input type='text' onChange={(event)=>setEmail(event.target.value)}/>
                {
                    email.length<2?<p>Email must be at least 2 chars long</p>:null    
                }
            </div>

{/* //password set up like email but it also checks that the length is greater than 8 but also length greater than 0 before displaying error */}
            <div>
            <label>Password: </label>
            <input type='password' onChange={(event)=>setPassword(event.target.value)}/>
            {
                password.length<8 && password.length>0? <p>Password must be at least 8 chars long</p>:null
            }
            </div>
{/* //confirm password validates wheter it matchs and wont show until something is typed */}
            <div>
                <label>Confirm Password: </label>
                <input type='password' onChange={(event)=>setConfirmPassword(event.target.value)}/>
                {
                    confirmPassword!=password && confirmPassword.length>0?<p>Passwords dont match</p>:null
                }
            </div>

        

            <input type="submit" value="Submit"/>
        </form>
        <div>
            <h3>Form Data(below)</h3>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email:{email} </p>
            <p>Password:{password} </p>
            <p>Confirm Password: {confirmPassword} </p>
        </div>  
    
    </>
);

}
export default HookForm;