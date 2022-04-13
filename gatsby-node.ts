// eslint-disable-next-line import/no-nodejs-modules
import * as path from 'path';
// eslint-disable-next-line import/no-nodejs-modules
import * as fs from 'fs';

import { identity, pipe } from 'fp-ts/lib/function';
import * as A from 'fp-ts/lib/Array';
import * as O from 'fp-ts/lib/Option';
import * as TE from 'fp-ts/lib/TaskEither';
import * as S from 'fp-ts/lib/string';

import koTranslationData from './src/data/ko';
import enTranslationData from './src/data/en';
import jaTranslationData from './src/data/ja';

import type { GatsbyNode, Actions } from 'gatsby';

const gql = String.raw;

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] = ({
  actions: { createTypes },
}) => {
  const typeDef = gql`
    type TranslationData implements Node @dontInfer {
      language: String!,
      title: String!,
      description: String!,
    }
  `;
  createTypes(typeDef);
};

const createTranslationDataNode = (
  createNode: Actions['createNode'],
  createNodeId: (input: string) => string,
  createContentDigest: (input: string | Record<string, unknown>) => string,
) => (
  translationData: TranslationData,
) => {
  createNode({
    ...translationData,
    id: createNodeId(translationData.language),
    internal: {
      type: 'TranslationData',
      content: JSON.stringify(translationData),
      contentDigest: createContentDigest(translationData),
    },
  });
  return translationData;
};

const renderTextFragments = (fields: string[]) =>
  pipe(
    fields,
    A.reduce<string, string>(
      'fragment TranslationDatas_allDatas on TranslationData {',
      (a, b) => `${a}\n${b}`,
    ),
    (fragment) => S.Semigroup.concat(fragment, '\n}'),
  );

const writeTranslationsFragmentFile = (
  textFields: string[],
) => {
  void fs.writeFileSync(
    path.resolve('src/__generated__', 'allTranslationsFragment.js'),
    '/* eslint-disable */' +
    '\n' +
    'import { graphql } from \'gatsby\';' +
    '\n' +
    'export const fragments = graphql`' +
    '\n' +
    `${textFields.length > 0 ? renderTextFragments(textFields) : ''}` +
    '`;',
    'utf8',
  );
};

const getTranslationDataKey = (translationData: TranslationData) => Object.keys(translationData);

export const sourceNodes: GatsbyNode['sourceNodes'] = ({
  actions: { createNode },
  createNodeId,
  createContentDigest,
}) => {
  const translationDatas = [
    koTranslationData,
    enTranslationData,
    jaTranslationData,
  ];
  pipe(
    translationDatas,
    A.map(
      createTranslationDataNode(
        createNode,
        createNodeId,
        createContentDigest,
      ),
    ),
    A.last,
    O.match(
      () => [],
      getTranslationDataKey,
    ),
    writeTranslationsFragmentFile,
  );
};

type QueryResult = { allTranslationData: { nodes: TranslationData[]  } };

const exitProcess = <E>(e: E) => (console.error(e), process.exit(1));

const getTranslationDataNode = (response: { data?: QueryResult }) => pipe(
  response.data?.allTranslationData.nodes,
  O.fromNullable,
  O.match(
    () => [],
    identity,
  ),
);

const createLocalizedPage = (createPage: Actions['createPage'], component: string) =>
  (translationData: TranslationData) =>
    createPage({
      path: `/${translationData.language}/`,
      component,
      context: {
        language: translationData.language,
      },
    });

export const createPages: GatsbyNode['createPages'] = async ({
  actions: { createPage },
  graphql,
}) => {
  const translationDataQuery = gql`
    query translationDatas {
      allTranslationData {
        nodes {
          language
        }
      }
    }
  `;

  const translationDataNodes = await pipe(
    TE.tryCatch(
      () => graphql<QueryResult>(translationDataQuery),
      identity,
    ),
    TE.match(
      exitProcess,
      getTranslationDataNode,
    ),
  )();

  pipe(
    translationDataNodes,
    A.map(
      createLocalizedPage(
        createPage,
        path.resolve('./src/templates/index.tsx'),
      ),
    ),
  );
};
