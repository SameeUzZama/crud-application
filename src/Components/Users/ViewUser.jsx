// import React from "react";
// import axios from "axios";
// import { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";

// const ViewUser = () => {
//   const [user, setUser] = useState({
//     name: "",
//     username: "",
//     email: "",
//     phone: "",
//     website: "",
//   });

//   const { id } = useParams();

//   useEffect(() => {
//     loadUser();
//   }, []);

//   const loadUser = async () => {
//     const res = await axios.get(`http://localhost:3003/users/${id}`);
//     setUser(res.data);
//   };

//   return (
//     <div className="container">
//       <h1 className="display-1">User Id:{id}</h1>
//       <hr />
//       <ul className="list-group m-5">
//         <li className="list-group-item">
//           <b>Name:</b> {user.name}
//         </li>
//         <li className="list-group-item">
//           <b>User Name:</b> {user.username}
//         </li>
//         <li className="list-group-item">
//           <b>Email:</b> {user.email}
//         </li>
//         <li className="list-group-item">
//           <b>Phone:</b> {user.phone}
//         </li>
//         <li className="list-group-item">
//           <b>Website:</b> {user.website}
//         </li>
//       </ul>
//       <Link className="btn btn-primary" to="/">
//         Back To Home
//       </Link>
//     </div>
//   );
// };

// export default ViewUser;
