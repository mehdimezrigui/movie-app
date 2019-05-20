import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
export default class Example extends React.Component {
    constructor(props, context) {
      super(props, context);

      this.state = {
        show: false,
        newmovie:{}
      };
    }
  
    handleClose=()=> {
      this.setState({ show: !this.state.show });
    }
  
    
    handleChange=(e)=>{
      this.setState({
        [e.target.name]: e.target.value
      })
  
    }

    NewObj=()=>{

      this.setState({newmovie: {title:this.state.title, desc:this.state.desc, image:this.state.image, rat:this.state.rat}},()=>{this.props.NewMovie(this.state.newmovie)}) 
          }
  
    render() {
      return (
        <div className="add">
          <Button variant="primary" onClick={this.handleClose}>
          Add Movie
          </Button>
  
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Adding New Movie</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className="form">
            <label>Title:</label><input type="text" name="title" onChange={this.handleChange}/>
            <labet>Description:</labet><input type="text" name="desc"onChange={this.handleChange}/>
            <label>Picture:</label><input type="text" name="image"onChange={this.handleChange}/>
            <label>Rating:</label><input type="text" name="rat"onChange={this.handleChange}/>
            </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={()=>{this.NewObj();this.handleClose()}}>
                Save Movie
              </Button>
            </Modal.Footer>
           </Modal>
        </div>
      );
    }
  }
  