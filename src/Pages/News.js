import React, { Component } from "react";
import Newsitems from "../components/Newsitems";

export class News extends Component {
  constructor() {
    super();
    console.log("hello i am a contructor from newsitem");
    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount() {
    console.log("cdm");
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=ccd9cf36048a4082b7fd3d85e644f863";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    // this.setState({artciles:parsedData.artciles})
    this.setState(parsedData);
  }

  render() {
    console.log("Render");
    return (
      <div>
        <div className="main-container">
          <div className="wrapper  ">
            <div className=" my-2 flex dark:bg-black">
              <div className="row flex justify-between">
                {this.state.articles.map((element) => {
                  return (
                    <div className="col-md-4 my-2" key={element.url}>
                      <Newsitems
                        title={element.title ? element.title.slice(0, 45) : ""}
                        description={
                          element.description
                            ? element.description.slice(0, 88)
                            : ""
                        }
                        newsurl={element.url}
                        imageUrl={element.urlToImage}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
