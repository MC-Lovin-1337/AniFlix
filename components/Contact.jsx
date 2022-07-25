import Link from 'next/link';
import PropTypes from 'prop-types';

function Contact({title, number, more, anchor, socialmedia}) {
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
						<Link href="/contact" passHref>
							<div className="btn-wrap cursor-pointer">
								<a className="btn">{more}</a>
							</div>
						</Link>
					</div>
					<Link href="/contact" passHref>
						<a className="image image--contact">
							<div className="image__over">
								<div className="image__cover"></div>
								<div className="image__cover"></div>
							</div>
							<div className="page-num">
								<p>{number}</p>
							</div>
						</a>
					</Link>
				</div>
			</main>
		</div>
	);
}

Contact.propTypes = {
	anchor: PropTypes.string,
	more: PropTypes.string,
	number: PropTypes.number,
	socialmedia: PropTypes.array,
	title: PropTypes.string,
};
Contact.defaultProps = {
	anchor: '',
	more: '',
	number: '',
	socialmedia: '',
	title: '',
};

export default Contact;
