import useSWR from "swr";

export default function HomePage() {
  const {
    data: { name, birthday, city, email, ["soul animal"]: soulAnimal } = {},
    isLoading,
    error,
  } = useSWR(`/api/`, (url) => fetch(url).then((res) => res.json()));
  if (isLoading) return "is Loading";
  if (error) return "error";
  return (
    <>
      <h1>Fantastic People from Imagi Nation</h1>
      <h2>{name}</h2>
      <h4>Soul Animal: {soulAnimal}</h4>
      <p>Birthday: {birthday}</p>
      <p>City: {city}</p>
      <p>Email: {email}</p>
    </>
  );
}
