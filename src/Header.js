import './App.css';

export default function Header(){
    return (
        <header>
            <div className='header-container'>
                <h1><a href='#'>K-FILX</a></h1>
                <nav className='header-nav'>
                    <ul>
                        <li>
                            <a href='#'>HOME</a>
                        </li>
                        <li>
                            <a href='#'>CATEGORY</a>
                        </li>
                        <li>
                            <a href='#'>MY LIST </a>
                        </li>
                        <li>
                            <a href='#'>
                                <img src={'ic_notification.png'} alt="alarm" />
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <img src={'ic_search.png'} alt="alarm" />
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
)
}
