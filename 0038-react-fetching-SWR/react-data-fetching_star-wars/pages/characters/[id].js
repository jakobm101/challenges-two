import useSWR from "swr";
import Card from "../../components/Card";
import Layout from "../../components/Layout";

export default function Character() {
  const id = 1;
  const url = `https://swapi.py4e.com/api/people/${id}`;
  const { data } = useSWR(url);
  const {name, height, eye_color, birth_year} = data || {}

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
      ) : (
        "Loading"
      )}
    </Layout>
  );
}
