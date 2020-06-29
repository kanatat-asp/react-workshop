import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Student from './Student';


class StudenLists extends Component {

  render() {

    const myArray = [
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
      { id: 3, name: "Peter" },
    ];

    const students = [
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
      { id: 3, name: "Peter" },
      { id: 4, name: "Jonathan" },
      { id: 5, name: "Marry" },
      { id: 6, name: "Henderson" }
    ];

    const list = myArray.map((item) => {
      // Return JSX
      return (
        <div key={item.id} className="card my-3">
          <div className="card-body">
            <h4 className="card-title">{item.id}</h4>
            <p className="card-text">{item.name}</p>
          </div>
        </div>
      );
    });

    deleteItemHandler = (deleteIndex) => {
      const data = [...students];
      data.splice(deleteIndex, 1);
      this.setState({
        state: data
      });
    }

    return (
      <div className="container">
        <h2>Array Map Iterating</h2>
        {list}
        <div className="row">
          <h2>Delete items</h2>
          {state.map((item, index) => {
            return (
              <div key={item.id} className="col-lg-3 col-sm-4 mt-2">
                <Student data={item} deleteStudent={this.deleteItemHandler.bind(this, index)}></Student>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default StudenLists;
