// import MetaModel from './MetaModel'
// import Form from './Form'
// import Label from './Label'
// import CompositeElement from './CompositeElement'
// class FormBuilder {

    
//     metaModel: MetaModel
  
//     constructor() {
//       this.metaModel = new MetaModel()
//     }
  
//     form(method?: string, action?: string, ...children: CompositeElement[]) : FormBuilder {
//         this.metaModel.addForm(method, action, children)
//         return this
//     }

//     label(text?: string, forLabel?: string): FormBuilder {
//         this.metaModel.addLabel(text, forLabel)
//         return this
//     }
    
//     input = (): FormBuilder => {
//         this.metaModel.addInput()
//         return this
//     }

//     button = (): FormBuilder => {
//         this.metaModel.addButton()
//         return this
//     }

//     build = () => {
//         let nodes: Node[] = []
//         this.metaModel.container.getChildren().map((child: CompositeElement) => {
//             nodes.push(child.create())
//         })
//         console.log('metamodel: ', this.metaModel)
//         console.log('nodes: ', nodes)
//         return nodes
//     }
      
//   }

//   export default FormBuilder



import Form from './Form'
import Label from './Label'
import CompositeElement from './CompositeElement'
import Input from './Input'
import Button from './Button'
import Container from './Container'
 abstract class FormBuilder {

    
  
    constructor() {
    }
  
    form(...children: CompositeElement[]) : Form {
        // this.metaModel.addForm(method, action, children)
        let form = new Form(...children)
        return form
    }

    label(): Label {
        let label = new Label()
        // this.metaModel.addLabel(text, forLabel)
        return label
    }
    
    input = (): Input => {
        // this.metaModel.addInput()
        let input = new Input()
        return input
    }

    button = (): Button => {
        // this.metaModel.addButton()
        let button = new Button()
        return button
    }

    container = (...children: CompositeElement[]): Container => {
        let container = new Container(...children)
        return container
    }

      
  }

  export default FormBuilder