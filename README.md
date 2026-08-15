# AWT Next.js site (backup)

This folder is a **separate** copy of the older Next.js AWT website and dashboard. It does not replace the current TanStack site in `AWT Website`.

## Local website (already built)

```powershell
cd "D:\2026\Projects\Angadi World Tech\AWT Nextjs\awt-web-production-build"
node server.js
```

Open: http://127.0.0.1:3000

Optional: `PORT=3000` `HOSTNAME=127.0.0.1`

## Dashboard (admin)

```powershell
cd "D:\2026\Projects\Angadi World Tech\AWT Nextjs\AwtDashbaord-main"
npm install
npm run dev
```

Default Next.js port is 3000. If the website is already using 3000, run:

```powershell
npx next dev -p 3001
```

Then open http://127.0.0.1:3001
