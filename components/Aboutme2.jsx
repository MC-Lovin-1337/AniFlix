import PropTypes from 'prop-types';

function Aboutme2({number, title, aboutpassion}) {
	return (
		<div className="wrapper bg-white">
			<div className="passion ">
				<div className="text">
					<p className="heading-num">{number}</p>
					<div className="text__wrap content ">
						<h2 className="heading">{title}</h2>
					</div>
				</div>
				<div className="content content--mlarge">
					<ul className="passion__list">
						{aboutpassion.map((leidenschaft) => (
							<li className="passion__item" key={leidenschaft.id}>
								<div className="passion__image">
									<img alt="design" src={leidenschaft.photo.url} />
								</div>
								<h3 className="sub-title">{leidenschaft.title}</h3>
								<p className="passion__text">{leidenschaft.text}</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}

Aboutme2.propTypes = {
	aboutpassion: PropTypes.string,
	number: PropTypes.number,
	title: PropTypes.string,
};
Aboutme2.defaultProps = {
	aboutpassion: '',
	number: '',
	title: '',
};

export default Aboutme2;
