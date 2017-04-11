import { configure } from '@kadira/storybook';

function loadStories() {
  require('../src/components/Navigation/stories');
}

configure(loadStories, module);
