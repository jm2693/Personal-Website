import { useState } from "react";
import { close, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav id="navbar" className={`w-full bg-primaryGreen flex py-6 justify-between`}>
            <ul className="list-none md:flex flex-1 hidden justify-start hover-underline-menu">
                {
                    navLinks.map((nav, index) => (
                        <li
                            key={nav.id}
                            className={`font-museomoderno
                            font-normal 
                            cursor-pointer
                            text-[28px] ${index === 0 ? 'ml-16' : 'ml-20'}
                            text-white
                            font-semibold`}>
                            <a href={`#${nav.id}`}>
                                {nav.title}
                            </a>
                        </li>
                    ))
                }
            </ul>
            <div className="md:hidden flex flex-1 justify-start items-center">
                <img src={toggle ? close : menu}
                    alt="menu" className="w-[28px] h-[28px] object-contain"
                    onClick={() => setToggle((prev) => !prev)} />
                <div
                    className={`${toggle ? 'flex' : 'hidden'} 
                    p-6 bg-white absolute top-20 left-0 mx-4 my-2 
                    min-w-[140px] rounded-xl sidebar`}>

                    <ul className="list-none flex flex-col
                    justify-start items-start flex-1">
                        {
                            navLinks.map((nav, index) => (
                                <li
                                    key={nav.id}
                                    className={`
                                        font-museomoderno
                                        font-normal
                                        cursor-pointer
                                        text-[14px] mb-2
                                        text-primaryBrown
                                        font-semibold` }>
                                    <a href={`#${nav.id}`}>
                                        {nav.title}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;