import NavbarView from '../components/Navbar/NavbarView'
import MainView from '../components/Main/MainView'
import PlayerView from '../components/Player/PlayerView'
import styles from './index.module.scss'

export default function Index() {
    return (
        <div className={styles['page-container']}>
            <NavbarView />
            <MainView />
            <PlayerView />
        </div>
    )
}