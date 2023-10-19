import React from 'react';
import { Route, Navigate, Routes, createBrowserRouter, redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from '../components/Login';
import UserList from '../components/UserList';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';


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
  {
    path: "/abount",
    Component: About,
  },
  {
    path: "/contact",
    Component: Contact,
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

