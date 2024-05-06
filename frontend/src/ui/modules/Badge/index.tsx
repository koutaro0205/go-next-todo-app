import React from 'react';

import { IconName } from '@/constants/icon';
import { Icon } from '@/ui/atoms/Icon';
import { Link } from '@/ui/atoms/Link';
import { Text } from '@/ui/atoms/Text';

import { styles } from './style.css';

type Props = {
  text: string;
  iconName?: IconName;
};

// FIXME: Sizeを変えられるようにする
// paddingInline, fontSize, heightをそれぞれ一回り小さくする
export const Badge: React.FC<Props> = React.memo(({ text, iconName }) => {
  return (
    <Link href="/" className={styles}>
      {iconName && <Icon name={iconName} />}
      <Text>{text}</Text>
    </Link>
  );
});
