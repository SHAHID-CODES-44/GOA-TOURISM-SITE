// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignupIn from './pages/Sign-in-up';
import Feedback from './pages/FeedbackPage';
import Beach from './pages/BeachesPage';
import Post from './pages/PostPage';
import WeatherApp from './pages/WeatherPage';
import Wildlife from './pages/WildlifePage';
import FAQ from './pages/FAQPage';
import Food from './pages/TasteAndRestPage';
import About from './pages/AboutMePage';
import Contact from './pages/ContactPage';
import Terms from './pages/Terms&CondPage';
import Facts from './pages/FactsPage';
import Transport from './pages/TransportPage';
import Chabot from './pages/ChatbotPage';
import Map from './pages/MapsPage';
import Event from './pages/EventPage';
import Adventure from './pages/AdventuresPage';
import Safety from './pages/SafetyPage';
import Admin from './pages/AdminPage';
import AdminLogin from './pages/AdminLoginPage';

// 🔐 NEW: Protect /Admin route
import ProtectedAdminRoute from './components/ProtectedAdminRoute';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/SignupIn" element={<SignupIn />} />
      <Route path="/Feedback" element={<Feedback />} />
      <Route path="/Beach" element={<Beach />} />
      <Route path="/Post" element={<Post />} />
      <Route path="/WeatherApp" element={<WeatherApp />} />
      <Route path='/Wildlife' element={<Wildlife />} />
      <Route path='/FAQ' element={<FAQ />} />
      <Route path='/Food' element={<Food />} />
      <Route path='/About' element={<About />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/Terms' element={<Terms />} />
      <Route path='/Facts' element={<Facts />} />
      <Route path='/Transport' element={<Transport />} />
      <Route path='/Chatbot' element={<Chabot />} />
      <Route path='/Map' element={<Map />} />
      <Route path='/Event' element={<Event />} />
      <Route path='/Adventure' element={<Adventure />} />
      <Route path='/Safety' element={<Safety />} />

      {/* 🔐 PROTECTED ROUTE */}
      <Route
        path="/Admin"
        element={
          <ProtectedAdminRoute>
            <Admin />
          </ProtectedAdminRoute>
        }
      />

<Route path='/AdminLogin' element={<AdminLogin />} />
    </Routes>
  );
}

export default App;
