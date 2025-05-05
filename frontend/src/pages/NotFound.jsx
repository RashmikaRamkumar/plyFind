
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-accent">
      <div className="text-center p-8 max-w-lg">
        <h1 className="text-6xl font-bold text-wood-dark mb-6">404</h1>
        <p className="text-2xl font-semibold mb-4">Page Not Found</p>
        <p className="text-lg mb-8">The page you're looking for doesn't seem to exist.</p>
        <Link to="/" className="btn-primary inline-flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 w-5 h-5">
            <path d="m9 14-5-5 5-5"></path>
            <path d="M4 9h16"></path>
          </svg>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
