import QuestionPage from "./components/Questionpage/QuestionPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import QuestionForm from "./pages/QuestionForm";
import SignUp from "./pages/SignUp";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Welcome from "./pages/Welcome";
// import "./style.css"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <SignUp />,
  },
]);

const App = () => {
  return (
    <div>
      {/* <RouterProvider router={router} /> */}
    <Welcome/>
      {/* <QuestionForm/> */}
   
    </div>
  );
};

export default App;
