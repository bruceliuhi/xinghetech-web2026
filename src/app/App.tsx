import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { SEO } from './components/SEO';
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import { HomePage } from './pages/HomePage';
import { CapabilitiesPage } from './pages/CapabilitiesPage';
import { AgentPage } from './pages/AgentPage';
import { ScenariosPage } from './pages/ScenariosPage';
import { PracticesPage } from './pages/PracticesPage';
import { AboutPage } from './pages/AboutPage';
import { NotFoundPage } from './pages/NotFoundPage';

function ScrollToHashElement() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      // 延迟滚动以确保页面已完全加载
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // 如果没有hash，滚动到页面顶部
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return null;
}

export default function App() {
  return (
    <>
      <div className="min-h-screen bg-background text-foreground">
        <SEO />
        <PerformanceOptimizer />
        <Navigation />
        <ScrollToHashElement />

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/capabilities" element={<CapabilitiesPage />} />
            <Route path="/agent" element={<AgentPage />} />
            <Route path="/scenarios" element={<ScenariosPage />} />
            <Route path="/practices" element={<PracticesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </>
  );
}