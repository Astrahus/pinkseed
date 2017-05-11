import test from 'ava';

import React from 'react';

import {shallow} from 'enzyme';

import Index from '../index.ios.js';

test('Composição da Index de iOS', t => {
  const indexWrapper = shallow(<Index />);

  t.is(indexWrapper.name(),'View');

});