import data from './constants';
function FaqSection() {
  return (
    <section className="faq-section">
      <div className="container">
        <strong>FaQs</strong>
        <h2>Digital & Cloud Consulting</h2>
        <ul>
          {data.map((val) => {
            return (
              <li className="question">
                <div className="flex justify-between ">
                  <h4>{val.question}</h4>
                  <i class={val.isAdd}></i>
                </div>
                <p>{val.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default FaqSection;
