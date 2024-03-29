// TODO: Import necessary modules and data
import { Link } from "react-router-dom";
import songs from "../data/songs.json"

export const Home = () => {
  // TODO: Implement logic to display the list of songs
  return (
    <>
      <div>
        <h1>Rolling Stones 500 Greatest Songs of all Time</h1>
        {songs.songs.map(song => {
          const slug = song.title.replaceAll(" ", "-").toLowerCase()
          return <Link key={song.rank} to={`/song/${slug}`}>{song.title}</Link>
        })}
      </div>
    </>
  );
}