import { FiInfo } from 'react-icons/fi';

export default function InfoCard() {
  return (
    <div className="bg-gray-100 rounded-lg p-4 mb-6">
      <div className="flex items-center mb-2">
        <FiInfo className="text-gray-500 mr-2" />
        <p className="text-gray-700 font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  );
}