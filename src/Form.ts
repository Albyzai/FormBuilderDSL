import DOMElement from './DOMElement';

class Form extends DOMElement {
  element: HTMLFormElement;
  /**
   *
   */
  constructor(builder, parent, method) {
    super(builder, parent);
    this.element = document.createElement('form');
    this.element.method = method;
  }
}

export default Form;
