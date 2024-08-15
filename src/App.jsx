import React from 'react';
import styles from './style';

function App() {
  return (
    <div className='bg-primaryGreen w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          NavBar
        </div>
      </div>

      <div className={`bg-primaryGreen ${styles.flexStart}`}>

      </div>

    </div>
  );
}

export default App;
