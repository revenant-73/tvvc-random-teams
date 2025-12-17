const FAMOUS_VOLLEYBALL_PLAYERS = [
    {
        name: 'Kerri Walsh Jennings',
        info: '3x Olympic gold medalist • Legendary beach volleyball player • American icon'
    },
    {
        name: 'Misty May-Treanor',
        info: '3x Olympic gold medalist • Beach volleyball pioneer • Record-breaking partner'
    },
    {
        name: 'Giba',
        info: 'Gustavo Kuerten • Brazilian legend • Olympic champion • Middle blocker extraordinaire'
    },
    {
        name: 'Wilfredo León',
        info: 'Cuban opposite hitter • Multiple Olympic medalist • One of the greatest attackers'
    },
    {
        name: 'Sergei Tetyukhin',
        info: 'Russian outside hitter • Olympic champion • All-time great blocker'
    },
    {
        name: 'Karch Kiraly',
        info: 'American volleyball legend • Olympic gold in indoor & beach • Hall of Famer'
    },
    {
        name: 'Zhu Ting',
        info: 'Chinese superstar • Olympic gold medalist • Worlds best female player'
    },
    {
        name: 'Lang Ping',
        info: '"Iron Hammer" • Chinese national coach • Olympic champion player & coach'
    },
    {
        name: 'Jaqueline Carvalho',
        info: 'Brazilian setter • Olympic gold medalist • Multiple World Champion'
    },
    {
        name: 'Sheilla Castro',
        info: 'Brazilian middle blocker • Olympic gold medalist • Dominant defensive player'
    },
    {
        name: 'Ivan Zaytsev',
        info: 'Italian opposite • Olympic medalist • One of the best scorers in the game'
    },
    {
        name: 'Matey Kaziyski',
        info: 'Bulgarian outside hitter • World Champion • Exceptional ball control'
    },
    {
        name: 'Maxim Mikhaylov',
        info: 'Russian outside hitter • Olympic medalist • Technical master'
    },
    {
        name: 'Meghan Maury',
        info: 'American outside hitter • National team star • Dynamic athlete'
    },
    {
        name: 'Folau Maafusi',
        info: 'Samoan-American setter • Innovative play • Rising volleyball star'
    },
    {
        name: 'Dora Kovačević',
        info: 'Croatian setter • European Champion • Exceptional court control'
    },
    {
        name: 'Hui Ruoqi',
        info: 'Chinese middle blocker • Olympic gold medalist • Blocking specialist'
    },
    {
        name: 'Yuki Ishikawa',
        info: 'Japanese opposite hitter • National team leader • Elite scorer'
    },
    {
        name: 'Kim Yeon-koung',
        info: 'Korean outside hitter • Olympic medalist • Consistent performer'
    },
    {
        name: 'Braja Smaradjaja',
        info: 'Indonesian legend • Pioneering athlete • Southeast Asian icon'
    },
    {
        name: 'Fabio Grosso',
        info: 'Italian opposite • Strong technical skills • European competitor'
    },
    {
        name: 'Daniele de Souza',
        info: 'Brazilian middle blocker • Olympic gold medalist • Defensive powerhouse'
    },
    {
        name: 'Valentina Leonova',
        info: 'Russian setter • Olympic medalist • Championship winner'
    },
    {
        name: 'Ljiljana Ribić',
        info: 'Serbian legend • Olympic gold medalist • All-time great'
    },
    {
        name: 'Tatjana Hüfner',
        info: 'German opposite • European Champion • Technical excellence'
    },
    {
        name: 'Fiona McCallum',
        info: 'Australian setter • National team leader • Pacific powerhouse'
    },
    {
        name: 'Tina Waterworth',
        info: 'New Zealand middle blocker • Trans volleyball pioneer • Inspiring athlete'
    },
    {
        name: 'Maren Brinck',
        info: 'German outside hitter • Dominant defender • Strong athlete'
    },
    {
        name: 'Heili Sontam',
        info: 'Estonian outside hitter • European Champion • Consistent excellence'
    },
    {
        name: 'Natalia Goncharenko',
        info: 'Russian libero • Olympic gold medalist • Defense specialist'
    },
    {
        name: 'Nikolay Parakhin',
        info: 'Russian setter • Championship coach • Strategic brilliance'
    },
    {
        name: 'Vladimir Samokish',
        info: 'Russian middle blocker • Olympic gold medalist • Blocking master'
    },
    {
        name: 'Yusup Tulemisov',
        info: 'Russian opposite • Olympic medalist • Explosive attacker'
    },
    {
        name: 'Fei Raymond',
        info: 'American outside hitter • Professional athlete • Rising star'
    },
    {
        name: 'Taylor Crabb',
        info: 'American beach volleyball • Olympic gold medalist • Elite performer'
    },
    {
        name: 'Brooke Sweat',
        info: 'American beach volleyball • Olympic gold medalist • Dominant athlete'
    },
    {
        name: 'Valerien Sospela',
        info: 'French opposite • European champion • Skilled technical player'
    },
    {
        name: 'Osmany Juantorena',
        info: 'Cuban opposite • Olympic medalist • Explosive power hitter'
    },
    {
        name: 'Pablo Reyes',
        info: 'Cuban setter • National team legend • Strategic mastermind'
    }
];

function getRandomTeamNames(count) {
    const shuffled = [...FAMOUS_VOLLEYBALL_PLAYERS].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}
