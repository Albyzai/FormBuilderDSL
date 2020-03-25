abstract class CompositeElement { 
  protected element: any;
  protected elementType: string;
  protected children : CompositeElement[];
  /**
   *
   */
  constructor(type : string, ...children) {
    this.children = [...children]
    this.elementType = type;
    this.element = document.createElement(this.elementType)
    console.log('this.element: ', this.element)
  }

  buildHtml = () => {
    for (let child of this.children) {
      this.element.appendChild(child.buildHtml())
    }
    return this.element
  }

  withID = (id) => {
    this.element.id = id
    return this
  }

  withClass = (className: string) => {
    this.element.className = className
    return this
  }

  withClasses = (classNames: string[]) => {
    classNames.map(className => this.element.classList.add(className))
    return this
  }
}

export default CompositeElement