<template>
  <div class="about">
    <h1>Market Data</h1>
                    <div>
                    <input placeholder="Symbol..." 
                        value={searchTerm} 
                        onChange={e => setSearchTerm(e.target.value)} 
                    />
                    <button onClick={() => setSearchTerm(searchTerm)}>Search</button>
                </div>
  </div>
</template>
