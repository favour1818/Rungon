function HouseCard({
  country,
  image,
  name,
  verified,
  ranking,
  location,
  bedroom,
  bath,
  size,
  parkingNumber,
  price,
  rentFrequency,
}: any) {
  return (
    <div className="card">
      {/* <figure> */}
      <img src={image} alt="" id="card-image" loading="lazy" />
      {/* </figure> */}
      <div id="card-content">
        <div id="verification">
          <span>
            <svg
              width="64px"
              height="64px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.5924 3.20027C9.34888 3.4078 9.22711 3.51158 9.09706 3.59874C8.79896 3.79854 8.46417 3.93721 8.1121 4.00672C7.95851 4.03705 7.79903 4.04977 7.48008 4.07522C6.6787 4.13918 6.278 4.17115 5.94371 4.28923C5.17051 4.56233 4.56233 5.17051 4.28923 5.94371C4.17115 6.278 4.13918 6.6787 4.07522 7.48008C4.04977 7.79903 4.03705 7.95851 4.00672 8.1121C3.93721 8.46417 3.79854 8.79896 3.59874 9.09706C3.51158 9.22711 3.40781 9.34887 3.20027 9.5924C2.67883 10.2043 2.4181 10.5102 2.26522 10.8301C1.91159 11.57 1.91159 12.43 2.26522 13.1699C2.41811 13.4898 2.67883 13.7957 3.20027 14.4076C3.40778 14.6511 3.51158 14.7729 3.59874 14.9029C3.79854 15.201 3.93721 15.5358 4.00672 15.8879C4.03705 16.0415 4.04977 16.201 4.07522 16.5199C4.13918 17.3213 4.17115 17.722 4.28923 18.0563C4.56233 18.8295 5.17051 19.4377 5.94371 19.7108C6.278 19.8288 6.6787 19.8608 7.48008 19.9248C7.79903 19.9502 7.95851 19.963 8.1121 19.9933C8.46417 20.0628 8.79896 20.2015 9.09706 20.4013C9.22711 20.4884 9.34887 20.5922 9.5924 20.7997C10.2043 21.3212 10.5102 21.5819 10.8301 21.7348C11.57 22.0884 12.43 22.0884 13.1699 21.7348C13.4898 21.5819 13.7957 21.3212 14.4076 20.7997C14.6511 20.5922 14.7729 20.4884 14.9029 20.4013C15.201 20.2015 15.5358 20.0628 15.8879 19.9933C16.0415 19.963 16.201 19.9502 16.5199 19.9248C17.3213 19.8608 17.722 19.8288 18.0563 19.7108C18.8295 19.4377 19.4377 18.8295 19.7108 18.0563C19.8288 17.722 19.8608 17.3213 19.9248 16.5199C19.9502 16.201 19.963 16.0415 19.9933 15.8879C20.0628 15.5358 20.2015 15.201 20.4013 14.9029C20.4884 14.7729 20.5922 14.6511 20.7997 14.4076C21.3212 13.7957 21.5819 13.4898 21.7348 13.1699C22.0884 12.43 22.0884 11.57 21.7348 10.8301C21.5819 10.5102 21.3212 10.2043 20.7997 9.5924C20.5922 9.34887 20.4884 9.22711 20.4013 9.09706C20.2015 8.79896 20.0628 8.46417 19.9933 8.1121C19.963 7.95851 19.9502 7.79903 19.9248 7.48008C19.8608 6.6787 19.8288 6.278 19.7108 5.94371C19.4377 5.17051 18.8295 4.56233 18.0563 4.28923C17.722 4.17115 17.3213 4.13918 16.5199 4.07522C16.201 4.04977 16.0415 4.03705 15.8879 4.00672C15.5358 3.93721 15.201 3.79854 14.9029 3.59874C14.7729 3.51158 14.6511 3.40781 14.4076 3.20027C13.7957 2.67883 13.4898 2.41811 13.1699 2.26522C12.43 1.91159 11.57 1.91159 10.8301 2.26522C10.5102 2.4181 10.2043 2.67883 9.5924 3.20027ZM16.3735 9.86314C16.6913 9.5453 16.6913 9.03 16.3735 8.71216C16.0557 8.39433 15.5403 8.39433 15.2225 8.71216L10.3723 13.5624L8.77746 11.9676C8.45963 11.6498 7.94432 11.6498 7.62649 11.9676C7.30866 12.2854 7.30866 12.8007 7.62649 13.1186L9.79678 15.2889C10.1146 15.6067 10.6299 15.6067 10.9478 15.2889L16.3735 9.86314Z"
                  fill="#4BB543"></path>{" "}
              </g>
            </svg>{" "}
            {verified}verified
          </span>
          <span>
            <svg
              width="64px"
              height="64px"
              viewBox="0 -0.5 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M16.0005 0L21.4392 9.27275L32.0005 11.5439L24.8005 19.5459L25.889 30.2222L16.0005 25.895L6.11194 30.2222L7.20049 19.5459L0.000488281 11.5439L10.5618 9.27275L16.0005 0Z"
                  fill="#FFCB45"></path>{" "}
              </g>
            </svg>{" "}
            4.5({ranking})
          </span>
        </div>
        <h2 id="figure-header">{name}</h2>
        <p id="location">
          {location}, {country}
        </p>
        <div id="ammeniities">
          <div>
            <svg
              fill="#808080"
              width="64px"
              height="64px"
              viewBox="0 0 50 50"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#808080">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M5 10C3.347656 10 2 11.347656 2 13L2 26.8125C3.296875 25.6875 4.9375 24.777344 7 24.0625L7 20C7 17.339844 11.542969 17 15.5 17C19.457031 17 24 17.339844 24 20L24 22C24.335938 21.996094 24.65625 22 25 22C25.34375 22 25.664063 21.996094 26 22L26 20C26 17.339844 30.542969 17 34.5 17C38.457031 17 43 17.339844 43 20L43 24.03125C45.058594 24.742188 46.691406 25.671875 48 26.8125L48 13C48 11.347656 46.652344 10 45 10 Z M 25 24C5.90625 24 -0.015625 27.53125 0 37L50 37C50.015625 27.46875 44.09375 24 25 24 Z M 0 39L0 50L7 50L7 46C7 44.5625 7.5625 44 9 44L41 44C42.4375 44 43 44.5625 43 46L43 50L50 50L50 39Z"></path>
              </g>
            </svg>
            {bedroom}
            Bedroom
          </div>
          <div>
            <svg
              height="64px"
              width="64px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="#808080">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill="#808080"
                  d="M20 14v-2H4v2c0 1.138.583 3.248 2.745 3.841.37.102.787.159 1.255.159h8a4.71 4.71 0 0 0 1.255-.159C19.417 17.248 20 15.138 20 14z"></path>
                <path
                  stroke="#808080"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12h1m16 0v0a1 1 0 0 0 1-1V7c0-1-.6-3-3-3s-3 2-3 3m5 5v2c0 1.138-.583 3.248-2.745 3.841M20 12H4m0 0v2c0 1.138.583 3.248 2.745 3.841M6 20l.745-2.159m0 0c.37.102.787.159 1.255.159h8a4.71 4.71 0 0 0 1.255-.159M18 20l-.745-2.159M15 7h-2m2 0h2"></path>
              </g>
            </svg>
            {bath}
            Bathroom
          </div>
          <div>
            <svg
              height="64px"
              width="64px"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 472.3 472.3"
              fill="#808080"
              stroke="#808080">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <path d="M402.708,61.688l-89.879-0.022c-2.621,0-4.989,1.584-5.987,4.005 c-1.007,2.421-0.455,5.203,1.398,7.064l33.839,33.838L107.36,342.54l-33.809-33.809c-1.853-1.852-4.643-2.405-7.064-1.406 c-2.421,1.006-3.997,3.368-3.997,5.989l-0.008,89.862c0,3.582,2.896,6.48,6.48,6.48l89.878,0.022c2.622,0,4.989-1.582,5.987-4.003 c1.008-2.423,0.455-5.205-1.398-7.066l-33.809-33.808l178.827-180.133l55.862-55.864l33.809,33.809 c1.853,1.853,4.643,2.406,7.064,1.406c2.421-1.006,3.997-3.366,3.997-5.987l0.008-89.863 C409.188,64.587,406.29,61.688,402.708,61.688z"></path>{" "}
                  <path d="M435.279,0H37.022C16.574,0,0,16.573,0,37.022v398.256C0,455.727,16.574,472.3,37.022,472.3h398.258 c20.447,0,37.021-16.573,37.021-37.022V37.022C472.3,16.573,455.727,0,435.279,0z M440.813,435.278 c0,3.052-2.482,5.535-5.534,5.535H37.022c-3.052,0-5.535-2.483-5.535-5.535V37.022c0-3.053,2.483-5.536,5.535-5.536h398.258 c3.051,0,5.534,2.483,5.534,5.536V435.278z"></path>{" "}
                </g>{" "}
              </g>
            </svg>
            {size}
            SQ
          </div>
          <div>
            <svg
              width="64px"
              height="64px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#808080">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2 14.803v6.447c0 .414.336.75.75.75h1.614a.75.75 0 0 0 .74-.627L5.5 19h13l.395 2.373a.75.75 0 0 0 .74.627h1.615a.75.75 0 0 0 .75-.75v-6.447a5.954 5.954 0 0 0-1-3.303l-.78-1.17a1.994 1.994 0 0 1-.178-.33h.994a.75.75 0 0 0 .671-.415l.25-.5A.75.75 0 0 0 21.287 8H19.6l-.31-1.546a2.5 2.5 0 0 0-1.885-1.944C15.943 4.17 14.141 4 12 4c-2.142 0-3.943.17-5.405.51a2.5 2.5 0 0 0-1.886 1.944L4.399 8H2.714a.75.75 0 0 0-.67 1.085l.25.5a.75.75 0 0 0 .67.415h.995a1.999 1.999 0 0 1-.178.33L3 11.5c-.652.978-1 2.127-1 3.303zm15.961-4.799a4 4 0 0 0 .34.997H5.699c.157-.315.271-.65.34-.997l.632-3.157a.5.5 0 0 1 .377-.39C8.346 6.157 10 6 12 6c2 0 3.654.156 4.952.458a.5.5 0 0 1 .378.389l.631 3.157zM5.5 16a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM20 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
                  fill="#808080"></path>
              </g>
            </svg>
            {parkingNumber}
            Cars
          </div>
        </div>
        <div id="container">
          <span>
            <strong>
              AED {price} {rentFrequency}
            </strong>
          </span>
          <div id="button-placeholder">
            <button id="outline" className="button-outline">
              {" "}
              open map
            </button>
            <button>virtual Tour</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HouseCard;
