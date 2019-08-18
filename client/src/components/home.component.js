import React from "react";
import {Link} from "react-router-dom";
import {withStyles} from "@material-ui/styles";


const styles= {
  root:{
      background: "url(https://images.unsplash.com/photo-1556739442-4c892bcbe8ba?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9)",
      backgroundPosition: "center",
      backgroundSize: "cover",
      minHeight: "100vh",
      fontFamily: "Great Vibes, cursive",
      letterSpacing: "0.5rem",
      fontWeight: "1200"
    },
  container:{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "40vh",
    "& button": {background: "black", color: "yellow", marginTop: "1rem", letterSpacing: "0.2rem"},
    "& h1": {color: "black"},
    "& button:hover": {color: "grey"}
  }
  }

class Home extends React.Component {

  render(){
    const {classes} = this.props;
    return(
      <div className={classes.root}>
      <div className={classes.container}>
      <div>
      <h1>Instance of Tarot</h1>
      </div>
      <Link to="/tarot"><button className="btn btn-lg">Enter</button></Link>
      </div>
      </div>
    )
  }
}

export default withStyles(styles)(Home)
