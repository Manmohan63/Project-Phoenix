import React from 'react'
import Marquee from "react-fast-marquee";
import Marquee_content from './ytvideos';

const index = () => {
    return (
        <>
            <Marquee
                pauseOnHover={true}
                pauseOnClick={true}
                loop={0}
                speed={5}
                gradient={false}
            >
                <Marquee_content />
            </Marquee>
        </>
    )
}

export default index