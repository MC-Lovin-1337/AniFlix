import PropTypes from 'prop-types';

function Aboutmetop({title, like1, like2}) {
	return (
		<div className="page-top bg-white">
			<div className="page-top__inner">
				<div className="title">
					<h2 className="title__text">{title}</h2>
					<div className="border">
						<span></span>
						<span></span>
					</div>
					<p className="title__lead">
						{like1}
						<br />
						{like2}
					</p>
				</div>
				<div className="image image__about"></div>
			</div>
		</div>
	);
}

Aboutmetop.propTypes = {
	like1: PropTypes.string,
	like2: PropTypes.string,
	title: PropTypes.string,
};
Aboutmetop.defaultProps = {
	like1: '',
	like2: '',
	title: '',
};

export default Aboutmetop;
