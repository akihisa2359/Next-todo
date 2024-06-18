// 表示/非表示当初呼び出し側が制御していたが、cssのアニメーションが当たらないため、コンポーネント側で持つことにした(visible変数)
export default function Modal({ children, onClick, visible }) {
  return (
    <div
      className={`absolute inset-0 h-screen w-screen flex justify-center items-center bg-gray-900 bg-opacity-5 z-[1000] transition-all duration-500 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClick}
    >
      <div
        className="min-w-[50px] min-h-[50px] bg-white rounded-md"
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
