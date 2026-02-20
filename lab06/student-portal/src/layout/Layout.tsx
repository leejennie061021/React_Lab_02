import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <nav style={{
        display: 'flex',
        gap: '20px',
        padding: '20px',
        background: "#1e3a8a",
      }}>
        <Link style={{ color: 'white' }} to="/">Home</Link>
        <Link style={{ color: 'white' }} to="/courses">Courses</Link>
        <Link style={{ color: 'white' }} to="/about">About</Link>
      </nav>
       
       <main style={{ padding: '20px'}}>
        <Outlet />
       </main>

       <footer style={{
        textAlign: 'center',
        padding: '20px',
        background: "#f1f1f1",
       }}>
        Student Portal 2026
       </footer>
    </>
  );
}

export default Layout;