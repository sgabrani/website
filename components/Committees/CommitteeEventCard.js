import NextImageWrapper from '../NextImageWrapper';
import React from 'react';

function CommitteeEventCard(props) {
    const hasImage = props.image.src;
    return (
        <div className="info-card-container">
            <div className="image-wrapper">
            {hasImage
                ? <NextImageWrapper src={props.image.src} alt={props.image.alt} width={241.8} height={160}/>
                : <NextImageWrapper src={`/images/committees/${props.committee}/${props.committee}_motif_base.png`} alt={`base motif for ${props.name}`} width={241.8} height={160} />
            }
            </div>
            <h4 className="font-header text-bold">{props.title}</h4>
            {props.desc}
        </div>
    );
}

export default CommitteeEventCard;
