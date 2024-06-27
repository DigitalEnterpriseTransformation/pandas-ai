import React from "react";

const AddWorkSpaceLarge = ({ color }: { color: string }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 10C20 10.221 19.9122 10.433 19.7559 10.5893C19.5996 10.7455 19.3877 10.8333 19.1667 10.8333H10.8333V19.1667C10.8333 19.3877 10.7455 19.5996 10.5893 19.7559C10.433 19.9122 10.221 20 10 20C9.77899 20 9.56702 19.9122 9.41074 19.7559C9.25446 19.5996 9.16667 19.3877 9.16667 19.1667V10.8333H0.833333C0.61232 10.8333 0.400358 10.7455 0.244078 10.5893C0.0877975 10.433 0 10.221 0 10C0 9.77899 0.0877975 9.56702 0.244078 9.41074C0.400358 9.25446 0.61232 9.16667 0.833333 9.16667H9.16667V0.833333C9.16667 0.61232 9.25446 0.400358 9.41074 0.244078C9.56702 0.0877975 9.77899 0 10 0C10.221 0 10.433 0.0877975 10.5893 0.244078C10.7455 0.400358 10.8333 0.61232 10.8333 0.833333V9.16667H19.1667C19.3877 9.16667 19.5996 9.25446 19.7559 9.41074C19.9122 9.56702 20 9.77899 20 10Z"
        fill={color}
      />
    </svg>
  );
};

export default AddWorkSpaceLarge;