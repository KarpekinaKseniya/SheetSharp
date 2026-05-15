import React from "react"

function Footer() {
    return (
        <footer style={{
            backgroundColor: '#03A9F4',
            color: 'white',
            padding: '10px',
            alignItems: 'center',
            marginTop: 'auto'
        }}>
            <div style={{ fontSize: '14px', color: '#FFF', textAlign: 'center' }}>
                <p>&copy; 2026 - {new Date().getFullYear()} Sheet Sharp. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;