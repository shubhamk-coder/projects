import React from "react";
import styled from "styled-components";

export default function SelectGenre({ genres, type }) {
  return (
    <Select>
      {genres.map((genre) => {
        return (
          <option value={genre.id} key={genre.id}>
            {genre.name}s
          </option>
        );
      })}
    </Select>
  );
}

const Select = styled.select``;
