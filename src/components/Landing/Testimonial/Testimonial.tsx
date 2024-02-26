import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Testimonial.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 9278:416 */
export const Testimonial: FC<Props> = memo(function Testimonial(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.IRehiredArnauToDoSomeAdditiona}>
        “I rehired Arnau to do some additional design work for my private label brand. Again, he was creative and
        efficient in bringing my ideas to fruition. Thanks Arnau”
      </div>
      <div className={classes._}>_ </div>
      <div className={classes.ronaldWeasley}>Ronald Weasley</div>
      <div className={classes.cEO}>CEO</div>
    </div>
  );
});
