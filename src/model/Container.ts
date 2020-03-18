import { DOMElement } from './DOMElement';

export const container = (...children): DOMElement => {
  const element: HTMLDivElement = document.createElement('div');

  return {
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
    end(): HTMLDivElement {
      children.map(child => element.appendChild(child));
      return element;
    },
  };
};
