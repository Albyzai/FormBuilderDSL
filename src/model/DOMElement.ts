export interface DOMElement {
  withID(id: string): DOMElement; //  adds ID to element
  withClass(className: string): DOMElement; //  adds a single class to element
  withClasses(classNames: string[]): DOMElement; //  adds multiple classes to element
  end(): HTMLElement; //  adds children to the element and returns the actual DOMElement (HTMLElement)
}
