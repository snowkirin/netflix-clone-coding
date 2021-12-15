import React from "react";
import useSWR from "swr";
import styled from "styled-components";

const BASE_IMAGE_URL = process.env.REACT_APP_BASE_IMAGE_URL;

const StyledRow = styled.div`
  padding: 0 4%;
  margin: 3vw 0;
  .title {
    font-size: 1.4vw;
    line-height: 1.25vw;
    font-weight: 700;
    color: var(--white-color);
    margin-bottom: 0.5em;
  }
  .slider {
    display: flex;
    flex-wrap: nowrap;
    &__item {
      flex: 0 0 16.66666667%;
      margin-right: 0.2vw;
      border-radius: 5px;
      overflow: hidden;
      transition: transform 0.5s;
      &:hover {
        position: relative;
        z-index: 10;
        transform: scale(1.2);
      }
      img {
        max-width: 100%;
        object-fit: contain;
        cursor: pointer;
      }
    }
  }
`;

export default function Rows({ title, fetchUrl }) {
  const { data, error } = useSWR(`${title}`, fetchUrl);

  if (error) {
    return <div>{`${title} 에러`}</div>;
  }
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <StyledRow>
      <div className="title">{title}</div>
      <div className="slider">
        {data.results.map((ele) => {
          const imageURL = `${BASE_IMAGE_URL}${ele.backdrop_path}`;
          return (
            <div className="slider__item" key={ele}>
              <img src={imageURL} alt="" />
            </div>
          );
        })}
      </div>
    </StyledRow>
  );
}
