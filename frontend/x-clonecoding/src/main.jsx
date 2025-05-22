import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import App from './App.jsx';
import Home from './components/Home';
import Profile from './components/Profile';
import PostDetail from './components/PostDetail';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/post/:id" element={<PostDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
