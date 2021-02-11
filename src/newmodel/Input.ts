import CompositeElement from './CompositeElement'

class Input extends CompositeElement {

  constructor(...children) {
    super('input', ...children);
  }

  name = (name: string) => {
    let attribute = document.createAttribute("name")
    attribute.value = name
    this.attributes.push(attribute)
    return this;
  }

  type = (type: string) => {
    let attribute = document.createAttribute("type")
    attribute.value = type
    this.attributes.push(attribute)
    return this
  }

  placeholder = (placeholder: string) => {
    let attribute = document.createAttribute("placeholder")
    attribute.value = placeholder
    this.attributes.push(attribute)
    return this
  }

}

export default Input