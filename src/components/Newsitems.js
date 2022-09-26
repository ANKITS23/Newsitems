import React, { Component } from "react";

export class Newsitems extends Component {
  render() {
    let { title, description, imageUrl, newsurl } = this.props;
    return (
      <div>
        <div
          className="card flex flex-col justify-between gap-2"
          style={{ width: "18rem" }}
        >
          <img src={imageUrl} className="card-img-top" alt=".vfqd.." />
          <div className="card-body flex flex-col justify-between">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsurl} target="_blank" className="btn btn-primary my-2">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitems;
