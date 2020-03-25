import CompositeElement from './CompositeElement'

class Form extends CompositeElement {

  constructor(...children) {
    super('form', ...children);
  }

  setAction(action: string) {
    this.element.action = action
    return this
  }

  useMethod(method: string) {
    this.element.method = method
    return this
  }
  

}

export default Form