import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="bg-zinc-200 p-4">
        <nav
          className="flex flex-row
                        space-x-4"
        >
          <ul
            className="flex flex-row
                        space-x-4"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/feed">Feed</Link>
            </li>
            <li>
              <Link to="/messages">Messages</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
          </ul>
          <ul
            className="flex flex-row
                          space-x-4"
          >
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
            <li>
              <Link to="/login">Log in</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Outlet />
    </>
  );
};

export default Layout;
