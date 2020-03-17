import Input from './Input';
import Label from './Label';
import SubmitButton from './SubmitButton';
import Container from './Container';
import Form from './Form';

class FormBuilder {
  private nestingMap: Map<HTMLElement, Map<HTMLElement, HTMLElement>> = new Map<
    any,
    any
  >();
  private newNestingMap: Object = {};
  private currentElement: HTMLElement;
  private rootElement;
  // private form: HTMLFormElement;
  /**
   *
   */
  constructor() {
    this.rootElement = document.createElement('div');
    this.currentElement = this.rootElement;
  }

  getHierachy = () => {
    return this.newNestingMap;
  };

  setCurrentElement = element => {
    this.currentElement = element;
  };

  getCurrentElement = () => {
    return this.currentElement;
  };

  form = (method: string) => {
    const form = new Form(this, this.currentElement, method);
    return form;
  };

  container = () => {
    const container = new Container(this, this.currentElement);
    return container;
  };

  label = (text, forAttr?) => {
    const label = new Label(this, this.currentElement, text);
    return label;
  };

  input = (name?, placeholder?) => {
    const input = new Input(this, this.currentElement, name, placeholder);
    return input;
  };

  submitButton = text => {
    const button = new SubmitButton(this, this.currentElement, text);
    return button;
  };

  build = () => this.rootElement;
}

export default FormBuilder;
