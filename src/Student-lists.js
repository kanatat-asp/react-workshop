import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Student from './Student';


const StudenLists = () => {

  const [studentState, setStudentState] = useState ({
    students : [
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
      { id: 3, name: "Peter" },
      { id: 4, name: "Jonathan" },
      { id: 5, name: "Marry" },
      { id: 6, name: "Henderson" }
    ]
  })

  const deleteItemHandler = (deleteIndex) => {
    const data = [...studentState.students];
    data.splice(deleteIndex, 1);
    setStudentState({
      students: data
    });
  }

  const deleteItemHandlerByKey = (deleteKey) => {
    const data = [...studentState.students];
    const deleteIndex = data.findIndex((item) => {
      return item.id === deleteKey;
    })
    data.splice(deleteIndex, 1);
    setStudentState({
      students: data
    });
  }

  const editItemHandler = (editKey, data) => {
    const students = [...studentState.students];
    const editingIndex = students.findIndex((item) => {
      return item.id === editKey;
    });
    students[editingIndex] = data;
    setStudentState({
      students: students
    })
  }

  // render() {

  //   const myArray = [
  //     { id: 1, name: "John" },
  //     { id: 2, name: "Jane" },
  //     { id: 3, name: "Peter" },
  //   ];

  //   const students = [
  //     { id: 1, name: "John" },
  //     { id: 2, name: "Jane" },
  //     { id: 3, name: "Peter" },
  //     { id: 4, name: "Jonathan" },
  //     { id: 5, name: "Marry" },
  //     { id: 6, name: "Henderson" }
  //   ];

  //   const list = myArray.map((item) => {
  //     // Return JSX
  //     return (
  //       <div key={item.id} className="card my-3">
  //         <div className="card-body">
  //           <h4 className="card-title">{item.id}</h4>
  //           <p className="card-text">{item.name}</p>
  //         </div>
  //       </div>
  //     );
  //   });

  //   deleteItemHandler = (deleteIndex) => {
  //     const data = [...students];
  //     data.splice(deleteIndex, 1);
  //     this.setState({
  //       state: data
  //     });
  //   }

    return (
      <div className="container">
        {/* <h2>Array Map Iterating</h2> */}
        {/* {list} */}
        <div className="row">
          <h2>Delete items</h2>
          {studentState.students.map((item) => {
            return (
              <div key={item.id} className="col-lg-3 col-sm-4 mt-2">
                {/* <Student data={item} deleteStudent={deleteItemHandler.bind(this, index)}></Student> */}
                <Student 
                  data={item}
                  deleteStudent={deleteItemHandlerByKey.bind(this, item.id)}
                  editStudent={editItemHandler.bind(this)}
                ></Student>
              </div>
            )
          })}
        </div>
      </div>
    );
  }

export default StudenLists;
