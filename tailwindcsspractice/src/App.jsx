
import { Appbar } from './Component/Appbar'
import { Footer } from './Component/footer'
import { Herosection } from './Component/Herosection'
import { Information } from './Component/information'
import { LastSection } from './Component/last'
import { Pricing } from './Component/pricing'
import { Review } from './Component/review'
import { Service } from './Component/servie'

function App() {


  return (
    <>
 <Appbar/>
 <Herosection/>
 <Service/>
 <Information/>
<Pricing/>
<Review/>
<LastSection/>
<Footer/>
    </>
  )
}

export default App
