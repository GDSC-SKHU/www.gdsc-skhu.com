import { css } from '@emotion/react';
import { motion } from 'framer-motion';

import {
  defaultFadeInUpVariants,
  defaultFadeInVariants,
  staggerFourFive,
} from '../../constants/motions';
import {
  colors,
  glassButtonCss,
  sectionLayoutCss,
  sectionTitleCss,
  sectionVerticalSpacing,
} from '../../styles/constants';

const WEB_RECRUIT_LINK =
  'https://noble-animal-f7e.notion.site/GDG-on-Campus-SKHU-FE-WEB-Part-Recruiting-226dacc0346380a19e7cfeb0e509dabc';
const MOBILE_RECRUIT_LINK =
  'https://noble-animal-f7e.notion.site/GDG-on-Campus-SKHU-FE-Mobile-Part-Recruiting-226dacc0346380f78ebaeb0fc0506ad9';
const SERVER_RECRUIT_LINK =
  'https://noble-animal-f7e.notion.site/GDG-on-Campus-SKHU-Server-Part-Recruiting-226dacc034638014912ce71d847affa6';
const PM_RECRUIT_LINK =
  'https://noble-animal-f7e.notion.site/GDG-on-Campus-SKHU-PM-Part-Recruiting-219dacc034638066805fe3267af2c967';
const DESIGN_RECRUIT_LINK =
  'https://noble-animal-f7e.notion.site/GDG-on-Campus-SKHU-Design-Part-Recruiting-226dacc0346380da84a3da41f713d46a';
const CORE_RECRUIT_LINK = 'https://forms.gle/GjcS5ma2RqudXypXA';

export default function RecruitSection() {
  return (
    <motion.section
      variants={staggerFourFive}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.6 }}
      css={sectionCss}
    >
      <div css={headerWrapCss}>
        <motion.h2 variants={defaultFadeInVariants} css={sectionTitleCss}>
          Recruit
        </motion.h2>
        <motion.p variants={defaultFadeInVariants} css={descCss}>
          GDGoC SKHU에 지원하고, 기회를 얻어보세요.
        </motion.p>
      </div>

      <div css={buttonWrapCss}>
        <RecruitAnchor href={CORE_RECRUIT_LINK} text="🧭 26-27 Core 멤버 지원하기" />
        {/* <RecruitAnchor href={PM_RECRUIT_LINK} text="🧭 PM 파트 멤버 지원하기" disable /> 
        <RecruitAnchor href={DESIGN_RECRUIT_LINK} text="🎨 Design 파트 멤버 지원하기" disable />
        <RecruitAnchor href={WEB_RECRUIT_LINK} text="🌎 Web 파트 멤버 지원하기" disable />
        <RecruitAnchor href={MOBILE_RECRUIT_LINK} text="📱 Mobile 파트 멤버 지원하기" disable />
        <RecruitAnchor href={SERVER_RECRUIT_LINK} text="🔧 Server 파트 멤버 지원하기" disable /> */}
      </div>
    </motion.section>
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
          alert('현재 기수 모집은 마감되었습니다. 다음 기수 모집을 기다려주세요!');
        }}
        css={disableBtnCss}
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
      css={buttonCss}
      whileHover={{ scale: 1.03, y: -6 }}
      whileTap={{ scale: 0.97 }}
    >
      {text}
    </motion.a>
  );
}

const sectionCss = css`
  ${sectionLayoutCss};
  margin-top: ${sectionVerticalSpacing.large};
  margin-bottom: ${sectionVerticalSpacing.large};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const headerWrapCss = css`
  width: 100%;
  margin-bottom: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const descCss = css`
  font-size: 1.7rem;
  font-weight: 400;
  color: #9aa0a6;
`;

const buttonWrapCss = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
`;

const buttonCss = css`
  ${glassButtonCss};
  font-size: 1.5rem;
  font-weight: bold;
  width: 32rem;
  max-width: 100%;
  height: 5rem;
`;

const disableBtnCss = css`
  ${glassButtonCss};
  font-size: 1.5rem;
  font-weight: bold;
  width: 32rem;
  max-width: 100%;
  height: 5rem;
  color: ${colors.gray100};
  background-color: rgba(255, 255, 255, 0.2);
`;
