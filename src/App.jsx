import './App.css';
import Header from './components/Header';
import TopHeader from './components/TopHeader';
import { SearchBoxProvider } from './context/SearchBoxProvider';
import { MenusContext, MenusProvider } from './context/MenusProvider';

function App() {

  return (
    <>
      <TopHeader />
      <SearchBoxProvider>
        <MenusProvider>
          <Header />
        </MenusProvider>
      </SearchBoxProvider>
    </>
  )
}

export default App
