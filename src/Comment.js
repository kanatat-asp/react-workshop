// Function Component
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function Comment(props) {
    // console.log(props);
    // let myProps = props.propsComment;
    const [dataState, setDataState] = useState({
        home: '#home',
        products: '#products',
        profile: '#profile',
        theNum: 0
    })

    const plusFunc = () => {
        setDataState({
            theNum: dataState.theNum + 1
        });
    };

    const minusFunc = () => {
        setDataState({
            theNum: dataState.theNum - 1
        });
    };

    return (
        <div>
            <div>This is comment!!!</div>
            <div>{ props.propsComment }</div>
            <nav className="nav justify-content-center">
              <a className="nav-link active" href={dataState.home}>Active link</a>
              <a className="nav-link" href={dataState.products}>Link</a>
              <a className="nav-link" href={dataState.profile}>Disabled link p</a>
            </nav>
            <p>{dataState.theNum}</p>
            <div className="col-4 mx-auto mt-4">
                <div className="card text-center">
                    <div className="card-header">
                        <button type="button" className="btn btn-primary" onClick={plusFunc}>Increase</button>
                        <button type="button" className="btn btn-danger" onClick={minusFunc}>Decrease</button>
                    </div>
                </div>
            </div>
            <div className="card bg-warning">
                <h2>{props.getCoupon()}</h2>
            </div>
        </div>
    )
}

export default Comment;