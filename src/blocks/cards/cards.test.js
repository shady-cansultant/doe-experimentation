import {
  describe, it, expect, beforeEach,
} from 'vitest';
import decorate from './cards.js';

function parseHTML(htmlString) {
  return new DOMParser().parseFromString(htmlString, 'text/html').body.firstChild;
}

function normalizeDOM(node) {
  if (!node) return null;

  // Clone to avoid modifying original DOM
  const clone = node.cloneNode(true);

  // Recursively trim text nodes
  const walker = document.createTreeWalker(clone, NodeFilter.SHOW_TEXT, null);
  let textNode;
  while ((textNode = walker.nextNode())) {
    textNode.nodeValue = textNode.nodeValue.trim();
  }

  // Sort attributes to ensure they are compared in the same order
  function sortAttributes(el) {
    if (el.nodeType === 1) {
      const attrs = Array.from(el.attributes)
        .sort((a, b) => a.name.localeCompare(b.name));

      // Remove all attributes and re-add them in sorted order
      for (const attr of attrs) {
        el.removeAttribute(attr.name);
      }
      for (const attr of attrs) {
        el.setAttribute(attr.name, attr.value.trim());
      }
    }
    Array.from(el.children).forEach(sortAttributes);
  }

  sortAttributes(clone);

  return clone;
}

describe('Card', () => {
  let container;

  beforeEach(() => {
    document.body.innerHTML = '<div id="content"></div>';
    container = document.getElementById('content');
  });

  it('Should be able to apply listing to a card', () => {
    const starting = `<div id="shady" data-aue-resource="urn:aemconnection:/content/doe-experimentation/index/jcr:content/root/section_50055192/block"
         data-aue-type="container" data-aue-behavior="component" data-aue-label="Cards" data-aue-filter="cards"
         class="cards">
        <div data-aue-resource="urn:aemconnection:/content/doe-experimentation/index/jcr:content/root/section_50055192/block/item"
             data-aue-type="component" data-aue-model="card" data-aue-label="Card">

            <div></div>

            <div>
                <h1 data-richtext-prop="text" data-richtext-label="text" data-richtext-filter="text"><a
                        href="www.google.com">Shady Header</a></h1>
                <p data-richtext-prop="text" data-richtext-label="text" data-richtext-filter="text">Shady content</p>
            </div>

        </div>
    </div>`;

    const expected = parseHTML(`
     <div class="cards" data-aue-behavior="component" data-aue-filter="cards" data-aue-label="Cards" data-aue-resource="urn:aemconnection:/content/doe-experimentation/index/jcr:content/root/section_50055192/block" data-aue-type="container" id="shady">
      <ul>
          <li class="nsw-card nsw-card--dark" 
          data-aue-resource="urn:aemconnection:/content/doe-experimentation/index/jcr:content/root/section_50055192/block/item" 
          data-aue-type="component" data-aue-model="card" data-aue-label="Card">
              <div class="nsw-card__content">
                  <div data-richtext-prop="text" data-richtext-label="text" data-richtext-filter="text">
                      <div class="nsw-card__title">
                          <p><a href="www.google.com">Shady Header</a></p>
                      </div>
                      
                      <div class="nsw-card__copy">
                          <p>Shady content</p>
                      </div>
                  </div>
                  
                  <span class="material-icons nsw-material-icons" focusable="false" aria-hidden="true">east</span>
              </div>
          </li>
      </ul>
    </div>`);

    container.insertAdjacentHTML('beforeend', starting);
    const insertedBlock = container.children[0];

    // Apply the decoration
    decorate(insertedBlock);

    const startingNormalised = normalizeDOM(parseHTML(insertedBlock.outerHTML)).outerHTML;
    const expectedNormalised = normalizeDOM(expected).outerHTML;

    expect(startingNormalised).toBe(expectedNormalised);
  });
});
