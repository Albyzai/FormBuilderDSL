import CompositeElement from './CompositeElement'

class Label extends CompositeElement {

  constructor(...children) {
    super('label', ...children);
  }

 
  for = (inputId: string) => {
    let attribute = document.createAttribute("for")
    attribute.value = inputId
    this.attributes.push(attribute)
    // this.element.htmlFor = inputId
    return this;
  }

  // text = (text: string) => {
  //   this.element.innerHtml = text;
  //   return this
  // }

}

export default Label