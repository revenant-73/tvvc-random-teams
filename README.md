# TVVC Team Generator

A sleek, mobile-first web app for randomly creating volleyball teams with player names and team names based on famous volleyball players.

## Features

- **Quick Mode**: Generate teams from just a player count (great for quick practice setups)
- **Named Players Mode**: 
  - Load pre-coded team rosters from dropdowns
  - Manually add individual player names
  - Full team randomization with one click
- **Team Names**: Each team is named after a famous volleyball player with educational biographical info
- **Re-randomize**: Shuffle teams instantly without regenerating
- **Mobile-First Design**: Optimized for tablets and phones with teal, coral, and black TVVC club colors
- **Fully Static**: No build process needed, easy deployment

## Project Structure

```
├── index.html           # Main HTML structure
├── styles.css          # Mobile-first, responsive styling
├── app.js              # Core application logic
├── rosters.js          # Team rosters (edit this to add/modify rosters)
├── volleyball-players.js  # Famous volleyball player data
├── package.json        # Project metadata
├── netlify.toml        # Netlify deployment config
└── .gitignore         # Git configuration
```

## How to Add/Edit Rosters

### Step-by-Step Guide

1. **Open `rosters.js`** in your code editor
2. **Add a new object** to the `TEAM_ROSTERS` array with:
   - **id**: Unique lowercase identifier (e.g., `varsity-gold`)
   - **name**: Display name that appears in the dropdown (e.g., `Varsity Gold`)
   - **players**: Array of player names as strings

### Template
```javascript
{
    id: 'unique-id',
    name: 'Display Name',
    players: ['Player 1', 'Player 2', 'Player 3', 'Player 4', ...]
}
```

### Example: Adding a New Roster
```javascript
{
    id: 'varsity-gold',
    name: 'Varsity Gold',
    players: ['Sarah', 'Juan', 'Alex', 'Morgan', 'Emma', 'Chris']
}
```

### What Happens After
- The new roster will **instantly appear** in the "Load a Roster" dropdown on the app
- No build process needed—just refresh your browser
- Select it from the dropdown to randomize teams from those players

### Current Rosters
Check the existing rosters in `rosters.js` for formatting examples:
- **18 Teal** (10 players)
- **18 Coral** (10 players)

## Local Development

No build process required! Simply open `index.html` in a browser or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (with serve)
npm install -g serve
serve .
```

Then visit `http://localhost:8000`

## Deployment to Netlify

### Option 1: Automatic Deployment (Recommended)

1. Push this repository to GitHub (already done!)
2. Go to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Select GitHub and choose the `random-team-generator` repository
5. Leave build settings as default (no build command needed)
6. Deploy!

### Option 2: Manual Deployment

1. Go to [Netlify](https://netlify.com)
2. Drag and drop the project folder into Netlify's deploy area
3. Done!

## Customization

### Club Colors
Edit variables in `styles.css`:
- `--teal: #00a8a8` (Teal)
- `--coral: #ff6b5b` (Coral)
- `--black: #1a1a1a` (Black)

### Famous Players
Edit the `FAMOUS_VOLLEYBALL_PLAYERS` array in `volleyball-players.js` to add/remove team names

## Browser Support

Works on all modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Made for TVVC Volleyball Club
