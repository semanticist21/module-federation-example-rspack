import { Outlet } from 'react-router-dom';
import { Header } from './header';
import { useHeaderSize } from '../../hooks/useHeaderSize';

export const Main = () => {
  // hooks
  const headerHeight = useHeaderSize();

  return (
    <section className="size-full bg-gray-900">
      <Header />
      <main className="size-full" style={{ paddingTop: headerHeight }}>
        <Outlet />
      </main>
    </section>
  );
};
