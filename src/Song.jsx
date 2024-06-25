export const Song = ({ id, title, duration, artist, onDelete, onMove, inPlayList, onSwap }) => {
    return <div className="song">
        <p>{title}</p>
        <strong>By {artist}</strong>
        <small>{duration}min</small>
        {!inPlayList && <button onClick={() => onDelete(id)}>delete</button>}
        {!inPlayList && <button onClick={() => onMove(id)}>move</button>}
        {inPlayList && <button onClick={() => onSwap(id)}>move down</button>}
    </div>
}