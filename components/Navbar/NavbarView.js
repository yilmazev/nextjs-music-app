import Image from "next/image"
import Link from "next/link"
import styles from './Navbar.module.scss'

export default function NavbarView() {
    return (
        <nav id={styles.navbar}>
            <div className={styles['navbar-container']}>
                <div className={styles['logo-content']}>
                    <Image src="/images/logo.png" width={164} height={39} />
                </div>
                <ul className={styles['navbar-content']}>
                    <li className={`${styles['navbar-item']} ${styles['navbar-active']}`}>
                        <svg className={styles['navbar-item-icon']} stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M17 21.002H7a4 4 0 0 1-4-4V10.71a4 4 0 0 1 1.927-3.42l5-3.031a4 4 0 0 1 4.146 0l5 3.03A4 4 0 0 1 21 10.71v6.292a4 4 0 0 1-4 4Z"></path><path d="M9 17h6"></path></svg>
                        <Link href="asd">Home</Link>
                    </li>
                    <li className={`${styles['navbar-item']}`}>
                        <svg className={styles['navbar-item-icon']} stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z"></path><path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z"></path></svg>
                        <Link href="#">Discover</Link>
                    </li>
                    <li className={`${styles['navbar-item']}`}>
                        <svg className={styles['navbar-item-icon']} stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 20S3 14.988 3 8.972c0-6.015 7-6.516 9-1.81 2-4.706 9-4.205 9 1.81C21 14.988 12 20 12 20Z"></path></svg>
                        <Link href="#">Favorites</Link>
                    </li>
                    <li className={`${styles['navbar-item']}`}>
                        <svg className={styles['navbar-item-icon']} stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M18 8.4c0-1.697-.632-3.325-1.757-4.525C15.117 2.675 13.59 2 12 2c-1.591 0-3.117.674-4.243 1.875C6.632 5.075 6 6.703 6 8.4 6 15.867 3 18 3 18h18s-3-2.133-3-9.6Z"></path><path d="M13.73 21a1.999 1.999 0 0 1-3.46 0"></path></svg>
                        <Link href="#">Notification</Link>
                    </li>
                    <li className={`${styles['navbar-item']}`}>
                    <svg className={styles['navbar-item-icon']} stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M3 12h3.75l1.5-2.25 3 4.5 1.5-2.25H15"></path><path d="M2.635 8.268A4.875 4.875 0 0 1 12 6.75v0a4.875 4.875 0 0 1 9.375 1.875C21.375 15 12 20.25 12 20.25s-3.159-1.772-5.812-4.5"></path></svg>
                        <Link href="#">Activity</Link>
                    </li>
                    <li className={`${styles['navbar-item']}`}>
                    <svg className={styles['navbar-item-icon']} stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"></path><path d="m19.166 7.94-.066-.115a2 2 0 0 1-.268-1.034l.03-1.779a1 1 0 0 0-.5-.883l-2.737-1.577a1 1 0 0 0-1.013.009l-1.52.91a2 2 0 0 1-1.027.283h-.132a2 2 0 0 1-1.029-.285l-1.526-.916a1 1 0 0 0-1.017-.008L5.633 4.13a1 1 0 0 0-.498.881l.03 1.781a2 2 0 0 1-.268 1.034l-.064.113a2 2 0 0 1-.763.749l-1.555.861a1 1 0 0 0-.515.877l.007 3.152a1 1 0 0 0 .514.871l1.547.861a2 2 0 0 1 .764.755l.07.121a2 2 0 0 1 .263 1.027l-.03 1.773a1 1 0 0 0 .501.884l2.737 1.577a1 1 0 0 0 1.013-.009l1.519-.91a2 2 0 0 1 1.027-.283h.132a2 2 0 0 1 1.03.285l1.525.916a1 1 0 0 0 1.017.008l2.728-1.584a1 1 0 0 0 .498-.881l-.03-1.781a2 2 0 0 1 .268-1.034l.065-.113a2 2 0 0 1 .762-.749l1.555-.861a1 1 0 0 0 .515-.877l-.007-3.152a1 1 0 0 0-.514-.872l-1.55-.863a2 2 0 0 1-.76-.747Z"></path></svg>
                        <Link href="#">Settings</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}