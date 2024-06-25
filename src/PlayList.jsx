import { Song } from "./Song"

export const PlayList = ({ items, onSwap }) => {
    return <div>
        <h1>Play List</h1>
        {
            items.map(elm => <Song
                key={elm.id}
                {...elm}
                inPlayList={true}
                onSwap={onSwap}
            />)
        }
    </div>
}