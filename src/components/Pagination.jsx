export default function Pagination() {
  return (
    <div className="mt-10 flex justify-center">
      <nav className="flex items-center space-x-2">
        <a
          href="#"
          className="px-3 py-2 rounded-lg border border-gray-300 text-gray-500 hover:bg-gray-50"
        >
          <i className="fas fa-chevron-left"></i>
        </a>
        <a
          href="#"
          className="px-4 py-2 rounded-lg bg-blue-500 text-white font-medium"
        >
          1
        </a>
        <a
          href="#"
          className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50"
        >
          2
        </a>
        <a
          href="#"
          className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50"
        >
          3
        </a>
        <span className="px-4 py-2 text-gray-500">...</span>
        <a
          href="#"
          className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50"
        >
          10
        </a>
        <a
          href="#"
          className="px-3 py-2 rounded-lg border border-gray-300 text-gray-500 hover:bg-gray-50"
        >
          <i className="fas fa-chevron-right"></i>
        </a>
      </nav>
    </div>
  );
}
