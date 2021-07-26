function Header() {
	return (
		<header className='bg-[#383839]'>
			<div className='flex items-center justify-between px-4'>
				<div>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						class='h-6 w-6 text-gray-300'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'>
						<path
							stroke-linecap='round'
							stroke-linejoin='round'
							stroke-width='2'
							d='M4 8h16M4 16h16'
						/>
					</svg>
				</div>
				<div>
					<img
						src='https://www.apple.com/ac/globalnav/6/en_MY/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__cxwwnrj0urau_small.svg'
						alt=''
					/>
				</div>
				<div>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						class='h-6 w-6 text-gray-300'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'>
						<path
							stroke-linecap='round'
							stroke-linejoin='round'
							stroke-width='2'
							d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
						/>
					</svg>
				</div>
			</div>
		</header>
	);
}

export default Header;
