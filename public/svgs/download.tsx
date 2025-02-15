export const download = (
   color: string = "white",
   opacity: string = "0.28"
) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_b_590_8591)">
      <rect width="28" height="28" rx="14" fill="white" fill-opacity={opacity} />
      <path
        d="M17.2166 12.9157C16.9385 12.6811 16.523 12.7166 16.2886 12.9946L14.6517 14.9357V8.72451C14.6517 8.36084 14.3569 8.06592 13.9931 8.06592C13.6294 8.06592 13.3345 8.36084 13.3345 8.72451V14.9357L11.6976 12.9946C11.463 12.7165 11.0476 12.6813 10.7697 12.9157C10.4916 13.1501 10.4563 13.5657 10.6908 13.8436L13.4898 17.1628C13.4997 17.1744 13.5103 17.1849 13.5209 17.1959C13.5246 17.1997 13.528 17.2036 13.5318 17.2075C13.5582 17.2333 13.5866 17.2565 13.6165 17.2774C13.6223 17.2815 13.6281 17.2854 13.634 17.2894C13.6643 17.3091 13.6961 17.3265 13.7291 17.341C13.7357 17.3439 13.7424 17.3463 13.749 17.3491C13.7838 17.3629 13.8194 17.3745 13.8561 17.3823C13.8607 17.3832 13.8655 17.3837 13.8701 17.3846C13.9104 17.3923 13.9515 17.397 13.9932 17.397C14.035 17.397 14.0759 17.3923 14.1162 17.3846C14.1209 17.3837 14.1256 17.3833 14.1302 17.3823C14.167 17.3745 14.2025 17.3629 14.2372 17.3491C14.244 17.3463 14.2507 17.3439 14.2574 17.3409C14.2904 17.3264 14.322 17.3091 14.3522 17.2895C14.3583 17.2856 14.3643 17.2815 14.3702 17.2773C14.4 17.2565 14.4283 17.2334 14.4545 17.2077C14.4585 17.2039 14.462 17.1997 14.4658 17.1957C14.4762 17.1849 14.487 17.1745 14.4967 17.1629L17.2955 13.8438C17.53 13.5656 17.4946 13.1501 17.2166 12.9157Z"
        fill={color}
      />
      <path
        d="M18.0485 19.9207H9.93789C9.57422 19.9207 9.2793 19.6259 9.2793 19.2621C9.2793 18.8983 9.57422 18.6035 9.93789 18.6035H18.0485C18.4123 18.6035 18.7071 18.8983 18.7071 19.2621C18.7071 19.6259 18.4123 19.9207 18.0485 19.9207Z"
        fill={color}
      />
    </g>
    <defs>
      <filter
        id="filter0_b_590_8591"
        x="-4"
        y="-4"
        width="36"
        height="36"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_590_8591"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_590_8591"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
