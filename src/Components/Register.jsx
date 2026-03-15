import { Button, Checkbox, Label, Textarea, TextInput } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabaseClient";
import { useState } from "react";
import toast from "react-hot-toast";
//import { Toaster } from "react-hot-toast";
export default function Register(){
    const navigate = useNavigate();
const [email , setEmail] = useState("");
const [password , setPassword] = useState("");
const [error , setError] = useState("");

const handelRegister = async (e)=>{
e.preventDefault();
const {data , error} = await supabase.auth.signUp({email, password});
if(error) setError(error.massage);
else{
  //alert("check your email");
  toast.success("check your email");
  navigate("/login")
}
};

    return <>   
     <form onSubmit={handelRegister} className="flex w-full flex-col gap-4"style={{backgroundColor:"var(--main_bg)"}}>
             <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading italic">Register Now !</h5>
             {error && <p className="text-red-600">{error}</p>}
             <div className="container w-4/6 mx-auto">
                <div className="mb-5">
            <div className="mb-2 block text-left">
              <Label htmlFor="first-name">First Name</Label>
            </div>
            <TextInput id="first-name" type="text" placeholder="First Name" required />
          </div>
            <div className="mb-5">
            <div className="mb-2 block text-left">
              <Label htmlFor="last-name">Last Name</Label>
            </div>
            <TextInput id="last-name" type="text" placeholder="Last Name" required />
          </div>
            <div className="mb-5">
            <div className="mb-2 block text-left">
              <Label htmlFor="email1">Email</Label>
            </div>
            <TextInput id="email1" type="email" placeholder="name@yahoo.com" required value={email} onChange={(e)=> setEmail(e.target.value)}/>
          </div> 
           <div className="mb-5">
            <div className="mb-2 block text-left">
              <Label htmlFor="mobile">Mobile Number</Label>
            </div>
            <TextInput id="mobile" type="tel" placeholder="0xxxxxxxxxx" required />
          </div>
           <div className="mb-5">
            <div className="mb-2 block text-left">
              <Label htmlFor="password">Password</Label>
            </div>
            <TextInput id="password" type="password"  required value={password} onChange={(e)=> setPassword(e.target.value)} />
          </div>
          
          <Button onClick={()=> navigate("/login")} type="submit" className="bg-white text-inherit w-fit mx-auto my-5">Submit</Button>
             </div>
          
        </form>
    </>
}