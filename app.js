let teams = [];
let selectedTeam = null;
let currentMode = 'quick';
let namedPlayers = [];

const errorMessage = document.getElementById('errorMessage');
const teamsSection = document.getElementById('teamsSection');
const teamsList = document.getElementById('teamsList');

const modeBtns = document.querySelectorAll('.mode-btn');
const quickModeSection = document.getElementById('quickModeSection');
const namedModeSection = document.getElementById('namedModeSection');

const playerCountQuickInput = document.getElementById('playerCountQuick');
const teamSizeQuickInput = document.getElementById('teamSizeQuick');
const generateQuickBtn = document.getElementById('generateQuickBtn');

const rosterSelect = document.getElementById('rosterSelect');
const loadRosterBtn = document.getElementById('loadRosterBtn');
const playerNameInput = document.getElementById('playerNameInput');
const addPlayerNameBtn = document.getElementById('addPlayerNameBtn');
const addedPlayersList = document.getElementById('addedPlayersList');
const teamSizeNamedInput = document.getElementById('teamSizeNamed');
const generateNamedBtn = document.getElementById('generateNamedBtn');
const clearPlayersBtn = document.getElementById('clearPlayersBtn');

const regenerateBtn = document.getElementById('regenerateBtn');

modeBtns.forEach(btn => {
    btn.addEventListener('click', () => handleModeSelect(btn));
});

generateQuickBtn.addEventListener('click', handleGenerateQuick);
generateNamedBtn.addEventListener('click', handleGenerateNamed);
loadRosterBtn.addEventListener('click', handleLoadRoster);
addPlayerNameBtn.addEventListener('click', handleAddPlayerName);
playerNameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleAddPlayerName();
});
clearPlayersBtn.addEventListener('click', handleClearPlayers);
regenerateBtn.addEventListener('click', handleRegenerate);

function initializeRosterDropdown() {
    rosterSelect.innerHTML = '<option value="">-- Select a roster --</option>';
    TEAM_ROSTERS.forEach((roster) => {
        const option = document.createElement('option');
        option.value = roster.id;
        option.textContent = roster.name;
        rosterSelect.appendChild(option);
    });
}

initializeRosterDropdown();

function handleModeSelect(btn) {
    const mode = btn.getAttribute('data-mode');
    
    modeBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    quickModeSection.classList.remove('active');
    namedModeSection.classList.remove('active');
    
    currentMode = mode;
    
    if (mode === 'quick') {
        quickModeSection.classList.add('active');
    } else {
        namedModeSection.classList.add('active');
    }
    
    errorMessage.classList.remove('show');
    teamsSection.style.display = 'none';
}

function handleGenerateQuick() {
    const playerCount = parseInt(playerCountQuickInput.value);
    const teamSize = parseInt(teamSizeQuickInput.value);
    
    errorMessage.classList.remove('show');
    
    if (!validateInputs(playerCount, teamSize)) {
        return;
    }
    
    generateTeamsQuick(playerCount, teamSize);
    displayTeams();
    teamsSection.style.display = 'block';
}

function handleGenerateNamed() {
    if (namedPlayers.length === 0) {
        showError('Please add at least one player');
        return;
    }
    
    const teamSize = parseInt(teamSizeNamedInput.value);
    
    errorMessage.classList.remove('show');
    
    if (!validateInputs(namedPlayers.length, teamSize)) {
        return;
    }
    
    generateTeamsNamed(namedPlayers.length, teamSize);
    displayTeams();
    teamsSection.style.display = 'block';
}

function handleAddPlayerName() {
    const playerName = playerNameInput.value.trim();
    
    if (!playerName) {
        showError('Please enter a player name');
        return;
    }
    
    if (namedPlayers.includes(playerName)) {
        showError('Player already added');
        return;
    }
    
    namedPlayers.push(playerName);
    playerNameInput.value = '';
    displayAddedPlayers();
    errorMessage.classList.remove('show');
}

function handleRemovePlayer(playerName) {
    namedPlayers = namedPlayers.filter(p => p !== playerName);
    displayAddedPlayers();
}

function handleClearPlayers() {
    namedPlayers = [];
    displayAddedPlayers();
}

function handleLoadRoster() {
    const rosterId = rosterSelect.value;
    
    if (!rosterId) {
        showError('Please select a roster');
        return;
    }
    
    const roster = TEAM_ROSTERS.find(r => r.id === rosterId);
    
    if (roster) {
        namedPlayers = [...roster.players];
        displayAddedPlayers();
        rosterSelect.value = '';
        playerNameInput.value = '';
        errorMessage.classList.remove('show');
    }
}

