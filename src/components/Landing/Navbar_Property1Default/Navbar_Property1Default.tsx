import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { LogoIcon } from './LogoIcon.js';
import classes from './Navbar_Property1Default.module.css';

interface Props {
  className?: string;
}
/* @figmaId 9278:293 */
export const Navbar_Property1Default: FC<Props> = memo(function Navbar_Property1Default(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle16}></div>
      <div className={classes.logo}>
        <LogoIcon className={classes.icon} />
      </div>
      <div className={classes.work}>Work</div>
      <div className={classes.about}>About</div>
      <div className={classes.contact}>Contact</div>
      <div className={classes.other}>Other</div>
    </div>
  );
});
