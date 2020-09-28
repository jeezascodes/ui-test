// import React from 'react';
// import Button from './index.js';
// import {withKnobs, text} from '@storybook/addon-knobs';
// export default {title: 'Button component', decorators: [withKnobs]};
// export const button = () => {
//   const message = text('Text', 'Click here now!');
//   return <Button message={message}></Button>;
// };

import React from 'react';
import {storiesOf} from '@storybook/react-native';

import Button from './index';

storiesOf('Button', module).add('example', () => <Button />);
