import React, { useState } from "react";
import styles from "./Footer.module.css";
import FacebookIcon from "./FacebookIcon";
import InstagramIcon from "./InstagramIcon";
import TwitterIcon from "./TwitterIcon";
import YoutubeIcon from "./YoutubeIcon";

const memberLinks = [
  "자막 및 음성",
  "음성 지원",
  "고객 센터",
  "기프트카드",
  "미디어 센터",
  "투자 정보(IR)",
  "입사 정보",
  "이용 약관",
  "개인정보",
  "법적 고지",
  "쿠키 설정",
  "회사 정보",
  "문의하기",
];

export default function Footer() {
  const [serviceCode, setServiceCode] = useState("서비스코드");

  const onServiceCodeButton = () => {
    setServiceCode("988-400");
  };
  return (
    <div className={styles.footer}>
      <ul className={styles.snsLinks}>
        <li>
          <a href="/">
            <FacebookIcon />
          </a>
        </li>
        <li>
          <a href="/">
            <InstagramIcon />
          </a>
        </li>
        <li>
          <a href="/">
            <TwitterIcon />
          </a>
        </li>
        <li>
          <a href="/">
            <YoutubeIcon />
          </a>
        </li>
      </ul>
      <ul className={styles.memberLinks}>
        {memberLinks.map((item) => (
          <li key={item}>
            <a href="/">{item}</a>
          </li>
        ))}
      </ul>
      <div className={styles.btnServiceCode}>
        <button type="button" onClick={onServiceCodeButton}>
          {serviceCode}
        </button>
      </div>
      <div className={styles.copyright}>
        <div>
          넷플릭스서비시스코리아 유한회사 통신판매업신고번호:
          제2018-서울종로-0426호 전화번호: 080-001-9587
        </div>
        <div>대표: 레지널드 숀 톰프슨</div>
        <div>이메일 주소: korea@netflix.com</div>
        <div>
          주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층
          우편번호 03161
        </div>
        <div>사업자등록번호: 165-87-00119</div>
        <div>클라우드 호스팅: Amazon Web Services Inc.</div>
        <div>공정거래위원회 웹사이트</div>
      </div>
    </div>
  );
}
