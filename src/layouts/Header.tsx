import {Link} from 'react-router-dom';

function Header () {
    return(
        <header className="bg-gray-800 text-white py-4 w-full sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center px-5">
                <h1 className="text-3xl font-bold">My Website</h1>
                <nav>
                    <ul className="flex space-x-6">
                        <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
                        <li><Link to="/marketplace" className="hover:text-gray-400">MarketPlace</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;