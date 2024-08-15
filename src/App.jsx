import React from 'react';
import styles from './style';

import {Experience, Footer, Header, Project, Resume, MoreAboutMe, Navbar} from "./components";

function App() {
  return (
    <div className='bg-primaryGreen w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primaryGreen ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Header />
        </div>
      </div>

      <div className={`bg-primaryGreen ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Experience />
          <Project />
          <Resume />
          <MoreAboutMe />
          <Footer />
        </div>
      </div>
      
    </div>
  );
}

export default App;
