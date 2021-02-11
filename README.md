# TypeScript FormBuilder DSL

This is a project created for the SDU course 'Model-Driven Software Development'. It is a small DSL which can be used to create simple forms.

## Example implementation (Login Form)

![Login Form](loginimage.png)

```typescript
import FormBuilder from './newmodel/FormBuilder'


class LoginForm extends FormBuilder {

  root: Node
  constructor(rootElement: Node) {
    super()
    this.root = rootElement
  }
  build = (): void => {
    let result = this.form(

      this.container(
        this.label().for('EmailField'),
        this.input().type('text').placeholder('johndoe@mail.com').withID('EmailField').withClass('form-control')
      ).withClass('form-group'),

      this.container(
        this.label().for('PasswordField'),
        this.input().type('password').placeholder('********').withClass('form-control').withID('PasswordField')
      ).withClass('form-group'),

      this.button().type('submit').text('login').withClasses(['btn', 'btn-primary'])
      
    ).useMethod('POST')
    .setAction('index.html')
    .withClass('formClass')
    .buildHtml()

    this.root.appendChild(result)
  }
}

class RegistrationForm extends FormBuilder {

  root: Node
  constructor(rootElement: Node) {
    super()
    this.root = rootElement
  }
  build = (): void => {
    let result = this.form(
      
      this.container(
        this.label().for('EmailField'),
        this.input().type('text').placeholder('johndoe@mail.com').withClass('form-control').withID('EmailField')
      ).withClass('form-group'),

      this.container(
        this.label().for('PasswordField'),
        this.input().type('password').placeholder('*********').withClass('form-control').withID('PasswordField')
      ).withClass('form-group'),

      this.container(
        this.label().for('ConditionsCheckBox'),
        this.input().type('checkbox').withClass('form-check-input').withID('ConditionsCheckBox')
      ).withClasses(['form-check', 'flex']),

      this.container(
        this.label().for('NewsletterCheckBox'),
        this.input().type('checkbox').withClass('form-check-input').withID('NewsletterCheckBox')
      ).withClasses(['form-check', 'flex']),

      this.button().type('submit').text('register').withClasses(['btn', 'btn-primary'])

    ).useMethod('POST')
    .setAction('index.html')
    .withClass('formClass')
    .buildHtml()

    this.root.appendChild(result)
  }

}
window.onload = function() {

  const formWrapper = document.getElementById('FormWrapper');
  const formWrapper2 = document.getElementById('FormWrapper2')

  const loginForm = new LoginForm(formWrapper).build()
  const registrationForm = new RegistrationForm(formWrapper2).build()
  
};
```

## Installation

This is a guide on how to install and use the DSL.

##### Clone the project

###### `git clone https://github.com/Albyzai/FormBuilderDSL.git`

##### Install dependencies

###### `cd FormBuilderDSL && npm i`

##### Compile TS to JS

###### `npm start`

##### Finally open index.html in a browser to see the result.

Note: The metamodel implementation can be found in the src/index.html file
