import React from "react";

type IconProps = {
  iconName: string;
};

const Icon = (props: IconProps) => {
  const {iconName} = props;
  switch (iconName) {
    case "setting":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          // xmlns:xlink="http://www.w3.org/1999/xlink"
          fill="none"
          version="1.1"
          width="31"
          height="31"
          viewBox="0 0 31 31">
          <defs>
            <clipPath id="master_svg0_0_593">
              <rect x="0" y="0" width="31" height="31" rx="0" />
            </clipPath>
          </defs>
          <g clip-path="url(#master_svg0_0_593)">
            <g>
              <path
                d="M2.5833332538604736,15.499751212310791C2.5833332538604736,14.383051212310791,2.7250292538604737,13.29955121231079,2.9914352538604736,12.266071212310791C4.399703253860474,12.339071212310792,5.797623253860474,11.638111212310791,6.551073253860474,10.33310121231079C7.303953253860474,9.029071212310791,7.212743253860474,7.469331212310791,6.446983253860473,6.2865512123107905C7.987073253860474,4.773081212310791,9.904913253860474,3.642784212310791,12.046123253860474,3.050051212310791C12.687033253860474,4.306221212310791,13.993033253860474,5.1664312123107905,15.500033253860474,5.1664312123107905C17.007033253860474,5.1664312123107905,18.313033253860475,4.306221212310791,18.953933253860473,3.050051212310791C21.095133253860475,3.642784212310791,23.012933253860474,4.773081212310791,24.553033253860473,6.2865512123107905C23.787233253860474,7.469331212310791,23.696033253860474,9.029071212310791,24.448933253860474,10.33310121231079C25.202333253860473,11.638111212310791,26.600333253860473,12.339071212310792,28.008633253860474,12.266071212310791C28.274933253860475,13.29955121231079,28.416633253860475,14.383051212310791,28.416633253860475,15.499751212310791C28.416633253860475,16.61635121231079,28.274933253860475,17.699951212310793,28.008633253860474,18.73345121231079C26.600333253860473,18.66045121231079,25.202333253860473,19.36145121231079,24.448933253860474,20.66645121231079C23.696033253860474,21.970451212310792,23.787233253860474,23.53015121231079,24.553033253860473,24.71295121231079C23.012933253860474,26.226351212310792,21.095133253860475,27.35675121231079,18.953933253860473,27.94945121231079C18.313033253860475,26.69335121231079,17.007033253860474,25.833051212310792,15.500033253860474,25.833051212310792C13.993033253860474,25.833051212310792,12.687033253860474,26.69335121231079,12.046123253860474,27.94945121231079C9.904913253860474,27.35675121231079,7.987073253860474,26.226351212310792,6.446983253860473,24.71295121231079C7.212743253860474,23.53015121231079,7.303953253860474,21.970451212310792,6.551073253860474,20.66645121231079C5.797623253860474,19.36145121231079,4.399703253860474,18.66045121231079,2.9914352538604736,18.73345121231079C2.7250292538604737,17.699951212310793,2.5833332538604736,16.61635121231079,2.5833332538604736,15.499751212310791C2.5833332538604736,15.499751212310791,2.5833332538604736,15.499751212310791,2.5833332538604736,15.499751212310791ZM8.788303253860473,19.37475121231079C9.602183253860474,20.784451212310792,9.835503253860473,22.40515121231079,9.517233253860475,23.92635121231079C10.043963253860474,24.301151212310792,10.604653253860473,24.625851212310792,11.192153253860473,24.895751212310792C12.350603253860474,23.85865121231079,13.871433253860474,23.24975121231079,15.500033253860474,23.24975121231079C17.128533253860475,23.24975121231079,18.649333253860473,23.85865121231079,19.807833253860473,24.895751212310792C20.395333253860475,24.625851212310792,20.956033253860472,24.301151212310792,21.482733253860474,23.92635121231079C21.164433253860473,22.40515121231079,21.397733253860473,20.784451212310792,22.211733253860473,19.37475121231079C23.025533253860473,17.965151212310793,24.312433253860473,16.95285121231079,25.788733253860475,16.46785121231079C25.818333253860473,16.14775121231079,25.833333253860474,15.824951212310792,25.833333253860474,15.499751212310791C25.833333253860474,15.17465121231079,25.818333253860473,14.851751212310791,25.788733253860475,14.531751212310791C24.312433253860473,14.046751212310792,23.025533253860473,13.034471212310791,22.211733253860473,11.62477121231079C21.397733253860473,10.21508121231079,21.164433253860473,8.59446121231079,21.482733253860474,7.073231212310791C20.956033253860472,6.6984312123107905,20.395333253860475,6.373691212310791,19.807833253860473,6.103801212310791C18.649333253860473,7.140901212310791,17.128533253860475,7.749771212310791,15.500033253860474,7.749771212310791C13.871433253860474,7.749771212310791,12.350603253860474,7.140901212310791,11.192153253860473,6.103801212310791C10.604653253860473,6.373691212310791,10.043963253860474,6.6984312123107905,9.517233253860475,7.073231212310791C9.835503253860473,8.59446121231079,9.602183253860474,10.21508121231079,8.788303253860473,11.62477121231079C7.974443253860474,13.034471212310791,6.687653253860474,14.046751212310792,5.211243253860474,14.531751212310791C5.1816132538604736,14.851751212310791,5.166663253860474,15.17465121231079,5.166663253860474,15.499751212310791C5.166663253860474,15.824951212310792,5.1816132538604736,16.14775121231079,5.211243253860474,16.46785121231079C6.687653253860474,16.95285121231079,7.974443253860474,17.965151212310793,8.788303253860473,19.37475121231079C8.788303253860473,19.37475121231079,8.788303253860473,19.37475121231079,8.788303253860473,19.37475121231079ZM15.500033253860474,19.37475121231079C13.359833253860474,19.37475121231079,11.625003253860474,17.63995121231079,11.625003253860474,15.499751212310791C11.625003253860474,13.35975121231079,13.359833253860474,11.62477121231079,15.500033253860474,11.62477121231079C17.640133253860476,11.62477121231079,19.375033253860472,13.35975121231079,19.375033253860472,15.499751212310791C19.375033253860472,17.63995121231079,17.640133253860476,19.37475121231079,15.500033253860474,19.37475121231079C15.500033253860474,19.37475121231079,15.500033253860474,19.37475121231079,15.500033253860474,19.37475121231079ZM15.500033253860474,16.79145121231079C16.213433253860472,16.79145121231079,16.791633253860475,16.21315121231079,16.791633253860475,15.499751212310791C16.791633253860475,14.786351212310791,16.213433253860472,14.20805121231079,15.500033253860474,14.20805121231079C14.786633253860474,14.20805121231079,14.208333253860474,14.786351212310791,14.208333253860474,15.499751212310791C14.208333253860474,16.21315121231079,14.786633253860474,16.79145121231079,15.500033253860474,16.79145121231079C15.500033253860474,16.79145121231079,15.500033253860474,16.79145121231079,15.500033253860474,16.79145121231079Z"
                fill="#333"
                fill-opacity="1"
              />
            </g>
          </g>
        </svg>
      );

    default:
      return <div></div>;
  }
};

export default Icon;
