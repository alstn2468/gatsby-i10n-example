import { createContext, useContext } from 'react';
import { graphql } from 'gatsby';

type Nullable<T> = T | null;
export type L10NContextType = Nullable<{
  messages: GatsbyTypes.TranslationDatas_allDatasFragment,
  t: (key: keyof GatsbyTypes.TranslationDatas_allDatasFragment) => string,
}>;

export const L10nContext = createContext<L10NContextType>(null);

export function getTranslationText(
  messages: GatsbyTypes.TranslationDatas_allDatasFragment,
  key: keyof GatsbyTypes.TranslationDatas_allDatasFragment,
) {
  return messages[key] ?? '⚠️⚠️⚠️';
}

export const useL10N = () => {
  const l10n = useContext(L10nContext);
  if (!l10n) {
    throw new Error('번역 데이터 리소스가 존재하지 않습니다.');
  }
  return l10n;
};

export const useTranslation = () => {
  const l10n = useL10N();
  return l10n.t;
};

export const fragments = graphql`
  fragment TranslationDatas on Query {
    translationData(language: { eq: $language }) {
      ...TranslationDatas_allDatas
    }
  }
`;
