import CompositeElement from './CompositeElement'

class Button extends CompositeElement {

  constructor(...children) {
    super('button', ...children);
  }

  text = (text: string) => {
    this.element.innerHtml = text
    return this
  }
  
  type = (type: string) => {
    this.element.type = type
    return this
  }

  clickAction = (clickFunc: Function) => {
    this.element.onClick = () => {
      clickFunc()
    }
    return this
  }

  

}

export default Button