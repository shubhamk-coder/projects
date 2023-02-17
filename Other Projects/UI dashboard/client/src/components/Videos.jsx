import React from "react";

function Videos(props) {
  return (
    <div>
      <ul>
        {props.videos.map((video) => (
          <li key={video.key}>
            <a href={video.link}>{video.key}</a>
            <span>({video.size} bytes)</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Videos;
