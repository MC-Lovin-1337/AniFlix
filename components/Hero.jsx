import PropTypes from 'prop-types';

function Hero({vorname, nachname, job1, job2, portfolio}) {
	return (
		<div className="snap-start snap-always h-screen">
			<main className="h-full w-full">
				<div className="h-full w-full relative">
					<div className="title">
						<h1 className="title__text">
							{vorname}
							<br />
							{nachname}
						</h1>
						<div className="border">
							<span></span>
							<span className=""></span>
						</div>
						<p className="title__lead">
							{job1} <br />
							{job2}
						</p>
					</div>
				</div>
			</main>
			<div className="moon">
				<div className="moon__img">
					<div className="moon__front layer">
						<div className="moon__text-wrap">
							<p className="moon__text">{portfolio}</p>
						</div>
					</div>
					<div className="moon__front layer">
						<div className="cloud cloud--front1">
							<img alt="cloud" src="/img/cloud1.svg" />
						</div>
					</div>
					<div className="moon__back layer">
						<div className="cloud cloud--back2">
							<img alt="cloud" src="/img/b_cloud02.svg" />
						</div>
					</div>
					<div className="moon__front layer">
						<div className="cloud cloud--front2">
							<img alt="cloud" src="/img/cloud2.svg" />
						</div>
					</div>
					<div className="moon__back layer">
						<img alt="moon" className="" src="/img/moon.svg" />
					</div>
					<div className="moon__front layer">
						<div className="cloud cloud--front3">
							<img alt="cloud" src="/img/cloud3.svg" />
						</div>
					</div>
					<div className="moon__back layer">
						<div className="cloud cloud--back1">
							<img alt="cloud" src="/img/b_cloud01.svg" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

Hero.propTypes = {
	job1: PropTypes.string,
	job2: PropTypes.string,
	nachname: PropTypes.string,
	portfolio: PropTypes.string,
	vorname: PropTypes.string,
};
Hero.defaultProps = {
	job1: '',
	job2: '',
	nachname: '',
	portfolio: '',
	vorname: '',
};

export default Hero;
