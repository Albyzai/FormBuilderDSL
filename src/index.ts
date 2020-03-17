import FormBuilder from './FormBuilder';

window.onload = function() {
  const builder = new FormBuilder();
  const formWrapper = document.getElementById('FormWrapper');

  const loginModel: HTMLElement = builder
    .form('POST')
    .asChild()
    .container()
    .withClass('form-group')
    .asChild()
    .label('hej')
    .asChild()
    .input('Hej', 'hej med dig')
    .withClass('form-control')
    .asSibling()
    .submitButton('Send')
    .withClasses(['btn', 'btn-primary'])
    .asSibling()
    .build();

  formWrapper.appendChild(loginModel);
};
