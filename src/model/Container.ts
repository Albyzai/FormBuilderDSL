export const container = (...children) => {
  const element: HTMLDivElement = document.createElement('div');

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
    end() {
      children.map(child => element.appendChild(child));
      return element;
    },
  };
};
