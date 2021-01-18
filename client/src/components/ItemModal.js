import React, {Component} from 'react'
import {
    Modal,
    Form,
    Button,
    ModalHeader,
    ModalBody,
    FormGroup,
    Label,
    Input
  } from 'reactstrap'

  import { connect } from 'react-redux'
  import { addItem } from '../actions/itemActions'

  class ItemModal extends Component {
      state = {
          modal: false,
          name: ''
      }

      toggle = () => {
          this.setState({
              modal: !this.state.modal
          })
      }

      onChange = (e) => {
          this.setState({ [e.target.name]: e.target.value })
      }

      onSubmit = (e) => {
          e.preventDefault();

          const newitem = {
              name: this.state.name
          }

          this.props.addItem(newitem)
          this.toggle()
      }


      render() {
          return (
              <div>
                  <Button 
                  color="success"
                  className="add-btn"
                  onClick={this.toggle}>Add Item
                  </Button>
                  <Modal 
                  isOpen={this.state.modal}
                  toggle={this.toggle}
                  >
                    <ModalHeader toggle={this.toggle}>
                        Add to List
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="item">Item</Label>
                                <Input
                                type="text"
                                name="name"
                                id="item"
                                placeholder="Add item.."
                                onChange={this.onChange}>
                                </Input>
                                <Button
                                color= "success"
                                style={{marginTop:"1rem"}}
                                block>
                                    Add Item
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                  </Modal>
              </div>
          )
      }
  }

  const mapStateToProps = (state) => ({
    item: state.item
})
export default connect (mapStateToProps, {addItem})(ItemModal)
