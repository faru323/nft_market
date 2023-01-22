import React, { useEffect, useState } from "react";
import { ImRocket } from 'react-icons//im';
import axios from "axios";
import styles from "./nfts.module.css";
const Nfts = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/api/nfts").then((res) => setCards(res.data));
  }, []);
  return (
    <div className={styles.topCreators}>
      <div className="container">
        <div className={styles.topCreators__header}>
          <div className={styles.topCreators__header__left}>
            <h3>Top creators</h3>
            <p>Checkout Top Rated Creators on the NFT Marketplace</p>
          </div>

          <div className={styles.topCreators__header__right}>
            <button>
              <ImRocket/>
              <span> View Rankings</span>
            </button>
          </div>
        </div>

        <div className={styles.cardV1}>
          {cards.map((card) => {
            return (
              <div className={styles.card}>
                <div className={styles.card__content__top}>
                  <img
                    className={styles.card__image}
                    src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder@2x.png"
                  />
                </div>
                <div className={styles.card__content__bottom}>
                  <h4>{card.title}</h4>
                  <div className={styles.author}>
                    <img
                      src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-2@2x.png"
                      alt="nftsAuthor"
                    />
                    <span className={styles.card__author}>{card.user}</span>
                  </div>
                  <div className={styles.card__content__bottom__end}>
                    <div className={styles.card_bottom}>
                      <p>Price: </p>
                      <h5>{card.price}</h5>
                    </div>
                    <div className={styles.card_bottom}>
                      <p>Highest Bid: </p>
                      <h5>{card.highestBid}</h5>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Nfts;
