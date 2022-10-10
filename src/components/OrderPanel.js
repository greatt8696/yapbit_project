import React from "react";

const OrderPanel = () => {
  return (
    <div>
      <span className="flex h-3 w-3 relative m-1">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
      </span>
    </div>
  );
};

export default React.memo(OrderPanel);
