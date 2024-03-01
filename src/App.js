import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import AddRecipe from './pages/AddRecipe';
import RecipeList from './pages/Receitas';
import RecipeDetail from './pages/Receita';

function App() {
  const routes = useRoutes([
    { path: '/', element: <RecipeList /> },
    { path: '/recipes/:id', element: <RecipeDetail /> },
    { path: '/add', element: <AddRecipe /> },
  ]);

  return routes;
}

export default function RouterWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}