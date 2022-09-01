import Link from 'next/link'

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <h1>To-Do List</h1>
            </div>
            <Link href="/about"><a>About</a></Link>
        </nav>
     );
}
 
export default Navbar;