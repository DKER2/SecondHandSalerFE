import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import SignUpPage from "./modules/authentication/pages/SignUpPage.tsx";
import MarketplacePage from "./modules/marketplace/pages/MarketplacePage.tsx";
import DefaultLayout from "./layouts/DefaultLayout.tsx";

function App() {

  return (
      <div className="w-full">
          <Router>
              <Routes>
                  <Route path="/" element={<DefaultLayout><SignUpPage /></DefaultLayout>}/>
                  <Route path="/marketplace" element={<DefaultLayout><MarketplacePage page={0} size={10}/></DefaultLayout>}/>
              </Routes>
          </Router>
      </div>
)
}

export default App
