import React from 'react';
import { BiSolidError } from "react-icons/bi";

function ErrorWindow({ message, onClose }) {
    if (!message) return null;

    return (
        <div style={styles.overlay}>
            <div style={styles.modal}>
                <BiSolidError style={styles.icon}/>
                <h1>Error</h1>
                <p style={styles.text}>{message}</p>
                <button onClick={onClose} style={styles.btn}>
                    Close
                </button>
            </div>
        </div>
    );
}

const styles = {
    overlay: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2000 },
    modal: { backgroundColor: '#FFF', padding: '25px', borderRadius: '12px', textAlign: 'center', minWidth: '300px', boxShadow: '0 10px 25px rgba(0,0,0,0.2)' },
    icon: { fontSize: '60px', color: '#EF4444'},
    text: { color: '#000', marginBottom: '10px', fontSize: '25px' },
    btn: { padding: '20px 40px', backgroundColor: '#EF4444', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }
};

export default ErrorWindow;
