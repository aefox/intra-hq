import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/hello.js');
}

configure(loadStories, module);
