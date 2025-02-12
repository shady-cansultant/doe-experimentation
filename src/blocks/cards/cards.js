import 'nsw-design-system/src/components/card/_card.scss';
import './cards.css';

import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  /* change to ul, li */
  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    li.classList.add('nsw-card', 'nsw-card--dark');
    moveInstrumentation(row, li);
    while (row.firstElementChild) li.append(row.firstElementChild);
    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) div.className = 'nsw-card__image';
      else if (div.children.length > 0) {
        div.className = 'nsw-card__content';

        let titleDiv;
        const header = div.querySelector(':is(h1,h2,h3,h4,h5,h6)');
        if (header) {
          titleDiv = document.createElement('div');
          titleDiv.className = 'nsw-card__title';

          if (header.querySelector('a')) {
            // unwrap the header
            const a = header.querySelector('a');
            const p = document.createElement('p');
            moveInstrumentation(header, div);
            p.append(a);
            titleDiv.append(p);
            header.remove();
          } else {
            titleDiv.append(header);
          }
        }

        // the rest is wrapped in a "nsw-card__copy" div
        const copyDiv = document.createElement('div');
        copyDiv.className = 'nsw-card__copy';
        [...div.children].forEach((child) => {
          if (child !== titleDiv) {
            copyDiv.append(child);
            moveInstrumentation(child, div);
          }
        });
        div.append(copyDiv);

        if (titleDiv) div.prepend(titleDiv);

        const icon = document.createElement('span');
        icon.className = 'material-icons nsw-material-icons';
        icon.setAttribute('focusable', 'false');
        icon.setAttribute('aria-hidden', 'true');
        icon.textContent = 'east';

        div.append(icon);
      } else div.remove();
    });
    ul.append(li);
  });
  ul.querySelectorAll('picture > img').forEach((img) => {
    const optimizedPic = createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]);
    moveInstrumentation(img, optimizedPic.querySelector('img'));
    img.closest('picture').replaceWith(optimizedPic);
  });
  block.textContent = '';
  block.append(ul);
}
