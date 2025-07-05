import useSWR from "swr";
import Card from "../../components/Card";
import Layout from "../../components/Layout";

export default function Character() {
  const id = 1;
  const url = 'https://swapi.py4e.com/api/people/1'
  const fetcher = (url) => fetch(url).then(response => response.json())
  const { data } = useSWR(url, fetcher)
  console.log(data);
  

  return (
    <Layout>
      <Card
        id={id}
        name={"Luke Skywalker"}
        height={172}
        eyeColor={"blue"}
        birthYear={"19BBY"}
      />
    </Layout>
  );
}
