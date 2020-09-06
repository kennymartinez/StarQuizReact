import React from "react";
import PropTypes from "prop-types";
import "./App.css";
import "./bootstrap.min.css";

const Hero = () => {
  return (
    <div className="row">
      <div className="jumbotron col-10 offset-1">
        <h1>Author Quiz</h1>
        <p>Select the book written by the author shown</p>
      </div>
    </div>
  );
};

const Turn = ({ author, books, highlight, clickHandler }) => {
  const highlightToBgColor = (highlight) => {
    const mapping = {
      none: "",
      correct: "green",
      incorrect: "red",
    };

    return mapping[highlight];
  };
  return (
    <div
      className="row turn"
      style={{ backgroundColor: highlightToBgColor(highlight) }}
    >
      <div className="col-4 offset-1">
        <img src={author.imageUrl} className="authorimage" alt="Author" />
      </div>
      <div className="col-6">
        {books.map((title) => (
          <Book title={title} key={title} clickHandler={clickHandler} />
        ))}
      </div>
    </div>
  );
};

Turn.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    imageSource: PropTypes.string.isRequired,
    books: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
  books: PropTypes.arrayOf(PropTypes.string).isRequired,
  clickHandler: PropTypes.func.isRequired,
  highlight: PropTypes.string.isRequired,
};

const Book = ({ title, clickHandler }) => {
  return (
    <div className="answer" onClick={() => clickHandler(title)}>
      <h4>{title}</h4>
    </div>
  );
};

const Continue = () => {
  return <div></div>;
};

function AuthorQuiz({ turnData, highlight, clickHandler }) {
  return (
    <div className="container-fluid">
      <Hero />
      <Turn {...turnData} highlight={highlight} clickHandler={clickHandler} />
      <Continue />
    </div>
  );
}

export default AuthorQuiz;
