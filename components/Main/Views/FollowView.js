import Image from 'next/image'
import styles from './Follow.module.scss'

export default function FollowView() {
    return (
        <div id={styles.follow}>
            <div className={styles['follow-container']}>
                <div className={styles['follow-title']}>
                    <h3 className={styles['follow-title-text']}><b>Follow</b> artists</h3>
                </div>
                <div className={styles['follow-artists']}>
                    <div className={styles['follow-artist-list']}>
                        <div className={styles['follow-artists-item']}>
                            <div style={{position: 'relative', width: '70px', height: '70px'}}>
                                <div style={{position: 'absolute', width: '100%', height: '100%', zIndex: '1'}}></div>
                                <Image className={styles['follow-artists-avatar-image']} src="/images/avatars/pitbull.jpg" width="70" height="70" />
                            </div>
                            <span className={styles['follow-artist-full-name']}>Pitbull</span>
                        </div>
                        <div className={styles['follow-artists-item']}>
                            <div style={{position: 'relative', width: '70px', height: '70px'}}>
                                <div style={{position: 'absolute', width: '100%', height: '100%', zIndex: '1'}}></div>
                                <Image className={styles['follow-artists-avatar-image']} src="/images/avatars/adele.jpg" width="70" height="70" />
                            </div>
                            <span className={styles['follow-artist-full-name']}>Adele</span>
                        </div>
                        <div className={styles['follow-artists-item']}>
                            <div style={{position: 'relative', width: '70px', height: '70px'}}>
                                <div style={{position: 'absolute', width: '100%', height: '100%', zIndex: '1'}}></div>
                                <Image className={styles['follow-artists-avatar-image']} src="/images/avatars/tarkan.jpg" width="70" height="70" />
                            </div>
                            <span className={styles['follow-artist-full-name']}>Tarkan</span>
                        </div>
                        <div className={styles['follow-artists-item']}>
                            <div style={{position: 'relative', width: '70px', height: '70px'}}>
                                <div style={{position: 'absolute', width: '100%', height: '100%', zIndex: '1'}}></div>
                                <Image className={styles['follow-artists-avatar-image']} src="/images/avatars/jennifer-lopez.jpg" width="70" height="70" />
                            </div>
                            <span className={styles['follow-artist-full-name']}>Jennifer Lopez</span>
                        </div>
                        <div className={styles['follow-artists-item']}>
                            <div style={{position: 'relative', width: '70px', height: '70px'}}>
                                <div style={{position: 'absolute', width: '100%', height: '100%', zIndex: '1'}}></div>
                                <Image className={styles['follow-artists-avatar-image']} src="/images/avatars/enrique-iglesias.jpg" width="70" height="70" />
                            </div>
                            <span className={styles['follow-artist-full-name']}>Enrique Iglesias</span>
                        </div>
                        <div className={styles['follow-artists-item']}>
                            <div style={{position: 'relative', width: '70px', height: '70px'}}>
                                <div style={{position: 'absolute', width: '100%', height: '100%', zIndex: '1'}}></div>
                                <Image className={styles['follow-artists-avatar-image']} src="/images/avatars/eminem.jpg" width="70" height="70" />
                            </div>
                            <span className={styles['follow-artist-full-name']}>Eminem</span>
                        </div>
                        <div className={styles['follow-artists-item']}>
                            <div style={{position: 'relative', width: '70px', height: '70px'}}>
                                <div style={{position: 'absolute', width: '100%', height: '100%', zIndex: '1'}}></div>
                                <Image className={styles['follow-artists-avatar-image']} src="/images/avatars/lana-del-rey.jpg" width="70" height="70" />
                            </div>
                            <span className={styles['follow-artist-full-name']}>Lana Del Rey</span>
                        </div>
                        <div className={styles['follow-artists-item']}>
                            <div style={{position: 'relative', width: '70px', height: '70px'}}>
                                <div style={{position: 'absolute', width: '100%', height: '100%', zIndex: '1'}}></div>
                                <Image className={styles['follow-artists-avatar-image']} src="/images/avatars/sia.jpg" width="70" height="70" />
                            </div>
                            <span className={styles['follow-artist-full-name']}>Sia</span>
                        </div>
                        <div className={styles['follow-artists-item']}>
                            <div style={{position: 'relative', width: '70px', height: '70px'}}>
                                <div style={{position: 'absolute', width: '100%', height: '100%', zIndex: '1'}}></div>
                                <Image className={styles['follow-artists-avatar-image']} src="/images/avatars/drake.jpg" width="70" height="70" />
                            </div>
                            <span className={styles['follow-artist-full-name']}>Drake</span>
                        </div>
                        <div className={styles['follow-artists-item']}>
                            <div style={{position: 'relative', width: '70px', height: '70px'}}>
                                <div style={{position: 'absolute', width: '100%', height: '100%', zIndex: '1'}}></div>
                                <Image className={styles['follow-artists-avatar-image']} src="/images/avatars/linkin-park.jpg" width="70" height="70" />
                            </div>
                            <span className={styles['follow-artist-full-name']}>Linkin Park</span>
                        </div>
                        <div className={styles['follow-artists-item']}>
                            <div style={{position: 'relative', width: '70px', height: '70px'}}>
                                <div style={{position: 'absolute', width: '100%', height: '100%', zIndex: '1'}}></div>
                                <Image className={styles['follow-artists-avatar-image']} src="/images/avatars/nicole-scherzinger.jpg" width="70" height="70" />
                            </div>
                            <span className={styles['follow-artist-full-name']}>Nicole Scherzinger</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}