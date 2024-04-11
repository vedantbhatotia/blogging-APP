import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Landing from "./pages/landing";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import LandingPage from "./pages/blog";
import Publish from "./pages/publish";
// import {Landing} from "pages/"
function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path = '/' element = {<Landing></Landing>}></Route>
      <Route path = '/signin' element = {<SignIn></SignIn>}></Route>
      <Route path = '/signup' element = {<SignUp></SignUp>}></Route>
      <Route path="/blogs" element = {<LandingPage></LandingPage>}></Route>
      <Route path = '/publish' element={<Publish></Publish>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App