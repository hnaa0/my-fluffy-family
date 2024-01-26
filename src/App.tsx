import GlobalStyles from "./GlobalStyles";
import AppRouter from "./Router";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;
