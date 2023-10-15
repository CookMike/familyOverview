import './styles/index.scss';
import './body/components/pageLayout/headerComponent'
import { Routes, Route } from 'react-router-dom'

import { Header } from './body/components/pageLayout/headerComponent';
import { Footer } from './body/components/pageLayout/footerComponent';
import { HomePage } from './body/pages/homePage';
import { CalendarPage } from './body/pages/calendarPage';
import { FotoPage } from './body/pages/fotoPage';
import { NewsPage } from './body/pages/newsPage';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path = "/" element={<HomePage/>}/>
      <Route path = "/calendar" element={<CalendarPage/>}/>
      <Route path = "/foto" element={<FotoPage/>}/>
      <Route path = "/news" element={<NewsPage/>}/>
    </Routes>
    <Footer title={'footer'}/>
    </>
   )
  
}

export default App;
