import React from "react";

function Chevron(props) {
  return (
    <svg
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="10"
      viewBox="0 0 17 10"
    >
      <g fill="none" fillRule="evenodd">
        <g fill="#78909C" fillRule="nonzero" stroke="#78909C" strokeWidth=".5">
          <g>
            <g>
              <g>
                <g>
                  <path
                    fill={props.fill}
                    d="M7.06 14.641c.102.102.229.153.369.153.14 0 .266-.051.368-.153.203-.203.203-.533 0-.736L1.32 7.429 7.797.952C8 .75 8 .42 7.797.216c-.203-.203-.534-.203-.737 0L.203 7.06c-.203.203-.203.534 0 .737L7.06 14.64h0z"
                    transform="translate(-33 -1267) translate(15 156) translate(0 1083) translate(19 15) rotate(-90 11 11)"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default Chevron;
