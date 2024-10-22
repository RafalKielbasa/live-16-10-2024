import { useEffect, useState } from "react";
import { BASE_URL } from "./FormComponent";
import Article from "./Article";

const ListOfArticles = () => {
  const [fetchData, setFetchData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const req = await fetch(BASE_URL, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const data = await req.json();
        setFetchData(data);
      } catch (error) {
        console.log("ERROR:", error);
      }
    };
    getData();
  }, []);

  if (!fetchData) return <div>Pobieranie danych...</div>;
  return (
    <div>
      {fetchData.map(({ id, ...rest }) => (
        <Article key={id} {...rest} />
      ))}
    </div>
  );
};

export default ListOfArticles;
