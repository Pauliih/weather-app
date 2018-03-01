import React from 'react';

// const Location = () => (
//     <div>
//         <h1>Chillán</h1>
//     </div>
// )

// const Location = (props) => {
//     const city = props.city;
//     return (
//       <div>
//         <h1>{city}</h1>
//       </div>
//     )
// }

const Location = ({city}) => (
    <div>
      <h1>{city}</h1>
    </div>
)

export default Location;