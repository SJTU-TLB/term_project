import styles from "./AppMain.module.css"
import StoryCard from "./StoryCard/StoryCard"

export default function AppMain(){
    return(
        <main role="main" className={styles.AppMain}>
            <div className={styles.TopStoryMain}>
                <StoryCard />
                <StoryCard />
                <StoryCard />
                <StoryCard />
                <StoryCard />
                <StoryCard />
                <StoryCard />
                <StoryCard />
                <StoryCard />
                <StoryCard />
            </div>
        </main>
    );
}