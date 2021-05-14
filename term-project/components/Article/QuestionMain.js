import ActionContent from "./ActionContent";
import styles from "./QuestionMain.module.css";
import React, { useState } from "react";
import Link from "next/link";

export function AnsUser(props) {
  return (
    <div className={styles.ansUser}>
      <div className={styles.userContent}>
        <span>
          <a>
            <img
              className={styles.avatar}
              src={props.avatar}
              width="38"
              height="38"
            />
          </a>
        </span>
        <div className={styles.AuthorInfo}>
          <div className={styles.AuthorInfoHeader}>
            <span className={styles.AuthorInfoName}>
              <a className={styles.userLink}>{props.user}</a>
            </span>
          </div>
          <div className={styles.AuthorInfoDetail}>
            <div className={styles.AuthorInfoBadge}>
              <div className={styles.AuthorInfoBadgeText}>{props.info}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Build(props) {
  const [state, setState] = useState({
    list: props.richContent,
  });

  return (
    <>
      {state.list.map((i) => {
        if (i.type == "p") {
          return (
            <>
              <p>{i.content}</p>
              <br></br>
            </>
          );
        }
        if (i.type == "img") {
          return (
            <>
              <img
                style={({ display: "block" }, { maxWidth: "100%" })}
                src={i.content}
              />
              <br></br>
            </>
          );
        }
        if (i.type == "b") {
          return (
            <>
              <p>
                <b>{i.content}</b>
              </p>
              <br></br>
            </>
          );
        }
        if (i.type == "br") {
          return (
            <>
              {i.content}
              <br></br>
            </>
          );
        }
      })}
    </>
  );
}

export function RichContent(props) {
  return (
    <div className={styles.richContent}>
      <div className={styles.richContentInner}>
        <span className={styles.richText}>
          <Build richContent={props.secondary.richContent}></Build>
        </span>
      </div>
      <div>
        <div className={styles.contentTime}>
          <span>编辑于 {props.secondary.editTime}</span>
        </div>
      </div>
    </div>
  );
}

export function AnsComment(props) {
  return (
    <>
      <div className={styles.commentOuter}>
        <div className={styles.commentV2}>
          <div className={styles.commentUser}>
            <span className={styles.cmtAvatar}>
              <a className={styles.cmtUserLInk}>
                <img
                  className={styles.cmtAvatarImg}
                  src={props.secondary.commentUser1Avatar}
                  width="24"
                  height="24"
                />
              </a>
            </span>
            <span className={styles.cmtName}>
              <a className={styles.cmtUserLInk}>
                {props.secondary.commentUser1}
              </a>
            </span>
            <span className={styles.cmtTime}>
              {props.secondary.commentTime1}
            </span>
          </div>
          <div className={styles.commentContent}>
            <div className={styles.commentText}>{props.secondary.comment1}</div>
          </div>
        </div>

        <div className={styles.commentV2}>
          <div className={styles.commentUser}>
            <span className={styles.cmtAvatar}>
              <a className={styles.cmtUserLInk}>
                <img
                  className={styles.cmtAvatarImg}
                  src={props.secondary.commentUser2Avatar}
                  width="24"
                  height="24"
                />
              </a>
            </span>
            <span className={styles.cmtName}>
              <a className={styles.cmtUserLInk}>
                {props.secondary.commentUser2}
              </a>
            </span>
            <span className={styles.cmtTime}>
              {props.secondary.commentTime2}
            </span>
          </div>
          <div className={styles.commentContent}>
            <div className={styles.commentText}>{props.secondary.comment2}</div>
          </div>
        </div>
        <Link href="/download">
          <a className={styles.InAppButton}>打开 App 查看更多评论</a>
        </Link>
      </div>
    </>
  );
}
