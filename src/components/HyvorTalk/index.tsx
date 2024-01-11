import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import { Comments } from '@hyvor/hyvor-talk-react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useLocation } from 'react-router-dom';


export default function HyvorTalkComponent() {
    const { colorMode } = useColorMode();
    const { siteConfig, siteMetadata } = useDocusaurusContext();
    const location = useLocation();
    const slug = location.pathname.split('/').pop();

    return (
        <Comments
            website-id={9194}
            //page-id={slug}
            on={{
                'loaded': () => console.log('Comments loaded'),
                'comment:published': () => console.log('Comment published'),
            }}
        />
    );


}