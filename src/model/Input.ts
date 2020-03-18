import { DOMElement as ParentInterface } from './DOMElement';

//  ts interface merging
interface DOMElement extends ParentInterface {
  name(name: string): DOMElement;
  type(type: string): DOMElement;
  placeholder(placeholder: string): DOMElement;
}

export const input = (): DOMElement => {
  const element: HTMLInputElement = document.createElement('input');

  return {
    name(name: string): DOMElement {
      element.name = name;
      return this;
    },
    type(type: string): DOMElement {
      element.type = type;
      return this;
    },
    placeholder(placeholder: string): DOMElement {
      element.placeholder = placeholder;
      return this;
    },
    withID(id: string): DOMElement {
      element.id = id;
      if (!element.name) {
        element.name = id;
      }
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
    end(): HTMLInputElement {
      return element;
    },
  };
};
