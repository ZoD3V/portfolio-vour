import { useRouteError, Link, isRouteErrorResponse } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  
  const is404 = isRouteErrorResponse(error) && error.status === 404;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6 text-center font-light">
      {/* Background Decor (Optional) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-bold text-white/5 select-none">
          {is404 ? "404" : "ERROR"}
        </div>
      </div>

      <h1 className="text-8xl md:text-9xl font-bold mb-4 tracking-tighter">
        {is404 ? "404" : "Oops"}
      </h1>
      
      <h2 className="text-xl md:text-2xl mb-6 tracking-[0.3em] uppercase">
        {is404 ? "Page Not Found" : "System Error"}
      </h2>
      
      <p className="text-gray-400 mb-10 max-w-md leading-relaxed">
        {is404 
          ? "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable." 
          : "We apologize for the inconvenience. Our team has been notified and is working to resolve the issue."}
      </p>
      
      <Link 
        to="/" 
        className="group relative px-10 py-4 overflow-hidden border border-white/30 transition-all duration-500 hover:border-white"
      >
        <span className="relative z-10 uppercase tracking-widest text-sm group-hover:text-black transition-colors duration-500">
          Back to Home
        </span>
        <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
      </Link>
      
      {/* Technical Detail (Optional) */}
      {!is404 && (
        <div className="mt-12 opacity-30 hover:opacity-100 transition-opacity">
          <p className="text-[10px] font-mono uppercase tracking-widest mb-2">Error Log</p>
          <code className="text-[10px] bg-white/5 px-4 py-2 rounded">
            {error.statusText || error.message}
          </code>
        </div>
      )}
    </div>
  );
};

export default ErrorPage;