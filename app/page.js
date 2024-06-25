import Bar from '../components/Bar'
import Header from '../components/Header'
import InfoCard from '../components/InfoCard'
import Checklist from '../components/Checklist'
import Button from '../components/Button'


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Bar />
      <Header />
      <div className="container mx-auto max-w-2xl p-6 bg-white rounded-lg shadow-md">
        <InfoCard />
        <Checklist />
        <Button />
      </div>
    </div>
  )
}