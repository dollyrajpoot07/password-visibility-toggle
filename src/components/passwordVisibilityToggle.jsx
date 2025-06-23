'use client';
import React, { useState } from 'react';
import styles from './passwordVisibilityToggle.module.css';

export default function PasswordVisibilityToggle() {
    const [password, setPassword] = useState('');
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
        setVisible(!visible);
    };

    return (
        <div className={styles.container}>
            <h2>Password Visibility Toggle</h2>
            <div className={styles.inputWrapper}>
                <input
                    type={visible ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className={styles.input}
                />
                <button className={styles.toggleBtn} onClick={toggleVisibility}>
                    {visible ? '🙈' : '👁️'}
                </button>
            </div>
        </div>
    );
}
