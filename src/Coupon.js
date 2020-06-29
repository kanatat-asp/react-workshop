import React, { Component } from 'react';

class Coupon extends Component {
    onCouponUse = (event) => {
        this.props.setCoupon();
    }

    render() {
        const status = this.props.data.status;
        const coupon = this.props.data.code;
        return (
            <div className="card text-center">
                <div className="card-header">
                    <button type="button" className="btn btn-primary mx-3" disabled={!status} onClick={this.onCouponUse}>Use Coupon</button>
                </div>
                <div className="card-body">
                    <p>{status?coupon: 'This coupon has been used.'}</p>
                </div>
            </div>
        )
    }
}

export default Coupon;