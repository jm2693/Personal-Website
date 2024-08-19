import React from "react";
import styles from "../style";
import { jason, topHalfTree, bottomHalfTree } from "../assets";


const Header = () => {
    return ( 
        <section id="home" className={`flex
        md:flex-row flex-col sm:py-4 py-2`}>

            <div className={`${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

                <div className="flex-1 w-[552px] h-[205px] bg-transparent ml-[42px] mb-4 ">
                    <img src={topHalfTree} alt="TopHalfTree" className="w-full h-full object-contain"/>
                </div>

                <div className="text-center ml-[32px]">
                    <h1 className="flex flex-row 
                    font-museomoderno items-center 
                    py-[6px] text-white px-14
                    mb-2 text-5xl font-extrabold"> 
                        Jason Merchan
                    </h1>

                    <h2 className="flex flex-row 
                    font-museomoderno items-center 
                    py-[6px] px-16 text-white 
                    mb-4 text-4xl font-extrabold underline">
                        Software Engineer
                    </h2>
                </div>

                <div className="flex-1 w-[404px] h-[442px] bg-transparent mb-4">
                    <img src={bottomHalfTree} alt="BottomHalfTree" className="w-full h-full object-contain"/>
                </div>

            </div>

            <div className="flex flex-1 justify-center items-center md:mb-60 mt-10 md:mt-0">

                <div className="rounded-full border-8 border-white overflow-hidden">
                    <div className="rounded-full border-16 border-primaryGreen overflow-hidden w-[28rem] h-[28rem]">
                        <img src={jason} alt="Jason Merchan" className="w-full h-full object-cover" />
                    </div>
                </div>

            </div>

        </section>
     );
}

export default Header;