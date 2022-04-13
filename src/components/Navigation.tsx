import * as React from 'react';
import { graphql, Link } from 'gatsby';

type Props = {
  languages: string[],
};

const Navigation = ({ languages }: Props) => {
  return (
    <nav>
      <ul>
        {languages.map((language) => (
          <li key={language}>
            <Link to={`/${language}/`}>
              {language}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;

export const fragments = graphql`
  fragment NavigationFragment on TranslationDataConnection {
    nodes {
      language
    }
  }
`;
