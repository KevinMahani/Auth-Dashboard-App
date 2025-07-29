import Link from 'next/link';
import styles from './page.module.scss';

export default function Home() {
    return (
        <div className={styles.home}>
        <h1>Welcome to My Project</h1>
        <p>This is the starting point of My application.</p>
        <Link href="/auth">
            <button>Start</button>
        </Link>
        </div>
    );
}