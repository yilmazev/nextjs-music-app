import Head from 'next/head'
import WelcomeView from './Views/WelcomeView'
import FollowView from './Views/FollowView'
import PopularView from './Views/PopularView'
import ListenenView from './Views/ListenenView'
import styles from './Main.module.scss'

export default function Main() {
    return (
        <div id={styles.main}>
            <Head>
                <title>Wave - Web Player</title>
            </Head>
            <div className={styles['main-container']}>
                <WelcomeView />
                <FollowView />
                <div style={{display: 'flex', gap: '5em'}}>
                    <PopularView />
                    <ListenenView />
                </div>
            </div>
        </div>
    )
}