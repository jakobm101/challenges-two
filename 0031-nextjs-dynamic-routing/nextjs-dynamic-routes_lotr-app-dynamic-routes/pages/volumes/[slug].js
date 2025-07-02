import { volumes } from "@/lib/data";
import Image from "next/image";
import { useRouter } from "next/router";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);
  const volume = volumes[volumeIndex];
  const { title, description, books, cover } = volume;

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  const handleRandom = () => {
    const randomVolume = getRandomElement(volumes);
    router.push(randomVolume.slug);
  };

  const handleNext = (_,direction = 1) => {
    router.push(volumes[volumeIndex + direction].slug);
  };

  return (
    <>
      <button onClick={() => router.push("/volumes")}>Back to overview</button>
      <button onClick={handleRandom}>Go to random page</button>
      <button onClick={handleNext} disabled={!volumes[volumeIndex + 1]}>
        Next Volume
      </button>
      <button onClick={() => handleNext(true,-1)} disabled={!volumes[volumeIndex - 1]}>
        Previous Volume
      </button>

      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        <li>
          <strong>
            <span>{books[0].ordinal}</span>
          </strong>
          &nbsp; &nbsp; &nbsp;
          <span>{books[0].title}</span>
        </li>
        <li>
          <strong>
            <span>{books[1].ordinal}</span>
          </strong>
          &nbsp; &nbsp; &nbsp;
          <span>{books[1].title}</span>
        </li>
      </ul>
      <Image src={cover} alt="cover image" width={140} height={230} />
    </>
  );
}
