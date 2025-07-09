import useSWR from "swr";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";

export default function Character() {
  const router = useRouter();
  const { id } = router.query;
  const url = `https://swapi.py4e.com/api/people/${id}`;

  const { data, isLoading, error } = useSWR(url);
  const { name, height, eye_color, birth_year } = data || {};

  return (
    <Layout>
      {data ? (
        <Card
          id={id}
          name={name}
          height={height}
          eyeColor={eye_color}
          birthYear={birth_year}
        />
      ) : isLoading?(
        "Loading"
      ): error? `error, ${error}` : 'wait what?'}
    </Layout>
  );
}
