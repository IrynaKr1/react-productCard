import React from 'react';
import Header from '../../components/Header';
import styles from './MainPage.module.scss';

function MainPage () {
  return (
    <>
      <div className={styles.mainPage}>
        <Header />
      </div>
    </>
  );
}

export default MainPage;
