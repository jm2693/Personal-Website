import React from "react";

const MoreAboutMe = () => {
    return (
        <div id="more_about_me" className=" pt-24">
            <h2 className="text-5xl font-museomoderno font-bold mb-6">More About Me</h2>
                <div className="bg-transparent backdrop-blur-sm rounded-2xl p-6 shadow-md mb-6">
                    <div className="text-lg font-semibold bg-primaryBrown bg-opacity-10 backdrop-blur-lg rounded-md p-2 shadow-sm">
                        <ul>
                            <li>
                                My name is Jason Merchan. I am a student at Rutgers University pursuing a Bachelor's of Science in Computer Science.
                            </li>
                            <li>
                                Some of my current side projects are making a mobile app for a Beach Reservation Business and
                                working on a Rutgers Marketplace web-app.
                            </li>
                            <li>
                                I am currently doing research in Deep Learning, with a focus on Reinforcement Learning.
                            </li>
                        </ul>
                    </div>
                </div>
        </div>
    );
}

export default MoreAboutMe;