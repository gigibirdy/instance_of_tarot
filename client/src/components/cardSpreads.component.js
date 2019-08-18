import React from "react";
import axios from "axios";
import {withStyles} from "@material-ui/styles";
import {Link} from "react-router-dom";
const API_URL = "http://localhost:3002/";

const styles={
  root:{
    padding: "5rem 0rem",
    fontFamily: "Source Sans Pro, sans-serif",
    minHeight: "100vh",
    backgroundColor: "#FFDEE9",
    backgroundImage: "linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "grey",
    "& img": {
      boxShadow: "7px 7px 20px 2px"
    },
    "& button":{
      backgroundColor:"#FFDEE9",
      display: "block",
      margin: "2rem auto",
      color: "grey",
      fontSize: "25px",
      borderRadius: "5px",
      boxShadow: "1px 1px 30px 1px grey"},
    "& button:hover":{
      color: "white"
    },
    "& h3": {
      lineHeight: "4rem",
      textAlign: "center",
      "& span":{
        fontWeight: "200"
      }
    },
    "& h4": {
      textAlign: "left",
      textDecorationLine: "underLine",
      marginTop: "2rem"
    }
  },
  card:{
    display: "flex",
    justifyContent: "center",
    marginBottom: "6rem"
  }
}
class CardSpreads extends React.Component {
  constructor() {
    super();
    this.handleClick=this.handleClick.bind(this);

    this.state={
      tarotSelected: [],
      revealResult: false
    }
  }

  async componentDidMount(){
  let tarotSelected = [];
  while(tarotSelected.length < this.props.match.params.numberOfCards){
    let tarots = await axios.get(API_URL);
    let randIdx = Math.floor(Math.random() * tarots.data["cards"].length);
    let selected = tarots.data["cards"].splice(randIdx, 1)[0];
    let id = tarotSelected.map(obj => obj.id );
    let title = tarotSelected.map(obj=> obj.title);
    if(!id.includes(selected.id) && !title.includes(selected.title)){tarotSelected.push(selected);}
}
this.setState({
  tarotSelected: tarotSelected
})
}

handleClick(){
  this.setState({
    revealResult: true
  })
}
  render () {
    const {classes} = this.props
    return (
      <div className={classes.root}>
      <div className="container">
      <div style={{display: this.state.revealResult ? "none" : "block"}}>
      <h3>Question: <span>{this.props.match.params.question}</span></h3>
      <h3>Please think about above question that you just asked tarot and when you are ready,</h3>
      <button className="btn btn-sm" onClick={this.handleClick}>See Cards</button>
      </div>
      <div style={{display: this.state.revealResult ? "block" : "none"}}>
      <h3>Question: <span>{this.props.match.params.question}</span></h3>
      <div className="row justify-content-center mt-5">
      {this.state.tarotSelected.map(c =>
        <div className="col-12 col-sm-6" key={c.id}>
        <div className={classes.card}>
        <img src={c.src} alt="" style={{transform : c.id > 78 ? "rotate(180deg)" : "none"}}/>
        </div>
      </div>)}
      </div>
      <h4 onClick={this.props.history.goBack}>Ask anther question</h4>
      </div>
      </div>
      </div>

    )
  }
}

export default withStyles(styles)(CardSpreads)
