import React from "react";

const MoreAboutMe = () => {
    return (
        <div id="more_about_me" className=" pt-24">
            <h2 className="text-5xl font-museomoderno font-bold mb-6">More About Me</h2>
                <div className="bg-transparent backdrop-blur-sm rounded-2xl p-6 shadow-md mb-6">
                    <div className="text-lg font-semibold bg-primaryBrown bg-opacity-10 backdrop-blur-lg rounded-md p-2 shadow-sm">
                        <ul>
                            <li>
                                I am a junior at Rutgers University-New Brunswick, studying Computer Science!
                            </li>
                            <li>
                                I am a big fan of traveling, most recently I went to Ecuador
                            </li>
                            <li>
                                Some of my current side projects are making a mobile app for a Beach Reservation Business,
                                working on a Rutgers Marketplace web-app, and making this site!
                            </li>
                            <li>
                                I am interested in learning some ML, specifically in reinforcement learning
                            </li>
                        </ul>
                    </div>
                </div>
        </div>
    );
}

export default MoreAboutMe;