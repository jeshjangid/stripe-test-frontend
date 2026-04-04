import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Checkout from "./components/Checkout";
import PaymentTable from "./components/PaymentsTable";
import Success from "./Success";
import Cancel from "./Cancel";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Checkout />
                  <PaymentTable />
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/donate" element={<Checkout />} />
            <Route path="/payments" element={<PaymentTable />} />
            <Route path="/success" element={<Success />} />
            <Route path="/cancel" element={<Cancel />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;