export function Polygon({ size, colorStroke, widthStroke }) {
	const sizeWidth = 1.11 * size;

	return (
		<>
			<svg
				width={sizeWidth}
				height={size}
				viewBox='0 0 1126 1018'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M545.341 25.7567L1113.91 864.441C1136.07 897.132 1114.44 941.545 1075.04 944.262L58.3853 1014.35C18.9837 1017.07 -8.53055 976.043 8.93566 940.62L457.028 31.8453C474.394 -3.37436 523.306 -6.74663 545.341 25.7567Z'
					stroke={colorStroke}
					strokeWidth={widthStroke}
				/>
			</svg>
		</>
	);
}
