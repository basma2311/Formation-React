import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import QuizPage from './Pages/QuizPage';

export default function App() {
  return (
    <Routes>
      {/*👇 Chemin imbriqué */}
      <Route path="/">
        {/* Index permet de définir le composant a afficher sur le chemin `/` */}
        <Route index element={<HomePage />} />
        <Route path=":indexTopic" element={<QuizPage />} />
      </Route>
    </Routes>
  );
}
