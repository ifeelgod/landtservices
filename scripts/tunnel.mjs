import { startTunnel } from 'untun';

async function main() {
  console.log('Starting Cloudflare tunnel for port 4321...');
  const tunnel = await startTunnel({ port: 4321 });
  const url = await tunnel.getURL();
  console.log('PUBLIC_LIVE_PREVIEW_URL:' + url);
  console.log('Site is live! Keep this process running to maintain access.');
}

main().catch((err) => {
  console.error('Tunnel error:', err);
  process.exit(1);
});
