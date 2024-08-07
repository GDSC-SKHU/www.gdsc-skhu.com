import { css } from '@emotion/react';
import { motion } from 'framer-motion';

import {
  defaultFadeInUpVariants,
  defaultFadeInVariants,
  staggerFourFive,
} from '../../constants/motions';
import { bigCss, colors, defaultButtonCss } from '../../styles/constants';

const CORE_RECRUIT_LINK = 'https://forms.gle/r9giG34L49Wk1ngo8';
const WEB_RECRUIT_LINK =
  'https://nova-car-18d.notion.site/GDSC-SKHU-Web-Part-Recruiting-50a69f91080044d380bb8ec274f0c4d5?pvs=4';
const APP_RECRUIT_LINK =
  'https://nova-car-18d.notion.site/GDSC-SKHU-App-Part-Recruiting-3ac9e3c58b2e48cd96dc59359be7e30a?pvs=4';
const SERVER_RECRUIT_LINK =
  'https://nova-car-18d.notion.site/GDSC-SKHU-Server-Part-Recruiting-0d88775690fd43339631e3c1a3085fe4?pvs=4';

export default function RecruitSection() {
  return (
    <section>
      <motion.div
        variants={staggerFourFive}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.6 }}
        css={css`
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 95vh;
        `}
      >
        <motion.h2
          variants={defaultFadeInVariants}
          css={css`
            ${bigCss}
            text-align: center;
            margin-bottom: 120px;
          `}
        >
          성공회대 GDSC와
          <br />
          함께하고 싶다면
          <br />
        </motion.h2>
        <RecruitAnchor href={CORE_RECRUIT_LINK} text="Core 멤버 모집 지원하기" />
      </motion.div>
    </section>
  );
}

interface RecruitAnchorProps {
  href: string;
  text: string;
  disable?: boolean;
}

function RecruitAnchor({ href, text, disable = false }: RecruitAnchorProps) {
  if (disable) {
    return (
      <motion.button
        variants={defaultFadeInUpVariants}
        onClick={() => {
          alert('모집 기간이 아닙니다.');
        }}
        css={css`
          ${defaultButtonCss}

          font-size: 1.5rem;
          font-weight: bold;
          width: 32rem;
          max-width: 100%;
          height: 5rem;

          margin-bottom: 14px;

          color: ${colors.gray100};
          background-color: rgba(255, 255, 255, 0.2);
        `}
      >
        {text}
      </motion.button>
    );
  }

  return (
    <motion.a
      variants={defaultFadeInUpVariants}
      href={href}
      target="_blank"
      rel="noreferrer"
      css={css`
        ${defaultButtonCss}

        font-size: 1.5rem;
        font-weight: bold;
        width: 32rem;
        max-width: 100%;
        height: 5rem;

        margin-bottom: 14px;
      `}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {text}
    </motion.a>
  );
}
