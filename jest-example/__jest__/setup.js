import { configure } from 'enzyme'; // eslint-disable-line
import Adapter from 'enzyme-adapter-react-15'; // eslint-disable-line

// alternative to webpack provide plugin
window.React = require('react');

configure({ adapter: new Adapter(), disableLifecycleMethods: true });
