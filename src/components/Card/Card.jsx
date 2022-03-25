function handleOnClick(id) {
  window.location.href = '/logement/' + id
}

function Card(props) {
  const logement = props.data

  return (
    <div className="cardContainer" onClick={() => handleOnClick(logement.id)}>
      <img src={logement.cover} alt="" />
      <h1>{logement.title}</h1>
    </div>
  )
}

export default Card
