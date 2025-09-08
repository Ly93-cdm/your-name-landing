import TrackItem from './TrackItem';

function TrackList({ tracks}) {
    return (
        <ul className="track-list">
            {tracks.map((track, index) => (
                <TrackItem key={index} track={track}/>
            ))}
        </ul>
    );
}

export default TrackList;