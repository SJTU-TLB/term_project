import styles from "./StoryCard.module.css";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function LikeButton(props) {
  const [isLike, setIsLike] = useState(0);

  function getIsAgree() {
    if (isLike == 0 || isLike == 2) {
      return 1;
    } else {
      return 0;
    }
  }

  function getIsDisagree() {
    if (isLike == 0 || isLike == 1) {
      return 2;
    } else {
      return 0;
    }
  }

  function getWord() {
    if (isLike == 0 || isLike == 2) {
      return "赞同";
    } else {
      return "已赞同";
    }
  }

  function getAgreeCnt() {
    if (isLike == 0 || isLike == 2) {
      return props.agreeCnt;
    } else {
      return props.agreeCnt + 1;
    }
  }

  function getAgreed() {
    if (isLike == 0 || isLike == 2) {
      return styles.agreeBtn;
    } else {
      return styles.agreedBtn;
    }
  }

  function getDisagreed() {
    if (isLike == 2) {
      return styles.disagreedBtn;
    } else {
      return styles.disagreeBtn;
    }
  }

  return (
    <span>
      <button
        type="button"
        className={getAgreed()}
        onClick={() => setIsLike(getIsAgree())}
      >
        <span style={({ display: "inline-flex" }, { alignItems: "center" })}>
          <svg
            className={styles.agreeBtnIcon}
            fill="currentColor"
            viewBox="0 0 24 24"
            width="10"
            height="10"
          >
            <path
              d="M 2 18.242 c 0 -0.326 0.088 -0.532 0.237 -0.896 l 7.98 -13.203 C 10.572 3.57 11.086 3 12 3 c 0.915 0 1.429 0.571 1.784 1.143 l 7.98 13.203 c 0.15 0.364 0.236 0.57 0.236 0.896 c 0 1.386 -0.875 1.9 -1.955 1.9 H 3.955 c -1.08 0 -1.955 -0.517 -1.955 -1.9 Z"
              fillRule="evenodd"
            ></path>
          </svg>
        </span>
        &nbsp;{getWord()} {getAgreeCnt()}
      </button>
      <button
        type="button"
        className={getDisagreed()}
        onClick={() => setIsLike(getIsDisagree())}
      >
        <span style={({ display: "inline-flex" }, { alignItems: "center" })}>
          <svg
            className={styles.disagreeBtnIcon}
            fill="currentColor"
            viewBox="0 0 24 24"
            width="10"
            height="10"
          >
            <path
              d="M 20.044 3 H 3.956 C 2.876 3 2 3.517 2 4.9 c 0 0.326 0.087 0.533 0.236 0.896 L 10.216 19 c 0.355 0.571 0.87 1.143 1.784 1.143 s 1.429 -0.572 1.784 -1.143 l 7.98 -13.204 c 0.149 -0.363 0.236 -0.57 0.236 -0.896 c 0 -1.386 -0.876 -1.9 -1.956 -1.9 Z"
              fillRule="evenodd"
            ></path>
          </svg>
        </span>
      </button>
    </span>
  );
}

export function ActionContent(props) {
  return (
    <div className={styles.contentActions}>
      <LikeButton agreeCnt={props.agreeCnt}></LikeButton>

      <button type="button" className={styles.commentBtn}>
        <span style={({ display: "inline-flex" }, { alignItems: "center" })}>
          <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1.2em"
            height="1.2em"
          >
            <path
              className={styles.commentIcon}
              d="M 10.241 19.313 a 0.97 0.97 0 0 0 -0.77 0.2 a 7.908 7.908 0 0 1 -3.772 1.482 a 0.409 0.409 0 0 1 -0.38 -0.637 a 5.825 5.825 0 0 0 1.11 -2.237 a 0.605 0.605 0 0 0 -0.227 -0.59 A 7.935 7.935 0 0 1 3 11.25 C 3 6.7 7.03 3 12 3 s 9 3.7 9 8.25 s -4.373 9.108 -10.759 8.063 Z"
              fillRule="evenodd"
            ></path>
          </svg>
        </span>
        &nbsp;评论 {props.commentsCnt}
      </button>
      <button type="button" className={styles.withBtn}>
        <span style={({ display: "inline-flex" }, { alignItems: "center" })}>
          <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1.2em"
            height="1.2em"
          >
            <path
              className={styles.withIcon}
              d="M 5.515 19.64 l 0.918 -5.355 l -3.89 -3.792 c -0.926 -0.902 -0.639 -1.784 0.64 -1.97 L 8.56 7.74 l 2.404 -4.871 c 0.572 -1.16 1.5 -1.16 2.072 0 L 15.44 7.74 l 5.377 0.782 c 1.28 0.186 1.566 1.068 0.64 1.97 l -3.89 3.793 l 0.918 5.354 c 0.219 1.274 -0.532 1.82 -1.676 1.218 L 12 18.33 l -4.808 2.528 c -1.145 0.602 -1.896 0.056 -1.677 -1.218 Z"
              fillRule="evenodd"
            ></path>
          </svg>
        </span>
      </button>
      <div className="actionBtn">
        <button type="button" className={styles.withBtn}>
          <span style={({ display: "inline-flex" }, { alignItems: "center" })}>
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              width="1.2em"
              height="1.2em"
            >
              <path
                className={styles.actionIcon}
                d="M 5 14 a 2 2 0 1 1 0 -4 a 2 2 0 0 1 0 4 Z m 7 0 a 2 2 0 1 1 0 -4 a 2 2 0 0 1 0 4 Z m 7 0 a 2 2 0 1 1 0 -4 a 2 2 0 0 1 0 4 Z"
                fillRule="evenodd"
              ></path>
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}

export default function StoryCard(props) {
  function getType() {
    if (props.data.type == "News") {
      return "none";
    } else {
      return "block";
    }
  }

  useEffect(() => {});

  return (
    <div className={styles.card}>
      <div className={styles.feed}>
        <div className={styles.title}>
          <Link href={"secondary/" + props.data.index}>
            <a>{props.data.question}</a>
          </Link>
        </div>
        <div className={styles.content}>
          <div className={styles.contentPic} style={{ display: getType() }}>
            <div className={styles.contentPicInner}>
              <img src={props.data.imgUrl} alt="cover"></img>
            </div>
          </div>
          <div className={styles.contentInner}>
            <span className={styles.contentText}>
              {props.data.author}： {props.data.content}
            </span>
          </div>
          <ActionContent
            commentsCnt={props.data.commentsCnt}
            agreeCnt={props.data.agreeCnt}
          ></ActionContent>
        </div>
      </div>
    </div>
  );
}
