import * as React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./css/output.css";
import PrivateRoutes from "./Page/PrivateRoutes";
import Projects from "./Page/Projects";
import UpdateProfile from "./Page/UpdateProfile";
import Start from "./Page/Start";
import Home from "./Page/Home";
import List from "./Page/List";
import Actu from "./Page/Actu";
import Login from "./Page/Login";
import Signup from "./Page/Signup";
import Student from "./Page/Student";
import {Transition} from "./Page/Transition";
import ForgotPassword from "./Page/ForgotPassword";
function App() {
  return (<>
          <BrowserRouter>
              <Routes>
                  <Route element={<PrivateRoutes />}>
                      <Route path="projects" element={<Projects />} />
                      <Route path="/update-profile" element={<UpdateProfile />} />
                  </Route>
                  <Route path="/" element={<Start/>} />
                  <Route path='/home' element={<Home />} />
                  <Route path='/list' element={<List />} />
                  <Route path='/actu' element={<Actu />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path='/student' element={<Student />} />
                  <Route path="/Transition" element={<Transition/>}/>
                  <Route path="/forgot-password" element={<ForgotPassword />} />
              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;
