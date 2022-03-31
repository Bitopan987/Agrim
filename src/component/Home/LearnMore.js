import { Link } from 'react-router-dom';
function LearnMore() {
  return (
    <div className="learn-more">
      <div className="container flex justify-between align-center">
        <article>
          <h2>Want to learn more about Cloud</h2>
          <p>
            Understand the advantages with the Agrim Cloud consulting Report
          </p>
        </article>
        <div className="btn-container">
          <Link href="/" className="btn btn-secondary">
            Get The Report
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LearnMore;
