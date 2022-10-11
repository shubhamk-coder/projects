import React from "react";
import styled from "styled-components";

function Card({ movieData, isLinked = false }) {
  return (
    <Container>
      <img
        src={`https//image.tmdb.org/t/p/w500${movieData.image}`}
        alt="movie"
      />
    </Container>
  );
}

const Container = styled.div``;

export default Card;
