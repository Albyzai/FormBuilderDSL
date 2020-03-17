import DOMElement from './DOMElement';

class Container extends DOMElement {
  element: HTMLDivElement;
  /**
   *
   */
  constructor(builder, parent) {
    super(builder, parent);
    this.element = document.createElement('div');
  }
}

export default Container;
