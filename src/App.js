import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Description from './Description';

function App() {

	const apiKey = '3602e3ba595f04d284884a237d029e5b';
	const getData = async () => {
		const url = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`
		const response = await fetch(url);
		console.log(response);
		if (response.status === 200) {

		} else {
			throw new Error('데이터를 받아오지 못했습니다.');
		}

	} 

	return (

		<div className="App">
			<div className='background'>

				<Header />

				<div className='img-title-container'>
					<div className='main-title-container'>
						<Description
							title={'Stove League'}
							description={'A hot winter story in which the newly appointed leader of the last team, who has even the tears of fans, prepares for an extraordinary season'}
						/>
						<div className='btn-main-title-container'>
							<button className='btn-play'>
								<img src={'ic_play.png'} alt="play" />
								PLAY
							</button>
							<button className='btn-detail'>DETAIL</button>
						</div>
					</div>
				</div>

			</div>

		</div>
	);
}

export default App;
