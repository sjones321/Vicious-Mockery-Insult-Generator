const insults = {
  // Existing class categories remain untouched...

  // Add full category support for all original sections
  classic: [
    "You're as sharp as a marble.",
    "Your wit's so slow, it takes you an hour to cook minute rice.",
    "You're about as useful as a screen door on a submarine.",
    "You bring everyone down to your level — and that’s tragic.",
    "Your brain’s on vacation but your mouth is working overtime.",
    "You're a walking contradiction wrapped in a disaster.",
    "You have the charisma of a damp rag.",
    "If ignorance is bliss, you must be the happiest person alive.",
    "You have the grace of a drunk kobold.",
    "Your presence inspires nothing but pity."
  ],

  performance: [
    "You sound like a cat strangling a bagpipe.",
    "Your rhythm's so bad even goblins cover their ears.",
    "You couldn't carry a tune if it was a bag of rocks.",
    "Your voice could clear a tavern in seconds.",
    "You play with all the passion of a sleeping snail.",
    "Your songs are the reason bards are feared.",
    "Even the local rats stop to cringe at your performance.",
    "Your dancing is more dangerous than a pit trap.",
    "You’d make a statue weep — from embarrassment.",
    "Your lute’s begging for mercy."
  ],

  age_young: [
    "You’ve got the energy of a kitten with a caffeine addiction — but none of the charm.",
    "Your wisdom is still buffering.",
    "You’re a baby dragon with paper wings.",
    "You’re so young, your armor is still wet behind the ears.",
    "Your youthful arrogance is almost cute — almost.",
    "You’re a fledgling trying to roar with the big beasts.",
    "You stumble through life like a toddler learning to walk.",
    "You’ve got the tact of a goblin who just found a shiny rock.",
    "You’re a sapling pretending to be an oak.",
    "Your experience points are still in tutorial mode."
  ],

  age_middle: [
    "You’re at the age where your best days are behind you, but your worst haven’t caught up yet.",
    "You’re the human equivalent of slightly stale bread.",
    "You’re old enough to know better, but young enough to do it anyway — badly.",
    "Your midlife crisis is showing — and it’s embarrassing.",
    "You’ve got the enthusiasm of a bard who forgot their lute.",
    "You’re stuck between ‘veteran’ and ‘has-been’ with no clear path forward.",
    "You’re like a warhorse past its prime, but still expected to perform.",
    "Your prime time was prime time ago.",
    "You’re a relic desperately clinging to relevance.",
    "You’ve aged like a half-drunk bottle of bad mead."
  ],

  age_old: [
    "You’re so old, your first sword was made of stone.",
    "Your breath smells like the crypt you’ll soon be in.",
    "You’ve got more dust than a forgotten tomb.",
    "Your memory is like a sieve with holes the size of boulders.",
    "You’re ancient enough to have fought in wars nobody remembers.",
    "You move slower than a glacier on a hot day.",
    "Your wrinkles have wrinkles, and those wrinkles have apprentices.",
    "You’re the reason skeletons look youthful.",
    "You’re old enough to have been a bad influence on the first adventurers.",
    "Your wisdom is as faded as your eyesight."
  ],

  gender_male: [
    "You’ve got the charm of a rusted sword handle.",
    "You strut like a rooster with no feathers.",
    "Your courage is as flimsy as wet parchment.",
    "You talk big but your actions are all bark.",
    "You’re a shadow trying to play a hero.",
    "Your beard is patchier than your excuses.",
    "You swing your ego like a broken axe.",
    "You’re all grunt and no brains.",
    "You’re about as intimidating as a stuffed bear.",
    "Your roar sounds like a kitten's meow."
  ],

  gender_female: [
    "You sparkle like cheap fairy dust — and just as irritating.",
    "You try to be the queen but act like a jester.",
    "Your whispers are less secrets, more noise.",
    "You toss your hair like it’ll solve your problems.",
    "You’ve got the grace of a troll in heels.",
    "You wield drama like a broken wand.",
    "You’re all sugar and sour with none of the sweet.",
    "Your smile hides a clumsy disaster.",
    "You’re a tempest in a teacup — and a messy one at that.",
    "Your charm’s as subtle as a fireball in a library."
  ],

  gender_nonbinary: [
    "You defy categories like a puzzle missing pieces.",
    "You change more often than a bard’s tune.",
    "You’re a walking enigma wrapped in chaos.",
    "You’re like a riddle no one wants to solve.",
    "Your identity is as shifting as a mirage.",
    "You confuse even the wisest sages.",
    "You’re the wildcard that nobody bets on.",
    "You’re as unpredictable as a rogue’s blade.",
    "You’re a spectrum with the brightness turned way down.",
    "You’re the question mark at the end of a bad joke."
  ],
  str: [
    "You flex like a wet rope.",
    "Your biceps look like noodles on rest day.",
    "You lift morale—and that’s it.",
    "You’ve skipped more arm days than thoughts.",
    "A goblin could bench more than you.",
    "You’re not strong. Just loud.",
    "You throw punches like love taps.",
    "You lift with your back, not your brain.",
    "You break more bones than expectations.",
    "You're the reason strength checks fail."
  ],
  
  dex: [
    "Your reflexes are as sharp as a melted spoon.",
    "You trip over shadows.",
    "Your agility is mythical—in that it's not real.",
    "Even statues dodge better.",
    "Your stealth is a series of apologies.",
    "You tumble like a sack of potatoes.",
    "You’re a blur—in the worst direction.",
    "You dodge like you're magnetized to pain.",
    "Even slimes are more coordinated.",
    "Your finesse is a fantasy."
  ],
  
  con: [
    "You faint during wind gusts.",
    "You catch colds from warm soup.",
    "Your constitution is imaginary.",
    "You’re one hit away from unconsciousness.",
    "Your blood type is 'fragile'.",
    "You’re the tank nobody wants.",
    "You sweat from standing.",
    "Your immune system issued a resignation.",
    "Even potions avoid healing you.",
    "You're allergic to resilience."
  ],
  
  int: [
    "You couldn’t spell ‘arcane’ with a dictionary.",
    "Even your thoughts have typos.",
    "You’re outwitted by rocks.",
    "Books fear your touch.",
    "Your IQ is an urban legend.",
    "You ask which end of a wand is dangerous.",
    "You confuse scrolls with toilet paper.",
    "Your best idea was silence.",
    "You need CliffNotes for your own backstory.",
    "You critically fail at thinking."
  ],
  
  wis: [
    "Your insight reads like a blank scroll.",
    "You trust mimics twice.",
    "Even your gut says 'don’t ask me'.",
    "Your perception modifier is crying.",
    "You ask hags for directions.",
    "You see illusions and tip your hat.",
    "You can't find your own motivation.",
    "Your sense of danger is romantic.",
    "You're the cautionary tale.",
    "Even a divination spell can’t help you."
  ],
  
  cha: [
    "Your charm is aggressively optional.",
    "You flatter like a tax audit.",
    "Even zombies ignore your presence.",
    "You inspire silence.",
    "You seduce like a wet sock.",
    "Your presence lowers diplomacy checks.",
    "You could bore a succubus.",
    "You're as persuasive as spoiled meat.",
    "You make mirrors flinch.",
    "Your aura screams 'awkward'."
  ],
  
  undead: [
    "I've seen skeletons with more backbone than you.",
    "You're so lifeless, even zombies call you dull.",
    "You moan like a banshee with laryngitis.",
    "Your presence raises more groans than the dead.",
    "Even necromancers refuse to reanimate you.",
    "You're more decay than danger.",
    "The only thing scary about you is your fashion sense.",
    "You shamble like you're tripping on your own grave.",
    "You're not undead—just unpleasant.",
    "Even ghosts think you're transparent."
  ],
  
  fiend: [
    "You're the least infernal thing since angelic tea time.",
    "Even imps laugh at your evil ambitions.",
    "You have the menace of a soggy matchstick.",
    "You're what Hell sends when it's feeling passive-aggressive.",
    "I've met cultists more intimidating than you.",
    "Your evil laugh sounds like a hiccup.",
    "You're more irritation than damnation.",
    "Even contracts with you come with an escape clause.",
    "You're the fine print no one reads.",
    "Your horns must be compensating."
  ],
  
  devil: [
    "You negotiate like a spoiled child.",
    "Even your brimstone smells weak.",
    "You’re Hell’s least valuable intern.",
    "You tempt like stale bread.",
    "Your pacts are written in crayon.",
    "You're the devil's idea of a prank.",
    "You got demoted from tormentor to paper pusher.",
    "Even soul collectors pass you by.",
    "You wouldn't recognize subtle evil with a guide.",
    "You're Hell's version of a pothole."
  ],
  
  demon: [
    "You rage like a toddler denied dessert.",
    "You’re chaos in the form of inconvenience.",
    "Even other demons plug their ears when you roar.",
    "You're the footnote of the Abyss.",
    "You destroy like a confused squirrel.",
    "You're fury without focus—just noise.",
    "Your tantrums could be outperformed by goats.",
    "The Abyss forgot to give you menace.",
    "You're the demonic equivalent of a stubbed toe.",
    "Even balors ask you to leave."
  ],
  
  celestial: [
    "You shine like a cracked lantern.",
    "You're divine like expired fruit.",
    "Even blessings recoil from you.",
    "You inspire about as much hope as a tax collector.",
    "Your halo’s slipping—and not in a good way.",
    "You're the afterthought of heaven.",
    "You radiate righteousness like a damp sock.",
    "Even angels whisper insults behind your wings.",
    "You're celestial in the way barnacles are nautical.",
    "You're the footnote in holy scripture."
  ],
  
  beast: [
    "You snarl like a confused housecat.",
    "You fight like a declawed squirrel.",
    "You’re the runt of a litter of disappointments.",
    "Even fleas refuse to bite you.",
    "You're all bark, no bite—and not even much bark.",
    "You run like you're late for nap time.",
    "I've seen stuffed animals scarier than you.",
    "You’d get outwitted by your own tail.",
    "You’d be adorable—if you weren’t pathetic.",
    "Even druid scouts pass you by."
  ],
  
  dragon: [
    "You hoard failure.",
    "Your breath weapon is just bad breath.",
    "You couldn’t intimidate a kobold.",
    "You fly like you’re trying not to be noticed.",
    "Your scales are more rust than regal.",
    "You’re not ancient—you’re obsolete.",
    "Even hatchlings laugh behind your wings.",
    "Your roar sounds like a snore.",
    "You guard treasure like it's a chore.",
    "You're a wyrm with worms."
  ],
  
  aberration: [
    "You're what nightmares file complaints about.",
    "Even madness avoids your logic.",
    "You look like chaos sneezed.",
    "You're proof psionics can rot taste.",
    "You're strange—but not in the good way.",
    "You make beholders look balanced.",
    "Even the Far Realm says you're too weird.",
    "You exist outside logic—and usefulness.",
    "You’re the scribble in a book of horrors.",
    "You’re the least flattering mutation."
  ],
  
  construct: [
    "Your gears grind louder than your thoughts.",
    "You're powered by disappointment.",
    "You were built broken.",
    "Even artificers mock your design.",
    "You have the finesse of a catapult in a hallway.",
    "You're proof that craftsmanship has low points.",
    "You clank like a bard playing spoons.",
    "You're the blueprint of failure.",
    "Even rust is embarrassed.",
    "You creak louder than old dungeon doors."
  ],
  
  elemental: [
    "You're more smog than storm.",
    "You fizzle like a snuffed candle.",
    "You’re the least threatening breeze I've met.",
    "You're a puddle pretending to be a wave.",
    "Your flame wouldn't toast bread.",
    "You quake like a nervous squirrel.",
    "You're the ash after thought.",
    "You're airheaded in more ways than one.",
    "You're about as solid as fog.",
    "You're a splash of disappointment."
  ],
  
  fey: [
    "You charm like a damp blanket.",
    "You're more trick than treat—and not even clever.",
    "Even pixies call you basic.",
    "You’ve got glamor, minus the glam.",
    "You're all illusion and no substance.",
    "You flit like a moth with a hangover.",
    "Your riddles bore sphinxes.",
    "Even dryads roll their eyes.",
    "You’re the punchline at the Seelie Court.",
    "You're the joke Oberon never told."
  ],
  
  giant: [
    "You stomp like you're apologizing.",
    "You're tall—but that’s it.",
    "Your club swings miss both targets and points.",
    "You grunt like a confused ox.",
    "You tower with all the grace of a landslide.",
    "Your footsteps are the best warning we get.",
    "Even hill giants mock your intellect.",
    "You’re more oaf than ogre.",
    "You eat like a child in a tantrum.",
    "You're big, dumb, and full of fail."
  ],
  
  monstrosity: [
    "You're the failed sketch of evolution.",
    "You're a jumble of parts and none of them good.",
    "You're what happens when nightmares lack focus.",
    "Even aberrations wince at you.",
    "You were made, then regretted.",
    "You're biology's bad idea.",
    "Your roar gets cut off by pity.",
    "You move like a pile of limbs having an argument.",
    "You're terrifying—for all the wrong reasons.",
    "You're less monster, more mistake."
  ],
  
  ooze: [
    "You squelch like spilled soup.",
    "You're just slime with ambition.",
    "Your form is as impressive as lukewarm jelly.",
    "You move with the grace of spilled gravy.",
    "You're the reason brooms fear caves.",
    "Even gelatinous cubes judge you.",
    "You're translucent failure.",
    "You're the goo nobody wants.",
    "Your idea of movement is accidental.",
    "You drip mediocrity."
  ],
  
  plant: [
    "You're what florists throw out.",
    "Even compost rejects you.",
    "You're a weed in a world of roses.",
    "You photosynthesize disappointment.",
    "Your vines tangle themselves out of shame.",
    "You're root rot in motion.",
    "You're a potted disaster.",
    "Even treants refuse to talk to you.",
    "You wilt under pressure.",
    "You're the moss on failure's north side."
  ],
  
  humanoid: [
    "You're the weakest link in evolution.",
    "Your ancestors are trying to disown you.",
    "You make goblins look regal.",
    "You talk like you've swallowed a bagpipe.",
    "You're the town drunk's disappointment.",
    "You're all ego and no accomplishments.",
    "You're an NPC in your own story.",
    "Even your shadow wants to leave.",
    "You're the sidekick in a one-person play.",
    "You were born with potential and lost the receipt."
  ],
  
  fighter: [
    "You swing like you're underwater—with bricks for arms.",
    "Your swordplay is interpretive dance for fools.",
    "You wear armor to protect your fragile ego.",
    "Even your enemies feel secondhand embarrassment.",
    "Your war cry is more of a whimper.",
    "You charge into battle like a chicken on fire.",
    "You couldn’t hit a barn—if it was on you.",
    "Your technique screams 'untrained amateur'.",
    "Even goblins dodge you for fun.",
    "Your best parry is running away."
  ],
  
  rogue: [
    "You sneak like a marching band.",
    "You pick pockets like a clumsy raccoon.",
    "Even shadows flee your incompetence.",
    "Your traps spring on you instead.",
    "You're a thief of disappointment.",
    "You hide like a bard in plate armor.",
    "You're stealthy like a thunderstorm.",
    "Your backstabs are more like polite taps.",
    "You disarm traps by triggering them.",
    "Even your daggers pity you."
  ],
  
  wizard: [
    "Your spells fizzle like wet fireworks.",
    "You memorize failure.",
    "Even cantrips abandon you.",
    "Your arcane focus is a paperweight.",
    "You couldn't magic your way out of a scroll.",
    "You summon embarrassment.",
    "Your illusions are painfully real—because they fail.",
    "You mispronounce 'magic missile'.",
    "You study tomes and learn nothing.",
    "Even familiars pretend not to know you."
  ],
  
  cleric: [
    "Your prayers are marked 'Return to Sender'.",
    "Your divine magic is half divine, all tragic.",
    "You're holier-than-thou—and twice as useless.",
    "You bless with the impact of a sneeze.",
    "Even undead aren't scared of your turning.",
    "You channel divinity like a leaky faucet.",
    "You heal wounds, but never your reputation.",
    "Your sermons are sleep spells.",
    "You're proof the gods have bad days.",
    "Your holy symbol cringes when you hold it."
  ],
  
  barbarian: [
    "Your rage is just yelling.",
    "You smash like a toddler with blocks.",
    "You fight like you're still learning how.",
    "You’re fury without fear—or skill.",
    "You make chaos look orderly.",
    "Even your muscles are confused.",
    "You yell at fire.",
    "You charge headlong into mockery.",
    "Your ancestors are ashamed.",
    "You're proof that strength isn't everything."
  ],
  
  bard: [
    "You sing like a banshee with bronchitis.",
    "Even your instruments want a restraining order.",
    "You're a joke with no punchline.",
    "Your rhymes are crimes.",
    "You're the background noise of adventuring.",
    "You couldn't seduce a gelatinous cube.",
    "Your lute strings broke themselves.",
    "Your performance inspires violence.",
    "You’ve got more flair than talent.",
    "You're the intermission no one waits for."
  ],
  
  paladin: [
    "Your oath is a punchline.",
    "You radiate holiness like a gutter.",
    "Even your smites ask for refunds.",
    "You're more vow than value.",
    "You wield justice like a butter knife.",
    "You turn undead—and walk into walls.",
    "You glow with mediocrity.",
    "You’re a sermon in bad armor.",
    "Your divine sense misfires constantly.",
    "Your mount wants a transfer."
  ],
  
  druid: [
    "You speak with animals—and they beg you to stop.",
    "You wild shape into disappointment.",
    "Your magic’s as natural as plastic.",
    "You’re one with nature—and alone.",
    "Your grove issued a restraining order.",
    "Your vines tie knots of failure.",
    "You’re a squirrel’s bad dream.",
    "Your spores bring more laughs than danger.",
    "Even trees judge you.",
    "You're less guardian of nature, more compost heap."
  ],
  
  sorcerer: [
    "Your bloodline regrets you.",
    "Magic runs in your veins—and trips.",
    "Your raw power is more raw than power.",
    "You’re the wild in wild magic.",
    "Even chaos finds you excessive.",
    "Your lineage is magical—tragically.",
    "You cast spells with all the precision of a landslide.",
    "You're the reason people fear sorcery.",
    "Your charisma outpaces your capability.",
    "Your spark fizzled at birth."
  ],
  
  warlock: [
    "Your patron demands better.",
    "You channel power like a cracked mug.",
    "Even eldritch blasts miss out of pity.",
    "You’re pact-bound to underwhelm.",
    "Your gifts come with regret.",
    "You serve a greater power—badly.",
    "You whisper secrets—and they laugh.",
    "You’re the disappointing deal.",
    "Your hexes help your enemies.",
    "Your tome erased itself."
  ],
  
  monk: [
    "Your strikes are gentle reminders.",
    "You move like you skipped every lesson.",
    "You meditate on failure.",
    "Your ki flow has a clog.",
    "You're harmony’s off note.",
    "Your discipline is more 'dis' than 'cipline'.",
    "Even your balance falls over.",
    "You punch like a poet.",
    "You dodge into danger.",
    "Your fists seek enlightenment—and miss."
  ],
  
  ranger: [
    "You couldn’t track a snail on fresh snow.",
    "Even your favored enemies ignore you.",
    "You shoot like the arrows are drunk.",
    "You blend with nature like a painted tree.",
    "You guide parties into ambushes.",
    "Your beast companion wants a new partner.",
    "Your quarry dies of boredom.",
    "You map forests with crayons.",
    "You’re wilderness’ weakest warrior.",
    "You hear a twig snap—and trip over it."
  ],
  
  dragonborn: [
    "You breathe fire like a wet candle.",
    "Your scales are duller than a rusted dagger.",
    "You roar like a kitten with a sore throat.",
    "Even kobolds laugh at your dragon heritage.",
    "You’ve got the pride of a hatchling and none of the power.",
    "Your draconic blood must be mostly snake.",
    "You’re a dragon wannabe without the fire.",
    "Your tail wags like a scared puppy.",
    "You hoard nothing but disappointment.",
    "You’re more clumsy than a newborn wyrmling."
  ],

  dwarf: [
    "You’re shorter than a goblin’s temper.",
    "Your beard looks like it’s been through a war—and lost.",
    "You drink like a fish but fight like a squirrel.",
    "Your stubbornness is only outmatched by your bad jokes.",
    "You’re more grumble than grit.",
    "Your hammer couldn’t break a twig.",
    "You smell like a cellar full of wet socks.",
    "You’re a rock with less backbone.",
    "Your ale’s watered down—and so is your courage.",
    "You dig holes better than you dig up glory."
  ],

  elf: [
    "You look like a tree got stuck in a bad mood.",
    "Your grace is only skin-deep—inside you’re a mess.",
    "You’re more fragile than a dry leaf in a storm.",
    "Your arrows fly slower than your wit.",
    "You think you’re timeless, but you’re just tired.",
    "You’re all pointy ears and no point.",
    "Even pixies pity your elegance.",
    "You prance like a deer with a thorn in its foot.",
    "Your magic is as faded as your dignity.",
    "You’re a walking cliché with a bad haircut."
  ],

  gnome: [
    "You’re tiny but your ego’s enormous.",
    "You tinker more with your ego than your gadgets.",
    "Your inventions are as useful as a sieve.",
    "You talk fast but say nothing.",
    "You’re a spark without a flame.",
    "Your jokes are shorter than your stature.",
    "You’re a mouse trying to roar like a lion.",
    "You’ve got the luck of a dropped coin.",
    "You’re more noise than genius.",
    "You’re the jester at the table, and not in a good way."
  ],

  halfelf: [
    "You’re neither here nor there—just annoying in between.",
    "You’re a patchwork of flaws masquerading as charm.",
    "You’re the ‘maybe’ no one asked for.",
    "You try to fit in but just stand out awkwardly.",
    "You’ve got the heart of a human and the patience of an elf—neither of which helps.",
    "Your mixed heritage is your only interesting trait.",
    "You’re a half-baked idea with no finish.",
    "You straddle worlds and fall flat on both sides.",
    "Your smile’s fake and so is your effort.",
    "You’re a bridge to nowhere."
  ],

  halfling: [
    "You’re small, slow, and mostly useless.",
    "You run like you’re afraid of your own shadow.",
    "Your luck’s as thin as your patience.",
    "You’re a snack no one wants to bite.",
    "You hide behind others because you’re scared to stand tall.",
    "Your cheerfulness is as fake as your courage.",
    "You’re a pebble in the road of greatness.",
    "You’re as quiet as a thunderstorm—and just as welcome.",
    "You’re easy to lose and even easier to forget.",
    "You’re less hero, more hobbit-sized problem."
  ],

  halforc: [
    "You’re angry, but it’s mostly just confusion.",
    "Your growl sounds like a wheeze.",
    "You swing like you don’t know which end the blade’s on.",
    "You’re more muscle than brains, and the muscle’s weak.",
    "You’re a failed experiment in rage.",
    "Your tusks look like they’ve been filed by a child.",
    "You’re the joke at the orcish warband.",
    "You’re too dumb to be scary.",
    "You’re all roar and no bite.",
    "You’re a bruiser with a paper shield."
  ],

  human: [
    "You’re the average nobody of the realm.",
    "You’re as forgettable as last week’s ale.",
    "Your ambition is as shallow as a puddle.",
    "You try to be everything and end up as nothing.",
    "Your greatest talent is mediocrity.",
    "You’re a face in the crowd nobody remembers.",
    "You’re as bland as stale bread.",
    "You talk big but deliver small.",
    "Your courage wavers like a candle in the wind.",
    "You’re the common folk’s disappointment."
  ],

  tiefling: [
    "You’re hellish in all the wrong ways.",
    "Your horns are smaller than your ego.",
    "You try to look scary but mostly just look sad.",
    "Your infernal heritage forgot to give you charm.",
    "You’ve got the fire of a wet match.",
    "You’re the reason demons facepalm.",
    "Your tail’s wagging like a lost puppy.",
    "You’re more trouble than you’re worth.",
    "You tempt fate but fail miserably.",
    "You’re a walking inferno of failure."
  ],

  changeling: [
    "You change faces but never change your stupidity.",
    "You’re a mask with no soul.",
    "You’re the shadow that nobody fears.",
    "Your deceptions are as transparent as a glass window.",
    "You wear many faces but none worth remembering.",
    "You’re a mimic with no original thought.",
    "You try to blend in but stand out like a sore thumb.",
    "You’re as trustworthy as a goblin with a dagger.",
    "Your lies crumble faster than your disguises.",
    "You’re the joke everyone’s too polite to tell."
  ],

  warforged: [
    "You’re the rust bucket of the battlefield.",
    "You clang louder than you hit.",
    "Your metal’s more tarnish than tough.",
    "You’re a machine without a purpose.",
    "You’re more squeak than squelch.",
    "Your programming missed the ‘intimidate’ function.",
    "You’re the tool everyone leaves behind.",
    "You rattle like broken armor.",
    "Your bolts are looser than your grip.",
    "You’re a pile of scrap pretending to be a warrior."
  ],
  avernus: [
  "You’re about as useful as a burnt-out torch in the Blood War.",
  "Even the devils avoid your sorry excuse for a pact.",
  "You fumble like a mortal lost in the Nine Hells.",
  "Your courage melts faster than a soul in Avernus heat.",
  "You’ve got less bite than a charred skeleton.",
  "Your wit’s as twisted as the River Styx, and twice as dead.",
  "You stumble through hell like a lost commoner, not a hero.",
  "Your infernal contracts are as empty as your threats.",
  "You’re a footnote in the infernal bureaucracy.",
  "The legions of Avernus would rather face you than your insults."
  ],
};


function getRandom(arr, count = 3) {
  const shuffled = arr.slice().sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function generateInsults() {
  const category = document.getElementById('category').value;
  let output = [];

  if (insults[category]) {
    output = getRandom(insults[category], 3);
  } else {
    output = ["Say something meaner. Try again!"];
  }

  document.getElementById('insultOutput').innerHTML = output.map(i => `<p>🗯️ ${i}</p>`).join('');
}
