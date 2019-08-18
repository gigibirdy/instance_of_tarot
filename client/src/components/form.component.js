import React from 'react';
import {withStyles} from "@material-ui/styles";
const styles={
  root: {
    fontFamily: "Source Sans Pro, sans-serif",
    color: "grey",
    backgroundColor: "#FFDEE9",
    backgroundImage: "linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)",
    paddingTop: "30vh",
    minHeight: "100vh",
    color: "grey",
    "& button": {background: "#FFDEE9", color: "grey"},
    "& button:hover":{color: "white"}
  }
}
class Form extends React.Component {
constructor(props){
  super(props);
  this.state={
    question: "",
    numberOfCards: 0
  }
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}
handleChange(event){
  const {name, value} = event.target;
  this.setState({
    [name]: value
  })
}
handleSubmit(event){
  event.preventDefault();
  this.props.history.push(`/tarot/tarotresult/${this.state.numberOfCards}/${this.state.question}`);
}
    render(){
      const {classes} = this.props
      return(
        <div className={classes.root}>
        <div className="container">
        <div className="row justify-content-center">
        <div className="col-12 col-md-6">
        <form onSubmit={this.handleSubmit}>
        <div className="form-group">
        <label htmlFor="numberOfCards">Please select tarot-card spreads</label>
        <select id="numberOfCards" className="form-control form-control-sm" name= "numberOfCards" value={this.state.numberOfCards} onChange={this.handleChange}>
        <option value={0}>Select Spreads</option>
        <option value={3}>Three-Card Spreads</option>
        <option value={5}>Five-Card Spreads</option>
        </select>
        </div>
        <div className="form-group">
        <label htmlFor="question">Please write down your question:</label>
        <input id="question" className="form-control form-control-lg" name="question" value={this.state.question} onChange={this.handleChange}/>
        </div>
        <button className="form-control btn btn-lg">Submit</button>
        </form>
        </div>
        </div>
        </div>
        </div>
      )
    }
}

export default withStyles(styles)(Form);
