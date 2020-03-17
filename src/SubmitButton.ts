import DOMElement from './DOMElement';

class SubmitButton extends DOMElement {
  element: HTMLButtonElement;
  /**
   *
   */
  constructor(builder, parent, text) {
    super(builder, parent);
    this.element = document.createElement('button');
    this.element.type = 'submit';
    this.element.innerHTML = text;
  }
}

export default SubmitButton;
