import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import ScrollManager from "./components/layout/ScrollManager";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetails";

const App = () => (
  <>
    <ScrollManager />
    <Navbar />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </main>
    <Footer />
  </>
);

export default App;
