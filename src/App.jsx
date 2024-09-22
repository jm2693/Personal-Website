import React from 'react';
import styles from './style';

import { Experience, Footer, Header, Project, Resume, MoreAboutMe, Navbar } from "./components";

function App() {
  return (
    <div className='bg-primaryGreen w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primaryGreen ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Header />
        </div>
      </div>

      <div className='bg-secondaryGreen py-6'></div>

      <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <div className="md:grid md:grid-cols-12 gap-4">
            <div className="md:col-span-5 relative"></div>
            <div className="md:col-span-7">
              <div className="h-[180px] md:h-[305px]"></div>
              <Experience />
              <Project />
              <Resume />
              <MoreAboutMe />
            </div>
          </div>
        </div>
      </div>

      <div>
        <Footer className="bg-secondaryGreen" />
      </div>

    </div>
  );
}

export default App;