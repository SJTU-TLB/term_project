import React, { useEffect, useState } from "react";

import styles from "./DownloadGuide.module.css";

export default function DownloadGuide() {
  useEffect(() => {
    var elemScrollPos;
    window.addEventListener("scroll", function () {
      elemScrollPos = document.documentElement.scrollTop;

      if (document.getElementById("guider") != null) {
        if (elemScrollPos > 1720) {
          document.getElementById("guider").className =
            styles.downloadGuideWrapperActive;
          document.getElementById("inner").className =
            styles.downloadGuideInnerActive;
          document.getElementById("bg").className =
            styles.downloadGuideBgActive;
        } else {
          document.getElementById("guider").className =
            styles.downloadGuideWrapper;
          document.getElementById("inner").className =
            styles.downloadGuideInner;
          document.getElementById("bg").className = styles.downloadGuideBg;
        }
      }
    });
  });
  return (
    <div className={styles.downloadGuideWrapper} id="guider">
      <div className={styles.downloadGuideInner} id="inner">
        <svg
          width="90"
          height="42"
          viewBox="0 0 90 42"
          className={styles.downloadGuideLogo}
          fill="none"
        >
          <path
            fill="#06F"
            d="M 40.851 6.037 h -17.32 v 30.034 h 4.244 l 0.566 3.618 l 5.74 -3.618 h 6.77 V 6.037 Z M 33.53 32.321 l -3.369 2.12 l -0.33 -2.12 h -2.425 V 9.764 h 9.533 v 22.557 H 33.53 Z M 20.335 19.55 h -6.298 c 0 -0.663 0.047 -1.341 0.055 -2.05 V 9.764 h 7.18 V 7.94 a 1.901 1.901 0 0 0 -0.568 -1.346 a 1.938 1.938 0 0 0 -1.36 -0.556 H 8.131 c 0.04 -0.125 0.08 -0.25 0.119 -0.359 c 0.385 -1.154 1.621 -4.678 1.621 -4.678 a 5.994 5.994 0 0 0 -3.393 0.982 c -0.803 0.562 -1.283 0.96 -1.929 2.737 c -0.748 2.043 -1.4 4.015 -1.842 5.193 C 2.03 11.792 0.393 15.098 0.393 15.098 a 8.229 8.229 0 0 0 3.542 -0.858 c 1.575 -0.834 2.362 -2.113 2.89 -4.054 l 0.126 -0.421 h 3.282 v 7.734 c 0 0.702 -0.063 1.38 -0.102 2.05 H 4.338 c -0.998 0 -1.955 0.394 -2.661 1.093 a 3.71 3.71 0 0 0 -1.102 2.635 h 9.18 a 24.912 24.912 0 0 1 -1.095 5.13 a 23.62 23.62 0 0 1 -4.236 7.415 A 46.582 46.582 0 0 1 0 40.01 s 4.4 1.653 7.629 -1.34 c 1.952 -1.817 3.7 -5.365 4.542 -8.055 a 39.509 39.509 0 0 0 1.575 -7.353 h 8.392 v -1.925 a 1.763 1.763 0 0 0 -0.526 -1.265 a 1.795 1.795 0 0 0 -1.277 -0.521 Z"
          ></path>
          <path
            fill="#06F"
            d="M 15.848 27.26 l -3.252 2.098 l 7.086 10.487 c 0.488 -0.98 0.808 -2.034 0.944 -3.119 a 4.43 4.43 0 0 0 -0.393 -3.048 l -4.385 -6.417 Z m 56.502 -6.299 V 7.808 c 5.88 -0.289 11.234 -0.57 13.273 -0.679 l 1.196 -0.07 c 0.543 -0.561 1.244 -3.368 0.969 -4.25 c -0.103 -0.35 -0.3 -0.935 -0.898 -0.779 a 46.8 46.8 0 0 1 -6.015 1.021 c -3.889 0.453 -5.581 0.57 -10.974 0.96 c -9.447 0.686 -17.871 1.013 -17.871 1.013 a 3.542 3.542 0 0 0 1.108 2.579 a 3.611 3.611 0 0 0 2.647 0.992 c 3.204 -0.132 7.873 -0.35 12.652 -0.577 v 12.943 H 50.463 a 3.71 3.71 0 0 0 1.103 2.636 a 3.781 3.781 0 0 0 2.66 1.091 h 14.21 v 9.95 c 0 1.247 -0.653 1.675 -1.731 1.707 h -5.511 a 5.837 5.837 0 0 0 1.175 2.172 a 5.906 5.906 0 0 0 1.974 1.5 a 8.74 8.74 0 0 0 3.81 0.39 c 1.913 -0.094 4.173 -1.162 4.173 -5.021 V 24.688 h 15.863 c 0.48 0 0.94 -0.189 1.28 -0.525 c 0.34 -0.336 0.53 -0.793 0.53 -1.268 V 20.96 H 72.35 Z"
          ></path>
          <path
            fill="#06F"
            d="M 59.926 12.073 a 3.27 3.27 0 0 0 -3.393 -1.258 c -0.417 0.097 -0.81 0.276 -1.157 0.525 l -0.527 0.382 l 5.983 8.226 l 3.149 -2.277 l -4.055 -5.598 Z m 20.721 -0.273 l -4.393 5.762 l 3.15 2.339 l 6.353 -8.335 l -0.528 -0.39 a 3.264 3.264 0 0 0 -2.422 -0.636 a 3.272 3.272 0 0 0 -2.16 1.26 Z"
          ></path>
        </svg>
        <div className={styles.downloadGuideSlogan}>有问题，上知乎</div>
        <div className={styles.downloadGuideBg} id="bg"></div>
      </div>
    </div>
  );
}
