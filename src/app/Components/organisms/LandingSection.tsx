import React, { useState } from 'react'
import Searchbar from '../atoms/Searchbar'
import CardList from '../molecules/CardList';

function LandingSection() {
    const [searchInput, setSearch] = useState("");

    return (
        <main className='main-section'>
            <section className='top-section'>
                <h2>Movies</h2>
                <Searchbar input={searchInput} setInput={setSearch} label='search' />
            </section>
            <CardList search={searchInput} />
        </main>
    )
}

export default LandingSection