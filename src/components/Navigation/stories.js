import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Navigation from './';

storiesOf('Navigation', module)
  .add('default', () => (
    <Navigation />
  ));
