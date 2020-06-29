// Class Componet
import React, { Component } from 'react';
import Coupon from './Coupon';

class Post extends Component {
    // constructor(props) {
        // super(props);
        state = {
            name: 'John',
            age: 20,
            money: 1000000
        }
    // }
    userClick = () => {
        this.setState({
            name: 'Kanatat',
            age: this.state.age + 1,
            money: this.state.money * 1.5
        })
    }

    state = {
        coupon1: {
            code: '12345qwert',
            status: true
        },
        coupon2: {
            code: 'zaqwsx34567edcvfr',
            status: true
        }
    }

    useCoupon = (name) => {
        const updatedCoupon = {...this.state};
        updatedCoupon[name].status = false;
        this.setState(updatedCoupon);
    }

    render() {
        // console.log(this.props);
        // let name = this.props.studentName;
        // let score = this.props.studentScore;
        return (
            <div>
                {/* <p>Content from post.</p> */}
                {/* <p>Name: {name}</p> */}
                {/* <p>Score: {score}</p> */}
                <p>Content from post State.</p>
                <p>Name: {this.state.name}</p>
                <p>Age: {this.state.age}</p>
                <p>money: {this.state.money}</p>
                <button className="btn btn-primary" onClick={this.userClick}>Update</button>

                <Coupon data={this.state['coupon1']} setCoupon={this.useCoupon.bind(this, 'coupon1')}></Coupon>
                <Coupon data={this.state['coupon2']} setCoupon={this.useCoupon.bind(this, 'coupon2')}></Coupon>
            </div>
        )
    }
}

export default Post;