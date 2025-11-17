import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen p-4">
        <AppRoutes />
      </main>
      <Footer />
    </>
  );
}
