import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SearchResultsPage from "../pages/SearchResultsPage";
import EmptyResultsPage from "../pages/EmptyResultsPage";
import RecipeBoxPage from "../pages/RecipeBoxPage";
import RecipeDetailPage from "../pages/RecipeDetailPage";
import SubscriptionPage from "../pages/SubscriptionPage";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchResultsPage />} />
      <Route path="/search-empty" element={<EmptyResultsPage />} />
      <Route path="/recipe-box" element={<RecipeBoxPage />} />
      <Route path="/recipe/:id" element={<RecipeDetailPage />} />
      <Route path="/subscribe" element={<SubscriptionPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRouter;
