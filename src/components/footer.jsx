import React from 'react'
import { Link } from 'react-router-dom'

import Logo from "./../image/LogoNameWhite.png"
import Call from "./../image/Call.png"
import Address from "./../image/Address.png"

const Footer = () => {
  return (
    <div className='container-footer'>
      <div className="logo-footer">
        <img src={Logo} alt="" loading='lazy' />
      </div>
      
      <ul className="ul-footer">
        <li className="li-footer">
          <Link to="/">Home</Link>
        </li>
        <li className="li-footer">
          <Link to="/about">About</Link>
        </li>
        <li className="li-footer">
          <Link to="http://blog.cloudyserver.id">Blog</Link>
        </li>
        <li className="li-footer">
          <Link to="http://store.cloudystore.id">Store</Link>
        </li>
      </ul>
      <div className="address-footer">
        <div className="block-footer">
          <img src={Call} alt="" loading='lazy' />
          <h4>
            +62 852-5830-6657
          </h4>
        </div>
        <div className="block-footer">
          <img src={Address} alt="" loading='lazy' />
          <h4>
            Jalan Danau Ranau <br /> Kelurahan Sawojajar <br />
            Kecamatan Kedungkandang <br /> Kota Malang
          </h4>
        </div>
      </div>
    </div>
  )
}

export default Footer
