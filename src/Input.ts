import DOMElement from './DOMElement';

class Input extends DOMElement {
  /**
   *
   */
  element: HTMLInputElement;

  constructor(builder, parent, name?, placeholder?) {
    super(builder, parent);
    this.element = document.createElement('input');
    this.element.name = name;
    this.element.placeholder = placeholder;
  }

  withClasses = classes => {
    classes.map(className => this.element.classList.add(className));
    classes.map(className => console.log(this.element));
    console.log('classes:', classes);
    return this;
  };

  setParent = parent => {
    this.parentElement = parent;
  };

  setPlaceholder = placeholder => {
    this.element.placeholder = placeholder;
  };

  setName = name => {
    this.element.name = name;
  };

  get() {
    return this.element;
  }
}

export default Input;
