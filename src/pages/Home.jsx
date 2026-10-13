import Navbar from '../Component/Navbar'
import MainSection from '../sections/MainSection'
import Section2 from '../sections/Section2'
import Section3 from '../sections/Section3'
import Investor from '../sections/Investor'

function Home() {
  return (
    <div>
        <Navbar />
        <MainSection />
        <Section2 />
        <Section3 />
        <Investor />
    </div>
  )
}

export default Home