import { useEffect } from "react";
import styles from "./TopBar.module.css";
import Link from "next/link";

export default function TopBarSearch() {
  
    return (
      <div className={styles.topBarContainer} id="topBarContainer">
        <div className={styles.topBar}>
          <Link href="/">
          <a className={styles.logo}>
            <svg viewBox="0 0 64 30" fill="#0066FF" width="64" height="30">
              <path d="M 29.05 4.582 H 16.733 V 25.94 h 3.018 l 0.403 2.572 l 4.081 -2.572 h 4.815 V 4.582 Z m -5.207 18.69 l -2.396 1.509 l -0.235 -1.508 h -1.724 V 7.233 h 6.78 v 16.04 h -2.425 Z M 14.46 14.191 H 9.982 c 0 -0.471 0.033 -0.954 0.039 -1.458 v -5.5 h 5.106 V 5.935 a 1.352 1.352 0 0 0 -0.404 -0.957 a 1.378 1.378 0 0 0 -0.968 -0.396 H 5.783 c 0.028 -0.088 0.056 -0.177 0.084 -0.255 c 0.274 -0.82 1.153 -3.326 1.153 -3.326 a 4.262 4.262 0 0 0 -2.413 0.698 c -0.57 0.4 -0.912 0.682 -1.371 1.946 c -0.532 1.453 -0.997 2.856 -1.31 3.693 C 1.444 8.674 0.28 11.025 0.28 11.025 a 5.85 5.85 0 0 0 2.52 -0.61 c 1.119 -0.593 1.679 -1.502 2.054 -2.883 l 0.09 -0.3 h 2.334 v 5.5 c 0 0.5 -0.045 0.982 -0.073 1.46 h -4.12 c -0.71 0 -1.39 0.278 -1.893 0.775 a 2.638 2.638 0 0 0 -0.783 1.874 h 6.527 a 17.717 17.717 0 0 1 -0.778 3.649 a 16.796 16.796 0 0 1 -3.012 5.273 A 33.104 33.104 0 0 1 0 28.74 s 3.13 1.175 5.425 -0.954 c 1.388 -1.292 2.631 -3.814 3.23 -5.727 a 28.09 28.09 0 0 0 1.12 -5.229 h 5.967 v -1.37 a 1.254 1.254 0 0 0 -0.373 -0.899 a 1.279 1.279 0 0 0 -0.909 -0.37 Z"></path>
              <path d="M 11.27 19.675 l -2.312 1.491 l 5.038 7.458 a 6.905 6.905 0 0 0 0.672 -2.218 a 3.15 3.15 0 0 0 -0.28 -2.168 l -3.118 -4.563 Z M 51.449 15.195 V 5.842 c 4.181 -0.205 7.988 -0.405 9.438 -0.483 l 0.851 -0.05 c 0.387 -0.399 0.885 -2.395 0.689 -3.021 c -0.073 -0.25 -0.213 -0.666 -0.638 -0.555 a 33.279 33.279 0 0 1 -4.277 0.727 c -2.766 0.321 -3.97 0.404 -7.804 0.682 c -6.718 0.487 -12.709 0.72 -12.709 0.72 a 2.518 2.518 0 0 0 0.788 1.834 a 2.567 2.567 0 0 0 1.883 0.706 c 2.278 -0.095 5.598 -0.25 8.996 -0.41 v 9.203 h -12.78 c 0 0.703 0.281 1.377 0.783 1.874 a 2.69 2.69 0 0 0 1.892 0.777 h 10.105 v 7.075 c 0 0.887 -0.464 1.192 -1.231 1.214 h -3.92 a 4.15 4.15 0 0 0 0.837 1.544 a 4.2 4.2 0 0 0 1.403 1.067 a 6.215 6.215 0 0 0 2.71 0.277 c 1.36 -0.066 2.967 -0.826 2.967 -3.57 v -7.607 h 11.28 c 0.342 0 0.67 -0.135 0.91 -0.374 c 0.242 -0.239 0.378 -0.563 0.378 -0.902 v -1.375 H 51.449 Z"></path>
              <path d="M 42.614 8.873 a 2.304 2.304 0 0 0 -1.508 -0.926 a 2.334 2.334 0 0 0 -1.727 0.405 l -0.376 0.272 l 4.255 5.85 l 2.24 -1.62 l -2.884 -3.98 Z M 57.35 8.68 l -3.125 4.097 l 2.24 1.663 l 4.517 -5.927 l -0.375 -0.277 a 2.32 2.32 0 0 0 -1.722 -0.452 a 2.327 2.327 0 0 0 -1.536 0.896 Z"></path>
            </svg>
          </a>
          </Link>     
          <div className={styles.actions}>
            <label className={styles.searchBoxII}>
              <svg
                className={styles.ziSearch}
                fill="#999"
                viewBox="0 0 24 24"
                width="18"
                height="18"
              >
                <path
                  d="M 17.068 15.58 a 8.377 8.377 0 0 0 1.774 -5.159 a 8.421 8.421 0 1 0 -8.42 8.421 a 8.38 8.38 0 0 0 5.158 -1.774 l 3.879 3.88 c 0.957 0.573 2.131 -0.464 1.488 -1.49 l -3.879 -3.878 Z m -6.647 1.157 a 6.323 6.323 0 0 1 -6.316 -6.316 a 6.323 6.323 0 0 1 6.316 -6.316 a 6.323 6.323 0 0 1 6.316 6.316 a 6.323 6.323 0 0 1 -6.316 6.316 Z"
                  fillRule="evenodd"
                ></path>
              </svg>
              <input
                type="search"
                className={styles.input}
                placeholder="??????49??????????????????"
              ></input>
            </label>
            <Link href="/">
                <a className={styles.quitBtn}>??????</a>
            </Link>
          </div>
        </div>
      </div>
    );
  }