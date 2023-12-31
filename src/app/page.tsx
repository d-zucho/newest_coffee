import Benefits from '@/sections/Benefits'
import { coffeeData } from '../coffeedata'
import CoffeeCard from '@/components/CoffeeCard'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import { benefitData } from '@/data/benefitData'
import About from './about/page'

export default function Home() {
  return (
    <div className='min-h-screen bg-my_bg z-0'>
      <div className='container mx-auto '>
        <Hero />

        <CoffeeCard coffeeData={coffeeData} />
        <Benefits benefitsData={benefitData} />
        <About />
      </div>
    </div>
  )
}
