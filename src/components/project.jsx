import React from "react";
import ProjectCard from "./project_card";

const Project = () => {
    const projects = [
        {
            title: 'MyShell',
            subtitle: '',
            bulletPoints: [
                'Implemented a fully functional command-line shell from scratch, supporting both interactive and batch modes, with features like command parsing, wildcards, and conditional execution',
                'Created built-in shell commands (cd, pwd, which, exit) and implemented a custom program search algorithm to mimic standard shell behavior, as well as input/output redirection and piping between processes',
                'Engineered a comprehensive test suite with automated testing infrastructure using Makefile, reducing testing time by 70% and increasing test coverage to 95%',
            ]
        },
        {
            title: 'Rutgers Rocket Propulsion Lab',
            subtitle: '',
            bulletPoints: [
                'Wrote and optimized data processing algorithms, achieving a 19% improvement in speed and 4% in space efficiency for binary-to-CSV conversion of RF-transmitted data',
                'Facilitated cross-functional team meetings between telemetry and other subsystems, limiting integration issues',
                'Development of GUI using Gadot for visualization of data, with C++ and GDScript',
            ]
        },
        {
            title: 'Infinity War Graph Simulator',
            subtitle: '',
            bulletPoints: [
                'Created a stochastic simulation of Thanos’ snap using graph theory and randomization, processing networks with up to 1 million nodes in under 30 seconds, to analyze the impact on global social networks and connectivity',
                'Leveraged data structures like adjacency matrices, HashMaps, and priority queues to efficiently represent and manipulate complex graph relationships, reducing memory usage by 4 times and query time by 40%',
            ]
        },
    ]
    return (
        <div id="project" className="space-y-8 mb-24">
            <h2 className="text-4xl font-museomoderno font-bold mb-6">Projects</h2>
            {projects.map((proj, index) => (
                <ProjectCard key={index} title={proj.title} subtitle={proj.subtitle} bulletPoints={proj.bulletPoints} />
            ))}
        </div>
    );
}

export default Project;