import FormBuilder from 'FormBuilder';

abstract class DOMElement {
  protected builder: FormBuilder;
  protected element: HTMLElement;
  protected parentElement: HTMLElement;

  /**
   *
   */
  constructor(builder, parent) {
    this.builder = builder;
    this.parentElement = parent;
  }

  withClass = (className: string) => {
    this.element.className = className;
    return this;
  };

  withClasses = (classNames: Array<string>) => {
    if (classNames.length) {
      classNames.map(className => this.element.classList.add(className));
    } else {
      throw 'Parameter must be of type Array<string>';
    }

    return this;
  };

  asChild = () => {
    const currentElement = this.builder.getCurrentElement();
    console.log('generating', this.element, 'as child of', currentElement);
    currentElement.appendChild(this.element);
    this.builder.setCurrentElement(this.element);
    return this.builder;
  };

  asSibling = () => {
    const currentElement = this.builder.getCurrentElement();
    console.log('generating', this.element, 'as sibling of', currentElement);
    currentElement.parentElement.appendChild(this.element);
    this.builder.setCurrentElement(this.element);
    return this.builder;
  };

  // complete = () => {
  //   this.builder.getHierachy();
  //   this.parentElement.getForm().appendChild(this.element);
  //   console.log('parentEl', this.parentElement);
  //   return this.parentElement;
  // };
}

export default DOMElement;
