import { configure } from '@storybook/react';

function loadStories() {
    require('../stories/hello.js');
    require('../stories/myComponent.js');
}

configure(loadStories, module);