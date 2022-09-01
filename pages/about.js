import Link from 'next/link'
import styles from '../styles/Home.module.css'

const About = () => {
    return (
        <div>
            <h1>Developer: Mohammed Diary</h1>
            <p>This is just a simple to-do list website that I made for fun</p>
            <Link href="/"><a className={styles.back}>back to the Homepage</a></Link>
        </div>
     );
}
 
export default About;