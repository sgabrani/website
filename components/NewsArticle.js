import NextImageWrapper from './NextImageWrapper';
import React from 'react';

function Article(props) {
	return (
		<a
			target="_blank" rel="noreferrer noopener"
			href={props.article.link}
		>
			<div className="achievement">
				<NextImageWrapper
					src={props.article.image}
					width={360}
					height={200}
					objectFit='cover'
					alt={props.article.alt}
				/>
				<h3>{props.article.headline}</h3>
			</div>
		</a>
	);
}

export default Article;
