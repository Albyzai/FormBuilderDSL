abstract class CompositeElement { 
  protected element: any;
  protected elementType: string;
  protected children : CompositeElement[];
  protected attributes: Attr[] = []
  /**
   *
   */
  constructor(type : string, ...children) {
    this.children = [...children]
    this.elementType = type;
  }

  buildHtml = (): any => {
    this.element = document.createElement(this.elementType)
    this.attributes.map(att => {
      this.element.setAttributeNode(att)
    })
    
    this.children.map(child => this.element.appendChild(child.buildHtml()))
    
    return this.element
  }

  withID = (id): CompositeElement => {
    let attribute = document.createAttribute("id")
    attribute.value = id
    this.attributes.push(attribute)
    // this.element.id = id
    return this
  }

  withClass = (className: string): CompositeElement => {

    let attribute = document.createAttribute("class")
    attribute.value = className
    this.attributes.push(attribute)
    // this.element.className = className
    return this
  }

  withClasses = (classNames: string[]): CompositeElement => {
    let attribute = document.createAttribute("class")    
    classNames.map(className => attribute.value = attribute.value + " " + className)
    this.attributes.push(attribute)

    return this
  }
}

export default CompositeElement