function Card({ cat }) {
  const breedName = cat.breeds?.[0]?.name ?? "Unknown breed";

  return (
    <article className="card">
      <img src={cat.url} alt="A cat" loading="lazy" />
      <p className="breed">{breedName}</p>
    </article>
  );
}

export default Card;