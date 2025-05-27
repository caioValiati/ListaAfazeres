import { jsx as _jsx } from "react/jsx-runtime";
// src/App.test.tsx
import { render } from "@testing-library/react";
import App from "./App";
test("Renderiza sem falhas", () => {
    render(_jsx(App, {}));
});
