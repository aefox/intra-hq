import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/hello.js');
  require('../stories/logo.js');
  require('../stories/search.js');
}

configure(loadStories, module);
