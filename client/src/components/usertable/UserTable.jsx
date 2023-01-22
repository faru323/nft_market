import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styles from './usertable.module.css'
import 'flowbite';

const UserTable = () => {

  const [tables, setTables] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/api/users").then((res) => setTables(res.data));
  }, []);


  return (
    <div className={styles.ranking}>
     
    <div className="container">
    <div className={styles.topCreators__header}>
      <div className={styles.topCreators__header__left}>
        <h3>Top creators</h3>
        <p>Checkout Top Rated Creators on the NFT Marketplace</p>
      </div>
      
    </div>


<div className={styles.table__head}>
  <h2>Today</h2>
  <h2>This Week</h2>
  <h2>This Month</h2>
  <h2>All Time</h2>
  </div>
<div>

<div className={styles.container}>
  <ul className={styles.responsive_table}>

  <li className={styles.table_header}>
  <div className={`${styles.col} ${styles.col_1}`}>#Artist</div>
  <div className={`${styles.col} ${styles.col_2}`}>Change</div>
  <div className={`${styles.col} ${styles.col_3}`}>Nfts Sold</div>
  <div className={`${styles.col} ${styles.col_4}`}>Volume</div>
  <div className={`${styles.col} ${styles.col_5}`}>New Nft</div>
</li>

  {tables.map((table) => {
    return (
     
      <li class={styles.table_row}>
      
      <div class={`${styles.col} ${styles.col_1} ${styles.color} ${styles.name} `} data-label="Artist"> <img className={styles.imageArtist} src='https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-5@2x.png' alt=''/>  {table.fullName}</div>
      <div class={`${styles.col} ${styles.col_2} ${styles.colorC}`} data-label="Change">{table.change}</div>
      <div class={`${styles.col} ${styles.col_3} ${styles.color}`} data-label="NftsSold">{table.nftsSold}</div>
      <div class={`${styles.col} ${styles.col_4} ${styles.color}`} data-label="Volume">{table.volume}</div>
      <div class={`${styles.col} ${styles.col_4} ${styles.color}  `} data-label="Button"> <button className={styles.button}>Add nft</button></div>


    </li>
    );
  })}


  </ul>





</div>

















</div>


    </div>
    
    </div>
  )
}

export default UserTable