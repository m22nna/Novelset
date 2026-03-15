import {
  Footer as FlowbiteFooter,
  FooterBrand,
  FooterCopyright,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
  FooterDivider  
} from "flowbite-react";

 import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";
import logo from "../assets/4142b6c370e4f67fb1643ea78ff00afa-removebg-preview.png"
export default function Footer() {
  return (
    <FlowbiteFooter  className="mt-10">
      <div className="w-full">

        {/* top section */}
        <div className="grid w-full grid-cols-1 gap-8 px-6 py-8 md:grid-cols-4 italic">

          {/* logo */}
          <div className="">
            <FooterBrand
              href="#"
              src={logo} className="w-32"
              alt="Logo"
              name="NOVELSET" 
            />
          </div>

          {/* company */}
          <div>
            <FooterTitle title="Company" className="text-inherit italic " />
            <FooterLinkGroup col>
              <FooterLink href="#">About</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="#">Brand Center</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
            </FooterLinkGroup>
          </div>

          {/* help */}
          <div>
            <FooterTitle title="Help Center" className="text-inherit italic " />
            <FooterLinkGroup col>
              <FooterLink href="#">Discord</FooterLink>
              <FooterLink href="#">Twitter</FooterLink>
              <FooterLink href="#">Facebook</FooterLink>
              <FooterLink href="#">Contact</FooterLink>
            </FooterLinkGroup>
          </div>

          {/* legal */}
          <div>
            <FooterTitle title="Legal" className="text-inherit italic "/>
            <FooterLinkGroup col>
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Terms & Conditions</FooterLink>
              <FooterLink href="#">Licensing</FooterLink>
            </FooterLinkGroup>
          </div>

        </div>

        <FooterDivider />

        {/* bottom section */}
        <div className="w-full px-4 py-6 sm:flex sm:items-center sm:justify-around text-inherit italic" >

          <FooterCopyright
            href="#"
            by="NOVELSET"
            year={2026}
          />

          <div className="mt-4 flex space-x-6 sm:mt-0 " >
            
             <a href="#" className="text-inherit">
    <BsFacebook size={24} />
  </a>
  <a href="#" className="text-inherit ">
    <BsInstagram size={24} />
  </a>
  <a href="#" className="text-inherit ">
    <BsTwitter size={24} />
  </a>
  <a href="#" className="text-inherit ">
    <BsGithub size={24} />
  </a>

          </div>

        </div>
      </div>
    </FlowbiteFooter>
  );
}