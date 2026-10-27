import localtunnel from 'localtunnel';

async function connect() {
  try {
    const tunnel = await localtunnel({ port: 4321, subdomain: 'lt-solutions-marshall' });
    console.log('LIVE_PREVIEW_URL:' + tunnel.url);
    
    tunnel.on('close', () => {
      console.log('Tunnel connection closed. Reconnecting in 3s...');
      setTimeout(connect, 3000);
    });
    
    tunnel.on('error', (err) => {
      console.error('Tunnel error:', err);
      setTimeout(connect, 3000);
    });
  } catch (err) {
    console.error('Failed to connect tunnel:', err);
    setTimeout(connect, 3000);
  }
}

connect();
