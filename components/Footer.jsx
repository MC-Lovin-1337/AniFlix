import PropTypes from 'prop-types';

function Footer({title, subtitle}) {
	return (
		<div>
			<div className="footer">
				<a>{title}</a>
				<a>{subtitle}</a>
			</div>
		</div>
	);
}

Footer.propTypes = {
	subtitle: PropTypes.string,
	title: PropTypes.string,
};
Footer.defaultProps = {
	subtitle: '',
	title: '',
};

export default Footer;
