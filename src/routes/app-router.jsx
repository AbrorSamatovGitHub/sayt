import { nanoid } from "@reduxjs/toolkit";
import Home from "../pages/home/home";
import Category from "../pages/category/category";
import ProdactDetail from "../pages/prodact-detail/prodact-detail";
export default [
  {
    component: <Home />,
    id: nanoid,
  },
  {
    component: <Category />,
    path:"category/:slug",
    id: nanoid,
  },
  {
    component: <ProdactDetail/>,
    path:"prodactDetail/:slug/:id",
    id: nanoid,
  },

];
