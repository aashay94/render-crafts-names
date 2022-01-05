import React from "react";
import './App.css';

const data =
  [
    { "craft": "ISS", "name": "Mark Vande Hei" },
    { "craft": "ISS", "name": "Pyotr Dubrov" },
    { "craft": "ISS", "name": "Anton Shkaplerov" },
    { "craft": "Shenzhou 13", "name": "Zhai Zhigang" },
    { "craft": "Shenzhou 13", "name": "Wang Yaping" },
    { "craft": "Shenzhou 13", "name": "Ye Guangfu" },
    { "craft": "ISS", "name": "Raja Chari" },
    { "craft": "ISS", "name": "Tom Marshburn" },
    { "craft": "ISS", "name": "Kayla Barron" },
    { "craft": "ISS", "name": "Matthias Maurer" }
  ];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataNew: data
    }
    this.handleSortCallback = this.handleSortCallback.bind(this);
  }

  handleSortCallback = () => {
    let output = this.state.dataNew.sort((a, b) => (a.name > b.name) ? 1 : -1)
    this.setState({
      dataNew: output
    })
  }

  render() {
    //data rendering in table
    let rows = this.state.dataNew.map((item) => (
      <tr>
        <td>{item.craft}</td>
        <td>{item.name}</td>
      </tr>
    )
    );

    return (
      <table className="table">
        <thead>
          <tr className="table">
            <th className="table-header">Craft</th>
            <th className="table-header">
              <span id="names" onClick={this.handleSortCallback}>Name</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}

export default App;
