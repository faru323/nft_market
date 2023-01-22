import React from 'react'
import styles from "./footer.module.css"
import { RxDiscordLogo,RxTwitterLogo,RxInstagramLogo} from 'react-icons//rx';
import { AiOutlineYoutube} from 'react-icons//ai';
const Footer = () => {
  return (
    <footer className={styles.app__footer}>
    <div className='container'>
    <div className={styles.app__footer__content}>
      <div className={styles.app__footer__content__right}>
      <a href="#">  
      <img src='https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/storefront-2@2x.svg' alt='logo'/>
      <img src='https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/nft-marketplace-1@2x.svg' alt='logotext'/>
      
     </a>
        <p className={styles.app__footer__content__right__text}>NFT marketplace UI created with Anima for Figma.</p>
        <p className={styles.app__footer__content__right__joinour}>Join our community</p>
        <div className={styles.app__footer__content__right__icon}>
          <a href="#">
          <RxDiscordLogo/>
          </a>
          <a href="#">
           <AiOutlineYoutube/>
          </a>
          <a href="#">
      <RxTwitterLogo/>
          </a>
          <a href="#">
          <RxInstagramLogo/>
          </a>
        </div>
      </div>
      <div className={styles.app__footer__content__middle}>
        <h4 className={styles.app__footer__content__middle__title}>Explore</h4>
        <ul>
          <li className={styles.app__footer__content__middle__title__li}><a href="#">Marketplace</a></li>
          <li className={styles.app__footer__content__middle__title__li}><a href="#">Rankings</a></li>
          <li className={styles.app__footer__content__middle__title__li}><a href="#">Connect a wallet</a></li>
        </ul>
      </div>
      <div className={styles.app__footer__content__left}>
        <h4>Join our weekly digest</h4>
        <p>Get exclusive promotions & updates straight to your inbox.</p>
        <div>
          <input type="text" placeholder="Enter your email here"/>
          <button> Subscribe</button>
        </div>
      </div>
    </div>
    <div className={styles.app__footer__bottom }>
      <span>Ⓒ NFT Market. Use this template freely.</span>
    </div>
    
    </div>
  </footer>
  )
}

export default Footer