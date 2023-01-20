import Image from 'next/image';
import React from 'react';

export default function NextImageWrapper(props){
    return (
        <div>
            <Image {...props}/>
        </div>
    );
}