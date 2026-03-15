
// import { useState } from "react";
// import logo from "../assets/4142b6c370e4f67fb1643ea78ff00afa-removebg-preview.png"
// import { NavLink } from "react-router-dom";
// export default function Navbar({islogged , handelLogout}) {
//   const [openMenu, setOpenMenu] = useState(false);
//   const [openSearch, setOpenSearch] = useState(false);

//   return (
//     <nav className="bg-neutral-primary w-full sticky z-20 border-b border-default">
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

//         {/* logo */}
//         <NavLink to={'home'}  className="flex items-center space-x-3">
//           <img
//             src={logo}
//             className="h-10"
//             alt="logo"
//           />
//           <span className="text-xl text-heading font-semibold italic">NOVELSET</span>
//         </NavLink>

//         {/* right side */}
//         <div className="flex items-center md:order-2">

//           {/* mobile search button */}
//           <button
//             onClick={() => setOpenSearch(!openSearch)}
//             className="flex items-center justify-center md:hidden text-body hover:text-heading bg-transparent hover:bg-neutral-secondary-medium focus:ring-2 focus:ring-neutral-tertiary rounded-base text-sm w-10 h-10"
//           >
//            {/* <i class="fa-solid fa-magnifying-glass"></i> */}
//           </button>

//           {/* desktop search */}
//           {/* <div className="relative hidden md:block">
//             <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//               <i class="fa-solid fa-magnifying-glass"></i>
//             </div>

//             <input
//               type="text"
//               className="block w-full ps-9 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
//               placeholder="Search"
//             />
//           </div> */}

//           {/* mobile menu button */}
//           <button
//             onClick={() => setOpenMenu(!openMenu)}
//             className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:ring-2 focus:ring-neutral-tertiary"
//           >
//             <i class="fa-solid fa-bars"></i>
//           </button>
//         </div>

//         {/* menu */}
//         <div className={`${openMenu ? "block" : "hidden"} items-center justify-between w-full md:flex md:w-auto md:order-1`}>

//           {/* mobile search
//           {openSearch && (
//             <div className="relative mt-3 md:hidden">
//               <input
//                 type="text"
//                 className="block w-full ps-9 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs"
//                 placeholder="Search"
//               />
//             </div>
//           )} */}

//           <ul className="font-medium flex flex-col p-4 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-neutral-primary">

//             <li>
//               <NavLink to={'home'} className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:hover:text-fg-brand italic">
//                 Home
//               </NavLink>
//             </li>

//             <li>
//               <NavLink to={'favorites'} className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:hover:text-fg-brand italic">
//                 Favorites
//               </NavLink>
//             </li>

//             <li>
//               <NavLink to={'contact'} className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:hover:text-fg-brand italic">
//                 Contact
//               </NavLink>
//             </li>
// {islogged &&
// <li>
//    <button onClick={handelLogout} type="button" className="text-body bg-slate-500 box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-xl text-sm px-4 py-2.5 focus:outline-none me-2">Log out</button>
// </li>
// }
//           </ul>

//         </div>
//       </div>
//     </nav>
//   );
// }
import { useState } from "react";
import { NavLink } from "react-router-dom";
//import logo from "../assets/logo.png";
import logo from "../assets/4142b6c370e4f67fb1643ea78ff00afa-removebg-preview.png"
export default function Navbar({ isLogged, handleLogout }) {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="bg-neutral-primary w-full sticky z-20 border-b border-default">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-3">
          <img src={logo} className="h-10" alt="logo" />
          <span className="text-xl text-heading font-semibold italic">
            NOVELSET
          </span>
        </NavLink>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:ring-2 focus:ring-neutral-tertiary"
        >
          <i className="fa-solid fa-bars"></i>
        </button>

        {/* Menu */}
        <div
          className={`${
            openMenu ? "block" : "hidden"
          } items-center justify-between w-full md:flex md:w-auto md:order-1`}
        >
          <ul className="font-medium flex flex-col p-4 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-neutral-primary">
            <li>
              <NavLink
                to="/"
                className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:hover:text-fg-brand italic"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/favorites"
                className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:hover:text-fg-brand italic"
              >
                Favorites
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:hover:text-fg-brand italic"
              >
                Contact
              </NavLink>
            </li>

            {isLogged && (
              <li>
                <button
                  onClick={handleLogout}
                  className="text-body  border hover:bg-neutral-tertiary-medium px-4 py-2 rounded-xl" style={{backgroundColor:"var(--main_bg)"}}
                >
                  Log out
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}