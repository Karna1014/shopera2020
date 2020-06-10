import Cookie from "js-cookie";
import React from "react";
import { Row, Container, Card, Col } from "reactstrap";
import "../../styles/order.css";


class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    }
  }
 
  componentWillMount() {
    const UserInfo = Cookie.getJSON("userInfo");
    const orderId = this.props.match.params.id;
    console.log(orderId);
    fetch("/api/orders/" + orderId, {
      method: "GET",
      headers: { 
        Authorization: "Bearer " + UserInfo.token 
      }
    
    })
    .then((response) => response.json())
    .then((responseJSON) => {
      console.log(responseJSON);
      this.setState({data: responseJSON});
    })
    .catch((errResp) => {
      console.log(errResp);
    });
  }

  render () {
    const { data } = this.state;
    return (
      <>
        <Container id="orderCtnr">
        <Card body outline color="warning">
            <Row>
              <Col md={5}>
                <h1>Buyer: { data.shipping?.firstName } { data.shipping?.lastName }</h1>
              </Col>
              <Col md={7}>
                <h1 id="ordNum">Order#: { this.state.data._id }</h1>
              </Col>
            </Row>
          </Card>
          <Card body outline color="warning">
            <h1>Shipping Address</h1>
              <h2>{ this.state.data.shipping?.streetAddress }</h2>
              <h2>{ this.state.data.shipping?.aptNumber }</h2>
              <h2>{ this.state.data.shipping?.cityName }</h2>
              <h2>{ this.state.data.shipping?.state }</h2>
              <h2>{ this.state.data.shipping?.zipCode }</h2>
          </Card>
          <Card body outline color="warning">
          
            <h1>Order Items</h1>
            <ul className = "oItems" style={{ listStyle: "none" }}> {
              this.state.data.orderItems?.map(order =>
              <li key={order._id}>
              <div className="Purchases">
                <li>Item: { order.name }</li>
                <li>Qty Purchased: { order.qty }</li>
                <li><img className="order-image" src={ order.image } alt="product"/></li> 
              </div>
              </li>)
               }
             </ul>
          </Card>
        </Container>
      </>
    );
};
}

  



export default Order;