import * as React from 'react';
import * as O from 'fp-ts/lib/Option';
import { graphql } from 'gatsby';
import { pipe, constNull } from 'fp-ts/lib/function';

import { getTranslationText, L10nContext } from '~/src/context/L10nContext';
import Title from '~/src/components/Title';
import Description from '~/src/components/Description';
import type { L10NContextType } from '~/src/context/L10nContext';

import type { PageProps } from 'gatsby';

type PageContext = { language: string };
type Props = PageProps<GatsbyTypes.LocalizedIndexPageQuery, PageContext, unknown>;

const getL10nValue = (
  data: GatsbyTypes.LocalizedIndexPageQuery,
  t: typeof getTranslationText,
) => pipe(
  data?.translationData,
  O.fromNullable,
  O.match(
    constNull,
    (data) => ({ messages: data, t: (key) => t(data, key) }) as L10NContextType,
  ),
);

const LocalizedIndexPage: React.FC<Props> = ({
  data,
}) => {
  const l10n = React.useMemo<L10NContextType>(
    () => getL10nValue(data, getTranslationText),
    [data],
  );
  return (
    <L10nContext.Provider value={l10n}>
      <Title />
      <Description />
    </L10nContext.Provider>
  );
};

export default LocalizedIndexPage;

export const query = graphql`
  query LocalizedIndexPage($language: String!) {
    ...TranslationDatas
  }
`;
