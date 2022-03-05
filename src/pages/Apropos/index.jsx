import Bandeau from '../../components/Bandeau'
import Header from '../../components/Header'
import bckgrndBandeauApropos from '../../assets/bckgrndBandeauApropos.png'

function Apropos() {
  return (
    <div>
      <Header />
      <Bandeau picture={bckgrndBandeauApropos} key="2" />
    </div>
  )
}

export default Apropos
