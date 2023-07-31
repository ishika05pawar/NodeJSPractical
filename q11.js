const http = require('http');
const PORT = process.env.PORT || 3000;
const CRICBUZZ_API_URL ='https://www.cricbuzz.com/match-api/livematches.json';
const server = http.createServer(async (req, res) => {
if (req.url === '/scores') {
try {
// Use dynamic import to load the node-fetch module
const fetch = await import('node-fetch');
const response = await fetch.default(CRICBUZZ_API_URL);
const data = await response.json();
const matches = data.matches || [];
// Extract relevant information (e.g., match status and scores) from the API response
const liveScores = matches.map(match => ({
series: match.series.name,
status: match.status,
score: match.score
}));
res.writeHead(200, { 'Content-Type': 'application/json' });
res.end(JSON.stringify(liveScores));
} catch (error) {
console.error('Error fetching live scores:', error);
res.writeHead(500, { 'Content-Type': 'application/json' });
res.end(JSON.stringify({ error: 'Error fetching live scores' }));
}
} else {
res.writeHead(404, { 'Content-Type': 'text/plain' });
res.end('Not Found');
}
});
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});