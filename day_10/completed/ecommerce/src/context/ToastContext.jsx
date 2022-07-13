import { createContext, useContext, useEffect, useState } from "react";

export const ToastContext = createContext();

const ToastProvider = ({ children }) => {
  const [showToast, setShowToast] = useState([]);
  useEffect(() => {
    if (showToast.length > 0) {
      setTimeout(() => {
        const newToast = [...showToast];
        newToast.pop();
        setShowToast(newToast);
      }, 2000);
    }
    // return clearTimeout(timeOut);
  }, [showToast]);

  const addToast = (message) => {
    setShowToast([message, ...showToast]);
  };

  return (
    <ToastContext.Provider
      value={{
        addToast,
      }}
    >
      {children}
      <div
        className="position-fixed "
        style={{
          bottom: "10px",
          right: "10px",
          zIndex: "100",
        }}
      >
        {showToast.map((x, i) => {
          switch (x.type) {
            case "error":
              return (
                <div key={i} className=" text-bg-danger p-3">
                  {x.message}
                </div>
              );
            case "warning":
              return (
                <div key={i} className=" text-bg-warning p-3">
                  {x.message}
                </div>
              );
            default:
              return (
                <div key={i} className=" text-bg-success p-3">
                  {x.message}
                </div>
              );
          }
        })}
      </div>
    </ToastContext.Provider>
  );
};

export default ToastProvider;
