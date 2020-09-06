import React from 'react'
import './App.css';

export default function index({children}) {
    return (
        <main className="svelte-wlazyz">
            <div className="intro-container svelte-dmat7b">
                {children}
            </div>
            <div className="notch svelte-wlazyz"><span className="svelte-wlazyz" /></div>
            <div className="speaker svelte-wlazyz" />
        </main>
    )
}
