import test from 'ava';
import React from 'react';
import {shallow, mount} from 'enzyme';

import Index from '../index.android.js';


test('Composição da Index de android', t => {
  const indexWrapper = shallow(<Index />);

  t.is(indexWrapper.name(),'View');

});