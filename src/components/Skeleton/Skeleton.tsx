import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props: any) => {
    return (
        <ContentLoader
            speed={2}
            width={250}
            height={280}
            viewBox="0 0 250 280"
            backgroundColor="#98cfc3"
            foregroundColor="#56b5b8"
            {...props}
        >
            <rect x="119" y="188" rx="0" ry="0" width="0" height="1" />
            <rect x="142" y="131" rx="0" ry="0" width="0" height="1" />
            <rect x="10" y="8" rx="10" ry="10" width="230" height="170" />
            <rect x="10" y="202" rx="5" ry="5" width="230" height="40" />
        </ContentLoader>
    );
};

export default Skeleton;