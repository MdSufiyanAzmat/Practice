import './App.css'
import Accordian from './Components/Accordian'
import RandomColor from './Components/RandomColor'
import Star from './Components/Star'
import Slider from './Components/Slider'


function App() {
  return (
    <>
    <div className='flex gap-10 flex-col'>
      {/* <Accordian/>
      <RandomColor/>
      <Star noOfStars={10}/> */}
      <Slider url='https://picsum.photos/v2/list' page={1} limit={10}/>

</div>
    </>
  )
}

export default App
