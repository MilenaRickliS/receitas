import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import AddRecipe from './AddRecipe';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';

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