import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">
		<header>
        	<div className='header-container'> 
            	<h1><a href='#'>K-FILX</a></h1>
             	<nav className='header-nav'>
					<ul>
                		<li><a href='#'>HOME</a></li>
                		<li><a href='#'>CATEGORY</a></li>
                		<li><a href='#'>MY LIST </a></li>
                		<li><a href='#'><img src={'ic_notification.png'} alt="alarm"></img></a></li>
                		<li><a href='#'><img src={'ic_search.png'} alt="alarm"></img></a></li>
					</ul>
              </nav>
          </div>
    	</header>
			<div className='img-title-container'>
				<div className='main-title-container'>
					<h1>Stove League</h1>
					<p>A hot winter story in which the newly appointed leader of the last team, who has even the tears of fans, prepares for an extraordinary season</p>
				</div>
				<button>PLAY</button>
				<button>DETAIL</button>
			</div>
	 <div className='background'>
			<img src={'mainimage.jpg'}></img>
	</div>

    </div>
  );
}

export default App;
