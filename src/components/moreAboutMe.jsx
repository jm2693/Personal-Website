import React from "react";

const MoreAboutMe = () => {
    return (
        <div>
            <h2 className="text-4xl font-museomoderno font-bold mb-6">More About Me</h2>
                <div className="bg-transparent backdrop-blur-sm rounded-2xl p-6 shadow-md mb-6">
                    <div className="text-lg bg-primaryBrown bg-opacity-10 backdrop-blur-lg rounded-md p-2 shadow-sm">
                        <ul>
                            <li>
                                I am currently a junior at Rutgers University-New Brunswick, studying Computer Science
                            </li>
                            <li>
                                I am a big fan of traveling, most recently I went to Ecuador
                            </li>
                            <li>
                                Some of my current side projects are making a mobile app for a Beach Reservation Business,
                                Working on a Rutgers Marketplace webapp
                                And making this site!
                                I am doing some testing with reinforcement learing and some testing with llamas 3.0
                            </li>
                        </ul>
                    </div>
                </div>
        </div>
    );
}

export default MoreAboutMe;