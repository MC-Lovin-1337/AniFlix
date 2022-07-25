import PropTypes from 'prop-types';
import React from 'react';

function Layout({children}) {
	return (
		<>
			{children}
			<p className="scrollDown">SCROLLDOWN</p>
		</>
	);
}

Layout.propTypes = {
	children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
};

Layout.defaultProps = {};

export default Layout;
