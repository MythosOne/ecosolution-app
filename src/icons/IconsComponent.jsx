import React from 'react';

//Header
export const LogoImg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="31"
      height="18"
      viewBox="0 0 31 18"
      fill="none"
    >
      <g clipPath="url(#clip0_101_1515)">
        <path
          d="M21.3295 12.8099C21.2647 12.6565 15.939 2.24947 15.8518 2.10605C15.6678 1.67165 15.395 1.27931 15.0505 0.953531C14.7059 0.627751 14.2969 0.375526 13.849 0.212607C13.4011 0.0496887 12.924 -0.0204255 12.4474 0.00664302C11.9709 0.0337115 11.5051 0.157381 11.0791 0.36993C10.6532 0.582479 10.2762 0.879342 9.97186 1.24198C9.66748 1.60462 9.44218 2.02525 9.31003 2.47761C9.17788 2.92996 9.14173 3.40432 9.20382 3.87107C9.26591 4.33782 9.42491 4.78694 9.6709 5.19038C9.73571 5.34383 14.8331 15.3048 14.9204 15.4483C14.9854 15.6022 15.0616 15.7513 15.1486 15.8943C15.3326 16.3287 15.6054 16.721 15.9499 17.0468C16.2945 17.3725 16.7035 17.6248 17.1514 17.7877C17.5993 17.9506 18.0764 18.0207 18.553 17.9936C19.0295 17.9666 19.4953 17.8429 19.9213 17.6303C20.3472 17.4178 20.7241 17.1209 21.0285 16.7583C21.3329 16.3956 21.5582 15.975 21.6904 15.5227C21.8225 15.0703 21.8587 14.596 21.7966 14.1292C21.7345 13.6625 21.5755 13.2133 21.3295 12.8099Z"
          fill="#173D33"
        />
        <path
          d="M15.1793 5.76773C15.5058 5.42461 15.7571 5.0188 15.9175 4.57563C16.0779 4.13246 16.1439 3.66145 16.1115 3.19199C16.079 2.72254 15.9488 2.26472 15.7289 1.84711C15.509 1.4295 15.2042 1.06107 14.8335 0.764809C14.4628 0.468548 14.0341 0.25082 13.5743 0.125214C13.1145 -0.000390954 12.6333 -0.0311773 12.1608 0.0347771C11.6884 0.100731 11.2348 0.262011 10.8284 0.508548C10.422 0.755086 10.0714 1.08159 9.79868 1.46768C9.68415 1.58801 1.03676 12.0974 0.940665 12.2331C0.614149 12.5762 0.36286 12.982 0.202481 13.4252C0.0421021 13.8684 -0.0239231 14.3394 0.00852645 14.8088C0.040976 15.2783 0.171204 15.7361 0.391081 16.1537C0.610959 16.5713 0.915765 16.9398 1.28648 17.236C1.65719 17.5323 2.08584 17.75 2.54569 17.8756C3.00554 18.0012 3.4867 18.032 3.95915 17.966C4.4316 17.9001 4.88519 17.7388 5.29161 17.4923C5.69803 17.2457 6.04856 16.9192 6.32131 16.5331C6.43584 16.4128 15.0832 5.90344 15.1793 5.76773Z"
          fill="#97D28B"
        />
        <path
          d="M30.0597 5.76774C30.3862 5.42462 30.6375 5.01881 30.7979 4.57564C30.9582 4.13247 31.0243 3.66146 30.9918 3.192C30.9594 2.72255 30.8292 2.26472 30.6093 1.84711C30.3894 1.4295 30.0846 1.06107 29.7139 0.764809C29.3432 0.468548 28.9145 0.250819 28.4547 0.125214C27.9948 -0.00039146 27.5137 -0.0311774 27.0412 0.0347777C26.5688 0.100733 26.1152 0.262013 25.7088 0.508552C25.3023 0.755091 24.9518 1.0816 24.679 1.46769C24.5645 1.58802 15.9171 12.0974 15.821 12.2331C15.4945 12.5762 15.2432 12.982 15.0829 13.4252C14.9225 13.8684 14.8564 14.3394 14.8889 14.8088C14.9213 15.2783 15.0516 15.7361 15.2715 16.1537C15.4913 16.5713 15.7961 16.9398 16.1668 17.236C16.5376 17.5323 16.9662 17.75 17.4261 17.8756C17.8859 18.0012 18.3671 18.032 18.8395 17.9661C19.312 17.9001 19.7656 17.7388 20.172 17.4923C20.5784 17.2457 20.9289 16.9192 21.2017 16.5331C21.3162 16.4128 29.9636 5.90345 30.0597 5.76774Z"
          fill="#97D28B"
        />
      </g>
      <defs>
        <clipPath id="clip0_101_1515">
          <rect width="31" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

