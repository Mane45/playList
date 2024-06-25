import { useState } from 'react'
import './App.css'
import { SongList } from './SongList'
import { PlayList } from './PlayList'

function App() {
  const [songs, setSongs] = useState([
    { id: 101, title: "Symphony N40", artist: "Mozart", duration: 20 },
    { id: 102, title: "Symphony N43", artist: "Mozart", duration: 22 },
    { id: 103, title: "Symphony N29", artist: "Mozart", duration: 20 },
    { id: 104, title: "Symphony N25", artist: "Mozart", duration: 20 }
  ])
  const [playList, setPlaylist] = useState([])

  const removeSong = id => {
    setSongs(songs.filter(x => x.id != id))
  }
  const moveSongToPlaylist = id => {
    !(playList.includes(...songs.filter(x => x.id == id))) ? setPlaylist([...playList, ...songs.filter(x => x.id == id)]) : null

  }
  const swap = id => {
    const currentIndex = playList.findIndex(x => x.id == id)
    if (currentIndex > 0 && currentIndex < playList.length) {
      [playList[currentIndex], playList[currentIndex + 1]] = [playList[currentIndex + 1], playList[currentIndex]]
    }
    setPlaylist([...playList])
  }
  return <div className='container'>
    <SongList
      items={songs}
      onDelete={removeSong}
      onMove={moveSongToPlaylist}
    />
    <PlayList
      items={playList}
      onSwap={swap}
    />
  </div>
}

export default App
