import { Coffee } from '@/coffeedata'
import Image from 'next/image'

interface Iprops {
  coffeeData: Coffee[]
}

const CoffeeCard = ({ coffeeData }: Iprops): JSX.Element => (
  <div className='responsive grid grid-cols-4 justify-around my-40 gap-3 mx-4'>
    {coffeeData.map((coffee: Coffee) => {
      return (
        <article key={coffee.name} className='text-center max-w-[250]'>
          <Image
            src={coffee.imgURL}
            alt={coffee.name}
            width={250}
            height={200}
            className='mx-auto'
          />
          <div className=''>
            <h2 className='text-my_title4 font-black text-center text-my_dblue'>
              {coffee.name}
            </h2>
            <p className='p-2 text-my_gray'>{coffee.description}</p>
          </div>
        </article>
      )
    })}
  </div>
)

export default CoffeeCard
