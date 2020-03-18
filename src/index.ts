import form from './model/Form';
import container from './model/Container';
import label from './model/Label';
import input from './model/Input';
import button from './model/Button';

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
      .text('submit')
      .withClasses(['btn', 'btn-primary'])
      .clickAction(() => console.log('clicked'))
      .end()
  ).end();

  formWrapper.appendChild(formEl);

  // form(
  //   container(
  //     label().text('Email Address').for('EmailInput').end(),
  //     input().type('Email').id('EmailInput')
  //   ).withClass('from-group'),
  //   submitButton().text('Submit')
  // )

  // Container()
  // Label().text('').for().end()
};

// form

// this.children = [Container, SubmitButton]
