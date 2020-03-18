import { form, container, label, input, button } from './form-builder-dsl';

window.onload = function() {
  const formWrapper = document.getElementById('FormWrapper');
  const formWrapper2 = document.getElementById('FormWrapper2');

  // Metamodel Login Implementation
  const loginForm = form(
    container(
      label()
        .text('Email')
        .for('EmailField')
        .end(),
      input()
        .type('text')
        .placeholder('johndoe@mail.com')
        .withClass('form-control')
        .withID('EmailField')
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
        .withID('PasswordField')
        .end()
    )
      .withClass('form-group')
      .end(),
    button()
      .type('submit')
      .text('login')
      .clickAction(() => console.log('logged in'))
      .withClasses(['btn', 'btn-primary'])
      .end()
  )
    .useMethod('POST')
    .setAction('index.html')
    .withClass('formClass')
    .end();

  //  Metamodel Registration Implementation
  const registrationForm = form(
    container(
      label()
        .text('Email')
        .for('EmailField')
        .end(),
      input()
        .type('text')
        .placeholder('johndoe@mail.com')
        .withClass('form-control')
        .withID('EmailField')
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
        .withID('PasswordField')
        .end()
    )
      .withClass('form-group')
      .end(),
    container(
      label()
        .text('Agree to terms and conditions')
        .for('ConditionsCheckBox')
        .end(),
      input()
        .type('checkbox')
        .withClass('form-check-input')
        .withID('ConditionsCheckBox')
        .end()
    )
      .withClasses(['form-check', 'flex'])
      .end(),
    container(
      label()
        .text('Sign up for newsletter')
        .for('NewsletterCheckBox')
        .end(),
      input()
        .type('checkbox')
        .withClass('form-check-input')
        .withID('NewsletterCheckBox')
        .end()
    )
      .withClasses(['form-check', 'flex'])
      .end(),
    button()
      .type('submit')
      .text('register')
      .clickAction(() => console.log('registered'))
      .withClasses(['btn', 'btn-primary'])
      .end()
  )
    .useMethod('POST')
    .setAction('index.html')
    .withClass('formClass')
    .end();
  formWrapper.appendChild(loginForm);
  formWrapper2.appendChild(registrationForm);
};
