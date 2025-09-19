
Property Calendar PWA
=====================

Files included:
- index.html
- manifest.json
- sw.js
- icons/

How to run locally:
1. Serve the folder with a static server (service workers require https or localhost)
   - Example using npm 'serve':
     npm install -g serve
     serve -s /path/to/folder
2. Open the URL printed by 'serve' on your computer, then open same URL on your phone (if on same network) to add to home screen.

Deploy to Netlify:
1. Zip this folder and drag & drop to Netlify -> 'Sites' -> 'New site from deploy' -> drag and drop.
2. Or push to GitHub and connect repo on Netlify (recommended).
3. After deploy, open the site URL on your phone and use browser menu -> 'Add to Home Screen'.

Deploy to Vercel:
1. Push to GitHub and import the project into Vercel.
2. Or use 'vercel' CLI to deploy.
3. Open site URL on your phone and add to home screen.

Notes:
- The PWA caches core files for offline use.
- Drag bookings between days to move them (conflict prevention per property).
- Double-tap a day to quickly create a booking.
- Booking blocks show the numeric property label and booking guest.
