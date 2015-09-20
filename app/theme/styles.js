import { makeStyles } from 'reapp-kit';
const requirer = name => require(`./styles/${name}`);

// override default component styles

export default makeStyles(requirer, [
  'Button',
  'Input',
  'List',
  'ListItem',
  'TextArea',
  'View'
]);
