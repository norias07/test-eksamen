// src/lib/spotify.ts

const CLIENT_ID = '2f447864907247b0b6cf278270612262';
const REDIRECT_URI = 'https://test-eksamen-rho.vercel.app/';
const SCOPES = [
  'streaming',
  'user-read-email',
  'user-read-private'
];

export function loginWithSpotify() {
  const authUrl = 'https://accounts.spotify.com/authorize?' +
    new URLSearchParams({
      client_id: CLIENT_ID,
      response_type: 'token',
      redirect_uri: REDIRECT_URI,
      scope: SCOPES.join(' ')
    });

  console.log("Auth URL:", authUrl);

  if (typeof window !== 'undefined') {
    window.location.href = authUrl;
  }
}