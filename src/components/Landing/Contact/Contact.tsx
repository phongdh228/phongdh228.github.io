import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Contact.module.css';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
  classes?: {
    line9?: string;
    contactInputs?: string;
  };
  text?: {
    sayHello?: ReactNode;
  };
}
/* @figmaId 9278:385 */
export const Contact: FC<Props> = memo(function Contact(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      {props.text?.sayHello != null ? props.text?.sayHello : <div className={classes.sayHello}>Say Hello</div>}
      <div className={`${props.classes?.line9 || ''} ${classes.line9}`}></div>
      <div className={classes.lookingToStartANewProjectOrJus}>
        Looking to start a new project or just want to say hi? Send me an email and I’ll do my best to reply within 24
        hrs!
      </div>
      <div className={classes.ifContactFormsArenTYourThingSe}>
        <p className={classes.labelWrapper}>
          <span className={classes.label}>If contact forms aren’t your thing... send me an email at </span>
          <span className={classes.label2}>hello@arnau.design</span>
        </p>
      </div>
      <div className={`${props.classes?.contactInputs || ''} ${classes.contactInputs}`}>
        <div className={classes.name}>
          <div className={classes.name2}>Name *</div>
          <div className={classes.nameInput}>
            <div className={classes.firstName}>
              <div className={classes.firstName2}>First Name</div>
            </div>
            <div className={classes.lastName}>
              <div className={classes.lastName2}>Last Name</div>
            </div>
          </div>
        </div>
        <div className={classes.inquiryEmail}>
          <div className={classes.dropdown}>
            <div className={classes.inquiry}>Inquiry *</div>
            <div className={classes.dropdown2}>
              <div className={classes.text}>
                <div className={classes.collabClient}>Collab/Client</div>
                <div className={classes.vector}>
                  <VectorIcon className={classes.icon} />
                </div>
              </div>
            </div>
          </div>
          <div className={classes.email}>
            <div className={classes.email2}>Email *</div>
            <div className={classes.email3}>
              <div className={classes.helloArnauDesign}>hello@arnau.design</div>
            </div>
          </div>
        </div>
        <div className={classes.message}>
          <div className={classes.message2}>Message *</div>
          <div className={classes.frame3}>
            <div className={classes.hello}>Hello...</div>
          </div>
        </div>
        <div className={classes.send}>
          <div className={classes.send2}>Send</div>
        </div>
      </div>
    </div>
  );
});
