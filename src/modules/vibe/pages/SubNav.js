import React from 'react';
import { SubNavigation } from '../../../setup/components';

const NAV = [
  {
    name: 'Sub Navigation',
    url: '/pages/subnav'
  },
  {
    name: 'Messages',
    url: '/#'
  }
];

export default function SubNav() {
  return <SubNavigation navList={NAV} />;
}
