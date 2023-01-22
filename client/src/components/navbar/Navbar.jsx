import React from 'react'
import styles from "./navbar.module.css"
import { AiOutlineUser } from 'react-icons//ai';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className={styles.navb}>
    
    <div className={styles.navbLeft}>
    <img src='https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/storefront-2@2x.svg' alt='logo'/>
    <img src='https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/nft-marketplace-1@2x.svg' alt='logotext'/>
    
    </div>
    <div className={styles.navRight}>
    
    <ul className={styles.navUl}>
    
    <li className={styles.navLi}>
    {" "}
      <Link className={styles.navLi} to="/marketplace">
      Marketplace
      </Link>
    </li>
    <li className={styles.navLi}>
    {" "}
      <Link className={styles.navLi}to="/rankings">
      Rankings
      </Link></li>
    <li className={styles.navLi}>Connect a wallet</li>
    <li className={styles.navLi}><button className={styles.signUpBtn}> <AiOutlineUser/>Sign Up</button></li>
    </ul>
    </div>
    </div>
  )
}

export default Navbar