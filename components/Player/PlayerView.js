import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'
import styles from './Player.module.scss'
export default function PlayerView() {
    return (
        <div id={styles.player}>
            <div className={styles['player-container']}>
                <div className={styles['player-column']}>
                    <div className={styles['player-album']}>
                        <div style={{position: 'relative', width: '80px', height: '80px'}}>
                            <div style={{position: 'absolute', width: '100%', height: '100%', zIndex: '1'}}></div>
                            <Image src="/images/albums/heartbeat.jpg" width="80" height="80" className={styles['player-album-image']} />
                        </div>
                        <div className={styles['player-album-text']}>
                            <span className={styles['player-album-name']}>Heartbeat</span>
                            <span className={styles['player-album-artist']}>Enrique Iglesias ft. Nicole Scherzinger</span>
                        </div>
                    </div>
                </div>
                <div className={styles['player-column']}>
                    <div className={styles['player-controls']}>
                        <svg className={styles['player-previous-icon']} viewBox="0 0 24 24"><path d="M6.75 7a.75.75 0 0 0-1.5 0v10a.75.75 0 0 0 1.5 0V7Z"></path><path d="M9.852 12.66a.834.834 0 0 1 0-1.32 25.009 25.009 0 0 1 6.935-3.787l.466-.165a.944.944 0 0 1 1.243.772 29.813 29.813 0 0 1 0 7.68.944.944 0 0 1-1.243.772l-.466-.165a25.01 25.01 0 0 1-6.935-3.788Z"></path></svg>
                        <div className={styles['player-pause-content']}>
                            <svg className={styles['player-pause-icon']} viewBox="0 0 24 24"><path d="M17.276 5.47c.435.16.724.575.724 1.039V17.49c0 .464-.29.879-.724 1.039a3.69 3.69 0 0 1-2.552 0A1.107 1.107 0 0 1 14 17.491V6.51c0-.464.29-.879.724-1.04a3.69 3.69 0 0 1 2.552 0Z"></path><path d="M9.276 5.47c.435.16.724.575.724 1.039V17.49c0 .464-.29.879-.724 1.039a3.69 3.69 0 0 1-2.552 0A1.107 1.107 0 0 1 6 17.491V6.51c0-.464.29-.879.724-1.04a3.69 3.69 0 0 1 2.552 0Z"></path></svg>
                        </div>
                        <svg className={styles['player-next-icon']} viewBox="0 0 24 24"><path d="M18.75 7a.75.75 0 0 0-1.5 0v10a.75.75 0 0 0 1.5 0V7Z"></path><path d="M14.454 10.945c.69.534.69 1.576 0 2.11a25.51 25.51 0 0 1-7.073 3.863l-.466.166c-.87.308-1.79-.28-1.907-1.178a30.314 30.314 0 0 1 0-7.812c.118-.898 1.037-1.486 1.907-1.177l.466.165a25.51 25.51 0 0 1 7.073 3.863Z"></path></svg>
                    </div>
                </div>
                <div className={styles['player-column']}>
                    <div className={styles['player-playback']}>
                        <span className={`${styles['player-playback-time']} ${styles['active']}`}>3:20</span>
                        <div className={styles['player-playback-bar-content']}>
                            <div className={styles['player-playback-bar']} style={{width: '30%'}}>
                                <div className={styles['player-playback-bar-dot']} />
                            </div>
                        </div>
                        <span className={styles['player-playback-time']}>4:43</span>
                    </div>
                </div>
                <div className={styles['player-column']}>
                    <div className={styles['player-sound']}>
                        <svg className={styles['player-sound-icon']} viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12.139 4.575c1.052-.877 2.658-.244 2.828 1.116.524 4.19.524 8.428 0 12.618-.17 1.36-1.776 1.993-2.828 1.116l-4.341-3.617a.25.25 0 0 0-.16-.058H4A1.75 1.75 0 0 1 2.25 14v-4c0-.966.784-1.75 1.75-1.75h3.638a.25.25 0 0 0 .16-.058l4.34-3.617Zm1.34 1.302a.233.233 0 0 0-.38-.15l-4.34 3.617a1.75 1.75 0 0 1-1.121.406H4a.25.25 0 0 0-.25.25v4c0 .138.112.25.25.25h3.638c.41 0 .806.143 1.12.406l4.341 3.617a.233.233 0 0 0 .38-.15c.508-4.066.508-8.18 0-12.246Z" clip-rule="evenodd"></path><path d="M19.908 5.946a.75.75 0 0 1 .948.476c.58 1.755.894 3.63.894 5.578a17.75 17.75 0 0 1-.894 5.578.75.75 0 1 1-1.424-.471A16.26 16.26 0 0 0 20.25 12a16.26 16.26 0 0 0-.818-5.107.75.75 0 0 1 .476-.947Z"></path><path d="M18.032 7.948a.75.75 0 0 0-1.408.517c.405 1.101.626 2.291.626 3.535a10.25 10.25 0 0 1-.626 3.535.75.75 0 0 0 1.408.517A11.667 11.667 0 0 0 18.75 12c0-1.423-.253-2.788-.718-4.052Z"></path></svg>
                        <div className={styles['player-sound-progress-content']}>
                            <div className={styles['player-sound-progress-bar']} style={{width: '30%'}}>
                                <div className={styles['player-sound-progress-bar-dot']} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}