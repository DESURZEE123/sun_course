import { Link, Outlet } from 'umi';
export default ()=> {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="https://github.com/umijs/umi">Github</a>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
