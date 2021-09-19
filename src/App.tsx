import { Content } from './components/Content';
import { SideBar } from './components/SideBar';
import { MoviesContextProvider } from './MoviesContext';
import './styles/global.scss';

export function App() {
  return (
    <MoviesContextProvider>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SideBar />
        <Content />
      </div>
    </MoviesContextProvider>
  )
}