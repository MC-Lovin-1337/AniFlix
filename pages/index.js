import Head from 'next/head';
import PropTypes from 'prop-types';

import PageContent from '../components/PageContent';
import {getPageContent} from '../lib/api';

export default function Home({page, socialmedias}) {
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
			<PageContent components={page.components} isHome socialmedias={socialmedias} />
			<div className="moon-background">
				<div className="moonlight">
					<div className="moonlight__wrap js-parallax-moonlight">
						<div className="layer moonlight__img" data-depth="0.2"></div>
					</div>
				</div>
			</div>
			<div className="star js-parallax-star">
				<div className="layer" data-depth="0.1">
					<div className="star__img">
						<img src="/img/star.svg" />
					</div>
				</div>
			</div>
			<div className="sky-color"></div>
		</>
	);
}

// Fetch data at build time
export async function getStaticProps() {
	const content = (await getPageContent('index')) || [];
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
