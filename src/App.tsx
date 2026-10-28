import { Navigate, Route, Routes } from "react-router-dom";
import { MotionConfig } from "motion/react";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import ScrollManager from "./components/layout/ScrollManager";
import ScrollProgress from "./components/layout/ScrollProgress";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetails";

const App = () => (
  <MotionConfig reducedMotion="user">
    <ScrollManager />
    <ScrollProgress />
    <Navbar />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </main>
    <Footer />
  </MotionConfig>
);

export default App;
