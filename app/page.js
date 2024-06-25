import Bar from '../components/Bar'
import Header from '../components/Header'
import InfoCard from '../components/InfoCard'
import Checklist from '../components/Checklist'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Bar />
      <div className="container mx-auto max-w-2xl p-4">
        <Header />
        <main className="bg-white rounded-lg shadow-md p-6">
          <InfoCard />
          <Checklist />
        </main>
      </div>
    </div>
  )
}