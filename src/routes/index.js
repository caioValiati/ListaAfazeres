import { jsx as _jsx } from "react/jsx-runtime";
import { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
const lazyElements = {
    Login: lazy(() => import("../pages/auth/login")),
    Signup: lazy(() => import("../pages/auth/signup")),
    ForgotPassword: lazy(() => import("../pages/auth/forgotPassword")),
    Home: lazy(() => import("../pages/home")),
};
const routes = [
    { path: "/", element: "Home" },
    { path: "/login", element: "Login" },
    { path: "/signup", element: "Signup" },
    { path: "/forgotPassword", element: "ForgotPassword" },
];
export function RoutesComponent() {
    const navigate = useNavigate();
    const location = useLocation();
    const signed = true;
    const paths = routes.flatMap((item) => typeof item.path === "string"
        ? [{ path: item.path, element: item.element }]
        : item.path.map((p) => ({ path: p, element: item.element })));
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
    const getElement = (elementName) => {
        if (!elementName)
            return null;
        const Component = lazyElements[elementName];
        return _jsx(Component, {});
    };
    return (_jsx(Suspense, { fallback: _jsx("div", { children: "Carregando..." }), children: _jsx(Routes, { children: paths.map(({ path, element }) => (_jsx(Route, { path: path, element: getElement(element) }, path))) }) }));
}
