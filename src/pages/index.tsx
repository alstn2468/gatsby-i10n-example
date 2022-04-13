import * as React from 'react';
import * as A from 'fp-ts/lib/Array';
import { graphql } from 'gatsby';
import { pipe } from 'fp-ts/lib/function';

import { useLanguageNavigateEffect } from '~/src/utils/useLanguageNavigationEffect';

import type { PageProps } from 'gatsby';

type PageQueryData = { allTranslationData: { nodes: TranslationData[] } };
type IndexPageProps = PageProps<PageQueryData>;

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  const languages = pipe(
    data.allTranslationData.nodes,
    A.map((node) => node.language),
  );

  useLanguageNavigateEffect(languages);

  return null;
};

export default IndexPage;

export const query = graphql`
  query IndexPage {
    allTranslationData {
      nodes {
        language
      }
    }
  }
`;
