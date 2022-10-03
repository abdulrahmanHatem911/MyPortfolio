import React, { Component } from "react";

class ShopingCard extends Component {
  state = {};
  render() {
    const productitem = this.props.products.filter(
      (p) => p.id === parseInt(this.props.match.params.id)
    )[0];

    //     console.log(productitem);

    // // console.log(this.props.match.params.id);
    // console.log(parseInt(this.props.match.params.id));

    // console.log(this.props.products[0].id);

    return (
      <React.Fragment>
        <div className="container">
        <h1 className="mb-5 ml-5"> hello from the shoping card </h1>
          <table class="table ">
            <thead>
              <tr>
                <th scope="col">{productitem.id}</th>
                <th scope="col">{productitem.name}</th>
                <th scope="col">{productitem.price}</th>
                <th scope="col">{productitem.isCart}</th>
              </tr>
            </thead>
          </table>

          <button
            onClick={() =>
              this.props.onClick(this.props.products[productitem.id - 1])
            }
            className="btn btn-primary"
          >
            {" "}
            increase
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default ShopingCard;
