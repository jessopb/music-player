import React from 'react'
import logo from './logo.svg'
import './App.css'
import { MusicPlayerProvider } from './components/MusicPlayerContext'
import TrackList from './components/TrackList'
import Controls from './components/PlayerControls'

const App = () => {
    return (
        <MusicPlayerProvider>
            <div className="container">
                <TrackList />
                <Controls />
            </div>
        </MusicPlayerProvider>
    )
}

export default App
