import * as React from 'react';

import { useTranslation } from '~/src/context/L10nContext';

const Title = () => {
  const t = useTranslation();
  return (
    <h1>{t('title')}</h1>
  );
};

export default Title;
