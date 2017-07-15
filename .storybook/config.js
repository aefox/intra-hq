import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/hello.js');
  require('../stories/menu.js');
}

configure(loadStories, module);
