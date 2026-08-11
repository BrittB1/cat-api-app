import Card from "./Card.jsx";

function Gallery({ cats, favorites = [], onToggleFavorite }) {
  if (cats.length === 0) return null;

  return (
    <section className="gallery">
      {cats.map((cat) => (
        <Card
          key={cat.id}
          cat={cat}
          isFavorite={favorites.some((fav) => fav.imageId === cat.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </section>
  );
}
export default Gallery;