import Image from 'next/image'
import React, { useState } from 'react'
import styles from './Listenen.module.scss'

export default function ListenenView() {
    return (
        <div id={styles.listenen}>
            <div className={styles['listenen-container']}>
                <div className={styles['listenen-title']}>
                    <h3 className={styles['listenen-title-text']}><b>Last</b> listenen</h3>
                </div>
                <div className={styles['last-listenen']}>
                    <div className={styles['last-listenen-item']}>
                        <div className={styles['last-listenen-column']}>
                            <div className={styles['last-listenen-album']}>
                                <div style={{position: 'relative', width: '80px', height: '80px'}}>
                                    <div style={{position: 'absolute', width: '100%', height: '100%', zIndex: '1'}}></div>
                                    <Image src="/images/albums/heartbeat.jpg" width="80" height="80" className={styles['last-listenen-album-image']} />
                                </div>
                                <div className={styles['last-listenen-album-text']}>
                                    <span className={styles['last-listenen-album-name']}>Heartbeat</span>
                                    <span className={styles['last-listenen-album-artist']}>Enrique Iglesias ft. Nicole Scherzinger</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles['last-listenen-column']}>
                            <div className={styles['last-listenen-player']}>
                                <div className={styles['last-listenen-playback']}>
                                <div className={styles['player-playback-bar-content']}>
                                    <div className={styles['player-playback-bar']} style={{width: '30%'}}>
                                        <div className={styles['player-playback-bar-dot']} />
                                    </div>
                                </div>
                                    <span className={`${styles['last-listenen-playback-time']} ${styles['active']}`}>0:28</span>
                                </div>
                                <div className={styles['last-listenen-controls']}>
                                    <div className={styles['last-listenen-pause-content']}>
                                        <svg className={styles['last-listenen-pause-icon']} viewBox="0 0 24 24"><path d="M17.276 5.47c.435.16.724.575.724 1.039V17.49c0 .464-.29.879-.724 1.039a3.69 3.69 0 0 1-2.552 0A1.107 1.107 0 0 1 14 17.491V6.51c0-.464.29-.879.724-1.04a3.69 3.69 0 0 1 2.552 0Z"></path><path d="M9.276 5.47c.435.16.724.575.724 1.039V17.49c0 .464-.29.879-.724 1.039a3.69 3.69 0 0 1-2.552 0A1.107 1.107 0 0 1 6 17.491V6.51c0-.464.29-.879.724-1.04a3.69 3.69 0 0 1 2.552 0Z"></path></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles['last-listenen-item']}>
                        <div className={styles['last-listenen-column']}>
                            <div className={styles['last-listenen-album']}>
                                <div style={{position: 'relative', width: '80px', height: '80px'}}>
                                    <div style={{position: 'absolute', width: '100%', height: '100%', zIndex: '1'}}></div>
                                    <Image src="/images/albums/on-the-floor.jpg" width="80" height="80" className={styles['last-listenen-album-image']} />
                                </div>
                                <div className={styles['last-listenen-album-text']}>
                                    <span className={styles['last-listenen-album-name']}>On The Floor</span>
                                    <span className={styles['last-listenen-album-artist']}>Jennifer Lopez</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles['last-listenen-column']}>
                            <div className={styles['last-listenen-player']}>
                                <div className={styles['last-listenen-playback']}>
                                    <div className={styles['player-playback-bar-content']}>
                                        <div className={styles['player-playback-bar']} style={{width: '0%'}}>
                                            <div className={styles['player-playback-bar-dot']} />
                                        </div>
                                    </div>
                                    <span className={`${styles['last-listenen-playback-time']} ${styles['active']}`}>3:20</span>
                                </div>
                                <div className={styles['last-listenen-controls']}>
                                    <div className={styles['last-listenen-play-content']}>
                                    <svg className={styles['last-listenen-play-icon']} viewBox="0 0 24 24"><path d="M19.266 13.516a1.917 1.917 0 0 0 0-3.032A35.765 35.765 0 0 0 9.35 5.068l-.653-.232c-1.248-.443-2.566.401-2.735 1.69a42.49 42.49 0 0 0 0 10.948c.169 1.289 1.487 2.133 2.735 1.69l.653-.232a35.764 35.764 0 0 0 9.916-5.416Z"></path></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles['last-listenen-item']}>
                        <div className={styles['last-listenen-column']}>
                            <div className={styles['last-listenen-album']}>
                                <div style={{position: 'relative', width: '80px', height: '80px'}}>
                                    <div style={{position: 'absolute', width: '100%', height: '100%', zIndex: '1'}}></div>
                                    <Image src="/images/albums/revival.jpg" width="80" height="80" className={styles['last-listenen-album-image']} />
                                </div>
                                <div className={styles['last-listenen-album-text']}>
                                    <span className={styles['last-listenen-album-name']}>Revival</span>
                                    <span className={styles['last-listenen-album-artist']}>Eminem</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles['last-listenen-column']}>
                            <div className={styles['last-listenen-player']}>
                                <div className={styles['last-listenen-playback']}>
                                    <div className={styles['player-playback-bar-content']}>
                                        <div className={styles['player-playback-bar']} style={{width: '0%'}}>
                                            <div className={styles['player-playback-bar-dot']} />
                                        </div>
                                    </div>
                                    <span className={`${styles['last-listenen-playback-time']} ${styles['active']}`}>3:20</span>
                                </div>
                                <div className={styles['last-listenen-controls']}>
                                    <div className={styles['last-listenen-play-content']}>
                                    <svg className={styles['last-listenen-play-icon']} viewBox="0 0 24 24"><path d="M19.266 13.516a1.917 1.917 0 0 0 0-3.032A35.765 35.765 0 0 0 9.35 5.068l-.653-.232c-1.248-.443-2.566.401-2.735 1.69a42.49 42.49 0 0 0 0 10.948c.169 1.289 1.487 2.133 2.735 1.69l.653-.232a35.764 35.764 0 0 0 9.916-5.416Z"></path></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles['last-listenen-item']}>
                        <div className={styles['last-listenen-column']}>
                            <div className={styles['last-listenen-album']}>
                                <div style={{position: 'relative', width: '80px', height: '80px'}}>
                                    <div style={{position: 'absolute', width: '100%', height: '100%', zIndex: '1'}}></div>
                                    <Image src="/images/albums/right-round.jpg" width="80" height="80" className={styles['last-listenen-album-image']} />
                                </div>
                                <div className={styles['last-listenen-album-text']}>
                                    <span className={styles['last-listenen-album-name']}>Right Round</span>
                                    <span className={styles['last-listenen-album-artist']}>Flo Rida</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles['last-listenen-column']}>
                            <div className={styles['last-listenen-player']}>
                                <div className={styles['last-listenen-playback']}>
                                    <div className={styles['player-playback-bar-content']}>
                                        <div className={styles['player-playback-bar']} style={{width: '0%'}}>
                                            <div className={styles['player-playback-bar-dot']} />
                                        </div>
                                    </div>
                                    <span className={`${styles['last-listenen-playback-time']} ${styles['active']}`}>3:20</span>
                                </div>
                                <div className={styles['last-listenen-controls']}>
                                    <div className={styles['last-listenen-play-content']}>
                                    <svg className={styles['last-listenen-play-icon']} viewBox="0 0 24 24"><path d="M19.266 13.516a1.917 1.917 0 0 0 0-3.032A35.765 35.765 0 0 0 9.35 5.068l-.653-.232c-1.248-.443-2.566.401-2.735 1.69a42.49 42.49 0 0 0 0 10.948c.169 1.289 1.487 2.133 2.735 1.69l.653-.232a35.764 35.764 0 0 0 9.916-5.416Z"></path></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles['last-listenen-item']}>
                        <div className={styles['last-listenen-column']}>
                            <div className={styles['last-listenen-album']}>
                                <div style={{position: 'relative', width: '80px', height: '80px'}}>
                                    <div style={{position: 'absolute', width: '100%', height: '100%', zIndex: '1'}}></div>
                                    <Image src="/images/albums/international-love.jpg" width="80" height="80" className={styles['last-listenen-album-image']} />
                                </div>
                                <div className={styles['last-listenen-album-text']}>
                                    <span className={styles['last-listenen-album-name']}>International Love</span>
                                    <span className={styles['last-listenen-album-artist']}>Pitbull ft. Chris Brown</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles['last-listenen-column']}>
                            <div className={styles['last-listenen-player']}>
                                <div className={styles['last-listenen-playback']}>
                                    <div className={styles['player-playback-bar-content']}>
                                        <div className={styles['player-playback-bar']} style={{width: '0%'}}>
                                            <div className={styles['player-playback-bar-dot']} />
                                        </div>
                                    </div>
                                    <span className={`${styles['last-listenen-playback-time']} ${styles['active']}`}>3:20</span>
                                </div>
                                <div className={styles['last-listenen-controls']}>
                                    <div className={styles['last-listenen-play-content']}>
                                    <svg className={styles['last-listenen-play-icon']} viewBox="0 0 24 24"><path d="M19.266 13.516a1.917 1.917 0 0 0 0-3.032A35.765 35.765 0 0 0 9.35 5.068l-.653-.232c-1.248-.443-2.566.401-2.735 1.69a42.49 42.49 0 0 0 0 10.948c.169 1.289 1.487 2.133 2.735 1.69l.653-.232a35.764 35.764 0 0 0 9.916-5.416Z"></path></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles['last-listenen-item']}>
                        <div className={styles['last-listenen-column']}>
                            <div className={styles['last-listenen-album']}>
                                <div style={{position: 'relative', width: '80px', height: '80px'}}>
                                    <div style={{position: 'absolute', width: '100%', height: '100%', zIndex: '1'}}></div>
                                    <Image src="/images/albums/feel-this-moment.webp" width="80" height="80" className={styles['last-listenen-album-image']} />
                                </div>
                                <div className={styles['last-listenen-album-text']}>
                                    <span className={styles['last-listenen-album-name']}>Feel This Moment</span>
                                    <span className={styles['last-listenen-album-artist']}>Pitbull ft. Christina Aguilera</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles['last-listenen-column']}>
                            <div className={styles['last-listenen-player']}>
                                <div className={styles['last-listenen-playback']}>
                                        <div className={styles['player-playback-bar-content']}>
                                            <div className={styles['player-playback-bar']} style={{width: '0%'}}>
                                                <div className={styles['player-playback-bar-dot']} />
                                            </div>
                                        </div>
                                    <span className={`${styles['last-listenen-playback-time']} ${styles['active']}`}>3:20</span>
                                </div>
                                <div className={styles['last-listenen-controls']}>
                                    <div className={styles['last-listenen-play-content']}>
                                    <svg className={styles['last-listenen-play-icon']} viewBox="0 0 24 24"><path d="M19.266 13.516a1.917 1.917 0 0 0 0-3.032A35.765 35.765 0 0 0 9.35 5.068l-.653-.232c-1.248-.443-2.566.401-2.735 1.69a42.49 42.49 0 0 0 0 10.948c.169 1.289 1.487 2.133 2.735 1.69l.653-.232a35.764 35.764 0 0 0 9.916-5.416Z"></path></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}