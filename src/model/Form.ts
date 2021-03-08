import CompositeElement from './CompositeElement'

class Form extends CompositeElement {

  constructor(...children) {
    super('form', ...children);
  }

  setAction(action: string) {
    let attribute = document.createAttribute("action")
    attribute.value = action
    this.attributes.push(attribute)
    return this
  }

  useMethod(method: string) {
    let attribute = document.createAttribute("method")
    attribute.value = method
    this.attributes.push(attribute)
    return this
  }
  

}

export default Form