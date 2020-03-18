import { DOMElement as ParentInterface } from './DOMElement';

//  ts interface merging
interface DOMElement extends ParentInterface {
  useMethod(method: string): DOMElement; //  sets the 'method' attribute on the form e.g., 'POST', 'GET'
  setAction(action: string): DOMElement; //  sets the 'action' attribute on the form
}

export const form = (...children): DOMElement => {
  const element: HTMLFormElement = document.createElement('form');

  return {
    useMethod(method: string): DOMElement {
      element.method = method;
      return this;
    },
    setAction(action: string): DOMElement {
      element.action = action;
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
    end(): HTMLFormElement {
      children.map(child => element.appendChild(child));
      return element;
    },
  };
};
