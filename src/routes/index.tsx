import axios from "axios";
import { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

const lazyElements = {
  Login: lazy(() => import("../pages/auth/login")),
  Signup: lazy(() => import("../pages/auth/signup")),
  ForgotPassword: lazy(() => import("../pages/auth/forgotPassword")),
  Home: lazy(() => import("../pages/home")),
};

type SuspenseComponent = keyof typeof lazyElements;
interface IRoutes {
  path: string | string[];
  element: SuspenseComponent | "";
}

interface IRoutesFormatted {
  path: string;
  element: SuspenseComponent | "";
}

const routes: IRoutes[] = [
  { path: "/", element: "Home" },
  { path: "/login", element: "Login" },
  { path: "/signup", element: "Signup" },
  { path: "/forgotPassword", element: "ForgotPassword" },
];

export function RoutesComponent() {
  const navigate = useNavigate();
  const location = useLocation();
  const token = JSON.parse(localStorage.getItem("auth"))?.token;
  const signed = !!token;

  if (signed) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

  const paths: IRoutesFormatted[] = routes.flatMap((item) =>
    typeof item.path === "string"
      ? [{ path: item.path, element: item.element }]
      : item.path.map((p) => ({ path: p, element: item.element }))
  );

  const routeExists = paths.some(({ path }) => path === location.pathname);

  useEffect(() => {
    const isAnonymousRoute = [
      "/signup",
      "/login",
      "/404",
      "/forgotPassword",
    ].includes(location.pathname);

    if (!signed && routeExists && !isAnonymousRoute) {
      navigate("/login");
      return;
    }

    if (signed && !routeExists) {
      navigate("/404");
    }
  }, [signed, routeExists, navigate, location.pathname]);

  const getElement = (elementName: SuspenseComponent | "") => {
    if (!elementName) return null;
    const Component = lazyElements[elementName];
    return <Component />;
  };

  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <Routes>
        {paths.map(({ path, element }) => (
          <Route key={path} path={path} element={getElement(element)} />
        ))}
      </Routes>
    </Suspense>
  );
}
