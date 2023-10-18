import React from 'react';
import { Route, Navigate, Routes, createBrowserRouter, redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from '../components/Login';
import UserList from '../components/UserList';
import Home from '../pages/Home';


const Router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    Component: Login,
    // children: [
      // {
      //   index: true,
      //   path: "home",
      //   Component: Home,
      // },
      // {
      //   path: "login",
      //   action: loginAction,
      //   loader: loginLoader,
      //   Component: LoginPage,
      // },
      // {
      //   path: "protected",
      //   loader: protectedLoader,
      //   Component: ProtectedPage,
      // },
    // ],
  },
  {
    path: "/home",
    Component: Home,
  },
  // {
  //   path: "/logout",
  //   async action() {
  //     // We signout in a "resource route" that we can hit from a fetcher.Form
  //     // await fakeAuthProvider.signout();
  //     return redirect("/");
  //   },
  // },
]);

export default Router;

// const Router = () => {
//   const token = useSelector(state => state.auth.token);

//   return (
//     <Routes>
//           {/* <Route path="/" index element={<Login />} />
//           <Route path="/login"  element={<Login />} />
//           {token ? (
//             <Route path="/userlist" element={<UserList />} />
//           ) : (
//             <Navigate to="/login" />
//           )} */}
//           <Route path="/" element={token ? <UserList /> : <Navigate to="/login" />} />
//           <Route path="/login"  element={<Login />} />
//     </Routes>
//   );
// };

// export default Router;