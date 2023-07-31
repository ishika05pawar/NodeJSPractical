const fetch = require('node-fetch');

async function fetchGoogleHomePage() {
  try {
    const response = await fetch('https://www.google.com/');
    
    if (!response.ok) {
      throw new Error('Failed to fetch Google homepage');
    }

    const data = await response.text();
    return data;
  } catch (error) {
    console.error('Error fetching Google homepage:', error);
    return null;
  }
}

async function main() {
  const googleHomePageHTML = await fetchGoogleHomePage();
  if (googleHomePageHTML) {
    console.log('Google homepage HTML:', googleHomePageHTML);
  }
}

main();