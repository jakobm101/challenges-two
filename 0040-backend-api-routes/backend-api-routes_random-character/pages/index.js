import useSWR from "swr";

export default function HomePage() {
  const { data: person, isLoading } = useSWR(`/api/`, (url) =>
    fetch(url).then((res) => res.json())
  );
  if(isLoading) return 'is Loading'
  return (
    <>
      <h1>Fantastic People from Imagi Nation</h1>
      <h2>{person.name}</h2>
      <h4>Soul Animal: {person['soul animal']}</h4>
      <p>Birthday: {person.birthday}</p>
    <p>City: {person.city}</p>
    <p>Email: {person.email}</p>
    </>
  );
}
