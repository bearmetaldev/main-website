export default function Navbar() {
  return (
    <div className="navbar h-28 pl-20 pr-20">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">BEAR METAL DEVELOPMENT</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Services</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
