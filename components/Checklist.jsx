import { FiCheck } from 'react-icons/fi';

export default function Checklist() {
  const items = [
    'posuere cubilia curae',
    'Etiam tincidunt eros nec leo malesuada',
    'in tincidunt sem tincidunt'
  ];

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-3">Primis in faucibus orci luctus et ultrices :</h2>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <span className="flex items-center justify-center w-5 h-5 bg-blue-500 rounded-full mr-2">
              <FiCheck className="text-white text-sm" />
            </span>
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}