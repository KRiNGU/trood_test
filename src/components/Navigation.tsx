import { memo } from 'react';
import { Routes, Route } from 'react-router-dom';
import App from '../App';

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  );
};

export default memo(Navigation);
