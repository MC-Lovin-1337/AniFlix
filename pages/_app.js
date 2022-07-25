import '../styles/globals.css';
import '@mdi/font/css/materialdesignicons.css';

import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';

import {Layout} from '../components';

function MyApp({Component, pageProps}) {
	return (
		<Layout>
			<Head>
				<title>SVEN EBERT PORTFOLIO</title>
				<meta content="Einfache digitale Lösungen." name="description" />
				<meta content="javascript, react, next.js, graphql, software, entwicklung, telematik" name="keywords" />
				<link href="/manifest.webmanifest" rel="manifest" />
				<link href="/favicon.ico" rel="icon" />
				<link href="/icon.svg" rel="icon" type="image/svg+xml" />
				<link href="/apple-touch-icon.png" rel="apple-touch-icon" />
			</Head>
			<Component {...pageProps} />
		</Layout>
	);
}

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	pageProps: PropTypes.object.isRequired,
};

export default MyApp;
