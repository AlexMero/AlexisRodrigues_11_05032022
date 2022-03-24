function Profil({ profilData }) {
  return (
    <div className="profilContainer">
      <span>{profilData.name}</span>
      <img src={profilData.picture} alt="Profil du propriétaire" />
    </div>
  )
}

export default Profil
