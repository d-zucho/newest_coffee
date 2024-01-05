import { BenefitsType } from '@/data/benefitData'
import BenefitCard from '@/components/BenefitCard'

interface BenefitProps {
  benefitsData: BenefitsType[]
}

const Benefits = ({ benefitsData }: BenefitProps): JSX.Element => {
  return (
    <section className='bg-my_dblue justify-around relative pt-24 mb-[250px]'>
      <div className='text-center w-2/5 mx-auto'>
        <h1 className='text-[#fff] text-my_title2'>Why choose us?</h1>
        <p className='text-my_bg mt-12'>
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>
      </div>
      <div className='flex justify-around mx-auto translate-y-1/3'>
        {benefitsData.map((benefit: BenefitsType) => (
          <BenefitCard
            title={benefit.title}
            description={benefit.description}
            icon={benefit.icon}
          />
        ))}
      </div>
    </section>
  )
}

export default Benefits
