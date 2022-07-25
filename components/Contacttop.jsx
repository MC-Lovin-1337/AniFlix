import Link from 'next/link';
import PropTypes from 'prop-types';

function Contacttop({title, socialmedia}) {
	return (
		<div className="page-top bg-white">
			<div className="page-top__inner">
				<div className="title">
					<h2 className="title__text">{title}</h2>
					<div className="border">
						<span></span>
						<span className=""></span>
					</div>
					<p className="title__lead">
						<ul>
							<li className="js-letter">Placeholder</li>
							<li className="js-letter">
								{socialmedia.map((social) => (
									<Link href={social.link} key={social.id} passHref>
										<a className="text-4xl py-14 text-white hover:opacity-50" target="_blank">
											<span className={`mdi mdi-${social.title}`} />
										</a>
									</Link>
								))}
							</li>
						</ul>
					</p>
				</div>
				<div className="image image__contact"></div>
			</div>
		</div>
	);
}

Contacttop.propTypes = {
	github: PropTypes.string,
	socialmedia: PropTypes.array,
	title: PropTypes.string,
	twitter: PropTypes.string,
};
Contacttop.defaultProps = {
	github: '',
	socialmedia: '',
	title: '',
	twitter: '',
};

export default Contacttop;
