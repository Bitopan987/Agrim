import data from './constants';

function About() {
  return (
    <section className="about-section">
      <div className="container flex justify-between item-center">
        <article className="content">
          <h2 className="content-header">
            Get your business ready scaling by using Agrim's Cloud Integation
            Services
          </h2>
          <a href="/" className="btn btn-secondary">
            Let's Work Together
          </a>
        </article>
        <div className="flex cards flex-wrap">
          {data.map((val) => {
            const { heading, text, timeToRead, numberOfPages } = val;
            console.log(heading);
            return (
              <Article
                heading={heading}
                text={text}
                timeToRead={timeToRead}
                numberOfPages={numberOfPages}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Article({ heading, text, timeToRead, numberOfPages }) {
  return (
    <article className="card">
      <h2 className="heading">{heading}</h2>
      <p className="text">{text}</p>

      <div className="flex justify-between item-center card-bottom">
        <div>
          <span className="time">{timeToRead} min read</span>
          <h2 className="number">{numberOfPages}</h2>
        </div>
        <i class="ri-arrow-right-line"></i>
      </div>
    </article>
  );
}

export default About;
