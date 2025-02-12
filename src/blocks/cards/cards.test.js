import {
  describe, it, expect, beforeEach,
} from 'vitest';
import decorate from './cards.js';

describe('Card', () => {
  let container;

  beforeEach(() => {
    document.body.innerHTML = '<div id="content"></div>';
    container = document.getElementById('content');
  });

  it('Should be able to apply listing to a card', () => {
    const item = `<div id="shady" data-aue-resource="urn:aemconnection:/content/doe-experimentation/index/jcr:content/root/section_50055192/block"
         data-aue-type="container" data-aue-behavior="component" data-aue-label="Cards" data-aue-filter="cards"
         class="cards">
        <div data-aue-resource="urn:aemconnection:/content/doe-experimentation/index/jcr:content/root/section_50055192/block/item"
             data-aue-type="component" data-aue-model="card" data-aue-label="Card">

            <div></div>

            <div>
                <h1 data-richtext-prop="text" data-richtext-label="text" data-richtext-filter="text"><a
                        href="www.google.com">Shady Header</a></h1>
                <p data-richtext-prop="text" data-richtext-label="text" data-richtext-filter="text">
                    Shady content
                </p>
            </div>

        </div>
    </div>`;

    container.insertAdjacentHTML('beforeend', item);

    const shady = document.getElementById('shady');

    decorate(shady);

    expect(shady.innerHTML.trim()).toBe('');
  });
});
