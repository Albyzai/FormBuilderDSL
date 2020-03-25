import { form, container, label, input, button } from './form-builder-dsl';
import Form from './newmodel/Form'
import Container from './newmodel/Container'
import Label from './newmodel/Label'
import Input from './newmodel/Input'
import Button from './newmodel/Button'


window.onload = function() {

  const formWrapper = document.getElementById('FormWrapper');

  const loginForm = new Form(
    new Container(
      new Label()
        .text('Email')
        .for('EmailField'),
      new Input()
        .type('text')
        .placeholder('johndoe@mail.com')
        .withID('EmailField')
        .withClass('form-control'),
    ).withClass('form-group'),
    new Container(
      new Label()
        .text('Password')
        .for('PasswordField'),
      new Input()
        .type('password')
        .placeholder('********')
        .withClass('form-control')
        .withID('PasswordField')
    ).withClass('form-group'),
      new Button()
      .type('submit')
      .text('login')
      .clickAction(() => console.log('logged in'))
      .withClasses(['btn', 'btn-primary'])
  ).useMethod('POST')
  .setAction('index.html')
  .withClass('formClass')
  .buildHtml()

  formWrapper.appendChild(loginForm)

  // const formWrapper2 = document.getElementById('FormWrapper2');

  // // Metamodel Login Implementation
  // const loginForm = form(
  //   container(
  //     label()
  //       .text('Email')
  //       .for('EmailField')
  //       .end(),
  //     input()
  //       .type('text')
  //       .placeholder('johndoe@mail.com')
  //       .withClass('form-control')
  //       .withID('EmailField')
  //       .end()
  //   )
  //     .withClass('form-group')
  //     .end(),
  //   container(
  //     label()
  //       .text('Password')
  //       .for('PasswordField')
  //       .end(),
  //     input()
  //       .type('password')
  //       .placeholder('*********')
  //       .withClass('form-control')
  //       .withID('PasswordField')
  //       .end()
  //   )
  //     .withClass('form-group')
  //     .end(),
  //   button()
  //     .type('submit')
  //     .text('login')
  //     .clickAction(() => console.log('logged in'))
  //     .withClasses(['btn', 'btn-primary'])
  //     .end()
  // )
  //   .useMethod('POST')
  //   .setAction('index.html')
  //   .withClass('formClass')
  //   .end();

  // //  Metamodel Registration Implementation
  // const registrationForm = form(
  //   container(
  //     label()
  //       .text('Email')
  //       .for('EmailField')
  //       .end(),
  //     input()
  //       .type('text')
  //       .placeholder('johndoe@mail.com')
  //       .withClass('form-control')
  //       .withID('EmailField')
  //       .end()
  //   )
  //     .withClass('form-group')
  //     .end(),
  //   container(
  //     label()
  //       .text('Password')
  //       .for('PasswordField')
  //       .end(),
  //     input()
  //       .type('password')
  //       .placeholder('*********')
  //       .withClass('form-control')
  //       .withID('PasswordField')
  //       .end()
  //   )
  //     .withClass('form-group')
  //     .end(),
  //   container(
  //     label()
  //       .text('Agree to terms and conditions')
  //       .for('ConditionsCheckBox')
  //       .end(),
  //     input()
  //       .type('checkbox')
  //       .withClass('form-check-input')
  //       .withID('ConditionsCheckBox')
  //       .end()
  //   )
  //     .withClasses(['form-check', 'flex'])
  //     .end(),
  //   container(
  //     label()
  //       .text('Sign up for newsletter')
  //       .for('NewsletterCheckBox')
  //       .end(),
  //     input()
  //       .type('checkbox')
  //       .withClass('form-check-input')
  //       .withID('NewsletterCheckBox')
  //       .end()
  //   )
  //     .withClasses(['form-check', 'flex'])
  //     .end(),
  //   button()
  //     .type('submit')
  //     .text('register')
  //     .clickAction(() => console.log('registered'))
  //     .withClasses(['btn', 'btn-primary'])
  //     .end()
  // )
  //   .useMethod('POST')
  //   .setAction('index.html')
  //   .withClass('formClass')
  //   .end();
  // formWrapper.appendChild(loginForm);
  // formWrapper2.appendChild(registrationForm);
};
