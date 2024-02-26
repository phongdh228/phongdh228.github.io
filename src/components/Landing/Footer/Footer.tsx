import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { FontawesomeDribbbleIcon } from './FontawesomeDribbbleIcon.js';
import classes from './Footer.module.css';
import { LogoIcon } from './LogoIcon.js';

interface Props {
  className?: string;
  classes?: {
    fontAwesomeFacebookF?: string;
    fontAwesomeTwitter?: string;
    root?: string;
  };
  swap?: {
    logo?: ReactNode;
  };
  text?: {
    copyright?: ReactNode;
  };
}
/* @figmaId 9278:445 */
export const Footer: FC<Props> = memo(function Footer(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.copyright != null ? (
        props.text?.copyright
      ) : (
        <div className={classes.copyright}>© 2021 Arnau Ros, LLC. All rights reserved.</div>
      )}
      <div className={classes.logo}>{props.swap?.logo || <LogoIcon className={classes.icon} />}</div>
      <div className={classes.socialLinks}>
        <div className={classes.navLink}></div>
        <div className={classes.navLink2}></div>
        <div className={classes.navLink3}>
          <div className={classes.fontAwesomeGithub}></div>
        </div>
        <div className={classes.navLink4}>
          <div className={classes.fontAwesomeDribbble}>
            <FontawesomeDribbbleIcon className={classes.icon2} />
          </div>
        </div>
      </div>
      <div className={classes.footerLine}></div>
    </div>
  );
});
