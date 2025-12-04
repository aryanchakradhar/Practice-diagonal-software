export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  console.log("hghgc", isOpen);

  return (
    <div
      className=" fixed inset-0 flex items-center justify-center backdrop-blur-sm"
    >
      <div className=" bg-white  rounded-lg shadow-lg h-auto p-6 max-w-100 w-full relative ">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &#x2715;
        </button>

        {children}
      </div>
    </div>
  );
}
