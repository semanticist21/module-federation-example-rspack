import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from './components/main';
import { Home } from './pages/home';
import { Store } from './pages/store';
import { UiExample } from './pages/UiExample';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="ui" element={<UiExample />} />
          <Route path="store" element={<Store />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
