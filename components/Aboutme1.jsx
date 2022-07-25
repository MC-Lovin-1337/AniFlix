import Image from 'next/image';
import PropTypes from 'prop-types';

function Aboutme1({number, whoiam, name, text1, text2, photo}) {
	return (
		<div className="wrapper bg-white">
			<div className="who">
				<div className="text text--top">
					<p className="heading-num">{number}</p>
					<div className="text__wrap text__wrap--top content ">
						<h2 className="heading heading--top">{whoiam}</h2>
						<div className="who__wrap">
							<div className="who__name">
								<p className="who__en">{name}</p>
							</div>
							<p className="who__text">
								{text1}
								<br />
								{text2}
							</p>
							<div className="who__image">
								<Image alt="Sven Ebert" height={100} layout="responsive" src={photo.url} width={100} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

Aboutme1.propTypes = {
	name: PropTypes.string,
	number: PropTypes.number,
	photo: PropTypes.object,
	text1: PropTypes.string,
	text2: PropTypes.string,
	whoiam: PropTypes.string,
};
Aboutme1.defaultProps = {
	name: '',
	number: '',
	photo: '',
	text1: '',
	text2: '',
	whoiam: '',
};

export default Aboutme1;
