function Header() {
  return (
    <header className="flex items-center justify-between border-b border-slate-700 bg-slate-900 px-6 py-4 text-white">
      <h1 className="text-2xl font-bold">🍜 Sakura Ramen</h1>

      <nav>
        <ul className="flex items-center gap-6">
          <li>
            <a href="" className="hover:text-orange-400">
              Menu
            </a>
          </li>

          <li>
            <a href="" className="hover:text-orange-400">
              About
            </a>
          </li>

          <li>
            <a href="" className="hover:text-orange-400">
              Contact
            </a>
          </li>

          <li>
            <a href="" className="hover:text-orange-400">
              🛒 0
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
