import 'nsw-design-system/src/components/card/_card.scss';
import './cards.css';

import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  /* change to ul, li */
  const ul = document.createElement('ul');

  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    li.classList.add('nsw-card');
    moveInstrumentation(row, li);
    while (row.firstElementChild) li.append(row.firstElementChild);

    const [firstColumn, secondColumn, thirdColumn, fourthColumn] = li.children;

    // case (1) - Image exists
    const firstColumnFilled = !!firstColumn.querySelector('picture');
    if (firstColumnFilled) {
      firstColumn.className = 'nsw-card__image';
    } else {
      // remove the div
      firstColumn.remove();
    }

    // case (2) - Second div Headline (required)
    const contentWrapper = document.createElement('div');
    contentWrapper.className = 'nsw-card__content';

    const titleWrapper = document.createElement('div');
    titleWrapper.className = 'nsw-card__title';

    // move the children of the second div to the titleWrapper
    while (secondColumn.firstElementChild) titleWrapper.append(secondColumn.firstElementChild);

    // remove the p wrapper around the <a> tag
    const a = titleWrapper.querySelector('a');
    if (a) {
      const p = a.closest('p');
      if (p) {
        p.replaceWith(a);
        a.classList.remove('button');
      }
    }

    contentWrapper.append(titleWrapper);

    // insert after the firstColumn
    if (firstColumnFilled) {
      firstColumn.after(contentWrapper);
    } else {
      li.prepend(contentWrapper);
    }

    secondColumn.remove();

    // case (3) - Third div Text (optional)
    if (thirdColumn.innerHTML.trim()) {
      thirdColumn.classList.add('nsw-card__copy');

      // insert after the third div
      contentWrapper.append(thirdColumn);
    } else {
      thirdColumn.remove();
    }

    // case (4) - Fourth div Trailing Icon (optional)
    if (fourthColumn.innerHTML.trim()) {
      // get the current type of icon
      const icon = fourthColumn.querySelector('.icon');
      if (icon) {
        const p = icon.closest('p');
        if (p) {
          moveInstrumentation(icon, p);

          // move the classes from icon to p
          p.classList.add(...icon.classList);

          p.classList.add('material-icons', 'nsw-material-icons');
          p.setAttribute('focusable', 'false');
          p.setAttribute('aria-hidden', 'true');
          p.textContent = 'east';
        } else {
          icon.classList.add('material-icons', 'nsw-material-icons');
          icon.setAttribute('focusable', 'false');
          icon.setAttribute('aria-hidden', 'true');
          icon.textContent = 'east';
        }
      }
      contentWrapper.append(fourthColumn);
    }

    ul.append(li);

    // add variation classes
    if (block.classList.contains('highlight')) {
      li.classList.add('nsw-card--highlight');
    }

    if (block.classList.contains('dark')) {
      li.classList.add('nsw-card--dark');
    }

    if (block.classList.contains('light')) {
      li.classList.add('nsw-card--light');
    }

    if (block.classList.contains('horizontal')) {
      li.classList.add('nsw-card--horizontal');
    }
  });
  ul.querySelectorAll('picture > img').forEach((img) => {
    const optimizedPic = createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]);
    moveInstrumentation(img, optimizedPic.querySelector('img'));
    img.closest('picture').replaceWith(optimizedPic);
  });
  block.textContent = '';
  block.append(ul);
}
