import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Root from "./component/Root";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./component/NotFound";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="about" element={<About />} />
      <Route index element={<Home />} />
      <Route path="*" element={<NotFound/>}/>
    </Route>
  )
);
function App() {
  return <div className="">
    <RouterProvider router={router}/>
  </div>;
}

export default App;
