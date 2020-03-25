import CompositeElement from './CompositeElement'

class Input extends CompositeElement {

  constructor(...children) {
    super('input', ...children);
  }

  name = (name: string) => {
    this.element.name = name;
    return this;
  }

  type = (type: string) => {
    this.element.type = type;
    return this
  }

  placeholder = (placeholder: string) => {
    this.element.placeholder = placeholder
    return this
  }

}

export default Input