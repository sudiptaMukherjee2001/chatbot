import React from 'react'
import "./styles/loading.style.css"
const Loading = () => {
    return (
        /* From Uiverse.io by kennyotsu */
        <div class="card">
            <div class="loader">
                <p>loading</p>
                <div class="words">
                    <span class="word">Processing</span>
                    <span class="word">Thinking</span>
                    <span class="word">Analyzing</span>
                    <span class="word">Typing...</span>
                    <span class="word">Responding...</span>
                </div>
            </div>
        </div>

    )
}

export default Loading