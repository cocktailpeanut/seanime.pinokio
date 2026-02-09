# Seanime Pinokio Launcher

This launcher installs and runs [Seanime](https://github.com/5rahim/seanime), a self-hosted anime and manga media server with a web interface.

## What This Launcher Does

- Installs Go and web dependencies needed by Seanime (inside `./app`).
- Builds the Seanime web frontend (`app/seanime-web/out`) and copies it to `app/web`.
- Starts Seanime on `127.0.0.1` using an available port.
- Exposes install, start, update, and factory reset actions in Pinokio.

## How To Use

1. Open this project in Pinokio.
2. Click `Install` (runs `install.js`).
3. Click `Start` (runs `start.js`).
4. After startup, use `Open Web UI` in the sidebar.

Maintenance actions:
- `Update`: pulls latest changes and rebuilds.
- `Factory Reset`: removes built assets, node modules, and local `data`.

## API Access

Use the server URL shown by `Open Web UI` (example: `http://127.0.0.1:43211`) as `BASE_URL`.

### JavaScript

```javascript
const baseUrl = "http://127.0.0.1:43211";
const res = await fetch(`${baseUrl}/api/v1/status`);
const data = await res.json();
console.log(data);
```

### Python

```python
import requests

base_url = "http://127.0.0.1:43211"
res = requests.get(f"{base_url}/api/v1/status", timeout=30)
res.raise_for_status()
print(res.json())
```

### Curl

```bash
BASE_URL="http://127.0.0.1:43211"
curl -s "$BASE_URL/api/v1/status"
```
