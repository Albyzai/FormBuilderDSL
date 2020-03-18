import { DOMElement as ParentInterface } from './DOMElement';

//  ts interface merging
interface DOMElement extends ParentInterface {
  text(text: string): DOMElement; //  sets the 'innerHtml' attribute on the button
  type(id: string): DOMElement; //  sets the 'type' attribute on the button
  clickAction(clickFunc: Function): DOMElement; //  sets an onClick event on the button
}

export const button = (...children): DOMElement => {
  const element: HTMLButtonElement = document.createElement('button');

  return {
    text(text: string): DOMElement {
      //  will get overridden by any inline children
      element.innerHTML = text;
      return this;
    },
    type(type: string): DOMElement {
      element.type = type;
      return this;
    },
    clickAction(clickFunc: Function): DOMElement {
      element.onclick = () => {
        clickFunc();
      };
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
    end(): HTMLButtonElement {
      children.map(child => element.appendChild(child));
      return element;
    },
  };
};
