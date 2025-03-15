import React from 'react';
import { TiTick } from "react-icons/ti";

const FeatureText = ({text}) => {
    return (
        <p className='flex gap-2 items-center text-muted-foreground'>
            <TiTick /> {text}
        </p>
    );
};

export default FeatureText;