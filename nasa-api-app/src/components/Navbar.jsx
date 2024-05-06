import { Link } from "react-router-dom";


const NavBar = () => {
  const handleLogout = () => {
    // Remove token from local storage
    localStorage.removeItem("token");
    localStorage.removeItem("isLoggedIn");
    // Reload the page to redirect to the login page
    window.location.href = "/login";
  };

  return (
    <nav className="text-white bg-slate-700 ">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/api/dashboard" className="text-2xl font-bold">
              <span className="font-secondary ms-2">
                Space
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-blue-500">
                  One
                </span>
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex items-baseline ml-10 space-x-4">
              <Link
                to="/api/apod"
                className="px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-700"
              >
                APOD
              </Link>
              <Link
                to="/api/mars"
                className="px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-700"
              >
                Mars
              </Link>
              <button
                onClick={handleLogout}
                className="px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-700"
              >
                Logout
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button className="flex items-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700">
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 6h16v2H4V6zm0 5h16v2H4V11zm0 5h16v2H4v14z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/api/apod"
            className="block px-3 py-2 text-base font-medium rounded-md hover:bg-gray-700"
          >
            APOD
          </Link>
          <Link
            to="/api/mars"
            className="block px-3 py-2 text-base font-medium rounded-md hover:bg-gray-700"
          >
            Mars
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
