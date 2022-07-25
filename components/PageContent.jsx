import PropTypes from 'prop-types';

import {About, Aboutme1, Aboutme2, Aboutme3, Aboutmetop, Contact, Contacttop, Footer, Form, Hero, Navigation} from '.';

function PageContent({components, isHome, socialmedias}) {
	const renderComponent = (component) => {
		// eslint-disable-next-line no-underscore-dangle
		switch (component.__typename) {
			case 'Navigation':
				return (
					<Navigation
						isHome={isHome}
						key={component.id}
						navigation={component.navigation}
						number={component.number}
						socialmedia={socialmedias}
						title={component.title}
					/>
				);
			case 'Hero':
				return (
					<Hero
						job1={component.job1}
						job2={component.job2}
						key={component.id}
						nachname={component.nachname}
						portfolio={component.portfolio}
						vorname={component.vorname}
					/>
				);
			case 'About':
				return (
					<About
						anchor={component.anchor}
						key={component.id}
						like1={component.like1}
						like2={component.like2}
						more={component.more}
						number={component.number}
						title={component.title}
					/>
				);
			case 'Contact':
				return (
					<Contact
						anchor={component.anchor}
						key={component.id}
						more={component.more}
						number={component.number}
						socialmedia={socialmedias}
						title={component.title}
					/>
				);
			case 'Aboutmetop':
				return <Aboutmetop like1={component.like1} like2={component.like2} title={component.title} />;
			case 'Footer':
				return <Footer key={component.id} subtitle={component.subtitle} title={component.title} />;
			case 'Aboutme1':
				return (
					<Aboutme1
						key={component.id}
						name={component.name}
						number={component.number}
						photo={component.photo}
						text1={component.text1}
						text2={component.text2}
						whoiam={component.whoiam}
					/>
				);
			case 'Aboutme2':
				return (
					<Aboutme2
						aboutpassion={component.passion}
						key={component.id}
						number={component.number}
						title={component.title}
					/>
				);
			case 'Aboutme3':
				return (
					<Aboutme3
						aboutskill={component.skills}
						key={component.id}
						number={component.number}
						title={component.title}
					/>
				);
			case 'Form':
				return (
					<Form
						contactinfo={component.contactinfo}
						email={component.email}
						fehlermeldung={component.fehlermeldung}
						info={component.info}
						key={component.id}
						ohnefehler={component.ohnefehler}
						senden={component.senden}
						socialmedia={socialmedias}
						telefon={component.telefon}
						title={component.title}
						title2={component.title2}
					/>
				);
			case 'Contacttop':
				return <Contacttop socialmedia={socialmedias} title={component.title} />;
			default:
				return null;
		}
	};
	return <div>{components.map((component) => renderComponent(component))}</div>;
}

PageContent.propTypes = {
	components: PropTypes.array.isRequired,
	isHome: PropTypes.bool,
	socialmedias: PropTypes.array,
};

PageContent.defaultProps = {
	components: {},
	isHome: false,
	socialmedia: [],
};

export default PageContent;
