import { useAppDispatch } from "redux/hooks";
import { IFormValues } from "types/types";
import MovieForm from "components/common/MovieForm";

const AddMoviePage = () => {
  const dispatch = useAppDispatch();
  const submitForm = (data: IFormValues) => {
    console.log({ data });
  };

  return <MovieForm onSubmit={submitForm} />;
};
export default AddMoviePage;
