import React from "react";
// import styles from "../style";
import { jason, topHalfTree, bottomHalfTree } from "../assets";


const Header = () => {
    return (
        <section id="home" className={`flex flex-col-reverse md:flex-row py-2 sm:py-4`}>

            {/* ${styles.flexStart} flex-col <- in order to apply flex to header*/}

            <div className={`relative xl:px-0 sm:px-16 px-6`}>

                <div className="bg-transparent flex flex-1 w-[276px] h-[102px] sm:w-[552px] sm:h-[205px] ml-4 md:ml-[31px] mb-4 ">
                    <img src={topHalfTree} alt="TopHalfTree" className="w-full h-full object-contain" />
                </div>

                <div className="text-center sm:ml-[32px]">
                    <h1 className="flex flex-row 
                    font-museomoderno items-center 
                    sm:py-[6px] text-white px-14
                    sm:mb-2 text-2xl sm:text-5xl font-extrabold">
                        Jason Merchan
                    </h1>

                    <h2 className="flex flex-row 
                    font-museomoderno items-center 
                    sm:py-[6px] px-12 sm:px-16 text-white 
                    mb-4 text-xl sm:text-4xl font-extrabold underline decoration-4">
                        Software Engineer
                    </h2>
                </div>

                <div className="h-[42px]"></div>

                {/* we use absolute below to make the bottom half tree overlap the header and the body */}
                <div className="absolute bg-transparent flex flex-1 bottom-[-200px] sm:bottom-[-425px] lg:bottom-[-325px] w-[202px] h-[221px] sm:w-[404px] sm:h-[442px] md:ml-3 mb-4">
                    <img src={bottomHalfTree} alt="BottomHalfTree" className="w-full h-full object-contain" />
                </div>

            </div>

            <div className="flex flex-1 justify-center items-center md:mb-12 sm:mt-10 md:mt-0">

                <div className="rounded-full border-8 border-white overflow-hidden">
                    <div className="rounded-full border-16 border-primaryGreen overflow-hidden w-[12rem] h-[12rem] sm:w-[18rem] sm:h-[18rem] lg:w-[28rem] lg:h-[28rem]">
                        <img src={jason} alt="Jason Merchan" className="w-full h-full object-cover" />
                    </div>
                </div>

            </div>

        </section>
    );
}

export default Header;