function handleRegenerate() {
    if (currentMode === 'quick') {
        const playerCount = parseInt(playerCountQuickInput.value);
        const teamSize = parseInt(teamSizeQuickInput.value);
        generateTeamsQuick(playerCount, teamSize);
    } else {
        const teamSize = parseInt(teamSizeNamedInput.value);
        generateTeamsNamed(namedPlayers.length, teamSize);
    }
    displayTeams();
    selectedTeam = null;
}

function validateInputs(playerCount, teamSize) {
    if (isNaN(playerCount) || isNaN(teamSize)) {
        showError('Please enter valid numbers');
        return false;
    }

    if (playerCount < 2) {
        showError('You need at least 2 players');
        return false;
    }

    if (teamSize < 1) {
        showError('Team size must be at least 1 player');
        return false;
    }

    if (teamSize > playerCount) {
        showError('Team size cannot be larger than the number of players');
        return false;
    }

    const teamCount = Math.floor(playerCount / teamSize);
    if (teamCount < 1) {
        showError('Invalid player/team size combination');
        return false;
    }

    return true;
}

function showError(message) {
    if (message) {
        errorMessage.textContent = message;
        errorMessage.classList.add('show');
    } else {
        errorMessage.classList.remove('show');
    }
}

function generateTeamsQuick(playerCount, teamSize) {
    const players = Array.from({ length: playerCount }, (_, i) => `Player ${i + 1}`);
    const shuffled = shuffleArray(players);

    const teamCount = Math.floor(playerCount / teamSize);
    const teamPlayers = getRandomTeamNames(teamCount);

    teams = [];
    for (let i = 0; i < teamCount; i++) {
        const roster = shuffled.slice(i * teamSize, (i + 1) * teamSize);
        const playerObj = teamPlayers[i];
        teams.push({
            id: i,
            name: playerObj.name,
            info: playerObj.info,
            players: roster
        });
    }
}

function generateTeamsNamed(playerCount, teamSize) {
    const shuffled = shuffleArray(namedPlayers);

    const teamCount = Math.floor(playerCount / teamSize);
    const teamPlayers = getRandomTeamNames(teamCount);

    teams = [];
    for (let i = 0; i < teamCount; i++) {
        const roster = shuffled.slice(i * teamSize, (i + 1) * teamSize);
        const playerObj = teamPlayers[i];
        teams.push({
            id: i,
            name: playerObj.name,
            info: playerObj.info,
            players: roster
        });
    }
}

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function displayTeams() {
    teamsList.innerHTML = '';
    teams.forEach((team) => {
        const teamCard = document.createElement('div');
        teamCard.className = 'team-card';
        if (selectedTeam && selectedTeam.id === team.id) {
            teamCard.classList.add('selected');
        }

        const teamName = document.createElement('div');
        teamName.className = 'team-name';
        teamName.textContent = team.name;

        const teamInfo = document.createElement('div');
        teamInfo.className = 'team-info';
        teamInfo.textContent = team.info;

        const playersDiv = document.createElement('div');
        playersDiv.className = 'team-players';
        const playerElements = team.players.map(p => {
            const span = document.createElement('span');
            span.className = 'player-number';
            span.textContent = p;
            return span;
        });
        playerElements.forEach(el => playersDiv.appendChild(el));

        teamCard.appendChild(teamName);
        teamCard.appendChild(teamInfo);
        teamCard.appendChild(playersDiv);

        teamCard.addEventListener('click', () => {
            selectedTeam = team;
            displayTeams();
        });

        teamsList.appendChild(teamCard);
    });
}

function displayAddedPlayers() {
    addedPlayersList.innerHTML = '';
    
    if (namedPlayers.length === 0) {
        addedPlayersList.textContent = 'No players added yet';
        return;
    }

    namedPlayers.forEach(player => {
        const tag = document.createElement('div');
        tag.className = 'player-tag';
        
        const name = document.createElement('span');
        name.textContent = player;
        
        const removeBtn = document.createElement('button');
        removeBtn.textContent = '×';
        removeBtn.addEventListener('click', () => handleRemovePlayer(player));
        
        tag.appendChild(name);
        tag.appendChild(removeBtn);
        addedPlayersList.appendChild(tag);
    });
}
