import "./App.css";
import { Route, Routes } from "react-router-dom";
import { router } from "./router/Router";

export const App = () => {
  return (
    <Routes>
      <Route path={router.galery.path} element={router.galery.element} />
      <Route path={router.about.path} element={router.about.element} />
      <Route path={router.card.path} element={router.card.element} />
      <Route
        path={router.pageNotFound.path}
        element={router.pageNotFound.element}
      />
    </Routes>
  );
};

// return (
//   <Routes>
//     <Route path="/" element={<Galery />} />
//     <Route path="/about" element={<About />} />
//     <Route path="/card/:id" element={<Card />} />

//     {/* <Route path="*" element={<Galery />} /> */}
//   </Routes>
// );
//basename="/mitra-toolkit-saga";
