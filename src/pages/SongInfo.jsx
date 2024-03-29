// TODO: Import necessary modules and data
import { Route, useParams } from "react-router-dom";
import songs from "../data/songs.json";

// TODO: Destrcutrue props to receive information coming in from the parent comp
export const SongInfo = () => {
  // TODO: Fetch the song title from the URL and find the corresponding song data and add a conditional to display some simple html if there is no song :)
  const { songTitle } = useParams();
  const currentSong = songs.songs.find(song => {
    const slug = song.title.replaceAll(" ", "-").toLowerCase();
    return slug === songTitle;
  });

  return (
    <>
      <div>
        <p>Song Information</p>
        {/* TODO: Display song details or a "Song not found!" message */}
        {currentSong ?
        <>
        <h1>{currentSong.title}</h1>
        <p>{currentSong.artist}</p>
        <p>{currentSong.album}</p>
        <p>{currentSong.year}</p>
        </>
        :
        <p>Couldnt find any song like that 🤨</p>}
      </div>
    </>
  );
};
