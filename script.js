'use strict';

const DomElement = function (selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
};

DomElement.prototype.createElem = function () {
  let x = 0;
  let y = 0;

  if (this.selector.startsWith('.')) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('block');
    document.body.append(newDiv);
    newDiv.innerText = ':)';
    newDiv.style.cssText = `height: ${this.height}; width: ${this.width}; background-color: ${this.bg}; font-size: ${this.fontSize}; position: absolute`;

    document.addEventListener('keydown', (event) => {
      if (event.key == 'ArrowLeft') {
        x = x - 10;
        newDiv.style.left = x + 'px';
      } else if (event.key == 'ArrowRight') {
        x = x + 10;
        newDiv.style.left = x + 'px';
      } else if (event.key == 'ArrowUp') {
        y = y - 10;
        newDiv.style.top = y + 'px';
      } else if (event.key == 'ArrowDown') {
        y = y + 10;
        newDiv.style.top = y + 'px';
      }
    });
  } else if (this.selector.startsWith('#')) {
    const newParagraph = document.createElement('p');
    newParagraph.classList.add('best');
    document.body.append(newParagraph);
    newParagraph.innerText = ':)';
    newParagraph.style.cssText = `height: ${this.height}; width: ${this.width}; background-color: ${this.bg}; font-size: ${this.fontSize}`;
    console.log(newParagraph);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  alert('DOM готов!');
});

const newElem = new DomElement('.main', '100px', '100px', 'gold', '24px');

newElem.createElem();
