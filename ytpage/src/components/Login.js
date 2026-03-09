// import { useState } from "react";

// function Login({ setIsLoggedIn }) {

//   const [user, setUser] = useState({
//     email: "",
//     password: ""
//   });

//   function handleChange(e){
//     setUser({...user, [e.target.name]: e.target.value});
//   }

//   function handleSubmit(e){
//     e.preventDefault();

//     if(user.email === "admin@gmail.com" && user.password === "1234"){
//       setIsLoggedIn(true);
//     } else {
//       alert("Invalid login");
//     }
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="email"
//         name="email"
//         placeholder="Email"
//         onChange={handleChange}
//         required
//       />

//       <input
//         type="password"
//         name="password"
//         placeholder="Password"
//         onChange={handleChange}
//         required
//       />

//       <button type="submit">Login</button>
//     </form>
//   );
// }

// export default Login;

function login() {
  return (
    <form>
      <input type="email" className="email" placeholder="Email"></input>
      <input
        type="password"
        className="Password"
        placeholder="Password"
      ></input>
    </form>
  );
}
export default login;
