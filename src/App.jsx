import { Routes, BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import { Footer, Home, Layout, Nopage,Contact, About, Topicpage, Learning } from "./component";

function App() {
   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  {/* <Route path="" element={<Hero />} /> */}
                  <Route path="footer" element={<Footer />} />
                  <Route exact path="#/browse" element={<About/>} />
                  <Route path="/Web-design" element={<Learning/>}/>
                  <Route path="contact" element={<Contact/>} />
                  <Route path="/listing-page" element={<Topicpage/>} />
                  <Route path="*" element={<Nopage />} />
               </Route>
            </Routes>   
         </BrowserRouter>
      </>
   );
}

export default App;
