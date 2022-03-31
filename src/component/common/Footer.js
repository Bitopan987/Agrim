import { Link } from 'react-router-dom';
function Footer() {
  const data = [
    {
      heading: 'Services',
      link1: 'Cloud Solution',
      link2: 'Cyber Security',
      link3: 'Skill Advantage',
    },
    {
      heading: 'Our Results',
      link1: 'Case Study',
      link2: 'Testimonials',
      link3: 'Clients',
    },
    {
      heading: 'Company',
      link1: 'who we are',
      link2: 'our founders',
      link3: 'our team',
    },
  ];
  return (
    <footer class="footer">
      <div class="container flex justify-between align-center">
        <div class="address-col flex-40">
          <strong>AGRIM</strong>
          <address>
            <p>Based in Norway helping worldwide</p>
            <h5>Terminal 9B</h5>
            <h5>3414 Lierstanda</h5>
            <h5>Norway</h5>
          </address>
          <div>
            <span>
              <i class="ri-linkedin-line"></i>
            </span>
            <span>
              <i class="ri-facebook-line"></i>
            </span>
          </div>
        </div>
        <ul className="footer-links flex-60 flex justify-between align-center">
          {data.map((val) => {
            return (
              <li>
                <h5>{val.heading}</h5>
                <Link href="/">{val.link1}</Link>
                <Link href="/">{val.link2}</Link>
                <Link href="/">{val.link3}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
