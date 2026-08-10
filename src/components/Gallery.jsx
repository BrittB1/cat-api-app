import Card from "./Card.jsx";

function Gallery({ cats }) {
  if (cats.length === 0) return null;

  return (
    <section className="gallery">
      {cats.map((cat) => (
        <Card key={cat.id} cat={cat} />
      ))}
    </section>
  );
}
export default Gallery;