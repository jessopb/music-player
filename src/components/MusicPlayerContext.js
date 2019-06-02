import React, { useState } from 'react'
import Idea from '../songs/bensound-littleidea.mp3'
import Summer from '../songs/bensound-summer.mp3'
import Uke from '../songs/bensound-ukulele.mp3'
const MusicPlayerContext = React.createContext()

const MusicPlayerProvider = props => {
    const [state, setState] = useState({
        audioPlayer: new Audio(),
        tracks: [
            {
                name: 'idea',
                file: Idea,
            },
            {
                name: 'Summer',
                file: Summer,
            },
            {
                name: 'Uke',
                file: Uke,
            },
        ],
        currentTrackIndex: null,
        isPlaying: false,
    })

    return (
        <MusicPlayerContext.Provider value={[state, setState]}>
            {props.children}
        </MusicPlayerContext.Provider>
    )
}

export { MusicPlayerContext, MusicPlayerProvider }
