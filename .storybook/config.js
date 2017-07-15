import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/hello.js');
  require('../stories/menu.js');
  require('../stories/header.js');
  require('../stories/search.js');
}

configure(loadStories, module);
