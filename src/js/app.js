import Popover from './components/popover.js';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('#ComponentContainer');
  const widget = new Popover(container, {
    title: 'Some title',
    content: 'lorem ipsum ... ',
  });
  widget.bindToDOM();
});
