CMH Crypto Simulator - Minimal scaffold (admin-controlled)

How to use:
1. Unzip and open in VS Code.
2. Edit functions/.env.example -> set placeholders via `firebase functions:config:set` or Secret Manager.
3. Install deps:
   - Root (frontend): `npm ci`
   - functions: `cd functions && npm ci`
4. Local dev (emulator):
   - `firebase emulators:start --only functions,database,hosting`
5. Deploy:
   - `firebase deploy --only functions,hosting`

Notes:
- No API keys or secrets are included. Replace placeholders before deploying.
- Admin control: only users with custom claim `admin: true` can call setUserEnabled.
