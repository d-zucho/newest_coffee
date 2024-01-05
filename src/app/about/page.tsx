const About = () => {
  return (
    <section className='my-[200px] w-full'>
      <h4 className='text-my_gray text-my_title4'>How it works</h4>

      <div id='howitworks' className='relative'>
        <div className='absolute'>
          <div className='h-[50px] flex items-center relative'>
            <img src='/assets/home/desktop/line.svg' alt='' />
            <div className='absolute grid grid-cols-3 w-full'>
              <div id='step1'>
                <img src='/assets/home/desktop/3steps.svg' alt='' />
              </div>
              <div id='step2'>
                <img src='/assets/home/desktop/3steps.svg' alt='' />
              </div>
              <div id='step3'>
                <img src='/assets/home/desktop/3steps.svg' alt='' />
              </div>{' '}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
