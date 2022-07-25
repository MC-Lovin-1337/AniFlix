import {gql, request} from 'graphql-request';

const graphqlAPI = process.env.GRAPHCMS_ENDPOINT;

export const getPageSlugs = async () => {
	const query = gql`
		query getPageSlugs {
			pages {
				slug
			}
		}
	`;
	const result = await request(graphqlAPI, query);

	return result.pages;
};

export const getPageContent = async (slug) => {
	const query = gql`
    query getPageContent {
      page(where: { slug: "${slug}" }) {
    components {
      __typename
      ... on About {
        id
        anchor
        like1
        like2
        more
        number
        title
      }
      ... on Aboutme1 {
        id
        name
        number
        photo {
          url
        }
        text1
        text2
        whoiam
      }
      ... on Aboutmetop {
        id
        like1
        like2
        title
      }
      ... on Contact {
        id
        anchor
        github
        more
        number
        title
        twitter
      }
      ... on Footer {
        id
        subtitle
        title
      }
      ... on Hero {
        id
        job1
        job2
        nachname
        number
        portfolio
        vorname
      }
      ... on Navigation {
        id
        navigation
        title
        twitter
        github
      }
      ... on Aboutme2 {
        id
        number
        title
        passion {
          ... on Aboutpassion {
            id
            title
            text
            photo {
              url
            }
          }
        }
      }
      ... on Aboutme3 {
        id
        number
        title
        skills {
          sprache
          wielange
          prozent
          photo {
            url
          }
        }
      }
      ... on Contacttop {
        id
        github
        title
        twitter
      }
      ... on Form {
        id
        email
        contactinfo
        info
        senden
        telefon
        title
        fehlermeldung
        ohnefehler
        title2 {
          html
        }
      }
    }
  }
  socialmedias {
    title
    id
    link
  }
}









  `;
	const result = await request(graphqlAPI, query);

	return result;
};
