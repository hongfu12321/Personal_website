import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';
import Main from '../layouts/Main';

const markdown = raw('../data/about.md');
// const markdown = `
// ## About me placeholder
// Hello my friend
// `;

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

const About = () => (
    <Main
        title="About"
        description="Learn more about Fu Hong"
    >
        <article className="post markdown" id="about">
            <header>
                <div className="title">
                    <h2 data-testid="heading"><Link to="/about">About Me</Link></h2>
                </div>
            </header>
            <ReactMarkdown
                children={markdown}
                components={{
                    Link: LinkRenderer,
                }}
                
            />
        </article>
    </Main>
);


export default About;