const button = (...children) => {
  const element: HTMLButtonElement = document.createElement('input');

  return {
    getElement() {
      return element;
    },
    id(id) {
      element.id = id;
      return this;
    },
    text(text) {
      element.innerHTML = text;
      return this;
    },
    type(type) {
      element.type = type;
      return this;
    },
    clickAction(clickFunc: Function) {
      element.onclick = () => {
        clickFunc();
      };
      return this;
    },
    withClass(className: string) {
      element.className = className;
      return this;
    },
    withClasses(classNames: string[]) {
      classNames.map(className => element.classList.add(className));
      return this;
    },
    end() {
      children.map(child => element.appendChild(child));
      return element;
    },
  };
};

export default button;
