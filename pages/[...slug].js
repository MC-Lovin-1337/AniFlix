import Head from 'next/head';
import PropTypes from 'prop-types';

import PageContent from '../components/PageContent';
import {getPageContent, getPageSlugs} from '../lib/api';

export default function Home({page, socialmedias}) {
	if (!page) return null;
	return (
		<>
			<Head>
				{page.metatitle && (
					<>
						<meta content={page.metatitle} key="title" property="og:title" />
						<title>{page.metatitle}</title>
					</>
				)}

				{page.metakeywords && <meta content={page.metakeywords} name="keywords" />}

				{page.metadescription && (
					<>
						<meta content={page.metadescription} key="og:description" property="og:description" />
						<meta content={page.metadescription} key="description" property="description" />
					</>
				)}
				{page.metaimage && <meta content={page.metaimage.url} key="image" property="og:image" />}
			</Head>
			<PageContent components={page.components} socialmedias={socialmedias} />
		</>
	);
}

// Fetch data at build time
export async function getStaticPaths() {
	const pages = (await getPageSlugs()) || [];
	return {
		paths: pages
			.filter((page) => page !== 'index')
			.map((page) => ({
				params: {slug: page.slug.split('/')},
			})),
		fallback: true,
	};
}

// Fetch data at build time
export async function getStaticProps(context) {
	const content = (await getPageContent(context.params.slug)) || [];
	return {
		props: {page: content.page, socialmedias: content.socialmedias},
	};
}

Home.propTypes = {
	page: PropTypes.shape({
		components: PropTypes.array,
		metatitle: PropTypes.string,
		metakeywords: PropTypes.string,
		metadescription: PropTypes.string,
		metaimage: PropTypes.shape({
			url: PropTypes.string,
		}),
	}).isRequired,
	socialmedias: PropTypes.objectOf,
};
