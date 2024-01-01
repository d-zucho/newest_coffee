import Image from 'next/image'

interface Props {
  title: string
  description: string
  icon: string
}

const BenefitCard = ({ title, description, icon }: Props): JSX.Element => (
  <article
    key={title}
    className='flex flex-col justify-center items-center rounded-xl bg-my_cyan w-[350px] px-4 py-8 text-center'
  >
    <Image src={icon} alt='icon' width={72} height={72} className='my-14' />
    <div className='benText'>
      <h2 className='text-my_title4 font-black text-center text-[#fff]'>
        {title}
      </h2>
      <p className='p-2 text-my_bg'>{description}</p>
    </div>
  </article>
)

export default BenefitCard
