import { Navigate, useLocation } from "react-router-dom";

const TrailingSlashRedirect = () => {
  const location = useLocation();

  // If path doesn't end with slash and not having file extension
  const isFile = location.pathname.includes(".");
  if (!location.pathname.endsWith("/") && !isFile) {
    return <Navigate to={location.pathname + "/"} replace />;
  }

  return null;
};

export default TrailingSlashRedirect;
