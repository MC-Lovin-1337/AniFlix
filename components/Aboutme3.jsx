import PropTypes from 'prop-types';

function Aboutme3({number, title, aboutskill}) {
	return (
		<div>
			<div className="skill-set bg-white">
				<div className="text">
					<p className="heading-num">{number}</p>
					<div className="text__wrap content">
						<h2 className="heading">{title}</h2>
					</div>
				</div>
				<div className="content content--mlarge skill-set__flex">
					<ul className="skill-set__list">
						{aboutskill.map((test) => (
							<>
								<li className="skill-set__item">
									<div className="skill-set__icon" key={test.id}>
										<img alt="Javascript" src={test.photo.url} />
									</div>
									<div className="skill-set__detail">
										<div className="skill-set__meta">
											<div className="skill-set__name">
												<h4 className="small-title small-title--skill">{test.sprache}</h4>
												<p className="skill-set__year">{test.wielange}</p>
											</div>
											<p className="small-title small-title--skill">
												{test.prozent}
												<span className="skill-set__ratio">%</span>
											</p>
										</div>
										<div className="skill-set__bar js-scroll">
											<div className="bar-outer" style={{width: `${test.prozent}%`}}>
												<div className="bar-inner"></div>
											</div>
										</div>
									</div>
								</li>
							</>
						))}
						<div className="mt-60"></div>
					</ul>
				</div>
			</div>
		</div>
	);
}

Aboutme3.propTypes = {
	aboutskill: PropTypes.array,
	number: PropTypes.number,
	title: PropTypes.string,
};
Aboutme3.defaultProps = {
	aboutskill: [],
	number: '',
	title: '',
};

export default Aboutme3;
