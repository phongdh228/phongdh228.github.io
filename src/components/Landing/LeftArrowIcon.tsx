import { memo, SVGProps } from 'react';

const LeftArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 59 59' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M32 24L26 30L32 36' stroke='black' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
    <circle cx={29.5} cy={29.5} r={29.5} transform='rotate(-180 29.5 29.5)' stroke='#0B0B0D' strokeWidth={2} />
  </svg>
);

const Memo = memo(LeftArrowIcon);
export { Memo as LeftArrowIcon };
