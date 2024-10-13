import React from "react";
import ExperienceCard from "./experience_card";

const Experience = () => {
    const experiences = [
        {
            title: 'Software Engineer',
            subtitle: 'Enterprise Application Services at Rutgers University',
            bulletPoints: [
                'Main works revolves around the mobile development of the official myRutgers Mobile App using Flutter and Firebase',
                'Collaborating with cross-functional teams, developing for 120,000+ users across multiple campuses',
                'Implemented the app routing navigation systems to based on URI paths',
                'Redesigned the login system to natively support Univerisity CAS Authentication'
            ],
        },
        {
            title: 'Web Developer',
            subtitle: 'Urological Associate of Central Jersey',
            bulletPoints: [
                'Developed the official Urological Associates of Central Jersey website using React.js and AWS',
                'Deployed and improved site visibility be implementing SEO best practices',
                'Worked with client to properly translate clinical documents onto site',
            ],
        },
    ]

    return (
        <div id="experience" className="space-y-8 pt-24">
            <h2 className="text-5xl font-museomoderno font-bold mb-6">Experience</h2>
            {experiences.map((exp, index) => (
                <ExperienceCard key={index} title={exp.title} subtitle={exp.subtitle} bulletPoints={exp.bulletPoints} />
            ))}
        </div>
    );
}

export default Experience;