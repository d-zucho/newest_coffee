const Hero = () => {
  return (
    <div className='w-full fkex flex-col items-center'>
      <div className='hero w-full h-[600px] rounded-xl'>
        <div className='pl-16 pt-24 text-my_bg flex flex-col'>
          <span className='h1 text-my_title1 block'>Great coffee</span>
          <span className='h1 text-my_title1'>made simple.</span>
          <p className='w-2/5 opacity-70 mt-8'>
            Start your mornings with the world’s best coffees. Try our expertly
            curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule.
          </p>
          <button className='bg-my_cyan mt-12 px-4 py-2 w-fit rounded-md font-extrabold'>
            Create your plan
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
