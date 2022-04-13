import type { GatsbyConfig, IPluginRefObject } from 'gatsby';
import type { PluginOptions as TypegenPlugionOptions } from 'gatsby-plugin-typegen/types';
import type { PluginOptions as ModuleResolverOptions } from 'gatsby-plugin-module-resolver/types';

type OverrideProps<TBaseProps, TNewProps> = Omit<TBaseProps, keyof TNewProps> &
TNewProps;

const publicURL = new URL(process.env.PUBLIC_URL || '');

type PluginRef<Resolve extends string, Options = unknown> = OverrideProps<
IPluginRefObject,
{
  resolve: Resolve,
  options: Options,
}
>;

type PluginConfig =
  | string
  | PluginRef<'gatsby-plugin-manifest'>
  | PluginRef<'gatsby-plugin-typegen', TypegenPlugionOptions>
  | PluginRef<'gatsby-plugin-module-resolver', ModuleResolverOptions>;

export const siteMetadata: GatsbyConfig['siteMetadata'] = {
  siteUrl: publicURL.origin,
  title: 'gatsby-l10n-example',
  description: 'gatsby-l10n-example',
};

export const pathPrefix: GatsbyConfig['pathPrefix'] = '/gatsby-l10n-example';

export const plugins: PluginConfig[] = [
  'gatsby-plugin-svgr',
  {
    resolve: 'gatsby-plugin-module-resolver',
    options: {
      root: './',
      aliases: {
        '~': '.',
      },
    },
  },
  {
    resolve: 'gatsby-plugin-typegen',
    options: {
      emitSchema: {
        'src/__generated__/gatsby-schema.graphql': true,
        'src/__generated__/gatsby-schema.json': true,
      },
      emitPluginDocuments: {
        'src/__generated__/gatsby-plugin-documents.graphql': true,
      },
    },
  },
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: 'create-devsisters-app',
      short_name: 'create-devsisters-app',
      description: 'create-devsisters-app',
      start_url: '/',
      lang: 'ko',
      background_color: '#FFFFFF',
      theme_color: '#FFFFFF',
      display: 'minimal-ui',
      icon: 'src/images/icon.svg',
    },
  },
];
