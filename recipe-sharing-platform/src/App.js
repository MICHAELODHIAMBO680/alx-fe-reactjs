import{BrowserRouter as Router,Route,Routes}from "react-router-dom";
import Homepage from "./components/Homepage";
import RecipeDetail from"./components/Homepage";
function App() {
    return(
        <Router>
            <Routes>
                <Route path="/"element={<Homepage/>} />
                <Route path="/recipe/: 
                id" element={<RecipeDetail/>}/>
            </Routes>
        </Router>
    );
}