import type { NextPage } from "next";
import { useForm, SubmitHandler } from "react-hook-form";
import useSWR from "swr";

type MyFormData = {
  firstName: string;
  lastName: string;
  category: string;
};

type User = {
  name: string;
};

const fetchUser = async () => {
  return new Promise<User>((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve({ name: "ホンダ" } as User);
      }, 5000);
    } catch {
      reject("エラー");
    }
  });
};

const Home: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MyFormData>();

  const { data, error } = useSWR<User>("bazz", fetchUser);

  const onSubmit: SubmitHandler<MyFormData> = (data) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("firstName", { required: true })}
          placeholder="名前"
        />
        {errors.firstName && <div>名前を入力してください</div>}

        <input
          {...register("lastName", { required: true })}
          placeholder="苗字"
        />
        {errors.lastName && <div>苗字を入力してください</div>}
        <select {...register("category", { required: true })}>
          <option value="">選択...</option>
          <option value="A">カテゴリA</option>
          <option value="B">カテゴリB</option>
        </select>
        {errors.category && <div>カテゴリを選択してください</div>}
        <input type="submit" />
      </form>
      <h1>
        {error && "エラー"}
        {data && data.name}
      </h1>
    </>
  );
};

export default Home;
