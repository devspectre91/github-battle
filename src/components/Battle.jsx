import { getDefaultNormalizer } from "@testing-library/react";
import React from "react";
import Card from './Card'

class Battle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      lang: "All",
    };
  }
getData =()=>{
    fetch(
        `https://api.github.com/search/repositories?q=stars:%3E1+language:${this.state.lang}&sort=stars&order=desc&type=Repositories`
      )
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          console.log(data.items);
          this.setState({
            data: data.items,
          });
        });
}

  componentDidMount() {
       this.getData();
  }



  

  handleClick(e) {
    let id = e.target.dataset.id;
    this.setState({
        lang:id,
        data:null
    });
    this.getData();
  }
  render() {
    return (
      <div className="container">
        <div className="columns mx-0  is-centered">
          <div className="column is-half has-text-centered">
            <span
              onClick={(e) => this.handleClick(e)}
              data-id="All"
              className={
                this.state.lang === "All"
                  ? `mx-2 ${this.props.mode} selected`
                  : `mx-2 ${this.props.mode}`
              }
            >
              All
            </span>
            <span
              onClick={(e) => this.handleClick(e)}
              data-id="JavaScript"
              className={
                this.state.lang === "JavaScript"
                  ? `mx-2 ${this.props.mode} selected`
                  : `mx-2 ${this.props.mode}`
              }
            >
              JavaScript
            </span>
            <span
              onClick={(e) => this.handleClick(e)}
              data-id="Ruby"
              className={
                this.state.lang === "Ruby"
                  ? `mx-2 ${this.props.mode} selected`
                  : `mx-2 ${this.props.mode}`
              }
            >
              Ruby
            </span>
            <span
              onClick={(e) => this.handleClick(e)}
              data-id="Python"
              className={
                this.state.lang === "Python"
                  ? `mx-2 ${this.props.mode} selected`
                  : `mx-2 ${this.props.mode}`
              }
            >
              Python
            </span>
          </div>
        </div>
       
        <div className="container columns is-centered mx-0 mt-4 is-multiline">
        {this.state.data
          ? this.state.data.map((item, index) => {
              return <Card key={index} rank={`${++index}`} data={item} mode={this.props.mode} />;
            })
          : <div className={`subtitle mt-6 ${this.props.mode}`}>Loading...</div> }
          </div>
          </div>
  
    );
  }
}

export default Battle;