//HeaderNav
export const CloseLightImg = ({ stroke }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M5.83325 5.83325L14.1666 14.1666M5.83325 14.1666L14.1666 5.83325"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ArrowNavImg = ({ stroke }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M6.28418 4.49219L12.007 4.49219L12.007 10.215"
        stroke={stroke}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.99365 12.5061L11.9274 4.57237"
        stroke={stroke}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const FaceBookImg = ({ fill, stroke }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={'none'}
    >
      <path
        d="M14 9.3V12.2H16.6C16.8 12.2 16.9 12.4 16.9 12.6L16.5 14.5C16.5 14.6 16.3 14.7 16.2 14.7H14V22H11V14.8H9.3C9.1 14.8 9 14.7 9 14.5V12.6C9 12.4 9.1 12.3 9.3 12.3H11V9C11 7.3 12.3 6 14 6H16.7C16.9 6 17 6.1 17 6.3V8.7C17 8.9 16.9 9 16.7 9H14.3C14.1 9 14 9.1 14 9.3Z"
        fill={fill}
      />
      <path
        d="M15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const InstagramImg = ({ stroke }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.6361 7H17.6477"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const MenuBurgerImg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path d="M2 5.16699H14" stroke="#292D32" strokeLinecap="round" />
      <path d="M2 8.5H14" stroke="#292D32" strokeLinecap="round" />
      <path d="M2 11.833H14" stroke="#292D32" strokeLinecap="round" />
    </svg>
  );
};

// About
export const OpennessImg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // width="16"
      // height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M11.3333 2H13.9999V4.66667"
        stroke="#173D33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 6L14 2"
        stroke="#173D33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.66667 14H2V11.3334"
        stroke="#173D33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 10L2 14"
        stroke="#173D33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.3466 1.46672C8.91327 1.38005 8.45992 1.33337 7.99992 1.33337C4.31992 1.33337 1.33325 4.32004 1.33325 8.00004C1.33325 8.46004 1.37993 8.90671 1.46659 9.33337"
        stroke="#173D33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.65332 14.5333C7.08665 14.62 7.54 14.6666 8 14.6666C11.68 14.6666 14.6667 11.68 14.6667 7.99996C14.6667 7.54663 14.62 7.09996 14.5333 6.66663"
        stroke="#173D33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const RespImg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // width="16"
      // height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M14.6666 8.00004C14.6666 4.32004 11.6799 1.33337 7.99992 1.33337C4.31992 1.33337 1.33325 4.32004 1.33325 8.00004C1.33325 11.68 4.31992 14.6667 7.99992 14.6667"
        stroke="#173D33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.33324 2H5.9999C4.6999 5.89333 4.6999 10.1067 5.9999 14H5.33324"
        stroke="#173D33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 2C10.6467 3.94667 10.9733 5.97333 10.9733 8"
        stroke="#173D33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 10.6667V10C3.94667 10.6467 5.97333 10.9733 8 10.9733"
        stroke="#173D33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 5.99978C5.89333 4.69978 10.1067 4.69978 14 5.99978"
        stroke="#173D33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.8068 10.4933L10.4468 12.8534C10.3534 12.9467 10.2668 13.12 10.2468 13.2467L10.1201 14.1467C10.0734 14.4733 10.3001 14.7 10.6268 14.6533L11.5268 14.5267C11.6534 14.5067 11.8334 14.42 11.9201 14.3267L14.2801 11.9667C14.6868 11.56 14.8801 11.0867 14.2801 10.4867C13.6868 9.89334 13.2134 10.0867 12.8068 10.4933Z"
        stroke="#173D33"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.4668 10.8334C12.6668 11.5534 13.2268 12.1134 13.9468 12.3134"
        stroke="#173D33"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const InnovImg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // width="16"
      // height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M6.40008 13.3333H9.60008C12.2667 13.3333 13.3334 12.2666 13.3334 9.59996V6.39996C13.3334 3.73329 12.2667 2.66663 9.60008 2.66663H6.40008C3.73341 2.66663 2.66675 3.73329 2.66675 6.39996V9.59996C2.66675 12.2666 3.73341 13.3333 6.40008 13.3333Z"
        stroke="#173D33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.00008 11.3333H9.00008C10.6667 11.3333 11.3334 10.6666 11.3334 8.99996V6.99996C11.3334 5.33329 10.6667 4.66663 9.00008 4.66663H7.00008C5.33341 4.66663 4.66675 5.33329 4.66675 6.99996V8.99996C4.66675 10.6666 5.33341 11.3333 7.00008 11.3333Z"
        stroke="#173D33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.34009 2.66671V1.33337"
        stroke="#173D33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 2.66671V1.33337"
        stroke="#173D33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.6667 2.66671V1.33337"
        stroke="#173D33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3333 5.33337H14.6666"
        stroke="#173D33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3333 8H14.6666"
        stroke="#173D33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3333 10.6666H14.6666"
        stroke="#173D33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.6667 13.3334V14.6667"
        stroke="#173D33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.00659 13.3334V14.6667"
        stroke="#173D33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.34009 13.3334V14.6667"
        stroke="#173D33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.33325 5.33337H2.66659"
        stroke="#173D33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.33325 8H2.66659"
        stroke="#173D33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.33325 10.6666H2.66659"
        stroke="#173D33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.9999 6.46667L7.37323 7.56001C7.23323 7.80001 7.34656 8.00001 7.62656 8.00001H8.37323C8.65323 8.00001 8.76656 8.20001 8.62656 8.44001L7.9999 9.53334"
        stroke="#173D33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const QualityImg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // width="16"
      // height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M5.77992 9.33337H2.66659C1.93325 9.33337 1.33325 9.93337 1.33325 10.6667V14.6667H5.77992V9.33337Z"
        stroke="#173D33"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.88677 6.66663H7.10677C6.37344 6.66663 5.77344 7.26663 5.77344 7.99996V14.6666H10.2201V7.99996C10.2201 7.26663 9.62677 6.66663 8.88677 6.66663Z"
        stroke="#173D33"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3333 11.3334H10.22V14.6667H14.6666V12.6667C14.6666 11.9334 14.0666 11.3334 13.3333 11.3334Z"
        stroke="#173D33"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.34658 1.38L8.69991 2.08667C8.74658 2.18667 8.87324 2.28 8.97991 2.29333L9.61991 2.4C10.0266 2.46667 10.1266 2.76666 9.83324 3.05332L9.33324 3.55332C9.24658 3.63999 9.19991 3.8 9.22658 3.91333L9.36658 4.52667C9.47991 5.01334 9.21991 5.20001 8.79324 4.94668L8.19324 4.59334C8.08658 4.52668 7.90658 4.52668 7.79991 4.59334L7.19991 4.94668C6.77324 5.20001 6.51324 5.01334 6.62657 4.52667L6.76658 3.91333C6.79324 3.8 6.74658 3.63332 6.65991 3.55332L6.16658 3.06C5.87324 2.76666 5.96658 2.47332 6.37991 2.40666L7.01991 2.30001C7.12657 2.28001 7.25324 2.18668 7.29991 2.09334L7.65324 1.38666C7.84658 0.99999 8.15324 1 8.34658 1.38Z"
        stroke="#173D33"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ArrowUpRightImg = ({ stroke }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
    >
      <path
        d="M10.9976 6.98669L21.0125 6.98669L21.0125 17.0017"
        stroke={stroke}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.98901 21.0109L20.8731 7.12688"
        stroke={stroke}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

//ContactUs
export const PhoneImg = ({ stroke }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
    </svg>
  );
};

