import CompositeElement from './CompositeElement'

class Button extends CompositeElement {

  constructor(...children) {
    super('button', ...children);
  }

  text = (text: string) => {
    let attribute = document.createAttribute("value")
    attribute.value = text
    this.attributes.push(attribute)
    return this
  }
  
  type = (type: string) => {
    let attribute = document.createAttribute("type")
    attribute.value = type
    this.attributes.push(attribute)
    return this
  }

  // clickAction = (clickFunc: Function) => {
    
  //   this.element.onClick = () => {
  //     clickFunc()
  //   }
  //   return this
  // }

  

}

export default Button