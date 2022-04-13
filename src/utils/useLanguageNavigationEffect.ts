import { navigate } from 'gatsby';
import { useEffect } from 'react';
import { findFirst } from 'fp-ts/lib/Array';
import { identity, pipe } from 'fp-ts/lib/function';
import { match, fromNullable } from 'fp-ts/lib/Option';

const getDefaultLanguageOrElse = (defaultLanguage?: string) => pipe(
  defaultLanguage,
  fromNullable,
  match(
    () => 'ko',
    identity,
  ),
);

const getTargetLanguages = (
  languages: string[],
  navigatorLanguage: string,
  defaultLanguage?: string,
) => pipe(
  languages,
  findFirst((lang: string) => lang.startsWith(navigatorLanguage)),
  match(
    () => getDefaultLanguageOrElse(defaultLanguage),
    identity,
  ),
);

export function useLanguageNavigateEffect(languages: string[]) {
  useEffect(() => {
    const [navigatorLanguage] = window.navigator.language.split('-');
    const targetLanguage = getTargetLanguages(languages, navigatorLanguage);

    void navigate(`/${targetLanguage}/`, { replace: true });
  }, [languages]);
}
