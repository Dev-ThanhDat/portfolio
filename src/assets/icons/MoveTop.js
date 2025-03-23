import React from 'react';

const MoveTop = ({ className }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
      className={`w-full h-auto ${className}`}
    >
      <path d='M8 6L12 2L16 6' />
      <path d='M12 2V22' />
    </svg>
  );
};

export default MoveTop;
