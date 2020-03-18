import { form, container, label, input, button } from './form-builder-dsl';

window.onload = function() {
  const formWrapper = document.getElementById('FormWrapper');

  // Metamodel Login Implementation
  const formEl = form(
    container(
      label()
        .text('Email')
        .for('EmailField')
        .end(),
      input()
        .type('text')
        .placeholder('johndoe@mail.com')
        .withClass('form-control')
        .id('EmailField')
        .end()
    )
      .withClass('form-group')
      .end(),
    container(
      label()
        .text('Password')
        .for('PasswordField')
        .end(),
      input()
        .type('password')
        .placeholder('*********')
        .withClass('form-control')
        .id('PasswordField')
        .end()
    )
      .withClass('form-group')
      .end(),
    button()
      .type('submit')
      .text('login')
      .withClasses(['btn', 'btn-primary'])
      .clickAction(() => console.log('clicked'))
      .end()
  )
    .useMethod('POST')
    .setAction('index.html')
    .end();

  formWrapper.appendChild(formEl);
};
