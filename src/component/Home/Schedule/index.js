import data from './constants';
import { Link } from 'react-router-dom';
function Schedule() {
  return (
    <section className="schedule-sec">
      <div className="flex justify-between item-center container">
        <h3 className="heading">Get Started With Us</h3>
        <div className="flex justify-between item-center cards">
          {data.map((val) => {
            const { heading, text, link, src } = val;
            return (
              <ScheduleCard
                heading={heading}
                src={src}
                text={text}
                link={link}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ScheduleCard({ heading, text, link, src }) {
  return (
    <article className="card">
      <img src={src} alt="col1.png"></img>
      <h2>{heading}</h2>
      <p>{text}</p>
      <Link href="/" className="btn-ternary btn">
        {link}
      </Link>
    </article>
  );
}
export default Schedule;
