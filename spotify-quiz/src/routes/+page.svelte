<!-- src/routes/+page.svelte -->
<script>
    import SpotifyGame from '../lib/SpotifyGame.svelte';
    import { loginWithSpotify } from '$lib/spotify';
    function handleLogin() {
        loginWithSpotify();
    }
  </script>
<button on:click={handleLogin}>
    Koble til Spotify
  </button>
  <svelte:head>
    <title>Spotify Musikkgjettelek</title>
    <meta name="description" content="Test musikkkunnskapene dine med Spotify sin API!" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  </svelte:head>
  
  <main>
    <SpotifyGame />
  </main>
  
  <style>
    :global(html) {
      font-family: 'Inter', 'Circular', 'Helvetica Neue', Arial, sans-serif;
    }
  
    :global(body) {
      margin: 0;
      padding: 0;
      background: linear-gradient(135deg, #1db954, #191414);
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    main {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      padding: 20px;
    }
  </style>