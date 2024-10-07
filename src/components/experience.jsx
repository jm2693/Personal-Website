import React from "react";
import ExperienceCard from "./experience_card";

const Experience = () => {
    const experiences = [
        {
            title: 'Software Engineer Student Worker',
            subtitle: 'Enterprise Application Services at Rutgers University',
            bulletPoints: [
                'Collaborating with cross-functional teams, serving 120,000+ student, faculty, and staff across multiple campuses, by optimizing Dart asynchronous operations and local API integrations',
                'Redesigning the myRutgers Mobile App login to function more robustly and enhance user experience',
                'Designing and implementing app-wide route navigation system to allow for a more efficient widget tree',
            ],
        },
        {
            title: 'Web Developer',
            subtitle: 'Urological Associate of Central Jersey',
            bulletPoints: [
                'Collaborating with cross-functional teams, serving 70,000+ student, faculty, and staff across multiple campuses, by optimizing Dart asynchronous operations and local API integrations for library database access',
                'Boosted app security and user retention by improving a cross-platform biometric authentication system for Android and iOS, resolving critical authentication errors, and decreasing account-related support tickets by 40%',
                'Designed and implemented app-wide route navigation system to significantly reduce page load times, webview performance, and overall app performance by 14%',
            ],
        },
        {
            title: 'Software Engineer Student Worker',
            subtitle: 'Enterprise Application Services at Rutgers University',
            bulletPoints: [
                'Collaborating with cross-functional teams, serving 70,000+ student, faculty, and staff across multiple campuses, by optimizing Dart asynchronous operations and local API integrations for library database access',
                'Boosted app security and user retention by improving a cross-platform biometric authentication system for Android and iOS, resolving critical authentication errors, and decreasing account-related support tickets by 40%',
                'Designed and implemented app-wide route navigation system to significantly reduce page load times, webview performance, and overall app performance by 14%',
            ],
        }
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