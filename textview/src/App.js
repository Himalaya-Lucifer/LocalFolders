import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import TextArea from './component/TextArea';
import About from './component/About';
import Alert from './component/Alert';
import {Route, RouterProvider,createBrowserRouter,createRoutesFromElements} from 'react-router-dom';
import Layout from './layout/Layout';
import {Provider as ReduxProvider} from "react-redux";
import { store } from './store/index';
import AllCources from './component/AllCources';
import Cource from './component/Cource';
import CreateCource from './component/CreateCourse';
import UpdateCource from './component/UpdateCource';


function App() {

  const [mode, setMode] = useState("light");
  const [alert,setAlert] = useState(null);

  const showAlert = (type,message) => {
    setAlert({
      message:message,
      type:type
    })
    setTimeout(()=> {
      setAlert(null);
    },2000)
  }

  const changeTheme = () => {
    if(mode==='light') {
      setMode('dark');
      document.body.style.backgroundColor="#293654";
      showAlert("Success","DarkMode Enable");
    }

    else {
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("Success","LightMode Enable");
    }
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout title="Text Util" mode={mode} togglefunction={changeTheme} alert={alert}/>}>
        <Route path='/' element={<TextArea heading="Write your text" mode={mode} showAlert={showAlert} />} />
        <Route path='/about' element={<About mode={mode}/>} />
        <Route path='/cources' element={<AllCources />} />
        <Route path='/cources/:id' element={<Cource />} />
        <Route path='/create-cource' element={<CreateCource />} />
        <Route path='/update-cource/:id' element={<UpdateCource />} />
      </Route>
    )
  )
  return (
    <ReduxProvider store={store}>

     <RouterProvider router={router} />
    </ReduxProvider> 
  );
}

export default App;
