import Header from '@/components/Header'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <div className='min-h-screen bg-my_bg z-0'>
      <div className='container mx-auto'>
        <Header />
        <Hero />
      </div>
    </div>
  )
}
