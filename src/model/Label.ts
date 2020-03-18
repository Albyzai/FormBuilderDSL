const label = (...children) => {
  const element: HTMLLabelElement = document.createElement('label');

  return {
    getElement() {
      return element;
    },
    withClass(className: string) {
      element.className = className;
      return this;
    },
    withClasses(classNames: string[]) {
      classNames.map(className => element.classList.add(className));
      return this;
    },
    for(inputId: string) {
      element.htmlFor = inputId;
      return this;
    },
    text(text) {
      element.innerHTML = text;
      return this;
    },
    end() {
      children.map(child => element.appendChild(child));
      return element;
    },
  };
};

export default label;
