import Image from 'next/image'
import styles from './Welcome.module.scss'

export default function WelcomeView() {
    return (
        <div id={styles.welcome}>
            <div className={styles['welcome-container']}>
                <div className={styles['welcome-avatar-column']}>
                    <div style={{position: 'relative', width: '60px', height: '60px'}}>
                        <div style={{position: 'absolute', width: '100%', height: '100%', zIndex: '1'}}></div>
                        <Image src="/images/avatars/chad.jpg" width="60" height="60" className={styles['welcome-avatar-image']} />
                    </div>
                    <span className={styles['welcome-avatar-text']}>Good morning, <b>Yilmaz</b></span>
                </div>
                <div className={styles['welcome-search']}>
                    <svg className={styles['welcome-search-icon']} viewBox="0 0 24 24"><path d="M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9Zm0 16c3.867 0 7-3.133 7-7 0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7Zm8.485.071 2.829 2.828-1.415 1.415-2.828-2.829 1.414-1.414Z"></path></svg>
                    <input type="text" placeholder="What do you want to listen?" className={styles['welcome-search-bar']} />
                </div>
            </div>
        </div>
    )
}