import React from 'react';
import './skills.css';
import CypressIcon from '../../../../assets/icons/brands/tech/cypress.svg';

export const Skill = ({ source, alt, title }) => {
    return <img src={source} alt={alt} title={title} />;
};

export const Skills = () => {
    return (
        <div className="skills">
            <h2>I have experience with these technologies</h2>
            <div className="skillsGrid">
                <Skill
                    source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                    alt="The logo icon for react"
                    title="React"
                />
                <Skill
                    source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                    alt="The logo icon for TS"
                    title="TypeScript"
                />
                <Skill
                    source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    alt="The logo icon for TS"
                    title="JavaScript"
                />
                <Skill
                    source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
                    alt="The logo icon for HTML 5"
                    title="HTML 5"
                />
                <Skill
                    source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
                    alt="The logo icon for CSS3"
                    title="CSS 3"
                />

                <Skill
                    source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg"
                    alt="GraphQL"
                    title="GraphQL"
                />

                <Skill
                    source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
                    alt="The logo icon for NodeJS"
                    title="Node JS"
                />
                <Skill source={CypressIcon} alt="The logo icon for NodeJS" title="Node JS" />
                <Skill
                    source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
                    alt="The logo icon for GitHub"
                    title="GitHub"
                />
                <Skill
                    source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original-wordmark.svg"
                    alt="The logo icon for Jira"
                    title="Jira"
                />
            </div>
        </div>
    );
};