export const MailImg = ({ stroke }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
        stroke={stroke}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const AddressImg = ({ stroke }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M2.29004 7.77998V17.51C2.29004 19.41 3.64004 20.19 5.28004 19.25L7.63004 17.91C8.14004 17.62 8.99004 17.59 9.52004 17.86L14.77 20.49C15.3 20.75 16.15 20.73 16.66 20.44L20.99 17.96C21.54 17.64 22 16.86 22 16.22V6.48998C22 4.58998 20.65 3.80998 19.01 4.74998L16.66 6.08998C16.15 6.37998 15.3 6.40998 14.77 6.13998L9.52004 3.51998C8.99004 3.25998 8.14004 3.27998 7.63004 3.56998L3.30004 6.04998C2.74004 6.36998 2.29004 7.14998 2.29004 7.77998Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.56006 4V17"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.73 6.61914V19.9991"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

//Footer
export const ArrowUpImg = ({ stroke }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M3.95312 6.37988L7.99979 2.33322L12.0465 6.37988"
        stroke={stroke}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 13.667L8 2.44699"
        stroke={stroke}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

// Main //ContactUs //About

export const ArrowRightImg = ({ width, height, stroke }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 36 36"
      fill="none"
    >
      <path
        d="M21.6458 8.89343L30.7508 17.9984L21.6458 27.1034"
        stroke={stroke}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.25098 17.9988H30.496"
        stroke={stroke}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ArrowLeftImg = ({ width, height, stroke }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 36 36"
      fill="none"
    >
      <path
        d="M14.3542 8.89343L5.24925 17.9984L14.3542 27.1034"
        stroke={stroke}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30.749 17.9988H5.50402"
        stroke={stroke}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

//FAQ

export const MinusImg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M4 8H12"
        stroke="#173D33"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const PlusImg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M4 8H12"
        stroke="#97D28B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 12V4"
        stroke="#97D28B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const EllipseArrowDown = ({ fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="15"
      viewBox="0 0 14 15"
      fill={fill}
    >
      <circle cx="7" cy="7.5" r="7" fill={fill} />
      <path
        d="M9.27588 8.31006L6.99963 10.3334L4.72338 8.31006"
        stroke="#173D33"
        strokeWidth="0.833607"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.99951 4.66675L6.99951 10.2767"
        stroke="#173D33"
        strokeWidth="0.833607"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
