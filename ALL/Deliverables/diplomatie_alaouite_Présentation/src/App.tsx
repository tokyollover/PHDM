import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import Home from "@/pages/Home";
import { ROUTE_PATHS } from "@/lib/index";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      retry: false,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider delayDuration={300}>
        <HashRouter>
          <Routes>
            <Route path={ROUTE_PATHS.HOME} element={<Home />} />
            <Route
              path="*"
              element={
                <div className="flex min-h-screen items-center justify-center bg-background text-foreground p-4">
                  <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight text-primary">404</h1>
                    <p className="text-muted-foreground italic">
                      La page que vous recherchez semble s'être égarée dans les archives du Makhzen.
                    </p>
                    <a
                      href="#/"
                      className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
                    >
                      Retourner à la présentation
                    </a>
                  </div>
                </div>
              }
            />
          </Routes>
        </HashRouter>
        <Toaster />
        <Sonner />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
