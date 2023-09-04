import './../style/components/header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

function Header({prod}) {

  return (
    <div className="header">
        <h2 className='header_title'>My Shop</h2>
        <div className="header_basket">{prod} <FontAwesomeIcon icon={faCartShopping} /></div>
    </div>
  )
}

export default Header;