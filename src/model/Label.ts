import { DOMElement as ParentInterface } from './DOMElement';

//  ts interface merging
interface DOMElement extends ParentInterface {
  for(name: string): DOMElement; //  sets the 'for' attribute on the element
  text(text: string): DOMElement; //  sets the 'innterHTML' attribute on the element
}

export const label = (...children): DOMElement => {
  const element: HTMLLabelElement = document.createElement('label');

  return {
    for(inputId: string): DOMElement {
      element.htmlFor = inputId;
      return this;
    },
    text(text: string): DOMElement {
      element.innerHTML = text;
      return this;
    },
    withID(id: string): DOMElement {
      element.id = id;
      return this;
    },
    withClass(className: string): DOMElement {
      element.className = className;
      return this;
    },
    withClasses(classNames: string[]): DOMElement {
      classNames.map(className => element.classList.add(className));
      return this;
    },
    end(): HTMLLabelElement {
      children.map(child => element.appendChild(child));
      return element;
    },
  };
};
