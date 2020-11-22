/*React Navbar Dropdown Menu Responsive Tutorial—Beginner React JS Project. (n.d.). Retrieved September 15, 2020, from https://www.youtube.com/watch?v=T2MhVxJxsL0
*/

import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;

// import React from 'react'
// import '../../App.css';

// export default function Home() {
//     return (
//         <>
//         <h1 className='home'>Kayla Jolly Hairdresser</h1>
//         </>
//     )
// }