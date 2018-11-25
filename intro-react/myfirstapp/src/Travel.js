import React from "react";

const Travel = ({destination, country, photo, distance}) => (
  <figure>
    <img
      src={photo}
      alt="Nelson Muntz"
    />
    <figcaption>
      <blockquote>
        {destination}
        {country}
      </blockquote>
      <cite>Nelson Muntz</cite>
    </figcaption>



  </figure>
);

export default Travel;