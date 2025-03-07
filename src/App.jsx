import './App.css';
import Header from './components/Header';
import TopHeader from './components/TopHeader';
import Home from './Pages/Home';
import { SearchBoxProvider } from './context/SearchBoxProvider';
import { MenusProvider } from './context/MenusProvider';

function App() {

  return (
    <>
      <SearchBoxProvider>
        <MenusProvider>
            <TopHeader />
            <Header />
            <Home/>
        </MenusProvider>
      </SearchBoxProvider>
    </>
  )
}

export default App
