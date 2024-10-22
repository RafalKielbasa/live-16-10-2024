/* eslint-disable react/prop-types */
const Article = ({ title, content, author, date }) => {
  return (
    <div>
      <parseFloat>
        {"Tytuł: "}
        {title}
      </parseFloat>
      <p>
        {"Opis: "}
        {content}
      </p>
      <p>
        {"Autor: "}
        {author}
      </p>
      <p>
        {"Utworzone: "}
        {date}
      </p>
      <hr />
    </div>
  );
};

export default Article;
