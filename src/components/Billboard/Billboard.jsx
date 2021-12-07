import React from "react";
import "./style.scss";

import PlayIcon from "./PlayIcon";
import InfoIcon from "./InfoIcon";

export default function Billboard() {
  return (
    <div className="billboard">
      <div className="billboard__info">
        <div className="info__title">
          <img
            alt="그 해 우리는"
            className="title-logo"
            src="https://occ-0-993-325.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABcneuk_KSJQPi7bHlWGE3hAgguzFgKa8vPTK-fhISj-CjXKqZyNOAhdp0YTDTtGMQGIWeIf3VUNoGRaJS7fRlPQwWeuiUwvXD0z1.webp?r=13b"
            title="그 해 우리는"
          />
        </div>
        <div className="info__synopsis">
          고등학교 시절 촬영한 다큐멘터리가 역주행하며 화제가 됐다. 서로 안 좋게
          헤어졌건만, 어쩔 수 없이 다시 카메라 앞에 선 두 사람. 그렇게 서로의
          삶에 다시 모습을 드러내기 시작한다.
        </div>
        <div className="info__links">
          <a href="/">
            <PlayIcon />
            <span>재생</span>
          </a>
          <button type="button">
            <InfoIcon />
            <span>상세 정보</span>
          </button>
        </div>
      </div>
      <div className="billboard__video">
        <iframe
          frameBorder="0"
          allowFullScreen="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          title="YouTube video player"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/jgBh9xlW0J8?autoplay=1&mute=1&amp;enablejsapi=1&amp;origin=http%3A%2F%2Flocalhost%3A3000&amp;widgetid=1&loop=1"
          className="youtube"
        ></iframe>
      </div>
      <div className="billboard__mask" />
    </div>
  );
}
