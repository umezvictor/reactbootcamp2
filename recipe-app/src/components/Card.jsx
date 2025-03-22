export default function Card({ recipe }) {
  //destructuring
  const { image, name, tag, numberOfMinutes } = recipe;
  return (
    <div className="card">
      <img src={image} alt="" />
      <div className="card-content">
        <h3>{name}</h3>
        <div className="card-info">
          <div className="tag">
            <p>{tag}</p>
          </div>
          <p className="time-text">{numberOfMinutes}</p>
        </div>
      </div>
    </div>
  );
}
