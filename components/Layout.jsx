import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="m-5">
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;
