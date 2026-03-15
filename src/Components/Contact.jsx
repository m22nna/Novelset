import { Button, Checkbox, Label, Textarea, TextInput } from "flowbite-react";
export default function Contact(){
    return <>
   
     <form className="flex w-full flex-col gap-4"style={{backgroundColor:"var(--main_bg)"}}>
         <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading italic">Contact With US !</h5>
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
        <TextInput id="email1" type="email" placeholder="name@yahoo.com" required />
      </div> 
       <div className="mb-5">
        <div className="mb-2 block text-left">
          <Label htmlFor="mobile">Mobile Number</Label>
        </div>
        <TextInput id="mobile" type="tel" placeholder="0xxxxxxxxxx" required />
      </div>
        <div className="mb-5">
        <div className="mb-2 block text-left">
          <Label htmlFor="email1">Message</Label>
        </div>
        <Textarea id="message" type="text" required ></Textarea>
      </div>
      {/* <div>
        <div className="mb-2 block">
          <Label htmlFor="password1">Your password</Label>
        </div>
        <TextInput id="password1" type="password" required />
      </div> */}
      <div className="flex items-center gap-2">
        <Checkbox id="remember" className="bg-white" />
        <Label htmlFor="remember">Remember me</Label>
      </div>
      <Button type="submit" className="bg-white text-inherit w-fit mx-auto my-5">Submit</Button>
         </div>
      
    </form>
    </>
}