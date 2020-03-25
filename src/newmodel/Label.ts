import CompositeElement from './CompositeElement'

class Label extends CompositeElement {

  constructor(...children) {
    super('label', ...children);
  }

  for = (inputId: string) => {
    this.element.htmlFor = inputId
    return this;
  }

  text = (text: string) => {
    this.element.innerHtml = text;
    return this
  }

}

export default Label