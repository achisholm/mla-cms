import Link from 'next/link'

export default function Navbar() {
  return (
    <div>

      <header className="header">
        <div className="container container--header">
          <div className="header-menu-button-container">
            <button className="header-menu-button js-menu-toggle">
              <span className="header-menu-button__content">
              <span className="icon icon--menu header-menu-button__icon">
              </span>Menu</span>
            </button>
          </div>
          
          <a className="header-logo" href="/"></a>

          <div className="header-main">
            <form method="GET" action="/search" className="header-search">
              <input name="query" className="header-search__input" type="text" placeholder="Search ML Accessories…"/>
              <button className="header-search__submit" type="submit">
                <span className="icon icon--magnify"></span>
              </button>
            </form>
          </div>
        </div>
      </header>

      {/* <style jsx>{`
        nav {
          text-align: center;
        }
        nav a {
          margin-right: 2px;
          padding: 4px;
        }
      `}
      </style> */}

      <div className="mega-menu">
        <div className="container container--mega-menu">
          <nav className="mega-menu__top-level">
            <ul className="menu">
              <li className="menu__item">
                <Link href="/">
                  <a className="menu__link">Home</a>
                </Link>
              </li>
              <li className="menu__item">
                <Link href="/blog">
                  <a className="menu__link">Blog</a>
                </Link>
              </li>
              <li className="menu__item">
                <Link href="/about">
                  <a className="menu__link">About</a>
                </Link>
              </li>
              <li className="menu__item">
                <Link href="/rooms">
                  <a className="menu__link">Room by Room</a>
                </Link>
              </li>
              <li className="menu__item">
                <Link href="/projects">
                  <a className="menu__link">Inspiration Hub</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

    </div>   
  );
}