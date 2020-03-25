import CompositeElement from './CompositeElement'

class Container extends CompositeElement {

  constructor(...children) {
    super('div', ...children);
  }

}

export default Container