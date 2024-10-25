import Popover from './components/popover';

test('creating component', () => {
  document.body.innerHTML = `<div id="ComponentContainer">
  <button class="pop_btn"> Click to toggle popover</button>
  </div>`;
  const container = document.querySelector('#ComponentContainer');
  const widget = new Popover(container, { title: 'testTitle', content: 'TestContent' });
  widget.bindToDOM();
  expect(widget.title).toEqual('testTitle');
  expect(widget.content).toEqual('TestContent');
});

test('click on button should open and close popover ', () => {
  document.body.innerHTML = `<div id="ComponentContainer">
  <button class="pop_btn"> Click to toggle popover</button>
  </div>`;
  const container = document.querySelector('#ComponentContainer');
  const widget = new Popover(container, { title: '', content: '' });
  widget.bindToDOM();
  const myButton = container.querySelector('.pop_btn');
  myButton.click(); 
  expect(widget.visible).toBe(true);
  myButton.click();
  expect(widget.visible).toBe(false);
});

