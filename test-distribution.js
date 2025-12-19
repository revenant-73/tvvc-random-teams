function testDistribution(playerCount, teamSize) {
  const teamCount = Math.floor(playerCount / teamSize);
  const remainder = playerCount % teamSize;
  
  const teams = [];
  let playerIndex = 0;
  
  for (let i = 0; i < teamCount; i++) {
    const baseSize = teamSize + (i < remainder ? 1 : 0);
    const roster = Array.from({length: baseSize}, (_, j) => playerIndex + j + 1);
    playerIndex += baseSize;
    teams.push(roster);
  }
  
  console.log(`\nPlayers: ${playerCount}, Team Size: ${teamSize}`);
  console.log(`Teams: ${teamCount}, Remainder: ${remainder}`);
  teams.forEach((t, i) => console.log(`  Team ${i+1}: ${t.length} players`));
  const total = teams.reduce((sum, t) => sum + t.length, 0);
  console.log(`  Total players used: ${total}`);
}

testDistribution(17, 4);
testDistribution(10, 3);
testDistribution(20, 6);
