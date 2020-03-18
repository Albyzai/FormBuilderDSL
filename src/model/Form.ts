const form = (...children) => {
  const element: HTMLFormElement = document.createElement('form');

  return {
    withClass(className: string) {
      element.className = className;
      return this;
    },
    withClasses(classNames: string[]) {
      classNames.map(className => element.classList.add(className));
      return this;
    },
    useMethod(method: string) {
      element.method = method;
      return this;
    },
    setAction(action) {
      element.action = action;
      return this;
    },
    end() {
      children.map(child => element.appendChild(child));
      return element;
    },
  };
};

export default form;
