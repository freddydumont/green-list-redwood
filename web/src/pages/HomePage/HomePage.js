import Hero from 'src/components/Hero/Hero'
import HowItWorks from 'src/components/HowItWorks/HowItWorks'
import GlobalLayout from 'src/layouts/GlobalLayout/GlobalLayout'

const HomePage = () => {
  return (
    <GlobalLayout>
      <Hero />
      <HowItWorks />
    </GlobalLayout>
  )
}

export default HomePage
