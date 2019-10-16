import React from 'react';

export default function SearchForm ({ handleSubmit, apiState, form, handleChange }) {
    return (
        <form onSubmit={handleSubmit}>
            <input type='text' onChange={handleChange} value={form} />
            <button type='submit'>search</button>
        </form>
    )
}