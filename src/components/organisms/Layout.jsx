import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';

function Layout() {
  // App-level state and methods can be defined here
  // and passed to child routes via outletContext
  const outletContext = {
    // Add any app-level state or methods here
    // Example: { user, setUser, preferences, etc. }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Outlet context={outletContext} />
      </main>
      <Footer />
      
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default Layout;