export const input = () => {
  const element: HTMLInputElement = document.createElement('input');

  return {
    getElement() {
      return element;
    },
    id(id) {
      element.id = id;
      if (!element.name) {
        element.name = id;
      }
      return this;
    },
    name(name) {
      element.name = name;
      return this;
    },
    type(type) {
      element.type = type;
      return this;
    },
    placeholder(placeholder) {
      element.placeholder = placeholder;
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
      return element;
    },
  };
};
