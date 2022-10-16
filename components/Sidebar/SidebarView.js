import Image from 'next/image'
import styles from './Sidebar.module.scss'

export default function SidebarView() {
    return (
        <div id={styles.sidebar}>
            <div className={styles['sidebar-container']}>
                <div className={styles['sidebar-title']}>
                    <h3 className={styles['sidebar-title-text']}><b>Friends</b> activity</h3>
                </div>
                <div className={styles['sidebar-friends']}>
                    <div className={styles['sidebar-friends-item']}>
                        <div style={{position: 'relative', width: '50px', height: '50px'}}>
                            <div style={{position: 'absolute', width: '100%', height: '100%', zIndex: '1'}}></div>
                            <div className={styles['sidebar-friends-online']} />
                            <Image src="/images/avatars/user_01.png" width="50" height="50" className={styles['sidebar-friends-avatar-image']} />
                        </div>
                        <div className={styles['sidebar-friends-text']}>
                            <span className={styles['sidebar-friends-full-name']}>Amy Honest</span>
                            <div className={styles['sidebar-friends-listening-content']}>
                                <div className={styles['sidebar-friends-listening-icon-content']}>
                                    <svg className={styles['sidebar-friends-listening-icon-image']} viewBox="0 0 24 24"><path d="M6.234 20.625c-.287 0-.57-.076-.82-.219a1.843 1.843 0 0 1-.912-1.609V5.203c0-.673.35-1.29.912-1.609a1.647 1.647 0 0 1 1.677.021l11.618 6.954a1.686 1.686 0 0 1 0 2.86l-11.62 6.956a1.664 1.664 0 0 1-.855.24Z"></path></svg>
                                </div>
                                <span className={styles['sidebar-friends-listening-song']}>Heartbeak</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles['sidebar-friends-item']}>
                        <div style={{position: 'relative', width: '50px', height: '50px'}}>
                            <div style={{position: 'absolute', width: '100%', height: '100%', zIndex: '1'}}></div>
                            <div className={styles['sidebar-friends-online']} />
                            <Image src="/images/avatars/user_02.jpg" width="50" height="50" className={styles['sidebar-friends-avatar-image']} />
                        </div>
                        <div className={styles['sidebar-friends-text']}>
                            <span className={styles['sidebar-friends-full-name']}>Carl Ocean</span>
                            <div className={styles['sidebar-friends-listening-content']}>
                                <div className={styles['sidebar-friends-listening-icon-content']}>
                                    <svg className={styles['sidebar-friends-listening-icon-image']} viewBox="0 0 24 24"><path d="M6.234 20.625c-.287 0-.57-.076-.82-.219a1.843 1.843 0 0 1-.912-1.609V5.203c0-.673.35-1.29.912-1.609a1.647 1.647 0 0 1 1.677.021l11.618 6.954a1.686 1.686 0 0 1 0 2.86l-11.62 6.956a1.664 1.664 0 0 1-.855.24Z"></path></svg>
                                </div>
                                <span className={styles['sidebar-friends-listening-song']}>Feel This Moment</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles['sidebar-friends-item']}>
                        <div style={{position: 'relative', width: '50px', height: '50px'}}>
                            <div style={{position: 'absolute', width: '100%', height: '100%', zIndex: '1'}}></div>
                            <div className={styles['sidebar-friends-online']} />
                            <Image src="/images/avatars/user_03.png" width="50" height="50" className={styles['sidebar-friends-avatar-image']} />
                        </div>
                        <div className={styles['sidebar-friends-text']}>
                            <span className={styles['sidebar-friends-full-name']}>Alex Diamond</span>
                            <div className={styles['sidebar-friends-listening-content']}>
                                <div className={styles['sidebar-friends-listening-icon-content']}>
                                    <svg className={styles['sidebar-friends-listening-icon-image']} viewBox="0 0 24 24"><path d="M6.234 20.625c-.287 0-.57-.076-.82-.219a1.843 1.843 0 0 1-.912-1.609V5.203c0-.673.35-1.29.912-1.609a1.647 1.647 0 0 1 1.677.021l11.618 6.954a1.686 1.686 0 0 1 0 2.86l-11.62 6.956a1.664 1.664 0 0 1-.855.24Z"></path></svg>
                                </div>
                                <span className={styles['sidebar-friends-listening-song']}>International Love</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles['sidebar-friends-item']}>
                        <div style={{position: 'relative', width: '50px', height: '50px'}}>
                            <div style={{position: 'absolute', width: '100%', height: '100%', zIndex: '1'}}></div>
                            <div className={styles['sidebar-friends-offline']} />
                            <Image src="/images/avatars/user_04.png" width="50" height="50" className={styles['sidebar-friends-avatar-image']} />
                        </div>
                        <div className={styles['sidebar-friends-text']}>
                            <span className={styles['sidebar-friends-full-name']}>Melissa Grey</span>
                            <div className={styles['sidebar-friends-listening-content']}>
                                <span className={styles['sidebar-friends-last-date']}>14 hours ago</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles['sidebar-friends-item']}>
                        <div style={{position: 'relative', width: '50px', height: '50px'}}>
                            <div style={{position: 'absolute', width: '100%', height: '100%', zIndex: '1'}}></div>
                            <div className={styles['sidebar-friends-offline']} />
                            <Image src="/images/avatars/user_05.png" width="50" height="50" className={styles['sidebar-friends-avatar-image']} />
                        </div>
                        <div className={styles['sidebar-friends-text']}>
                            <span className={styles['sidebar-friends-full-name']}>Emily North</span>
                            <div className={styles['sidebar-friends-listening-content']}>
                                <span className={styles['sidebar-friends-last-date']}>3 days ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles['sidebar-get-premium']}>
                    <div className={styles['sidebar-get-premium-container']}>
                        <div className={styles['sidebar-get-premium-title']}>
                            <span className={styles['sidebar-get-premium-title-text']}>Expand Your Waves</span>
                            <div className={styles['sidebar-get-premium-title-icon']}>
                                
                            </div>
                        </div>
                        <a className={styles['sidebar-get-premium-button']}>Get Premium</a>
                    </div>
                </div>
            </div>
        </div>
    )
}