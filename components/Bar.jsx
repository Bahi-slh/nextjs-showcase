import { FiHelpCircle } from 'react-icons/fi';

export default function Bar() {
  return (
    <div className="bg-indigo-600 text-white p-2 flex justify-end">
      <div className="flex items-center">
        <FiHelpCircle className="mr-1" />
        <span>Support</span>
      </div>
    </div>
  );
}