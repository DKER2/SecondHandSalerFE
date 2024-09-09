import './App.css';
import Header from "./layouts/Header.tsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import SignUpPage from "./modules/authentication/pages/SignUpPage.tsx";
import MarketplacePage from "./modules/marketplace/pages/MarketplacePage.tsx";

function App() {

  return (
      <div className="w-full">
          <Router>
              <Header/>
              <Routes>
                  <Route path="/" element={<SignUpPage/>}/>
                  <Route path="/marketplace" element={<MarketplacePage page={1} size={3}/>}/>
              </Routes>
          </Router>
      </div>
)
}

export default App
