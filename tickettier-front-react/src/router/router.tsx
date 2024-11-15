import {lazy, Suspense} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import CustomSpinner from '../components/spinner/CustomSpinner';


/*
import HomePage from '../pages/HomePage'
import NotFoundPage from '../pages/NotFoundPge'
import TicketsIndexPage from '../pages/tickets/TicketsIndexPage'
import TicketsCreatePage from '../pages/tickets/TicketsCreatePage'
import TicketsDetailsPage from '../pages/tickets/TicketsDetailsPage'
import TicketEditPage from '../pages/tickets/TicketEditPage'
import TicketDeletePage from '../pages/tickets/TicketDeletePage'
*/

//import using lazy loading
const HomePage = lazy(() => import('../pages/HomePage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPge'));
const TicketsIndexPage = lazy(() => import('../pages/tickets/TicketsIndexPage'));
const TicketsCreatePage = lazy(() => import('../pages/tickets/TicketsCreatePage'));
const TicketsDetailsPage = lazy(() => import('../pages/tickets/TicketsDetailsPage'));
const TicketEditPage = lazy(() => import('../pages/tickets/TicketEditPage'));
const TicketDeletePage = lazy(() => import('../pages/tickets/TicketDeletePage'));

const GlobalRouter = () => {
  return (
    <Suspense  fallback={<CustomSpinner />}>
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/tickets'>
            <Route index element={<TicketsIndexPage />} />
            <Route path='create' element={<TicketsCreatePage />} />
            <Route path=':id' element={<TicketsDetailsPage />} />
            <Route path='edit/:id' element={<TicketEditPage />} />
            <Route path='delete/:id' element={<TicketDeletePage />} />
          </Route>
          <Route path='/404' element={<NotFoundPage />} />
          <Route path='*' element={<Navigate to="/404" />} />
      </Routes>
    </Suspense>  
  );
}

export default GlobalRouter;