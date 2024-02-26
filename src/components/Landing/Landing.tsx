import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { CircleIcon } from './CircleIcon.js';
import { Contact } from './Contact/Contact.js';
import { Footer } from './Footer/Footer.js';
import classes from './Landing.module.css';
import { LeftArrowIcon } from './LeftArrowIcon.js';
import { LogoIcon } from './LogoIcon.js';
import { Navbar_Property1Default } from './Navbar_Property1Default/Navbar_Property1Default.js';
import { RightArrowIcon } from './RightArrowIcon.js';
import { Testimonial } from './Testimonial/Testimonial.js';
import { TitleOfSection } from './TitleOfSection/TitleOfSection.js';

interface Props {
  className?: string;
}
/* @figmaId 1:6 */
export const Landing: FC<Props> = memo(function Landing(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.frame4}>
        <Navbar_Property1Default />
        <div className={classes.hero}>
          <div className={classes.hIIMDANGHOANGPHONG}>
            <div className={classes.textBlock}>HI, I’M </div>
            <div className={classes.textBlock2}>DANG HOANG PHONG</div>
            <div className={classes.textBlock3}>
              <p></p>
            </div>
          </div>
          <div className={classes.aYoungPassionateGameDesignerWh}>
            A young &amp; passionate Game Designer who love Psychology and Gambling Games
          </div>
        </div>
      </div>
      <div className={classes.aboutMe}>
        <TitleOfSection
          className={classes.titleOfSection}
          classes={{ separator: classes.separator }}
          text={{
            projects: <div className={classes.projects}>About Me</div>,
          }}
        />
        <div className={classes.clipping}>
          <div className={classes.photoshopMSOfficesFigmaDataAna}>
            <ul className={classes.list}>
              <li>
                <div className={classes.textBlock4}>
                  Photoshop • MS Offices • Figma • Data Analyze • Scrum Framework • Team Work{' '}
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className={classes._17083333059701}></div>
        <div className={classes.withAPassionForDesignFeaturesA}>
          With a passion for design features and analyzing data, I take projects from ideation to operation, ensuring a
          seamless journey that leaves a lasting monetization in the game industry.
        </div>
      </div>
      <div className={classes.projects3}>
        <div className={classes.rectangle1}></div>
        <div className={classes.rectangle2}></div>
        <div className={classes.rectangle3}></div>
        <div className={classes._1BuracoZingplay}>01 - Buraco Zingplay</div>
        <div className={classes._2TongitsZingplay}>02 - Tongits Zingplay</div>
        <div className={classes._3LetSDrinkBoardGame}>03 - “Let’s Drink!!!” Board Game</div>
        <div className={classes.circle}>
          <CircleIcon className={classes.icon2} />
        </div>
        <TitleOfSection className={classes.titleOfSection2} classes={{ separator: classes.separator2 }} />
      </div>
      <div className={classes.testimonials}>
        <TitleOfSection
          className={classes.titleOfSection3}
          classes={{ separator: classes.separator3 }}
          text={{
            projects: <div className={classes.projects2}>What Clients Say</div>,
          }}
        />
        <div className={classes.rightArrow}>
          <RightArrowIcon className={classes.icon3} />
        </div>
        <div className={classes.leftArrow}>
          <LeftArrowIcon className={classes.icon4} />
        </div>
        <Testimonial className={classes.testimonial} />
      </div>
      <Contact
        classes={{ line9: classes.line9, contactInputs: classes.contactInputs }}
        text={{
          sayHello: <div className={classes.sayHello}>Get In Touch</div>,
        }}
      />
      <div className={classes.footerNews}>
        <Footer
          className={classes.footer}
          classes={{
            fontAwesomeFacebookF: classes.fontAwesomeFacebookF,
            fontAwesomeTwitter: classes.fontAwesomeTwitter,
          }}
          swap={{
            logo: <LogoIcon className={classes.icon} />,
          }}
          text={{
            copyright: <div className={classes.copyright}>© 2024 Dang Hoang Phong.</div>,
          }}
        />
      </div>
    </div>
  );
});
