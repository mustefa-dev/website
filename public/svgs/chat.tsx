export const Chat = (
   color: string = "white",
) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_b_590_8598)">
      <rect width="28" height="28" rx="14" fill="white" fill-opacity="0.28" />
      <path
        d="M18.6128 9.98389H9.37375C8.65259 9.98389 8.06592 10.5706 8.06592 11.2917V16.7587C8.06592 17.48 8.65259 18.0667 9.37375 18.0667H9.84399L11.0653 19.2878C11.1423 19.365 11.2436 19.4036 11.3447 19.4036C11.4457 19.4036 11.547 19.365 11.624 19.2878L12.8453 18.0667H18.6128C19.3339 18.0667 19.9206 17.48 19.9206 16.7587V11.2917C19.9206 10.5706 19.3339 9.98389 18.6128 9.98389ZM17.2047 15.3633H10.7818C10.5636 15.3633 10.3867 15.1864 10.3867 14.9681C10.3867 14.7499 10.5636 14.573 10.7818 14.573H17.2047C17.423 14.573 17.5999 14.7499 17.5999 14.9681C17.5999 15.1864 17.423 15.3633 17.2047 15.3633ZM17.2047 13.4775H10.7818C10.5636 13.4775 10.3867 13.3006 10.3867 13.0823C10.3867 12.864 10.5636 12.6872 10.7818 12.6872H17.2047C17.423 12.6872 17.5999 12.864 17.5999 13.0823C17.5999 13.3006 17.423 13.4775 17.2047 13.4775Z"
        fill={color}
      />
    </g>
    <defs>
      <filter
        id="filter0_b_590_8598"
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
          result="effect1_backgroundBlur_590_8598"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_590_8598"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
