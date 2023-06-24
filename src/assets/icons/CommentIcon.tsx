const CommentIcon = () => {
  return (
    <svg
      width="16px"
      height="16px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
      transform="rotate(180)matrix(1, 0, 0, -1, 0, 0)"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />

      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      />

      <g id="SVGRepo_iconCarrier">
        {' '}
        <defs>
          {' '}
          <polygon
            id="comment-a"
            points="0 0 19 0 19 3 16.637 3 15.732 7.26 10.79 3 0 3"
          />{' '}
          <path
            id="comment-c"
            d="M3,2 C2.44771525,2 2,2.44771525 2,3 L2,13 C2,13.5522847 2.44771525,14 3,14 L13,14 L17,18 L17,14 L19,14 C19.5522847,14 20,13.5522847 20,13 L20,3 C20,2.44771525 19.5522847,2 19,2 L3,2 Z M19,16 L19,18 C19,19.7818097 16.8457162,20.6741433 15.5857864,19.4142136 L12.1715729,16 L3,16 C1.34314575,16 0,14.6568542 0,13 L0,3 C0,1.34314575 1.34314575,0 3,0 L19,0 C20.6568542,0 22,1.34314575 22,3 L22,13 C22,14.6568542 20.6568542,16 19,16 Z M5,7 L17,7 C17.5522847,7 18,6.55228475 18,6 C18,5.44771525 17.5522847,5 17,5 L5,5 C4.44771525,5 4,5.44771525 4,6 C4,6.55228475 4.44771525,7 5,7 Z M5,11 L12,11 C12.5522847,11 13,10.5522847 13,10 C13,9.44771525 12.5522847,9 12,9 L5,9 C4.44771525,9 4,9.44771525 4,10 C4,10.5522847 4.44771525,11 5,11 Z"
          />{' '}
        </defs>{' '}
        <g fill="none" fillRule="evenodd" transform="translate(1 3)">
          {' '}
          <g transform="translate(2 12)">
            {' '}
            <mask id="comment-b" fill="#ffffff">
              {' '}
              <use href="#comment-a" />{' '}
            </mask>{' '}
            <use fill="#D8D8D8" href="#comment-a" />{' '}
            <g fill="#FFA0A0" mask="url(#comment-b)">
              {' '}
              <rect width="24" height="24" transform="translate(-3 -15)" />{' '}
            </g>{' '}
          </g>{' '}
          <mask id="comment-d" fill="#ffffff">
            {' '}
            <use href="#comment-c" />{' '}
          </mask>{' '}
          <use fill="#000000" fillRule="nonzero" href="#comment-c" />{' '}
          <g fill="#7600FF" mask="url(#comment-d)">
            {' '}
            <rect width="24" height="24" transform="translate(-1 -3)" />{' '}
          </g>{' '}
        </g>{' '}
      </g>
    </svg>
  );
};

export default CommentIcon;
