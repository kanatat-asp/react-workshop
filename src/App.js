import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Post from './Post';
import Comment from './Comment';
import 'bootstrap/dist/css/bootstrap.css';
import StudenLists from './Student-lists';
// import Student from './Student';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

class App extends Component {
  // const myPic = "https://picsum.photos/300/150";
  // const sharedHandler = () => {
  //   return myPic;
  // };
  state = {
    data: false
  };

  hideFunction = () => {
    const newData = !this.state.data;
    this.setState({
      data: newData
    })
  }

  render() {
    const myPic = "https://picsum.photos/300/150";
    const sharedHandler = () => {
      return myPic;
    };
    let myJSX = null;
    if (this.state.data === true) {
      myJSX = (
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Title From If</h4>
            <p className="card-text">Text from if render condition</p>
          </div>
        </div>
      )
    }

    return (
        <div className="App">
          <p className="App-header">Header</p>
          <p className="card">
            User-End Content
          </p>
          <img src={ myPic } alt="my view"/>
          <Post></Post>
          <Comment getCoupon={sharedHandler}></Comment>
          <button type="button" className="btn btn-primary" onClick={this.hideFunction}>{!this.state.data ? 'Show' : 'Hide'}</button>
          {
            this.state.data ?
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Title</h4>
                <p className="card-text">Text</p>
              </div>
            </div>
            :
            null
          }
          <div>
            <h2>If/Else Render</h2>
            {myJSX}
          </div>
          <div className="container">
            <h2>Array Map Iterating</h2>
            <StudenLists></StudenLists>
          </div>
          <div className="container">
            <h2>Delete item</h2>
            {/* <Student></Student> */}
          </div>
        </div>
    );
  }
}

export default App;
