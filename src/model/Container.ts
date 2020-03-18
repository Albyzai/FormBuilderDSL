const container = (...children) => {
  const containerElement: HTMLDivElement = document.createElement('div');

  return {
    getElement() {
      return containerElement;
    },
    withClass(className: string) {
      containerElement.className = className;
      return this;
    },
    withClasses(classNames: string[]) {
      classNames.map(className => containerElement.classList.add(className));
      return this;
    },
    end() {
      children.map(child => containerElement.appendChild(child));
      return containerElement;
    },
  };
};

export default container;
