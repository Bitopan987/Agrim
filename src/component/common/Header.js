import { Link } from 'react-router-dom';
function Header() {
  const navData = [
    { name: 'Digital & Cloud', link: '/' },
    { name: 'Cyber Security', link: '/' },
    { name: 'Skills Advantage', link: '/' },
    { name: 'About', link: '/' },
  ];
  return (
    <header className="header">
      <div className="container flex justify-between align-center">
        <div className="logo">
          <Link href="/">AGRIM</Link>
        </div>
        <nav className="navbar flex justify-between align-center">
          <ul className="nav flex">
            {navData.map((data) => {
              return (
                <li className="flex align-center">
                  <Link href={data.link}>{data.name}</Link>
                  <i class="ri-arrow-down-s-line"></i>
                </li>
              );
            })}
          </ul>
          <div className="btn_container flex justify-between align-center">
            <Link href="/">
              <i class="ri-grid-fill menu"></i>
            </Link>
            <Link className="btn_primary btn flex justify-between align-center">
              Contact Us<i class="ri-arrow-right-line arrow"></i>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
