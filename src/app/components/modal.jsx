import useModal from "../hooks/useModal";

export default function Modal({ children, onClick }) {
  return (
    <div
      className="absolute inset-0 h-screen w-screen flex justify-center items-center bg-gray-900 bg-opacity-5 z-[1000]"
      onClick={onClick}
    >
      <div
        className="min-w-[50px] min-h-[50px]"
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
