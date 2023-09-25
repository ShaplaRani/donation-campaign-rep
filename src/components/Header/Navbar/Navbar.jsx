import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="">

            <nav className=" w-10/12 m-auto md:flex  justify-between items-center py-12 relative  ">

                  <div className="flex justify-center">
                        <img src="/src/assets/Logo.png" alt="" /> 
                  </div>
                  
                <ul className="flex gap-6 lg:gap-12 mt-10 justify-center md:mt-0 font-bold text-lg">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                            }
                        >
                            Home
                        </NavLink>

                    </li>

                    <li>
                        <NavLink
                            to="/donation"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                            }
                        >
                            Donation
                        </NavLink>


                    </li>
                    <li>
                        <NavLink
                            to="/statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                            }
                        >
                            Statistics
                        </NavLink>
                     


                    </li>
                </ul>

            </nav>

        </div>
    );
};

export default Navbar;