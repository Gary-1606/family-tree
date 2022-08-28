import { render } from "react-dom";
import { FunctionComponent, StrictMode, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const Result = lazy(() => import("./pages/Result"));

const App: FunctionComponent = () => {
  return (
    <StrictMode>
      <Suspense fallback={<h2>Loading....</h2>}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
