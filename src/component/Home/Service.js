function Service() {
  return (
    <section className="service-section">
      <div className="container flex justify-between align-center">
        <aside className="flex-20">
          <ul className="options">
            <li>
              <a href="/">Cloud Transformation</a>
            </li>
            <li>
              <a href="/" id="active">
                Intelligent Automation
              </a>
            </li>
            <li>
              <a href="/">Cloud Security Services</a>
            </li>
          </ul>
        </aside>
        <article className="service-content flex-40">
          <h3>Digital & Cloud Services</h3>
          <h2>Intelligent Automation</h2>
          <p>
            What is intelligent automation? Intelligent automation (IA),
            sometimes also called cognitive automation, is the use of automation
            technologies – artificial intelligence (AI), business process
            management (BPM), and robotic process automation (RPA) – to
            streamline and scale decision-making across organizations.
          </p>
          <ul>
            <li>Activity and Assessment</li>
            <li>Business Process Automation</li>
            <li>Artificial Intelligence and Analytic Solution</li>
          </ul>
          <a href="/" className="btn btn-secondary">
            Let's Work Together
          </a>
        </article>
        <div className="img-container flex-30">
          <img src="/images/Group.png" alt="Group.png"></img>
          <span>O1</span>
        </div>
      </div>
    </section>
  );
}

export default Service;
