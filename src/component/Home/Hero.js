function Hero() {
  const links = [
    'Cloud Transformation',
    'Intelligent Automation',
    'Cloud Security Services',
  ];
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <h1 className="heading">Digital & Cloud Services</h1>
          <p className="text">
            Scale your business experientially and securely with our Digital &
            Cloud Services
          </p>
        </div>
      </section>
      <ul className="hero-bar">
        {links.map((link) => {
          return (
            <li>
              <a className="link" href="/">
                {link}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Hero;
