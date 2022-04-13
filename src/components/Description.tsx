import * as React from 'react';

import { useTranslation } from '~/src/context/L10nContext';

const Description = () => {
  const t = useTranslation();
  return (
    <p>{t('description')}</p>
  );
};

export default Description;
