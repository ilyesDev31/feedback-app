import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import FeedBackLi from "./components/FeedBackLi";
import FeedBackStats from "./components/FeedBackStats";
import FeedBackForm from "./components/FeedBackForm";
import About from "./pages/About";
import AboutIconLink from "./components/AboutIconLink";
import { FeedBackProvider } from "./context/FeedbackContext";
const App = () => {
  return (
    <FeedBackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedBackForm />
                  <FeedBackStats />
                  <FeedBackLi />
                </>
              }
            ></Route>
            <Route exact path="/about" element={<About />} />
          </Routes>

          <AboutIconLink />
        </div>
      </Router>
    </FeedBackProvider>
  );
};

export default App;
