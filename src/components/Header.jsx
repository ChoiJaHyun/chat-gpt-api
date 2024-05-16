import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header className="px-4 py-6 flex justify center gap-10 bg-gradient-to-r from-blue-500 to-green-500 shadow-emerald-700">
      <Link
        className={`link-style p-2 rounded-lg hover:bg-blue-100  ${
          location.pathname === "/" && "text-gray-900"
        }`}
        to="/"
      >
        질문하기
      </Link>
      <Link
        className={`link-style p-2 rounded-lg hover:bg-blue-100 ${
          location.pathname === "/chat-list" && "text-gray-900"
        }`}
        to="/chat-list"
      >
        내 질문리스트
      </Link>
    </header>
  );
};

export default Header;
