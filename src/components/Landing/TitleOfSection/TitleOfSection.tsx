import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './TitleOfSection.module.css';

interface Props {
  className?: string;
  classes?: {
    separator?: string;
    root?: string;
  };
  text?: {
    projects?: ReactNode;
  };
}
/* @figmaId 9278:493 */
export const TitleOfSection: FC<Props> = memo(function TitleOfSection(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.projects != null ? props.text?.projects : <div className={classes.projects}>Projects</div>}
      <div className={`${props.classes?.separator || ''} ${classes.separator}`}></div>
    </div>
  );
});
