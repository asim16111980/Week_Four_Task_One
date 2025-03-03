import './App.css';
import Header from './components/Header';
import TopHeader from './components/TopHeader';
import {  SearchBoxProvider } from './context/SearchBoxProvider';

function App() {

  return (
    <>
      <TopHeader />
      <SearchBoxProvider>
        <Header />
      </SearchBoxProvider>
    </>
  )
}

export default App
