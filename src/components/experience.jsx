import React from "react";
import ExperienceCard from "./experience_card";

const Experience = () => {
    const experiences = [
        {
            title: 'Software Engineering Intern',
            subtitle: 'GitHub',
            bulletPoints: [
                'Developed pre-migration CLI tool in Go, getting customers to start using GitHub and GitHub products faster',
                'Built Support Vector Machine model by identifying key relationships in Azure data, achieving 93% accuracy in migration time estimates',
                'Added support for version-control hosts by fetching repo metadata with GraphQL, covering 100% of migrations',
            ],
        },
        {
            title: 'Software Engineer',
            subtitle: 'Enterprise Application Services at Rutgers University',
            bulletPoints: [
                'Main works revolves around the mobile development of the official myRutgers Mobile App using Flutter and Firebase',
                'Collaborating with cross-functional teams, developing for 70,000+ users across multiple campuses',
                'Implemented the app routing navigation systems to based on URI paths',
                'Redesigned the login system to natively support Univerisity CAS Authentication'
            ],
        },
        {
            title: 'Web Developer',
            subtitle: 'Urological Associate of Central Jersey',
            bulletPoints: [
                'Developed the official Urological Associates of Central Jersey website using React.js',
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