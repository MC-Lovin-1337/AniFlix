import Link from 'next/link';
import PropTypes from 'prop-types';

function About({title, like1, like2, more, number, anchor}) {
	return (
		<div className="snap-start snap-always h-screen" id={anchor}>
			<main className="h-full w-full">
				<div className="h-full w-full relative">
					<div className="title">
						<h2 className="title__text">{title}</h2>
						<div className="border">
							<span></span>
							<span className=""></span>
						</div>
						<p className="title__lead">
							{like1}
							<br />
							{like2}
						</p>
						<div className="btn-wrap">
							<Link href="/aboutme" passHref>
								<a className="btn">{more}</a>
							</Link>
						</div>
					</div>
					<a className="image image--about" href="about.html">
						<div className="image__over">
							<div className="image__cover"></div>
							<div className="image__cover"></div>
						</div>
						<div className="page-num">
							<p>{number}</p>
						</div>
					</a>
				</div>
			</main>
		</div>
	);
}

About.propTypes = {
	anchor: PropTypes.string,
	like1: PropTypes.string,
	like2: PropTypes.string,
	more: PropTypes.string,
	number: PropTypes.number,
	title: PropTypes.string,
};
About.defaultProps = {
	anchor: '',
	like1: '',
	like2: '',
	more: '',
	number: '',
	title: '',
};

export default About;
