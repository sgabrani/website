import React from 'react';

const generateCols = (n, m, classPattern=['']) => {
	return n.map(i =>
		<div className="square-col" key={i}>
			{m.map(j => {
				const classNames = ['square'];
				const name = classPattern[j % classPattern.length];
				if (name !== "") {
					classNames.push(classPattern[j % classPattern.length]);
				} else {
					const r = Math.random();
					if (r < 0.08)
						classNames.push('white');
					else if (r < 0.40)
						classNames.push('light');
				}
				return <div className={classNames.join(" ")} key={j} />
			})}
		</div>
	);
}

export default class Banner extends React.Component {
	constructor(props) {
		super(props);
		this.timer = null;
		this.color = 0;
	}

	componentDidMount() {
		const committees = ['acm', 'hack', 'studio', 'icpc', 'netsec', 'w', 'ai'];
		const el = document.querySelector('.banner');
		this.timer = setInterval(() => {
			el.classList.remove(committees[this.color]);
			this.color = (this.color + 1) % committees.length;
			el.classList.add(committees[this.color]);
			this.forceUpdate();
		}, 4000)
	}

	componentWillUnmount() {
		clearInterval(timer);
		timer = null;
	}

	render() {
		const sideCols = this.props.sideCols || 7;
		const height = this.props.height || 7;
		const width = this.props.width || 5;
		return (
			<div className="banner">
				<div className="square-col-container">
					{ generateCols(1, height, ['','','','','white','white','white']) }
					{ generateCols(1, height, ['','','','','','white','white']) }
					{ generateCols(1, height, ['','','','','','','white']) }
					{ generateCols(sideCols, height) }
					{ generateCols(1, height, ['','','white','white','','','']) }
					{ generateCols(width, height, ['','','white','white','white','','']) }
					{ generateCols(1, height, ['','','','white','white','','']) }
					{ generateCols(sideCols, height) }
					{ generateCols(1, height, ['white','','','','','','']) }
					{ generateCols(1, height, ['white','white','','','','','']) }
					{ generateCols(1, height, ['white','white','white','','','','']) }

				</div>
				<div className="title">
					<h1>code the future.</h1>
				</div>
			</div>
		);
	}
}