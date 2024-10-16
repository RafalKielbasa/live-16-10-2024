import { useForm } from "react-hook-form";
import styles from "./FormComponent.module.css";
const FormComponent = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <form className={styles.form} conSubmit={handleSubmit(onSubmit)}>
      <input {...register("title", { required: true })} placeholder="title" />
      <input
        {...register("content", { required: true })}
        placeholder="content"
      />
      <input {...register("author", { required: true })} placeholder="author" />
      <input {...register("date", { required: true })} placeholder="date" />
      <button type="submit">Wyślij formularz</button>
    </form>
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
