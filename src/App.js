import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import AllRecipes from "./pages/AllRecipes";
export default function App() {


  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AllRecipes />} />
          <Route path="1" element={<Page1 />} />
          <Route path="2" element={<Page2 />} />
          <Route path="*" element={<Default />} />
        </Route>
      </Routes>
  );

}

function Default() {
  return <h1>Default Content</h1>
}

function Page1() {
  return <h1>page1</h1>;
}

const Page2 = () => {
  return <h1>page2</h1>;
};
