import Image from 'next/image'
import styles from './Popular.module.scss'

export default function PopularView() {
    return (
        <div id={styles.popular}>
            <div className={styles['popular-container']}>
                <div className={styles['popular-title']}>
                    <h3 className={styles['popular-title-text']}><b>Popular</b> albums</h3>
                </div>
                <div className={styles['popular-albums']}>
                    <div className={styles['popular-albums-item']}>
                        <div style={{position: 'absolute', width: '100%', height: '100%', zIndex: '1'}}></div>
                        <Image className={styles['popular-albums-cover-image']} src="/images/albums/heartbeat.jpg" width="250" height="300" />
                        <div className={styles['popular-albums-artist']}>
                            <div style={{position: 'relative', width: '35px', height: '35px'}}>
                                <div style={{position: 'absolute', width: '100%', height: '100%', zIndex: '1'}}></div>
                                <Image className={styles['popular-albums-artist-avatar-image']} src="/images/avatars/enrique-iglesias.jpg" width="35" height="35" />
                            </div>
                            <span className={styles['popular-albums-artist-full-name']}>Enrique Iglesias</span>
                        </div>
                    </div>
                    <div className={styles['popular-albums-item']}>
                        <div style={{position: 'absolute', width: '100%', height: '100%', zIndex: '1'}}></div>
                        <Image className={styles['popular-albums-cover-image']} src="/images/albums/revival.jpg" width="250" height="300" />
                        <div className={styles['popular-albums-artist']}>
                            <div style={{position: 'relative', width: '35px', height: '35px'}}>
                                <div style={{position: 'absolute', width: '100%', height: '100%', zIndex: '1'}}></div>
                                <Image className={styles['popular-albums-artist-avatar-image']} src="/images/avatars/eminem.jpg" width="35" height="35" />
                            </div>
                            <span className={styles['popular-albums-artist-full-name']}>Eminem</span>
                        </div>
                    </div>
                </div>
            </div>
            <br />
        </div>
    )
}