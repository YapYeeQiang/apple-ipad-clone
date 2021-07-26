import './App.css';
import Header from './components/Header';
import Product from './components/Product';

function App() {
	const products = [
		{
			id: '1',
			image:
				'https://www.apple.com/v/ipad/home/bn/images/overview/hero/ipad_pro_hero__bh3eq6sqfjw2_small.jpg',
			title: 'iPad Pro',
			description: 'The ultimate iPad experience.',
			price: 'From RM 3,499',
		},
		{
			id: '2',
			image:
				'https://www.apple.com/v/ipad/home/bn/images/overview/hero/ipad_air__d794tkovmk02_small.jpg',
			title: 'iPad Air',
			description: 'Powerful. Colourful. Wonderful.',
			price: 'From RM 2,599',
		},
		{
			id: '3',
			image:
				'https://www.apple.com/my/ipad/home/images/overview/hero/ipad_102__deqy1t6yaga6_large.jpg',
			title: 'iPad',
			description: 'Delightfully capable. Surprisingly affordable.',
			price: 'From RM 1,449',
		},
		{
			id: '4',
			image:
				'https://www.apple.com/v/ipad/home/bn/images/overview/hero/ipad_mini__dn6g8b0hw8om_small.jpg',
			title: 'iPad mini',
			description: 'Small in size. Big on capability.',
			price: 'From RM 1,699',
		},
	];

	return (
		<div className='app'>
			<Header />
			<div>
				{products.map((product) => {
					return (
						<Product
							key={product.id}
							id={product.id}
							image={product.image}
							title={product.title}
							description={product.description}
							price={product.price}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default App;
