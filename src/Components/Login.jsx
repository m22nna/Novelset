 import { Button, Checkbox, Label, Textarea, TextInput } from "flowbite-react";

import { useNavigate, useOutletContext } from "react-router-dom";
import { supabase } from "../../supabaseClient";
import { useState } from "react";
export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { handleLogin } = useOutletContext();

  const submitLogin = async (e) => {
    e.preventDefault();
    const {data, error } = await supabase.auth.signInWithPassword({email, password});
    if(error) setError(error.message);
    else{
      console.log("logged in", data.user);
      handleLogin();
      navigate("/home");
    }
    // // تحديث ال state في Layout
     // العودة لل home
  };

  return (
    <form onSubmit={submitLogin} className="flex w-full flex-col gap-4"style={{backgroundColor:"var(--main_bg)"}}>
     <div className="container w-2/3 mx-auto">
     <h5 className="text-2xl italic text-inherit my-5">Login</h5>
     {error && <p className="text-red-700 text-center">{error}</p>}
      <div className="mb-5">
             <div className="mb-2 block text-left">
               <Label htmlFor="email">Email</Label>
             </div>
             <TextInput id="emial" type="email" placeholder="user@yahoo.com" required value={email} onChange={(e)=> setEmail(e.target.value)}/>
           </div> 
           <div className="mb-5">
             <div className="mb-2 block text-left">
               <Label htmlFor="password">Password</Label>
             </div>
             <TextInput id="password" type="password" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
           </div>     
      
      <button type="submit" className="bg-white border px-4 py-2 rounded-xl w-fit mx-auto my-5">
        Submit
      </button>
     </div>
      
         </form>
  );
}