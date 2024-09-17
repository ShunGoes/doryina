import "./App.css";

import { Routes, Route } from "react-router-dom";

import { lazy, Suspense } from "react";

function App() {
  const HomePage = lazy(() => import("./pages/home"));
  const Packages = lazy(() => import("./pages/packages"));
  const AboutPage = lazy(() => import("./pages/about"));
  const ContactPage = lazy(() => import("./pages/contact"));

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
