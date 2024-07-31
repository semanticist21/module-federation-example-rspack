import { useUserStore } from '@react-monorepo-2/store';

export const Header = () => {
  // store
  const { username, setUsername } = useUserStore();

  return (
    <header
      id="app-header"
      className="w-full text-lg text-white fixed top-0 px-6 py-2 gap-4"
    >
      <ul className="flex items-center gap-4">
        <li>
          <a href="/home">HOME</a>
        </li>
        <li>
          <a href="/ui">UI</a>
        </li>
        <li>
          <a href="/store">STORE</a>
        </li>
        <li className="ml-auto flex gap-4 items-center">
          {username && (
            <>
              <span className="text-sm">{username}님 안녕하세요!</span>
              <button onClick={() => setUsername('')}>LOGOUT</button>
            </>
          )}
          {!username && (
            <button onClick={() => setUsername('anonymous')}>LOGIN</button>
          )}
        </li>
      </ul>
    </header>
  );
};
