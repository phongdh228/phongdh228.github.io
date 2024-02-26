import { memo, SVGProps } from 'react';

const RightArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 59 59' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M27 35L33 29L27 23' stroke='black' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
    <circle cx={29.5} cy={29.5} r={29.5} stroke='#0B0B0D' strokeWidth={2} />
  </svg>
);

const Memo = memo(RightArrowIcon);
export { Memo as RightArrowIcon };
