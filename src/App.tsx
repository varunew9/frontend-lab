import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "./components/ui/header/Header";
import Footer from "./components/ui/footer/Footer";
import { CTA } from "./pages/home/components/CTA";
import { ErrorBoundary } from "react-error-boundary";
import type { FallbackProps } from "react-error-boundary";

// Fallback UI component
function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  // Cast 'error' to the global JavaScript Error type
  const actualError = error as Error;

  return (
    <div role="alert">
      <p>Something went wrong:</p>
      {/* TypeScript now knows .message exists */}
      <pre>{actualError?.message || "An unexpected error occurred"}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}
function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <main>
        {/* <h1>React Project Showcase</h1> */}
        <Header />
        <Outlet />
        <ScrollRestoration />
        <CTA />
        <Footer />
      </main>
    </ErrorBoundary>
  );
}

export default App;
