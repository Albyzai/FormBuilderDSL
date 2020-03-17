import DOMElement from './DOMElement';

class Label extends DOMElement {
  /**
   *
   */
  element: HTMLLabelElement;

  constructor(builder, parent, text) {
    super(builder, parent);
    this.element = document.createElement('label');
    this.element.innerText = text;
  }
}

export default Label;
