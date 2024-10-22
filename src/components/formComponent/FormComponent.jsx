import { useForm } from "react-hook-form";
import styles from "./FormComponent.module.css";
import ListOfArticles from "./ListOfArticles";

export const BASE_URL = `http://localhost:3000/articles`;

const FormComponent = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log({ data });
    postData(data);
  };

  const postData = (data) => {
    console.log({ data });
    try {
      fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.log("ERROR:", error);
    }
  };

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <>
      <ListOfArticles />
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <input {...register("title", { required: true })} placeholder="title" />
        <input {...register("content", { required: true })} placeholder="content" />
        <input {...register("author", { required: true })} placeholder="author" />
        <input {...register("date", { required: true })} placeholder="date" />
        <button type="submit">Wyślij formularz</button>
      </form>
    </>
  );
};

export default FormComponent;
// {
//     "id": 10,
//     "title": "Integracja React z API RESTful",
//     "content": "Integracja React z API RESTful umożliwia dynamiczne pobieranie i wysyłanie danych, co jest kluczowe dla nowoczesnych aplikacji webowych...",
//     "author": "Natalia Dudek",
//     "date": "2024-10-16"
//   }
