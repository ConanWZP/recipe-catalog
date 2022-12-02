import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props: any) => {
    const screenWidth: number = window.screen.width
    let widthValue

    // все что до 1110px width = 250px
    //
    // для 1110 и ниже width = 220px
    //
    // для 950p и ниже width = 168px
    //
    //767.98px и ниже width = 30vw
    //570px width 47vw
    if (screenWidth > 1100 ) {
        widthValue = 250
    } else if (screenWidth <= 1100 && screenWidth > 950 ) {
        widthValue = 220
    } else if (screenWidth <= 950 && screenWidth > 767.98 ) {
        widthValue = 168
    } else if (screenWidth <= 767.98 && screenWidth > 570 ) {
        widthValue = '30vw'
    } else if (screenWidth <= 570 && screenWidth > 0 ) {
        widthValue = '47vw'
    }

    return (
        <ContentLoader
            speed={2}
            width={widthValue}
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