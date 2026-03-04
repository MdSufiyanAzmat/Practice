import './App.css'
import Accordian from './Components/Accordian'
import RandomColor from './Components/RandomColor'
import Star from './Components/Star'
import Slider from './Components/Slider'
import LoadMore from './Components/LoadMore'
import Qr from './Components/Qr'
import Toggle from './Components/Toggle/Toggle'
import Scroll from './Components/Scroll'
import TabTest from './Components/TabTest'

function App() {
  return (
    <>
    <div className='flex gap-10 flex-col'>
      {/* <Accordian/>
      <RandomColor/>
      <Star noOfStars={10}/> 
      <Slider url='https://picsum.photos/v2/list' page={1} limit={10}/>

        <LoadMore url='https://picsum.photos/v2/list' page={1} limit={10}/>

         <Qr />

        <Toggle />

        <Scroll /> */}

        <TabTest />



</div>
    </>
  )
}

export default App
