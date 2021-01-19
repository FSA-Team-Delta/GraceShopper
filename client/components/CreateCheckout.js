// import React, {Component} from 'react';
// import {connect} from 'react-redux';
// import {createCheckout} from '../redux/checkout';

// export class createCheckout extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       robotName: '',
//       imageUrl: '',
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange = (event) => {
//     this.setState({
//       [event.target.name]: event.target.value,
//     });
//   };

//   handleSubmit(event) {
//     event.preventDefault();
//     const name = event.target.name.value;
//     const email = event.target.email.value;
//     const address = event.target.address.value;
//     const phone = event.target.phone.value;

//     this.props.createCheckout({name: robotName, imageUrl: imageUrl});
//     this.setState({
//       name: '',
//       email: '',
//       address: '',
//       phone: '',
//     });
//   }
//   render() {
//     return (
//       <form>
//         <label htmlFor="name" className="checkoutText">
//           Name:{' '}
//         </label>
//         <input name="name" type="text" value="" onChange={this.handleChange} />
//         <label htmlFor="email" className="checkoutText">
//           Email:{' '}
//         </label>

//         <input name="email" type="text" value="" onChange={this.handleChange} />
//         <label htmlFor="Address" className="checkoutText">
//           Address:{' '}
//         </label>

//         <input
//           name="Address"
//           type="text"
//           value=""
//           onChange={this.handleChange}
//         />
//         <label htmlFor="phone" className="checkoutText">
//           Phone:{' '}
//         </label>

//         <input name="phone" type="text" value="" onChange={this.handleChange} />
//         <button type="submit">Pay With Card</button>
//       </form>
//     );
//   }
// }
// const mapState = (state) => {
//   return {
//     robots: state.robots,
//   };
// };

// const mapDispatch = (dispatch) => {
//   return {createRobot: (robot) => dispatch(createRobot(robot))};
// };

// export default connect(mapState, mapDispatch)(CreateRobot);
