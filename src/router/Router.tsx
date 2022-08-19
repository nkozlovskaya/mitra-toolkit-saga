import { Card } from "../pages/card";
import { About } from "../pages/about";
import { Galery } from "../pages/galery";
import { NotFound } from "../pages/notFound";

export const router = {
  galery: {
    path: "/",
    link: "/",
    element: <Galery />,
  },

  about: {
    path: "/about",
    link: "/about",
    element: <About />,
  },
  card: {
    path: "/card/:id",
    link: "/card",
    element: <Card />,
  },
  pageNotFound: {
    path: "*",
    element: <NotFound />,
  },
};
