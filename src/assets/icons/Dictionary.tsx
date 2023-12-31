import { IIcon } from '../../interfaces';

const Dictionary = ({ width, height }: IIcon) => {
  return (
    <svg
      height={width}
      width={height}
      viewBox="0 0 100 100"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
    >
      <path
        style={{ fill: '#B1974D', stroke: '#705F2E', strokeWidth: 3 }}
        d="M 22,10 77,2 77,27 22,28 z"
      />
      <path
        style={{ fill: '#B1974D', stroke: '#705F2E', strokeWidth: 3 }}
        d="m 34,20 58,-7 0,76 -58,7 z"
      />
      <path
        style={{
          fill: '#5B4335',
          stroke: '#2E241F',
          strokeWidth: 3,
          strokeLinejoin: 'bevel',
        }}
        d="M 34,20 34,96 21,98 7,89 7,12 22,10 7,12 21,22 z"
      />
      <path
        style={{ fill: '#D2D2B3' }}
        d="M 10,13 77,3 c 0,0 -2,5 2,7 4,2 9,2 9,2 l -67,9 z"
      />
      <path
        style={{ fill: 'none', stroke: '#836959', strokeWidth: 3 }}
        d="m 21,23 0,74"
      />

      <path
        style={{ fill: 'none', stroke: '#4C392E', strokeWidth: 3 }}
        d="M 42,69 C 43,68 52,34 52,34 l 8,31 -3,-11 -11,1 m 32,1 c -1,4 -5,10 -10,5 -3,-3 -1,-11 4,-13 3,-1 4,0 6,4 l 0,-5 0,12 c 0,0 1,5 5,2"
      />
    </svg>
  );
};

export default Dictionary;
