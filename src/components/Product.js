function Product({ id, image, title, description, price }) {
	return (
		<section className='bg-white text-[#1d1d1f] '>
			<div className='flex flex-col items-center py-16'>
				{/* Product Image */}
				<div>
					<img src={image} alt='iPad Pro' />
				</div>

				{/* Product Info */}
				<div className='text-center mt-4 mb-2'>
					{id === '1' ? (
						<span className='text-[#bf4800] text-[12px]'>New</span>
					) : null}
					<h2 className='text-[40px] font-semibold'>{title}</h2>
					<p className='text-[24px] font-semibold'>{description}</p>
					<p className='text-[17px] text-gray-500 mt-2'>{price}</p>
				</div>

				{/* CTA */}
				<div className='flex flex-col'>
					<button className='bg-[#0071e3] text-white text-[17px] my-[9px] py-2 px-4 rounded-full'>
						Buy
					</button>
					<span className='text-[#0066cc] mt-1'>
						<a
							className='hover:underline'
							href='https://www.apple.com/my/ipad-pro/'>
							Learn more
						</a>{' '}
						&gt;
					</span>
				</div>
			</div>
		</section>
	);
}

export default Product;
