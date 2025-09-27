import { Outlet } from "react-router-dom";
import { Header } from "./components/layout";
import { Footer } from "./components/layout";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-6">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
