"use strict";

////////////////////////////////////////////////////////
/////////////       DATOS      /////////////////////////
////////////////////////////////////////////////////////
// Definir variables
const separadorMovimientos = "\r\nLevel Moves  Tutor Moves  Egg Moves  TM Moves \r\nLvl‐Move  Lvl‐Move  Move  Move  TM: Move  TM: Move  TM: Move \r\n";


// JSONS
const debilidades = {
    "steel" : {
        "steel" : 0.5,
        "water" : 1,
        "bug" : 0.5,
        "dragon" : 0.5,
        "electric" : 1,
        "ghost" : 1,
        "fire" : 2,
        "fairy" : 0.5,
        "ice" : 0.5,
        "fighting" : 2,
        "normal" : 0.5,
        "grass" : 0.5,
        "psychic" : 0.5,
        "rock" : 0.5,
        "dark" : 1,
        "ground" : 2,
        "poison" : 0,
        "flying" : 0.5,
    },
    "water": {
        "steel": 0.5,
        "water": 0.5,
        "bug": 1,
        "dragon": 1,
        "electric": 2,
        "ghost": 1,
        "fire": 0.5,
        "fairy": 1,
        "ice": 0.5,
        "fighting": 1,
        "normal": 1,
        "grass": 2,
        "psychic": 1,
        "rock": 1,
        "dark": 1,
        "ground": 1,
        "poison": 1,
        "flying": 1
  },
    "bug" : {
        "steel": 1,
        "water": 1,
        "bug": 1,
        "dragon": 1,
        "electric": 1,
        "ghost": 1,
        "fire": 2,
        "fairy": 1,
        "ice": 1,
        "fighting": 0.5,
        "normal": 1,
        "grass": 0.5,
        "psychic": 1,
        "rock": 2,
        "dark": 1,
        "ground": 0.5,
        "poison": 1,
        "flying": 2
    },
    "dragon" : {
        "steel": 1,
        "water": 0.5,
        "bug": 1,
        "dragon": 2,
        "electric": 0.5,
        "ghost": 1,
        "fire": 0.5,
        "fairy": 2,
        "ice": 2,
        "fighting": 1,
        "normal": 1,
        "grass": 0.5,
        "psychic": 1,
        "rock": 1,
        "dark": 1,
        "ground": 1,
        "poison": 1,
        "flying": 1
    },
    "electric" : {
        "steel": 0.5,
        "water": 1,
        "bug": 1,
        "dragon": 1,
        "electric": 0.5,
        "ghost": 1,
        "fire": 1,
        "fairy": 1,
        "ice": 1,
        "fighting": 1,
        "normal": 1,
        "grass": 1,
        "psychic": 1,
        "rock": 1,
        "dark": 1,
        "ground": 2,
        "poison": 1,
        "flying": 0.5
    },
    "ghost" : {
        "steel" : 1,
        "water" : 1,
        "bug" : 0.5,
        "dragon" : 1,
        "electric" : 1,
        "ghost" : 2,
        "fire" : 1,
        "fairy" : 1,
        "ice" : 1,
        "fighting" : 0,
        "normal" : 0,
        "grass" : 1,
        "psychic" : 1,
        "rock" : 1,
        "dark" : 2,
        "ground" : 1,
        "poison" : 0.5,
        "flying" : 1,
    },
    "fire" : {
        "steel": 0.5,
        "water": 2,
        "bug": 0.5,
        "dragon": 1,
        "electric": 1,
        "ghost": 1,
        "fire": 0.5,
        "fairy": 0.5,
        "ice": 0.5,
        "fighting": 1,
        "normal": 1,
        "grass": 0.5,
        "psychic": 1,
        "rock": 2,
        "dark": 1,
        "ground": 2,
        "poison": 1,
        "flying": 1
    },
    "fairy" : {
        "steel": 2,
        "water": 1,
        "bug": 0.5,
        "dragon": 0,
        "electric": 1,
        "ghost": 1,
        "fire": 1,
        "fairy": 1,
        "ice": 1,
        "fighting": 0.5,
        "normal": 1,
        "grass": 1,
        "psychic": 1,
        "rock": 1,
        "dark": 0.5,
        "ground": 1,
        "poison": 2,
        "flying": 1
    },
    "ice" : {
        "steel" : 2,
        "water" : 1,
        "bug" : 1,
        "dragon" : 1,
        "electric" : 1,
        "ghost" : 1,
        "fire" : 2,
        "fairy" : 1,
        "ice" : 0.5,
        "fighting" : 2,
        "normal" : 1,
        "grass" : 1,
        "psychic" : 1,
        "rock" : 2,
        "dark" : 1,
        "ground" : 1,
        "poison" : 1,
        "flying" : 1,
    },
    "fighting" : {
        "steel" : 1,
        "water" : 1,
        "bug" : 0.5,
        "dragon" : 1,
        "electric" : 1,
        "ghost" : 1,
        "fire" : 1,
        "fairy" : 2,
        "ice" : 1,
        "fighting" : 1,
        "normal" : 1,
        "grass" : 1,
        "psychic" : 2,
        "rock" : 0.5,
        "dark" : 0.5,
        "ground" : 1,
        "poison" : 1,
        "flying" : 2,
    },
    "normal" : {
        "steel" : 1,
        "water" : 1,
        "bug" : 1,
        "dragon" : 1,
        "electric" : 1,
        "ghost" : 0,
        "fire" : 1,
        "fairy" : 1,
        "ice" : 1,
        "fighting" : 2,
        "normal" : 1,
        "grass" : 1,
        "psychic" : 1,
        "rock" : 1,
        "dark" : 1,
        "ground" : 1,
        "poison" : 1,
        "flying" : 1,
    },
    "grass" : {
        "steel" : 1,
        "water" : 0.5,
        "bug" : 2,
        "dragon" : 1,
        "electric" : 0.5,
        "ghost" : 1,
        "fire" : 2,
        "fairy" : 1,
        "ice" : 2,
        "fighting" : 1,
        "normal" : 1,
        "grass" : 0.5,
        "psychic" : 1,
        "rock" : 1,
        "dark" : 1,
        "ground" : 0.5,
        "poison" : 2,
        "flying" : 2,
    },
    "psychic": {
        "steel": 1,
        "water": 1,
        "bug": 2,
        "dragon": 1,
        "electric": 1,
        "ghost": 2,
        "fire": 1,
        "fairy": 1,
        "ice": 1,
        "fighting": 0.5,
        "normal": 1,
        "grass": 1,
        "psychic": 0.5,
        "rock": 1,
        "dark": 2,
        "ground": 1,
        "poison": 1,
        "flying": 1
    },
    "rock" : {
        "steel": 2,
        "water": 2,
        "bug": 1,
        "dragon": 1,
        "electric": 1,
        "ghost": 1,
        "fire": 0.5,
        "fairy": 1,
        "ice": 1,
        "fighting": 2,
        "normal": 0.5,
        "grass": 2,
        "psychic": 1,
        "rock": 1,
        "dark": 1,
        "ground": 2,
        "poison": 0.5,
        "flying": 0.5
    },
    "dark" : {
        "steel": 1,
        "water": 1,
        "bug": 2,
        "dragon": 1,
        "electric": 1,
        "ghost": 0.5,
        "fire": 1,
        "fairy": 2,
        "ice": 1,
        "fighting": 2,
        "normal": 1,
        "grass": 1,
        "psychic": 0,
        "rock": 1,
        "dark": 0.5,
        "ground": 1,
        "poison": 1,
        "flying": 1
    },
    "ground" : {
        "steel": 1,
        "water": 2,
        "bug": 1,
        "dragon": 1,
        "electric": 0,
        "ghost": 1,
        "fire": 1,
        "fairy": 1,
        "ice": 2,
        "fighting": 1,
        "normal": 1,
        "grass": 2,
        "psychic": 1,
        "rock": 0.5,
        "dark": 1,
        "ground": 1,
        "poison": 0.5,
        "flying": 1
    },
    "poison" : {
        "steel": 1,
        "water": 1,
        "bug": 0.5,
        "dragon": 1,
        "electric": 1,
        "ghost": 1,
        "fire": 1,
        "fairy": 0.5,
        "ice": 1,
        "fighting": 0.5,
        "normal": 1,
        "grass": 0.5,
        "psychic": 2,
        "rock": 1,
        "dark": 1,
        "ground": 2,
        "poison": 0.5,
        "flying": 1
    },
    "flying" : {
        "steel": 1,
        "water": 1,
        "bug": 0.5,
        "dragon": 1,
        "electric": 2,
        "ghost": 1,
        "fire": 1,
        "fairy": 1,
        "ice": 2,
        "fighting": 0.5,
        "normal": 1,
        "grass": 0.5,
        "psychic": 1,
        "rock": 2,
        "dark": 1,
        "ground": 0,
        "poison": 1,
        "flying": 1
    },
}
const caracteristicas = {
    "Amorphous":"Amorphous Pokémon can change their shape easily to fill a space. They can fit into tight spaces, through small cracks, and stretch when pulled.",
    "Aura Sense":"Pokémon with Aura Sense can see the natural essence of people and Pokémon. This essence is often described as a unique color for each individual. Aura Sense conveys information on the target's mood, personality, and intent. See the Detect Aura application of the Mysticism skill for more information. ",
    "Enticing Odor":"Pokémon with the Enticing Odor feature smell sweet like a flower or have another scent that attracts interest. When a Pokémon with Enticing Odor is active when a trainer plays Poké Hunter they can add 300 to their score.",
    "Blindsight":"Blindsight is the ability to “see” without eyes. This is usually due to echolocation, but could also be from another enhance sense (such as smell). Pokémon with blindsight can function perfectly normally in pitch black, and can “see” up to the listed value of squares away. They cannot, however, discern information depending on light, such as color or writing. ",  
    "Bug Silk":"Pokémon with Bug Silk can produce a strong, silky substance normally used to create webs, cocoons, or eggsacs. This silk can be used as a rope, and a Pokémon can produce a number of feet of silk equal to their HP BST times 5 per day. A Pokémon can firmly attach their silk to an object as a free action and then leave a trail of silk behind them as they move. Bug Silk degrades after 1d3 days.",  
    "Camouflage":"Pokémon with camouflage can change the color of their skin to mimic their environment. As a Move Action they may grant themselves partial concealment, even if nothing obscures them. ",  
    "Darkvision":"Darkvision allows a Pokémon to see in the dark and ignore all penalties to perception from a lack of light. Smoke, mist, or other vision impairments still apply.",  
    "Dream Sense":"Dream Sense allows a Pokémon to detect sleeping creatures within 5 squares, and see the dreams of a target within 1 square of it",  
    "Earthmaker":"This Pokémon can create lasting earth, ground, or even stone from its own energy. It can create a number of lbs. of earth equal to ten times its level, daily (attacks do not influence this number).",  
    "Electrical Form":"Pokémon with electrical forms can enter into wires, cords, electronics, or power outlets and travel through them. They can travel at a speed of 12 while moving in thisway. They can only exit their electrical form at the end of the cord or wire they are traveling through.",  
    "Firestarter":"This Pokémon has a flame or extremely hot part of its body, can breathe fire, or otherwise can ignite flammable objects (including campfires) as a move action",
    "Frigid":"Frigid Pokémon have low body temperatures (often below freezing) and lower the temperature around them 2-5 degrees",  
    "Generator":"This Pokémon can create electricity from its own energy and can power electrical devices. It can create a number of minutes of electrical energy equal to ten times its level.",  
    "Hatchrate":"A Pokémon‟s hatch rate can range from short, medium, long, to very long. It takes 5 days, plus 1d6 days per step, to have an egg hatch, a seed sprout, or a pregnant Pokémon give birth.",  
    "Heart Scales":"Pokémon with Heart Scales natural grow Heart Scales and shed one once every 3d6 days",  
    "Illusionist":"Pokémon with Illusionist can use the “Project Illusion” application of the Mysticism skill. Creating illusions in this fashion requires a Standard Action. Pokémon with Illusionistmake the check with a +15. If a Pokémon gains the Illusion Ability and does not have the Illusionist feature, they gain Illusionist.",
    "Incorporeal":"Incorporeal Pokémon can move through solid objects. This allows them to ignore difficult terrain caused by obstruction, move through walls, or move through the squares of others uncontested. While intangible a Pokémon is difficult to discern, becoming a shadowy shape of indiscernible species. They cannot be targeted by attacks, or make attacks of their own. A Pokémon can remain incorporeal for a number of rounds per encounter equal to their Sp.Atk or Sp.Def BST, whichever is greater.",  
    "Inflatable":"Inflatable Pokémon are bulbous, balloonlike, or blob-like and can double their size as a free action. Inflating does not increase mass, but it does increase surface area, making them more buoyant or even floaty. Inflated Pokémon decrease their effective weight class by 1 when falling, don‟t need to make checks when swimming to stay afloat, and half falling damage",  
    "Invisibility":"Pokémon with Invisibility can turn invisible as a Move Action. If a Pokémon makes an attack or uses and Ability while invisible, their invisibility ends. While invisible, the Pokémon has total concealment (see pg. 82). Pokémon can remain invisible for a number of rounds equal to 3 plus their level. They cannot go invisible again until the end of the encounter",  
    "Luminous":"A Luminous Pokémon has a flame, magnet, or other body part that emits light. It sheds bright, full light 2 squares around the Pokémon, and dim light another two squares past that.",  
    "Magnetic":"Magnetic Pokémon can change the magnetism of their bodies at will. They can repel or attract magnetic objects with strength equal to their strength +2. This magnetic field can affect objects a number of squares away equal to the Pokémon‟s level.",  
    "Mountable":"This Pokémon may serve as a mount. See the Mount Pokémon trait or the ride application of the Athletics skill for more details",  
    "Reach":"Reach allows a Pokémon to make melee attacks from extra squares away, as designated in the Pokédex. Reach is the result of large size, tentacles, vines, or other long appendages.",   
    "Shapeshifter":"Shapeshifters can change their physical form at will. They can assume the physical attributes of any object, person, or Pokémon. They do not gain the moves or abilities of a mimic'd Pokémon (see the move Transform for this), just its looks and movement speeds. Complicated objects are superficially mimic'd. A laptop, for example, would not function as a computer, but would look like one. Shapeshifting grants a +10 on stealth checks to hide (if transformed into an object that matches the environment), or a +5 to disguise attempts.",  
    "Silent":"A silent Pokémon does not make noise as it moves, does not breath, and can stand perfectly still.",  
    "Size":"Pokémon size can vary between small, medium, large, or huge. Small and medium Pokémon occupy one square on the battle mat. Large Pokémon occupy 2x2 squares on the battlefield. Finally, huge Pokémon occupy a 3x3 square area.",  
    "Stealthy":"Stealthy Pokémon are naturally sneaky and capable at remaining hidden. They gain +5 to stealth checks and can make stealth checks even if opponents are aware of them (such as during a battle), provided they have cover or concealment.",  
    "Telekinetic":"Telekinetic Pokémon and Trainers can move objects with their mind. They can lift things with Telekinesis as if they were using the Telekinesis application of the Psychonesis skill. The Telekinetic feature gives +10 to this check",  
    "Telepath":"A Telepathic Pokémon can read the surface thoughts of people and other Pokémon as if using the Telepathy application of the Psychonesis skill. Pokémon with Telepath gain +10 on this check",  
    "Tracker":"Trackers are Pokémon that can use their exceptional sense of smell to follow the scent of a target. Tracking requires a Survival check DC 15 if the scent is on hand (such as an item belonging to the target). To pick-up a random scent from nothing is DC 20 (such as walking through the forest and finding a target to follow). To pick-up a specific scent from nothing is even harder, at DC 25. These checks can only be remade after the encounter ends.",  
    "Tremorsense":"Pokémon with tremorsense can detect people, objects, or Pokémon up to the listed number of squares away through their contact with the ground. Both the Pokémon and the target must be touching the ground for this sense to work.",  
    "Volatile":"When this Pokémon is reduced to 0 HP roll d20, on a roll of 15+ they can use SelfDestruct or Explosion (if they know it) at half the usual damage tier.",  
    "Warm":"Warm Pokémon have a high body temperature (some too hot to touch) and raise the temperature around them 2-5 degrees.",
    "Waterbreathing":"Pokémon with Waterbreathing need oxygen to survive, but can extract that oxygen from water via gills or some other ability.",  
    "Weapon Use":"Pokémon that have Weapon Use naturally use sticks, shells, or other objects as weapons, and can be taught to use human made weapons of similar style (a Farfetch‟d could use a sword, for example). This requires 2 TP and improves the damage of moves that use the weapon (such as Slash or Cut for Farfetch‟d) by 1 tier.",  
    "Wellspring":"This Pokémon can create lasting water from its own energy and is a fountain of fresh water. It can create a number of gallons of water similar to what would be found in a lake equal to five times its level, daily (attacks do not influence this number)",  
    "Levitator":"This Pokémon levitates off the ground, but can still be affected by Ground-type moves. Levitating Pokémon can float up to 1/2 of their level foot (rounded up) off the ground. Alternatively, use a static one up to 4 feet off the ground.",  
    "Radio":"This Pokémon can intercept and project radio signals thanks to the antenna on its head.",  
    "Sticky":"This Pokémon produces or is made of a sticky substance, making it easier to grab and hold onto enemies. Either +5 or +10 to control the controls, depending on the DM.",  
    "Locksmith":"This Pokémon is capable of remembering any key given to it and producing a copy in 1d20 days. These keys cannot be removed from the Pokémon.",  
    "Teleporter":"This Pokémon is capable of teleporting 5 feet per level once per round, up to 1 per level per day.",  
    "Grappler":"This Pokémon has a bonus to grapple checks, being able to use its unique shape/strengths to keep enemies at bay. Gain a bonus on grappling checks equal to your level (or just a +5 if you happen to be too strong).",  
    "Possessive":"This Pokémon disguises itself and possesses the items, allowing them to appear as another Pokémon/item.",  
    "Plantmaker":"This Pokémon can help in the growth of vines/brambles or other plants up to 5 lb*lvl per day. Only in tapu bulu but can be applied retroactively to a few Pokémon.",  
    "Flat":"This Pokémon is as thin as a sheet of paper and can fit through tight spaces with ease."
}
const habilidades = {
    // A
    "Adaptability":["Passive","The STAB bonus is 5 damage per level for this Pokémon, instead of 3."],
    "Aerilate":["Passive","Any normal type move used by this Pokémon becomes Flying-type. The move‟s damage tier increases by 1."],
    "Aftermath":["Passive","When this Pokémon faints it explodes in a burst 2. All creatures caught in the burst take ¼ of their max HP in damage."],  
    "Air Lock":["Battle - Free Action","All weather effects within a mile are cleared."],  
    "Analytic":["Passive"," Whenever this Pokémon hits a target that has acted this round, increase the damage tier of the move by 1."],  
    "Anger Point":["Passive","When this Pokémon is hit by a critical hit it gains +3 attack CS."],  
    "Anticipation":["Passive","When this Pokémon enters a battlefield or becomes active, it immediately knows if an enemy within 10 squares has an attack that is super-effective against it. It does not know the name of the attack."],  
    "Arena Trap":["Battle - Free Action","The ground within 10 squares of this Pokémon becomes difficult terrain for all enemies for the rest of the battle. Pokémon within this area cannot be returned to their pokeball"],  
    "Aroma Veil":["Passive","Allies within 5 meters are immune to the effects of Taunt, Torment, Encore, disable, Cursed Body, Heal Block, and infatuation."],  
    "Aura Break":["Passive","Fairy Aura and Dark Aura instead reduce the damage tier of their respective moves by 1."],  
    // B
    "Bad Dreams":["Passive","At the beginning of the user‟s turn all sleeping enemies within 5 squares take 1/8 of their max HP in damage."],  
    "Battery":["Passive","This Pokémon increases the damage tier of all Special moves it or its allies use within 10 squares"],  
    "Battle Armor":["Passive","Critical hits do not gain bonus damage against this Pokémon."],  
    "Battle Bond":["Passive"," This Pokémon transforms into its AshGreninja form when it causes an enemy to faint. It reverts to Battle Bond Greninja at the end of battle"],
    "Beast Boost":["Passive","When this Pokémon reduces an opponent to 0 HP it gains +1 CS to its highest stat."],
    "Berserk":["Passive","Each time this Pokémon drops below 50% HP it gains +1 Sp.ATK CS."],  
    "Big Pecks":["Passive","This Pokémon cannot have its Defense stat lowered by enemy moves or effects."],  
    "Blaze":["Passive","When this Pokémon‟s HP drop to 1/3 or lower their ATK and Sp.ATK is treated as 50% higher for fire-type moves."],  
    "Bulletproof":["Passive"," This Pokémon is immune to the moves Acid Spray, Aura Sphere, Barrage, Beak Blast, Bullet Seed, Egg Bomb, Electro Ball, Energy Ball, Focus Blast, Gyro Ball, Ice Ball, Magnet Bomb, Mist Ball, Mud Bomb, Octazooka, Pollen Puff, Rock Blast, Rock Wrecker, Searing Shot, Seed Bomb, Shadow Ball, Sludge Bomb, Weather Ball, and Zap Cannon."],  
    // C
    "Cheek Pouch":["Passive","When this Pokémon consumes a berry it regains 1/3 max HP in addition to the other effects of the berry."],  
    "Chlorophyll":["Passive"," This Pokémon gains +2 SPD in Harsh Sunlight."],  
    "Clear Body":["Passive","This Pokémon‟s CSs cannot be lowered from enemy moves."],  
    "Cloud Nine":["Battle - Free Action","All weather effects within a mile are cleared."],  
    "Color Change":["Passive","This Pokémon‟s type changes to the type of any move that hits it (after the effects of that move)."],  
    "Comatose":["Passive"," This Pokémon is always asleep and is thus immune to the Sleep condition. It can use moves and act normally while asleep. It takes double damage from Hex and Wakeup slap and can be targeted by DreamEater, Nightmare and Bad Dreams. It cannot use Rest."],  
    "Competitive":["Passive","Whenever this Pokémon has its CSs lowered by an enemy its Sp.ATK increases by 2 CS"],  
    "Compound Eyes":["Passive","This Pokémon gains +3 to all attack rolls."],  
    "Contrary":["Passive","Any time this Pokémon‟s CSs would be affected, they are instead changed in the opposite way. For example, a +1 ATK CS instead becomes -1 ATK CS."],  
    "Corrosion":["Passive"," This Pokémon can inflict the status condition Poison or Badly Poison on any target, regardless of type or immunity."],  
    "Cursed Body":["Passive","Any time this Pokémon is damage by a move or attack roll 1d20. On a roll of 14+ that attack is Disabled for 4 turns (or until they switch out)."],  
    "Cute Charm":["Passive"," Any time this Pokémon is damage by a move or attack roll 1d20. On a roll of 14+ the attacker becomes infatuated with this Pokémon"],
    // D
    "Damp":["Passive","The moves Self-Destruct, Explosion, Mind Blown, and the ability Aftermath cannot be activated or used within 10 squares of this Pokémon."],  
    "Dancer":["Passive","When a creature within 10 squares of this Pokémon uses Feather Dance, Fiery Dance, Dragon Dance, Lunar Dance, Petal Dance, Revelation Dance, Quiver Dance, Swords Dance, or Teeter Dance this Pokémon can use that move immediately as a free action as well."],  
    "Dark Aura":["Passive","All dark-type moves used within 10 squares of this Pokémon have their damage tier increased by 1."],  
    "Dazzling":["Passive","Priority moves that target this Pokémon or its allies used by enemies within 10 squares of this Pokémon fail."],  
    "Defeatist":["Passive"," When this Pokémon‟s HP drops below 50% their ATK and Sp.ATK are cut in half."],  
    "Defiant":["Passive","Whenever this Pokémon has its CSs lowered by an enemy its ATK increases by 2 CS."],  
    "Delta Stream":["Battle - Free Action","This Pokémon changes the weather to Strong Winds"],  
    "Desloate Land":["Battle - Free Action","This Pokémon changes the weather to Harsh Sunlight."],  
    "Disguise":["Passive","This Pokémon is Disguised by default. If it is hit by a damaging attack it receives no damage and its disguise ends. This disguise will return after the battle ends or if the Pokémon faints and is revived."],  
    "Download":["Battle - Free Action","This Pokémon can choose one enemy within 10 squares. This Pokémon gains +1 ATK CS if the target‟s DEF is lower than its Sp.DEF. It instead gains +1 Sp.ATK CS if the target‟s Sp.DEF is lower than its DEF."],  
    "Drizzle":["Battle - Free Action"," The Pokémon changes the weather to Rain."],  
    "Drought":["Battle - Free Action","The Pokémon changes the weather to Harsh Sunlight."],  
    "Dry Skin":["Passive"," This Pokémon loses 1/8 of its max HP at the end of each of its turns during Harsh Sunlight. During Rain, this Pokémon will regain 1/8 of its max HP at the end of each of its turns. This Pokémon takes 25% more damage from fire-type moves (after all other damage calculations). When it is hit by a Water-type move, it takes no damage and restores 25% of its HP."],  
    // E
    "Early Bird":["Passive","Half the duration of sleep (minimum 1)."],  
    "Effect Spore":["Passive","Any time this Pokémon is hit with a melee move roll 1d20. On a roll of 14+ roll 1d6. On a roll of 1-2, the enemy is now poisoned. On a roll of 3-4 the enemy is now paralyzed. On a roll of 5-6, the enemy is now asleep."],  
    "Electric Surge":["Passive","When this Pokémon enters the battle or becomes active the terrain becomes Electric"],  
    "Emergency Exit":["Passive","When this Pokémon‟s HP drops below 50% it instantly returns to its Poke Ball. Its Trainer can send out a new Pokémon (not this one) as a Free Action. If wild, this Pokémon gains +4 movements speeds and tries to flee."],  
    // F
    "Fairy Aura":["Passive","All fairy-type moves used within 10 squares of this Pokémon have their damage tier increased by 1."],
    "Filter":["Passive","When this Pokémon is subjected to a critical hit, increase the damage by 1.3 instead of 1.5."],  
    "Flame Body":["Passive","Any time this Pokémon is hit with a melee move, roll 1d20. On a roll of 14+ the enemy is Burned."],  
    "Flare Boost":["Passive","When this Pokémon is burned increase the damage tier of all special moves it uses by 2 degrees."],  
    "Flash Fire":["Passive","This Pokémon is immune to the effects of Fire-type moves. When hit by a Fire-type attack its ATK and SP.ATK is treated as 50% higher for Fire-type moves."],  
    "Flower Gift":["Passive","When this Pokémon is in Harsh Sunlight it opens into its Sunshine Form. While in its Sunshine Form it and all its allies within 5 squares gain +2 ATK and Sp.DEF CS"],  
    "Flower Veil":["Passive","This Pokémon and all allies within 5 squares cannot have their stats lowered by enemy moves or effects."],  
    "Fluffy":["Passive","This Pokémon takes half damage from melee moves (after all damage calculations) and double damage from Firetype moves (after all damage calculations)"],  
    "Forecast":["Passive"," This Pokémon‟s type changes based on the weather. In Harsh Sunlight it becomes its Sunny form, a Fire-type. In Hail, it becomes its Snowy form, an Ice-type. In Rain it becomes its Rainy form, a Watertype. In Sandstorms, fog, wins, or clear weather, it becomes its normal for, a Normal-type."],  
    "Forewarn":["Battle - Free Action","The Pokémon picks a target within 10 squares and learns the move with the highest damage the target knows."],  
    "Friend Guard":["Passive","Allies standing adjacent to this Pokémon resist attacks by 1 step more."],  
    "Frisk":["Battle - Free Action","This Pokémon learns the held item, if any, of all enemy Pokémon within 10 squares"],
    "Full Metal Body":["Passive","This Pokémon cannot have its combat stats lowered by enemy moves or effects."],  
    "Fur Coat":["Passive","This Pokémon doubles its defense stat."],  
    // G
    "Gale Wings":["Passive","This Pokémon may use flying-type moves as priority moves"],  
    "Galvanize":["Passive","Any normal type move used by this Pokémon becomes Electric-type. The move‟s damage tier increases by 1."],  
    "Gluttony":["Passive","This Pokémon eats berries when reduced to 50% HP (instead of 25%)."],   
    "Gooey":["Passive","Any time this Pokémon is hit be a melee attack, reduce the Spd CS of the attacker by 1."],  
    "Grass Pelt":["Passive","When this Pokémon is standing in tall grass or dense foliage that would normally be difficult terrain, increase its Defense by 50%."],  
    "Grassy Surge":["Passive","When this Pokémon enters the battle or becomes active, the terrain becomes Grassy."],  
    "Guts":["Passive","When this Pokémon gains a status condition increase its Attack by 50%. This Pokémon does not suffer the -2 ATK CS normally imposed by being burned."],  
    // H
    "Harvest":["At-will - Free action","Once a turn after this Pokémon has consumed a berry it can roll 1d20. On a roll of 11+ the Berry is restored as its held item."],  
    "Healer":["Battle - Free Action","Once per turn this Pokémon can attempt to cure adjacent allies of any status condition. Roll 1d20, on a roll of 14+ all allies next to this Pokémon are cured of 1 status condition"],  
    "Heat Proof":["Passive","This Pokémon reduces all damage done to itself by Fire-type attacks or the Burn condition by 50% (after all other calculations)."],  
    "Heavy Metal":["Passive","This Pokémon‟s Weight is doubled."],  
    "Honey Gather":["Passive","Each day this Pokémon has been active it may roll a d20+1/level (Max +10). On a roll of 20 or above it produces Honey."],  
    "Huge Power":["Passive","This Pokémon‟s Attack is doubled."],  
    "Hustle":["Passive","This Pokémon‟s Attack is doubled but receives a -3 to all attack rolls."],  
    "Hydration":["Passive","This Pokémon is cured of any status condition at the end of its turn if it is Raining."],  
    "Hyper Cutter":["Passive","This Pokémon‟s attack stat cannot be lowered by enemy moves or effects."],  
    // I
    "Ice Body":["Passive","This Pokémon regains 1/16 of its HP at the end of each turn if it is Hailing and is immune to the damage from Hail"],  
    "Illuminate":["Passive","This Pokémon can use its illumination to attract wild Pokémon. If it does so, gain +250 to any Poke Hunter scores, or, if not playing Poke Hunter, roll on the wild encounters table for the respective terrain type (pg. 91) to see if an encounter appears."],  
    "Illusion":["At-will - Free action","This Pokémon can shroud itself in an illusion as a standard action. It can take the appearance of any Pokémon or person within 10 squares. Directly interacting with this Pokémon (through touch) immediately reveals the illusion, otherwise it gains +15 to disguise checks. When this Pokémon is deployed in battle it can use a free action to take the appearance of any one Pokémon in its trainer‟s party. The illusion lasts until thes Pokémon takes damage, 10 minutes out of sight of the target has lapsed, or the Pokémon wishes."],  
    "Immunity":["Passive"," This Pokémon cannot be Poisoned or Badly Poisoned."],  
    "Impostor":["At-will - Free action","When this Pokémon is deployed in battle it can use a free action to use the move Transform on any Pokémon within 5 squares."],  
    "Infiltrator":["Passive","This Pokémon ignores the effects of Reflect, Light Screen, Safeguard, Mist, Substitute, or Aurora Veil."],  
    "Innards Out":["Passive","When this Pokémon is knocked out by an opponent's attack, it deals damage to that opponent equal to the amount of HP it had left before last being hit."],  
    "Inner Focus":["Passive","This Pokémon cannot be Flinched."],  
    "Insomnia":["Passive","This Pokémon is immune to attacks that cause sleep, including Yawn and Rest."],  
    "Intimidate":["Battle - Free Action","This Pokémon lowers the Attack of all enemies within 5 squares by 1 CS."],  
    "Iron Barbs":["Passive","When this Pokémon is hit by a melee attack, the attacking Pokémon takes 1/8 its HP in damage."],
    "Iron Fist":["Passive","When this Pokémon uses Bullet, Comet, Dizzy, Drain, Dynamic, Fire, Focus, Ice, Mach, Mega, Power-Up, Shadow, or Thunder Punch, increase the damage tier by 1. Or when it uses Double Iron Bash, Hammer Arm, Meteor Mash, Plasma Fists, or Sky Uppercut increase the damage tier by 1."],  
    // J
    "Justified":["Passive","When this Pokémon is hit by a damaging Dark-type move it gains +1 ATK CS."],  
    // K
    "Keen Eye":["Passive","This Pokémon cannot have its accuracy lowered and ignores Evasion bonuses from cover or moves. This Pokémon gains +3 Perception."],  
    "Klutz":["Passive","This Pokémon does not gain positive or negative effects from held items."],  
    // L
    "Leaf Guard":["Passive","During Harsh Sunlight this Pokémon is immune to status conditions, Yawn, Rest, and is cured of any status conditions it had before entering Harsh Sunlight."],  
    "Levitate":["Passive","This Pokémon is immune to damaging Ground-type moves, Arena Trap, Spikes, Toxic Spikes, Rototiller, and terrain effects."],  
    "Light Metal":["Passive","This Pokémon‟s Weight is halved."],  
    "Lightning Rod":["Passive","This Pokémon becomes the target of all Electric-type moves within 5 squares. If hit by an Electric-type move it is immune to all effects of that attack and it gains +1 Sp.ATK CS."],  
    "Limber":["Passive","This Pokémon cannot by paralyzed."],  
    "Liquid Ooze":["Passive","When this Pokémon is hit by a HPdraining move the attacker loses HP instead of gaining it."],  
    "Liquid Voice":["Passive","This Pokémon turns all sound-based attacks it uses into Water-type. This includes Confide, Disarming Voice, Echoed Voice, Growl, Hyper Voice, Perish Song, Round, Sing, Sparkling Aria, Uproar."],  
    "Long Reach":["Passive","Increase the reach of this Pokémon by 1 square. This Pokémon does not activate any effects caused by using melee moves against a target"],  
    // M
    "Magic Bounce":["Passive","When this Pokémon is hit by a statlowering move, a status inducing move, Taunt, Torment, or is within 5 squares of a hazard move being used, the move is reflected back on the attacker"],  
    "Magic Guard":["Passive","This Pokémon does not take damage during battle from status conditions, weather, recoil, hazards, or lose a turn due to paralysis."],  
    "Magician":["Battle - Free Action","If this Pokémon does not have a held item and hits another with a damaging move it can steal the target‟s held item."],  
    "Magma Armor":["Passive","This Pokémon cannot be Frozen"],  
    "Magnet Pull":["Passive","This Pokémon prevents Steel-type Pokémon within 5 squares from switching out. For a Steel-type Pokémon to leave this area it must make an opposed strength check (this Pokémon gets its STR +2 to the check) to escape the magnetic field."],  
    "Marvel Scale":["Passive","When this Pokémon has a status condition its Defense is increased by 50%."],  
    "Mega Launcher":["Passive","When this Pokémon uses Aura Sphere, Dark Pulse, Dragon Pulse, Heal Pulse, Origin Pulse, or Water Pulse increase the damage tier by 2 degrees"],  
    "Merciless":["Passive","When this Pokémon hits a target that is Poisoned or Badly poisoned the hit is automatically a critical. This does not guarantee a hit, nor does it cause extra damage if the target is immune to critical hit effects"],  
    "Minus":["Passive","When this Pokémon is within 10 squares of an ally with Plus increase its Sp.Attack by 50%"],  
    "Misty Surge":["Battle - Free Action","This Pokémon can cause the terrain to become Misty."],  
    "Mold Breaker":["Passive","This Pokémon can damage or effect Pokémon regardless of the immunities they have from abilities."],  
    "Moody":["Passive","At the end of each turn this Pokémon raises one stat by +2 CS and lowers another by -1 CS. The stats must be chosen at random and the same stat will not be raised and lowered in one turn."],  
    "Motor Drive":["Passive","When this Pokémon is hit by an Electric-type move it takes no damage or other effects and it gains +1 SPD CS."],  
    "Moxie":["Passive","When this Pokémon reduces a target to 0 HP it gains +1 ATK CS"],  
    "Multiscale":["Passive","When this Pokémon is at max HP reduce any damage it takes by 50%."],  
    "Multitype":["At-will - Free action","This Pokémon becomes any type of its choice."],  
    "Mummy":["Passive","When this Pokémon is hit by a melee move one of the attacker‟s abilities (at random) becomes Mummy."],
    // N
    "Natural Cure":["Passive","This Pokémon will heal of any status condition at the end of a battle, after 10 minutes, or when it returns to its poké ball"],  
    "Neuroforce":["Passive","When this Pokémon hits with a supereffective attack the damage after damage calculations is increased by 2.25x instead of 2x."],  
    "No Guard":["Passive","This Pokémon does not apply any Evasion when attacked. It ignores the evasion of any target it attacks."],  
    "Normalize":["Passive","Any move used by this Pokémon becomes Normal-type. The move‟s damage tier increases by 1."], 
    // O 
    "Oblivious":["Passive","This Pokémon is immune to infatuation and the moves Captivate and Taunt."],  
    "Overcoat":["Passive","This Pokémon is immune to damage from sandstorms and hail. It is also immune to powder and spore moves and the ability Effect Spore."],  
    "Overgrow":["Passive","When this Pokémon‟s HP drop to 1/3 or lower their ATK and Sp.ATK is treated as 50% higher for Grass-type moves."],  
    "Own Tempo":["Passive","The user is immune to being Confused."],  
    // P
    "Parental Bond":["Passive","When this Pokémon attacks with a single target move, if it has an infantile offspring, the target takes an additional 25% damage."],  
    "Pickpocket":["Battle - Free Action","If this Pokémon does not have a held item and hits another with a damaging melee move it can steal the target‟s held item"],  
    "Pickup":["Passive","Each day this Pokémon has been active it may roll d100 to find an item. Consult the table to the left."],  
    "Pixilate":["Passive","Any Normal-type move used by this Pokémon becomes Fairy-type. The move's damage tier increases by 1."],  
    "Plus":["Passive","When this Pokémon is within 10 squares of an ally with Minus increase its Sp.Attack by 50%"],  
    "Poison Heal":["Passive","This Pokémon heals 1/8 max HP at the end of every turn it is Poisoned or Badly Poisoned instead of taking damage."],  
    "Poison Point":["Passive","Any time this Pokémon is hit with a melee move roll 1d20. On a roll of 14+ the attacker is Poisoned."],  
    "Poison Touch":["Passive","When this Pokémon lands a melee attack roll d20. On a roll of 14+ the target is Poisoned."],  
    "Power Construct":["Passive","If this Pokémon ends its turn with less than 50% HP it transforms into its Complete Forme."],  
    "Power of Alchemy":["Passive","This Pokémon gains the ability of any ally that faints within 10 squares. Receiver, Trace, Forecast, Flower Gift, Multitype, Illusion, Wonder Guard, Zen Mode, Imposter, Stance Change, Power Construct, Schooling Comatose, Shields Down, Disguise, RKS System, and Battle Bond cannot be gained in this way."],  
    "Prankster":["Passive","This Pokémon can use status inducing moves with priority. Dark-type Pokémon are immune to moves used this way."],   
    "Pressure":["Passive","This Pokémon exerts intense mental pressure to any enemy within 10 squares. Any move used by an enemy while within this area has its availability reduce by 1 (Atwill becomes 2/encounter, 2/encounter becomes 1/encounter, 1/encounter becomes daily, daily becomes unusable)."],  
    "Primordial Sea":["Battle - Free Action","This Pokémon changes the weather to Heavy Rain"],  
    "Prism Armor":["Passive","This Pokémon only takes 1.75x damage from critical hits."],  
    "Protean":["Passive","This Pokémon‟s type becomes the type of any move it is using immediately before calculating damage (STAB will apply)."],  
    "Psychic Surge":["Passive","When this Pokémon enters the battle or becomes active the terrain becomes Psychic."],  
    "Pure Power":["Passive","This Pokémon‟s attack stat is doubled"],  
    // Q
    "Queenly Majesty":["Passive","Priority moves that target this Pokémon or its allies used by enemies within 10 squares of this Pokémon fail."],  
    "Quick Feet":["Passive","When this Pokémon gains a status condition increase its Speed by 50%. This Pokémon does not suffer the -2 SPD CS normally imposed by being paralyzed."],  
    // R
    "Rain Dish":["Passive","This Pokémon gains 1/16 HP at the end of each turn during Rain."],
    "Rattled": ["Passive", "This Pokémon gains +1 SPD CS any time it is hit by a damaging Bug, Dark, or Ghost-type move."],
    "Receiver": ["Passive", "This Pokémon gains the ability of any ally that faints within 10 squares. Power of Alchemy, Trace, Forecast, Flower Gift, Multitype, Illusion, Wonder Guard, Zen Mode, Imposter, Stance Change, Power Construct, Schooling, Comatose, Shields Down, Disguise, RKS System, and Battle Bond cannot be gained in this way."],
    "Reckless": ["Passive", "The damage tier of recoil moves used by this Pokémon is increased by 1."],
    "Refrigerate": ["Passive", "Any Normal-type move used by this Pokémon becomes Ice-type. The move's damage tier increases by 1."],
    "Regenerator": ["Passive", "This Pokémon restores 1/3 HP when it is switched out of battle and after every 30 minutes."],
    "Rivalry": ["Passive", "Moves used by this Pokémon that target a creature of the same gender have their damage tier increased by 1."],
    "RKS System": ["Passive", "When this Pokémon is given a Memory as its held item, its type becomes the type contained in the Memory."],
    "Rock Head": ["Passive", "This Pokémon takes no damage from recoil."],
    "Rough Skin": ["Passive", "When this Pokémon is hit by a melee move, the attacker takes 1/16 of its max HP in damage."],
    "Run Away": ["Passive", "This Pokémon cannot be Trapped and gains +3 to all movement speeds when moving away from the closest enemy."],
    // S  
    "Sand Force": ["Passive", "This Pokémon increases the damage tier of Rock, Ground, and Steel-type moves used in a sandstorm by 1 tier."],
    "Sand Rush": ["Passive", "This Pokémon increases its Speed by 100% in a sandstorm."],
    "Sand Stream": ["Battle - Free Action", "This Pokémon changes the weather to Sandstorm."],
    "Sand Veil": ["Passive", "This Pokémon gains +3 Evasion during a sandstorm."],
    "Sap Sipper": ["Passive", "This Pokémon is immune to damage and effects of Grass-type moves and it gains +1 ATK CS when hit by a Grass-type move."],
    "Schooling": ["Passive", "If this Pokémon is level 4 or greater and has over 25% of its max HP, it assumes its School Form when it is deployed or enters a battle, or at the start of its turn. If it is below 25% max HP at the end of its turn, it reverts to its Solo Form."],
    "Scrappy": ["Passive", "This Pokémon can hit Ghost-type Pokémon with Normal and Fighting-type moves."],
    "Serene Grace": ["Passive", "This Pokémon can roll an additional d20 with any attack that has an on-hit effect. If either d20 rolls high enough to trigger the on-hit effect, it occurs."],
    "Shadow Shield": ["Passive", "When this Pokémon is at full HP, damage it takes is halved."],
    "Shadow Tag": ["Passive", "This Pokémon's shadow stretches to touch the shadows of all enemies within 5 squares, preventing them from switching out. To leave this area, a Pokémon must make an opposed strength check (this Pokémon gets STR +2)."],
    "Shed Skin": ["Passive", "This Pokémon can roll a d20 at the end of each turn. On a roll of 14+, it is cured of one random status condition afflicting it."],
    "Sheer Force": ["Passive", "When this Pokémon uses a move with an on-hit effect, increase the damage tier of that move by 2 degrees. The on-hit effect is ignored."],
    "Shell Armor": ["Passive", "This Pokémon is immune to Critical Hits."],
    "Shield Dust": ["Passive", "This Pokémon is immune to on-hit effects or additional effects of damaging moves."],
    "Shields Down": ["Passive", "If this Pokémon has more than 50% HP at the start of battle or turn, it assumes its Meteor Form, becoming immune to status conditions and unable to use Rest. If it has less than 50% HP, it assumes its Core Form and loses these benefits."],
    "Simple": ["Passive", "This Pokémon doubles the Combat Stages (CS) gained or lost from moves."],
    "Skill Link": ["Passive", "This Pokémon always hits the maximum number of times with multi-strike moves."],
    "Slow Start": ["Passive", "This Pokémon's Attack and Speed are halved for the first 5 rounds of battle."],
    "Slush Rush": ["Passive", "This Pokémon's Speed is doubled in Hail."],
    "Sniper": ["Passive", "This Pokémon deals 2x damage with Critical Hits."],
    "Snow Cloak": ["Passive", "This Pokémon gains +3 Evasion during Hail."],
    "Snow Warning": ["Battle - Free Action", "This Pokémon changes the weather to Hail."],
    "Solar Power": ["Passive", "This Pokémon loses 1/8 max HP at the end of each turn in Harsh Sunlight, but its Special Attack is increased by 50%."],
    "Solid Rock": ["Passive", "This Pokémon reduces the effects of super effective attacks by 25%."],
    "Soul-Heart": ["Passive", "This Pokémon gains +1 Sp.ATK CS every time a Pokémon is reduced to 0 HP within 10 squares of it."],
    "Soundproof": ["Passive", "This Pokémon is immune to sound-based moves, including Boomburst, Bug Buzz, Chatter, Clanging Scales, Clangorous Soulblaze, Confide, Disarming Voice, Echoed Voice, Grass Whistle, Growl, Hyper Voice, Metal Sound, Noble Roar, Parting Shot, Perish Song, Relic Song, Roar, Round, Screech, Shadow Panic, Sing, Snarl, Snore, Sparkling Aria, Supersonic, and Uproar."],
    "Speed Boost": ["Passive", "This Pokémon gains +1 SPD CS at the end of each turn."],
    "Stakeout": ["Passive", "This Pokémon adds 3 to the damage tier of any move used against a target that just deployed or became active this turn."],
    "Stall": ["Passive", "This Pokémon sets their team's initiative to 0."],
    "Stamina": ["Passive", "This Pokémon gains +1 DEF CS if it is hit by an attack."],
    "Stance Change": ["Passive", "This Pokémon starts in Shield Forme. If it uses a damaging move, it changes to Blade Forme before attacking. It reverts to Shield Forme when it leaves battle, is recalled, or uses King's Shield."],
    "Static": ["Passive", "Any time this Pokémon is hit with a melee move, roll 1d20. On a roll of 14+, the attacker is Paralyzed."],
    "Steadfast": ["Passive", "If this Pokémon is Flinched, it gains +1 SPD CS."],
    "Steelworker": ["Passive", "When this Pokémon uses a Steel-type move, the move's damage tier is increased by two degrees."],
    "Stench": ["Passive", "When this Pokémon is hit by a damaging attack, roll 1d20. On a roll of 18+, the attacker is Flinched."],
    "Sticky Hold": ["Passive", "This Pokémon cannot have its held item removed by enemy moves, effects, or abilities."],
    "Storm Drain": ["Passive", "This Pokémon becomes the target of all Water-type moves within 5 squares. It is immune to the effects of Water-type moves and gains +1 Sp.ATK CS if hit by one."],
    "Strong Jaw": ["Passive", "When this Pokémon uses Bite, Crunch, Fire Fang, Hyper Fang, Ice Fang, Poison Fang, Psychic Fangs, or Thunder Fang, the damage tier is increased by 2 degrees."],
    "Sturdy": ["Passive", "This Pokémon is immune to OHKO attacks. If it would be reduced to 0 HP from full HP, it is instead reduced to 1 HP."],
    "Suction Cups": ["Passive", "This Pokémon cannot be pushed or knocked back by moves. It is also immune to effects that force it to switch out."],
    "Super Luck": ["Passive", "This Pokémon's critical hit range is increased by 1."],
    "Surge Surfer": ["Passive", "This Pokémon doubles its Speed if the terrain is Electric."],
    "Swarm":["Passive","When this Pokémon‟s HP drop to 1/3 or lower their ATK and Sp.ATK is treated as 50% higher for Bug-type moves."],  
    "Sweet Veil": ["Passive", "This Pokémon and all allies within 5 squares are immune to Sleep."],
    "Swift Swim": ["Passive", "This Pokémon's Speed is doubled in Rain."],
    "Symbiosis": ["Passive", "This Pokémon gives its held item to any ally within 5 squares when that ally consumes its held item."],
    "Synchronize": ["Passive", "When this Pokémon becomes afflicted with Burn, Paralyze, or Poison, the attacker also gains the status effect."],
    // T
    "Tangled Feet": ["Passive", "When this Pokémon is confused, it gains +6 Evasion."],
    "Tangling Hair": ["Passive", "When this Pokémon is hit by a melee attack, the attacker loses -1 CS."],
    "Technician": ["Passive", "This Pokémon adds 2 degrees to the damage tier of any move with a damage tier of 6 or less."],
    "Telepathy": ["Passive", "This Pokémon is immune to damage from moves used by its allies."],
    "Teravolt": ["Passive", "This Pokémon ignores the immunities granted by enemies' abilities."],
    "Thick Fat": ["Passive", "This Pokémon takes half damage from Fire or Ice-type moves after all calculations."],
    "Tinted Lens": ["Passive", "When this Pokémon hits with an attack that is not very effective, the damage is doubled after all calculations."],
    "Torrent": ["Passive", "When this Pokémon's HP drops to 1/3 or lower, its ATK and Sp.ATK are treated as 50% higher for Water-type moves."],
    "Tough Claws": ["Passive", "When this Pokémon uses a melee attack, increase the damage tier by 2 degrees."],
    "Toxic Boost": ["Passive", "When this Pokémon is Poisoned or Badly Poisoned, the damage tier of all physical moves it uses is increased by 2."],
    "Trace": ["Passive", "When this Pokémon enters a battle or becomes active, it gains the ability of a randomly selected opponent within 10 squares."],
    "Triage": ["Passive", "This Pokémon changes all moves that restore HP used by it or its allies within 10 squares to priority moves."],
    "Truant": ["Passive", "This Pokémon does not perform any actions when directed to do so unless it did not act when directed to do so last turn."],
    "Turboblaze": ["Passive", "This Pokémon ignores the immunities granted by enemies' abilities."],
    // U
    "Unaware": ["Passive", "When this Pokémon is attacked, the attacker does not apply any changes to its CSs. When this Pokémon attacks, it ignores any changes to the target's CSs."],
    "Unburden": ["Passive", "This Pokémon gains +2 SPD CS when it consumes, loses, or has its held item removed by an enemy."],
    "Unnerve": ["Passive", "This Pokémon prevents enemies within 10 squares from consuming held berries."],
    // V
    "Victory Star": ["Passive", "This Pokémon and any allies within 10 squares gain +2 to attack rolls."],
    "Vital Spirit": ["Passive", "This Pokémon is immune to Sleep and cannot use Rest."],
    "Volt Absorb": ["Passive", "This Pokémon is immune to the effects of Electric-type attacks. If it is hit by an Electric-type attack, it restores ¼ of its max HP."],
    // W
    "Water Absorb": ["Passive", "This Pokémon is immune to the effects of Water-type attacks. If it is hit by a Water-type attack, it restores ¼ of its max HP."],
    "Water Bubble": ["Passive", "This Pokémon halves the damage it receives from Fire-type attacks after all damage calculations. It also increases the damage tier of Water-type moves by 4."],
    "Water Compaction": ["Passive", "When this Pokémon is hit by a Water-type move, it gains +2 DEF CS."],
    "Water Veil": ["Passive", "This Pokémon is immune to being Burned."],
    "Weak Armor": ["Passive", "When this Pokémon is hit by a physical move, it loses -1 DEF CS and gains +2 SPD CS."],
    "White Smoke": ["Passive", "This Pokémon is immune to stat reduction caused by the moves, abilities, or effects of enemies."],
    "Wimp Out": ["Passive", "When this Pokémon's HP drops below 50%, it instantly returns to its Poké Ball. Its Trainer can send out a new Pokémon as a Free Action. If wild, this Pokémon gains +4 movement speed and tries to flee."],
    "Wonder Guard": ["Passive", "This Pokémon takes no damage from moves that are not super-effective."],
    "Wonder Skin": ["Passive", "This Pokémon gains +6 Evasion against status-inducing attacks."],
    // Z
    "Zen Mode": ["Passive", "When this Pokémon starts its turn below 50% HP, it assumes its Zen Mode form. If it starts its turn above 50% HP, it assumes its Standard Mode form."],
}
const movimientos = {
    ////////////////    BUG     ////////////////////
    "Attack Order":{
        "Type":"Bug",
        "Availability":"At-Will",
        "Attack Modifier":2,
        "Damage":"3d12x2",
        "Kind":"Physical",
        "Range":6,
        "Description":"Hundreds of tiny biting and stinging insects swarm the target",
        "Effect":"Attack Order is a Critical Hit on 18+",
    },
    "Bug Bite": {
        "Type": "Bug",
        "Availability": "At-Will",
        "Attack Modifier": 2,
        "Damage": "4d8",
        "Kind": "Physical",
        "Range": "Melee",
        "Description": "A powerful bite with mandibles and fangs.",
        "Effect": "The user consumes any berries the target is holding."
    },
    "Bug Buzz": {
        "Type": "Bug",
        "Availability": "2/Battle",
        "Attack Modifier": 2,
        "Damage": "3d12x2",
        "Kind": "Special",
        "Range": "Cone 2 or Close Blast 2, Sonic",
        "Description": "A horrific ringing vibrates inside the target's head.",
        "Effect": "Bug Buzz reduces Sp.DEF by -1 CS on 19+."
    },
    "Defend Order": {
        "Type": "Bug",
        "Availability": "2/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Self",
        "Description": "Hundreds of tiny insects surround the user, forming a barrier.",
        "Effect": "Raise the user's DEF and Sp.DEF by 1 CS each."
    },
    "Fell Stinger": {
        "Type": "Bug",
        "Availability": "At-Will",
        "Attack Modifier": 2,
        "Damage": "2d6",
        "Kind": "Physical",
        "Range": "Melee",
        "Description": "The user lunges with a deadly stinger.",
        "Effect": "If the target is reduced to 0 HP from this attack, raise the User's ATK by +2 CS."
    },
    "Fury Cutter": {
        "Type": "Bug",
        "Availability": "At-Will",
        "Attack Modifier": 1,
        "Damage": "2d8",
        "Kind": "Physical",
        "Range": "Melee",
        "Description": "The user slices the target in a growing frenzy.",
        "Effect": "If Fury Cutter is used successfully on the same target as last turn, the damage tier is increased by +4. If Fury Cutter misses or fails to damage, the damage tier resets."
    },
    "Heal Order": {
        "Type": "Bug",
        "Availability": "2/Day",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Self",
        "Description": "Hundreds of tiny insects work together to bind the user's wounds.",
        "Effect": "The user restores 50% of its max HP."
    },
    "Infestation": {
        "Type": "Bug",
        "Availability": "2/Battle",
        "Attack Modifier": 0,
        "Damage": "2d8",
        "Kind": "Special",
        "Range": 5,
        "Description": "A blanket of insects covers the target, slowly devouring it.",
        "Effect": "The target becomes infested, taking 1/8 max HP at the end of each turn. While infested, the Pokémon cannot be recalled to its poke ball and has its movement speeds reduced by half. After taking damage, the target can make a reflex save to end these effects."
    },
    "Leech Life": {
        "Type": "Bug",
        "Availability": "At-Will",
        "Attack Modifier": 2,
        "Damage": "1d12",
        "Kind": "Physical",
        "Range": "Melee",
        "Description": "The user bites the target and feeds on its energy.",
        "Effect": "The user gains 50% of any damage dealt."
    },
    "Megahorn": {
        "Type": "Bug",
        "Availability": "2/Battle",
        "Attack Modifier": -1,
        "Damage": "5d10x2",
        "Kind": "Physical",
        "Range": "Melee, knockback",
        "Description": "The user rams into the target with powerful horns.",
        "Effect": "The user gains +1 on its knockback roll."
    },
    "Pin Missile": {
        "Type": "Bug",
        "Availability": "2/Battle",
        "Attack Modifier": 0,
        "Damage": "2d8",
        "Kind": "Physical",
        "Range": "6, Multistrike",
        "Description": "Needle-like projectiles strike the target in rapid succession.",
        "Effect": "None"
    },
    "Powder": {
        "Type": "Bug",
        "Availability": "2/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "6, Priority",
        "Description": "A fine dust blankets the target and fills the air in the area around it.",
        "Effect": "The target's square is filled with fine powder that explodes if ignited. If the target uses a damaging Fire-Type attack, it creates a Blast 3 centered on itself. The Fire-type attack instead deals damage to everything within the blast area, ignoring resistances of the user. Grass-type Pokémon are immune to Powder (but not the explosion damage)."
    },
    "Quiver Dance": {
        "Type": "Bug",
        "Availability": "2/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Self",
        "Description": "The user shifts and vibrates as it draws forth power.",
        "Effect": "Raise the user's Sp.ATK, Sp.DEF, and SPD by +1 CS each."
    },
    "Rage Powder": {
        "Type": "Bug",
        "Availability": "2/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Burst 1 or Line 6",
        "Description": "A strange dust compels each target to mindlessly attack.",
        "Effect": "Every target within the area inhales rage-inducing dust. Affected targets must move towards and attack the user. A successful mind save ends this effect. If the targets lose sight of the user, the effect ends. Grass-type Pokémon are immune to Rage Powder."
    },
    "Signal Beam": {
        "Type": "Bug",
        "Availability": "2/Battle",
        "Attack Modifier": 2,
        "Damage": "3d10x2",
        "Kind": "Special",
        "Range": 6,
        "Description": "A sinister ray of light blasts into the target.",
        "Effect": "The target is Confused on a roll of 19+."
    },
    "Silver Wind": {
        "Type": "Bug",
        "Availability": "At-Will",
        "Attack Modifier": 2,
        "Damage": "4d8",
        "Kind": "Special",
        "Range": "4, Line 3",
        "Description": "A silver powder slices into the bodies of each target.",
        "Effect": "The user raises each of its stats by +1 CS on a roll of 19+."
    },
    "Spider Web": {
        "Type": "Bug",
        "Availability": "2/Battle",
        "Attack Modifier": null,
        "Kind": "Status",
        "Range": 5,
        "Description": "A strong web of sticky silk binds the target in place.",
        "Effect": "Cannot miss. The target is Immobilized and Trapped. Body save ends. Special: Grants Bug Silk."
    },
    "Steamroller": {
        "Type": "Bug",
        "Availability": "2/Battle",
        "Attack Modifier": 2,
        "Damage": "4d12",
        "Kind": "Physical",
        "Range": "Melee, Rush, Line 5",
        "Description": "The user rolls into a powerful ball and crushes everything in its path.",
        "Effect": "Targets all squares in Line 5. The user moves to the end of the line. Flinches targets on a roll of 15+."
    },
    "Sticky Web": {
        "Type": "Bug",
        "Availability": "2/Battle",
        "Attack Modifier": null,
        "Kind": "Physical",
        "Range": "Cone 6, Hazard",
        "Description": "A large net of webbing covers the battlefield.",
        "Effect": "All squares in the cone are covered in webbing. Targets in the area must make a Reflex save or become Trapped and Immobilized. Body save ends. Special: Grants Bug Silk."
    },
    "String Shot": {
        "Type": "Bug",
        "Availability": "At-Will",
        "Attack Modifier": 1,
        "Kind": "Status",
        "Range": "Cone 2",
        "Description": "A spray of sticky silk covers each target.",
        "Effect": "Reduces Speed CS of targets by -2. If the Speed CS cannot be lowered further, the target is also Immobilized. Body save ends. Special: Grants Bug Silk."
    },
    "Struggle Bug": {
        "Type": "Bug",
        "Availability": "At-Will",
        "Attack Modifier": 2,
        "Damage": "2d12",
        "Kind": "Special",
        "Range": "Burst 1, Discerning",
        "Description": "The user thrashes and writhes about, striking everything around it.",
        "Effect": "Reduces the target's Sp.ATK by -1 CS."
    },
    "Tail Glow": {
        "Type": "Bug",
        "Availability": "2/Battle",
        "Attack Modifier": null,
        "Kind": "Status",
        "Range": "Self",
        "Description": "An eerie, pulsating glow emanates from the user's tail.",
        "Effect": "Raises the user's Sp.ATK by +3 CS.",
        "Special": "Grants Luminous."
    },
    "Twineedle": {
        "Type": "Bug",
        "Availability": "At-Will",
        "Attack Modifier": 1,
        "Damage": "2d6",
        "Kind": "Physical",
        "Range": "Melee, Double Strike",
        "Description": "The user strikes with two deadly spikes dripping with poison.",
        "Effect": "The target is Poisoned on an Attack roll of 18+."
    },
    "U-Turn": {
        "Type": "Bug",
        "Availability": "At-Will",
        "Attack Modifier": 2,
        "Damage": "4d12",
        "Kind": "Physical",
        "Range": "Melee, Rush",
        "Description": "The user flies into the target before leaping back into its Poké Ball.",
        "Effect": "If the user hits the target, it is immediately switched out, and a new Pokémon can be deployed as a Free Action."
    },
    "X-Scissor": {
        "Type": "Bug",
        "Availability": "At-Will",
        "Attack Modifier": 2,
        "Damage": "3d10x2",
        "Kind": "Physical",
        "Range": "Melee, Rush",
        "Description": "The user slashes the target with a crossing motion.",
        "Effect": "None."
    },

    /////////////    DARK   ////////////////
    "Assurance": {
        "Type": "Dark",
        "Availability": "2/Battle",
        "Attack Modifier": 2,
        "Damage": "4d8",
        "Kind": "Physical",
        "Range": "Melee",
        "Description": "The user strikes and capitalizes on the damage already dealt.",
        "Effect": "If the target has received any damage this turn, Assurance's damage tier is increased to 9 (3d12x2)."
    },
    "Beat Up": {
        "Type": "Dark",
        "Availability": "1/Battle",
        "Attack Modifier": null,
        "Kind": "Physical",
        "Range": "Melee",
        "Description": "The user leads its allies in brutally striking the target.",
        "Effect": "The user makes a Tackle attack dealing Dark-type damage. Up to four allies within 3 squares of the target can move adjacent and make this same Dark-type Tackle attack."
    },
    "Bite": {
        "Type": "Dark",
        "Availability": "At-Will",
        "Attack Modifier": 2,
        "Damage": "4d8",
        "Kind": "Physical",
        "Range": "Melee",
        "Description": "The user bites the target with nasty jaws.",
        "Effect": "Bite Flinches the target on 15+."
    },
    "Crunch": {
        "Type": "Dark",
        "Availability": "At-Will",
        "Attack Modifier": 2,
        "Damage": "3d10x2",
        "Kind": "Physical",
        "Range": "Melee",
        "Description": "The user crushes the target in vicious jaws.",
        "Effect": "The target's DEF is reduced by -1 CS on 17+."
    },
    "Dark Pulse": {
        "Type": "Dark",
        "Availability": "At-Will",
        "Attack Modifier": 2,
        "Damage": "3d10x2",
        "Kind": "Special",
        "Range": 8,
        "Description": "A horrible aura imbued with sinister malice tears at the target.",
        "Effect": "The target Flinches on 17+."
    },
    "Dark Void": {
        "Type": "Dark",
        "Availability": "2/Battle",
        "Attack Modifier": 0,
        "Kind": "Status",
        "Range": "Burst 4",
        "Description": "Darkness fills the area, forcing targets into sleep.",
        "Effect": "Each target falls Asleep."
    },
    "Embargo": {
        "Type": "Dark",
        "Availability": "At-Will",
        "Attack Modifier": 2,
        "Kind": "Status",
        "Range": "6, Burst 1",
        "Description": "The user invokes dark energy to curse enemies from using items.",
        "Effect": "The target cannot use held items or have trainer items used on it for five turns."
    },
    "Fake Tears": {
        "Type": "Dark",
        "Availability": "2/Battle",
        "Attack Modifier": 2,
        "Kind": "Status",
        "Range": 6,
        "Description": "The user feigns whimpers and cries.",
        "Effect": "The target's Sp.DEF is reduced by -2 CS."
    },
    "Feint Attack": {
        "Type": "Dark",
        "Availability": "At-Will",
        "Attack Modifier": null,
        "Damage": "4d8",
        "Kind": "Physical",
        "Range": "Melee",
        "Description": "The user psyches out the target and lands a quick strike.",
        "Effect": "Feint Attack cannot miss."
    },
    "Flatter": {
        "Type": "Dark",
        "Availability": "At-Will",
        "Attack Modifier": 2,
        "Kind": "Status",
        "Range": 6,
        "Description": "The user uses false praise and flattery to confuse the target.",
        "Effect": "Raises the target's Sp.Atk by +1 CS. The target is Confused."
    },
    "Fling": {
        "Type": "Dark",
        "Availability": "At-Will",
        "Attack Modifier": 2,
        "Damage": "See Effect",
        "Kind": "Physical",
        "Range": "6, Fling",
        "Description": "The user hurls its held item with startling force.",
        "Effect": "The user throws its held item. The damage tier is dependent on the item thrown, see Appendix A."
    },
    "Foul Play": {
        "Type": "Dark",
        "Availability": "2/Battle",
        "Attack Modifier": 2,
        "Damage": "4d10x2",
        "Kind": "Physical",
        "Range": "Melee",
        "Description": "The user manipulates the target into striking itself.",
        "Effect": "Deal damage using the target's Attack stat instead of the user's."
    },
    "Hone Claws": {
        "Type": "Dark",
        "Availability": "At-Will",
        "Attack Modifier": null,
        "Kind": "Status",
        "Range": "Self",
        "Description": "The user sharpens its claws until they have razor edges.",
        "Effect": "The user gains +2 to attack rolls for the rest of the battle and gains +1 ATK CS."
    },
    "Knock Off": {
        "Type": "Dark",
        "Availability": "1/Battle",
        "Attack Modifier": 2,
        "Damage": "4d12",
        "Kind": "Physical",
        "Range": "Melee",
        "Description": "The user violently smashes whatever the target is holding, knocking it to the ground.",
        "Effect": "The target drops any held item or weapon it is holding. Consumables knocked off this way are destroyed."
    },
    "Memento": {
        "Type": "Dark",
        "Availability": "1/Battle",
        "Attack Modifier": null,
        "Kind": "Status",
        "Range": 8,
        "Description": "The user sacrifices the rest of its strength to curse the target.",
        "Effect": "The user faints. The target has each of its stats reduced by -2 CS."
    },
    "Nasty Plot": {
        "Type": "Dark",
        "Availability": "2/Battle",
        "Attack Modifier": null,
        "Kind": "Status",
        "Range": "Self",
        "Description": "The user allows violent, sinister thoughts to fill its mind.",
        "Effect": "The user increases Sp.ATK by +2 CS."
    },
    "Night Daze": {
        "Type": "Dark",
        "Availability": "2/Battle",
        "Attack Modifier": 1,
        "Damage": "3d12x2",
        "Kind": "Special",
        "Range": 4,
        "Description": "The user unleashes a pitch-black shockwave that surrounds the target.",
        "Effect": "The target receives -2 on attack rolls on 13+."
    },
    "Night Slash": {
        "Type": "Dark",
        "Availability": "2/Battle",
        "Attack Modifier": 2,
        "Damage": "4d12",
        "Kind": "Physical",
        "Range": "Melee, Rush, Line 3",
        "Description": "Seeing a prime opportunity, the user dashes past the target slashing as it goes.",
        "Effect": "When used, it targets all squares in a line 3. The user moves to the square at the end of that line. Night Slash is a Critical Hit on 18+."
    },
    "Parting Shot": {
        "Type": "Dark",
        "Availability": "At-Will",
        "Attack Modifier": 2,
        "Kind": "Status",
        "Range": 6,
        "Description": "The user fires a parting shot at the target before switching out.",
        "Effect": "If the attack hits, the target has its ATK and Sp.ATK reduced by -1 CS. The user is immediately switched out, and an allied Pokémon can be deployed as a free action."
    },
    "Payback": {
        "Type": "Dark",
        "Availability": "2/Battle",
        "Attack Modifier": 2,
        "Damage": "2d12",
        "Kind": "Physical",
        "Range": "Melee",
        "Description": "The user lashes out in a vengeful fury.",
        "Effect": "If the user has been hit this turn or last by the target, Payback has a Damage tier of 10 (4d10x2) instead."
    },
    "Punishment": {
        "Type": "Dark",
        "Availability": "2/Battle",
        "Attack Modifier": 2,
        "Damage": "4d8",
        "Kind": "Physical",
        "Range": "Melee",
        "Description": "The user enacts retribution against the target for its built-up strength.",
        "Effect": "Punishment's damage tier is raised by +1 for each bonus CS the target has."
    },
    "Pursuit": {
        "Type": "Dark",
        "Availability": "At-Will",
        "Attack Modifier": 2,
        "Damage": "2d8",
        "Kind": "Physical",
        "Range": "Melee",
        "Description": "The user aggressively strikes the target in its exposed back.",
        "Effect": "If the foe is fleeing or being switched out, Pursuit may be used as an Interrupt. When used as an Interrupt, Pursuit allows the user to move its movement speed towards the target and has a Damage tier of 8 (3d10x2)."
    },
    "Quash": {
        "Type": "Dark",
        "Availability": "At-Will",
        "Attack Modifier": 2,
        "Kind": "Status",
        "Range": 10,
        "Description": "The user interferes with the target and ruins its focus.",
        "Effect": "The target has its bonus to initiative reduced to 0."
    },
    "Snarl": {
        "Type": "Dark",
        "Availability": "2/Battle",
        "Attack Modifier": 1,
        "Damage": "4d8",
        "Kind": "Special",
        "Range": "Burst 2, Sonic",
        "Description": "A deep guttural growl fills the user's chest, slamming those near it.",
        "Effect": "Targets reduce their Sp.ATK by -1 CS."
    },
    "Snatch": {
        "Type": "Dark",
        "Availability": "2/Battle",
        "Attack Modifier": null,
        "Kind": "Status",
        "Range": "6, Interrupt",
        "Description": "The user wields dark power to reap the benefits of other's efforts.",
        "Effect": "Snatch can only be used if a creature within 6 squares uses a Buff or combat stage enhancing move. The user gains the benefits of the move instead."
    },
    "Sucker Punch": {
        "Type": "Dark",
        "Availability": "At-Will",
        "Attack Modifier": 2,
        "Damage": "3d10x2",
        "Kind": "Physical",
        "Range": "Melee",
        "Description": "The user attacks with a cheap shot on an unprepared enemy.",
        "Effect": "If an enemy within 6 squares targets the user with a damaging attack, Sucker Punch may be used as an Interrupt, allowing the user to move into melee and strike the attacker."
    },
    "Switcheroo": {
        "Type": "Dark",
        "Availability": "1/Battle",
        "Attack Modifier": 2,
        "Kind": "Status",
        "Range": "Melee",
        "Description": "The user distracts the target and switches held items with sleight of hand.",
        "Effect": "The target and the user switch held items. Special: This Pokémon gains +4 on stealth checks to pickpocket."
    },
    "Taunt": {
        "Type": "Dark",
        "Availability": "2/Battle",
        "Attack Modifier": 1,
        "Kind": "Status",
        "Range": 6,
        "Description": "The user enrages the target through mockery.",
        "Effect": "The target must use damaging attack moves each turn (Mind save ends). The target has -3 on this mind save."
    },
    "Thief": {
        "Type": "Dark",
        "Availability": "At-Will",
        "Attack Modifier": 2,
        "Damage": "4d8",
        "Kind": "Physical",
        "Range": "Melee",
        "Description": "The Pokémon mugs the target.",
        "Effect": "The user steals the target's held item."
    },
    "Topsy-Turvy": {
        "Type": "Dark",
        "Availability": "2/Battle",
        "Attack Modifier": 0,
        "Kind": "Status",
        "Range": 6,
        "Description": "Dark forces surround the target and reverse its changes.",
        "Effect": "Any changes to combat stages on the target are reversed (positive steps become negative, negative steps become positive)."
    },
    "Torment": {
        "Type": "Dark",
        "Availability": "2/Battle",
        "Attack Modifier": 2,
        "Kind": "Status",
        "Range": 10,
        "Description": "The user plagues the target so it must try something new.",
        "Effect": "The target cannot use the move it used last (Mind save ends). The target gets -4 on this mind save."
    },

    ////////////   DRAGON    //////////////
    "Draco Meteor": {
        "Type": "Dragon",
        "Availability": "1/Battle",
        "Attack Modifier": 0,
        "Damage": "3d12x3",
        "Kind": "Special",
        "Range": "8, Blast 3",
        "Description": "Comets are summoned from the sky and explode around the target.",
        "Effect": "The user reduces its Sp.ATK by -2 CS."
    },
    "Dragon Breath": {
        "Type": "Dragon",
        "Availability": "2/Battle",
        "Attack Modifier": 2,
        "Damage": "4d8",
        "Kind": "Special",
        "Range": "Cone 3",
        "Description": "The user releases a gust of draconic power.",
        "Effect": "The target is paralyzed on an attack roll of 16+."
    },
    "Dragon Claw": {
        "Type": "Dragon",
        "Availability": "At-Will",
        "Attack Modifier": 2,
        "Damage": "3d10x2",
        "Kind": "Physical",
        "Range": "Melee",
        "Description": "The user slashes the foe with sharp claws.",
        "Effect": "None"
    },
    "Dragon Dance": {
        "Type": "Dragon",
        "Availability": "2/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Self",
        "Description": "The user roars as it looks towards the sky.",
        "Effect": "The user's ATK and SPD are raised +1 CS."
    },
    "Dragon Pulse": {
        "Type": "Dragon",
        "Availability": "1/Battle",
        "Attack Modifier": 2,
        "Damage": "3d12x2",
        "Kind": "Special",
        "Range": "Burst 3",
        "Description": "The user unleashes a shockwave of draconic energy around it.",
        "Effect": "None"
    },
    "Dragon Rage": {
        "Type": "Dragon",
        "Availability": "2/Battle",
        "Attack Modifier": 2,
        "Damage": "None",
        "Kind": "Special",
        "Range": 4,
        "Description": "The target is hit with a precise bolt of energy.",
        "Effect": "Dragon Rage deals 40 damage."
    },
    "Dragon Rush": {
        "Type": "Dragon",
        "Availability": "At-Will",
        "Attack Modifier": 0,
        "Damage": "4d10x2",
        "Kind": "Physical",
        "Range": "Melee, Rush, Knockback",
        "Description": "The user charges fiercely at the target.",
        "Effect": "The target flinches on 17+."
    },
    "Dragon Tail": {
        "Type": "Dragon",
        "Availability": "1/Battle",
        "Attack Modifier": 1,
        "Damage": "4d8",
        "Kind": "Physical",
        "Range": "Melee, Knockback",
        "Description": "The target is slammed by the user's powerful tail.",
        "Effect": "The user receives +3 on its knockback roll. If the target is knocked back into its trainer, it is forced back into its Poké Ball, and another Pokémon can be sent out."
    },
    "Dual Chop": {
        "Type": "Dragon",
        "Availability": "2/Battle",
        "Attack Modifier": 1,
        "Damage": "2d12",
        "Kind": "Physical",
        "Range": "Melee, Double Strike",
        "Description": "The user attacks twice in rapid succession.",
        "Effect": "None"
    },
    "Outrage": {
        "Type": "Dragon",
        "Availability": "2/Battle",
        "Attack Modifier": 1,
        "Damage": "5d10x2",
        "Kind": "Physical",
        "Range": "Burst 1",
        "Description": "The user goes on a rampage.",
        "Effect": "The user must make an attack using this move's modifier, damage, and range again next turn after moving to ensure it affects as many enemy targets as possible. After the second use, roll d20. On 10+, the user must make this attack once more next turn. If the user misses all valid targets after any of these attacks, Outrage ends."
    },
    "Roar of Time": {
        "Type": "Dragon",
        "Availability": "2/Day",
        "Attack Modifier": 0,
        "Damage": "5d8x3",
        "Kind": "Special",
        "Range": "Line 6",
        "Description": "The user emits a roar that tears through time.",
        "Effect": "The line is two squares wide. All legal targets are slowed (Mind save ends). The user must spend its next action resting."
    },
    "Spacial Rend": {
        "Type": "Dragon",
        "Availability": "2/Day",
        "Attack Modifier": 1,
        "Damage": "4d10x2",
        "Kind": "Special",
        "Range": 10,
        "Description": "The user rends the target and space with it.",
        "Effect": "Spacial Rend is a critical hit on 15+."
    },
    "Twister": {
        "Type": "Dragon",
        "Availability": "At-Will",
        "Attack Modifier": 2,
        "Damage": "2d8",
        "Kind": "Special",
        "Range": "8, Ranged Blast 3",
        "Description": "The user whips up a vicious tornado that tears at everything in the area.",
        "Effect": "The Blast 3 area stretches into a column 12 squares high. Targets flinch on 16+."
    },
    
    /////////////  ELECTRIC  ////////////
    "Bolt Strike": {
        "Type": "Electric",
        "Availability": "Daily",
        "Attack Modifier": -1,
        "Damage": "3d12x3",
        "Kind": "Physical",
        "Range": "Melee, Rush, Line 6",
        "Description": "The user surrounds itself with electricity and charges the enemy.",
        "Effect": "When this move is used it targets all squares in a line 6. The user moves to the square at the end of that line. Targets are paralyzed on 17+."
    },
    "Charge": {
        "Type": "Electric",
        "Availability": "2/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Self",
        "Description": "The user gathers electricity inside its body.",
        "Effect": "The damage tier of any Electric-type move used by the user next turn is doubled. The user raises its Sp.DEF by +1."
    },
    "Charge Beam": {
        "Type": "Electric",
        "Availability": "At-Will",
        "Attack Modifier": 0,
        "Damage": "2d12",
        "Kind": "Special",
        "Range": 6,
        "Description": "The user fires a concentrated bundle of electricity.",
        "Effect": "The user raises its Sp.ATK by +1 CS on an attack roll of 6+."
    },
    "Discharge": {
        "Type": "Electric",
        "Availability": "1/Battle",
        "Attack Modifier": "+2",
        "Damage": "3d10x2",
        "Kind": "Special",
        "Range": "Burst 2",
        "Description": "The user unleashes a massive flare of electricity around it.",
        "Effect": "Targets are paralyzed on 15+."
    },
    "Eerie Impulse": {
        "Type": "Electric",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Kind": "Status",
        "Range": 6,
        "Description": "The user generates a field of strange static around the target.",
        "Effect": "Lower the Sp.ATK of the target by -2 CS. Grants Luminous."
    },
    "Electric Terrain": {
        "Type": "Electric",
        "Availability": "2/Day",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Burst 10",
        "Description": "The user electrifies the ground.",
        "Effect": "The area becomes Electric Terrain for 5 turns. While in Electric Terrain creatures cannot fall asleep. Electric-type moves increase their damage tier by 50% (rounded down)."
    },
    "Electrify": {
        "Type": "Electric",
        "Availability": "2/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": 6,
        "Description": "The user energizes the target's next move with electricity.",
        "Effect": "All attacks made by the target become Electric-type until the start of the user's next turn. If the target gets hit by an Electric-type move before it makes its attack, it does not need to spend a turn charging that attack even if it usually requires it."
    },
    "Electro Ball": {
        "Type": "Electric",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "4d8",
        "Kind": "Special",
        "Range": 8,
        "Description": "The user hurls an electric orb at the target that crackles with electricity.",
        "Effect": "Compare the Speed Stats of the user and the Target. If the target's speed is equal to or greater than the user's then Electro Ball deals 4d8 damage. If the target's speed is 50% to 99% of the user's speed, this move deals 3d10x2. If the target's speed is 30%-49% of the user's speed, this move deals 4d10x2. If the target's speed is 0.1%-29% of the user's speed, it deals 3d12x3."
    },
    "Electroweb": {
        "Type": "Electric",
        "Availability": "2/Battle",
        "Attack Modifier": "+1",
        "Damage": "4d8",
        "Kind": "Special",
        "Range": "6, Blast 2",
        "Description": "The user flings a large electrified web over an area.",
        "Effect": "Targets reduce their SPD -1 CS."
    },
    "Fusion Bolt": {
        "Type": "Electric",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "4d10x2",
        "Kind": "Physical",
        "Range": 8,
        "Description": "The user calls down a giant thunderbolt of energy.",
        "Effect": "Fusion Bolt has its damage tier doubled if Fusion Flare was used this turn."
    },
    "Ion Deluge": {
        "Type": "Electric",
        "Availability": "1/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Burst 8, Priority",
        "Description": "All Normal-type moves in the area become Electric-type until the end of the user's next turn.",
        "Effect": "All Normal-type moves in the area become Electric-type until the end of the user's next turn."
    },
    "Magnet Rise": {
        "Type": "Electric",
        "Availability": "2/Day",
        "Attack Modifier": "+2",
        "Kind": "Status",
        "Range": "Self, Move Action",
        "Description": "The user levitates off the ground using electrically generated magnetism.",
        "Effect": "The user becomes immune to Ground-type attacks for five turns and floats 1 square off the ground. Grants Magnetic."
    },
    "Magnetic Flux": {
        "Type": "Electric",
        "Availability": "1/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Burst 6",
        "Description": "The user generates a magnetic field that enhances its allies.",
        "Effect": "All allies with Plus or Minus abilities gain +1 DEF and Sp.DEF CS."
    },
    "Nuzzle": {
        "Type": "Electric",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "1d12",
        "Kind": "Physical",
        "Range": "Melee",
        "Description": "The user attacks by nuzzling its electrified cheeks against the target.",
        "Effect": "The target is paralyzed."
    },
    "Parabolic Charge": {
        "Type": "Electric",
        "Availability": "1/Battle",
        "Attack Modifier": "0",
        "Damage": "2d12",
        "Kind": "Special",
        "Range": "Burst 1",
        "Description": "The user explodes electricity around it, absorbing energy from those it hits.",
        "Effect": "The user regains HP equal to half the damage dealt.",
        "Special": "Grants Generator"
    },
    "Shock Wave": {
        "Type": "Electric",
        "Availability": "At-Will",
        "Attack Modifier": "N/A",
        "Damage": "4d8",
        "Kind": "Special",
        "Range": "6",
        "Description": "The user strikes with a quick jolt of electricity.",
        "Effect": "Shock Wave cannot miss."
    },
    "Spark": {
        "Type": "Electric",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "4d8",
        "Kind": "Physical",
        "Range": "Melee",
        "Description": "The user tackles the target while electrically charged.",
        "Effect": "The target is paralyzed on 15+."
    },
    "Thunder": {
        "Type": "Electric",
        "Availability": "1/Battle",
        "Attack Modifier": "-3",
        "Damage": "4d12x2",
        "Kind": "Special",
        "Range": "10",
        "Description": "The user summons a wicked thunderbolt from the sky to drop on the target.",
        "Effect": "If it is raining, Thunder has a +2 attack modifier. The target is paralyzed on a roll of 15+."
    },
    "Thunder Fang": {
        "Type": "Electric",
        "Availability": "At-Will",
        "Attack Modifier": "+1",
        "Damage": "4d12",
        "Kind": "Physical",
        "Range": "Melee",
        "Description": "The user bites the target with electrically charged fangs.",
        "Effect": "The target flinches on 19+. Roll 1d20. On a roll of 17-18, the target is paralyzed."
    },
    "Thunder Punch": {
        "Type": "Electric",
        "Availability": "At-Will",
        "Attack Modifier": "+2",
        "Damage": "3d10x2",
        "Kind": "Physical",
        "Range": "Melee",
        "Description": "The user punches the target with a powerful electric punch.",
        "Effect": "The target is paralyzed on 19+."
    },
    "Thunder Shock": {
        "Type": "Electric",
        "Availability": "At-Will",
        "Attack Modifier": "+2",
        "Damage": "2d8",
        "Kind": "Special",
        "Range": "4",
        "Description": "The user sends a small bolt of electricity towards the target.",
        "Effect": "The target is paralyzed on 19+."
    },
    "Thunder Wave": {
        "Type": "Electric",
        "Availability": "2/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "6",
        "Description": "The user sends a wave of electricity that paralyzes the target.",
        "Effect": "The target is paralyzed. This attack cannot miss."
    },
    "Thunderbolt": {
        "Type": "Electric",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "3d12x2",
        "Kind": "Special",
        "Range": "4",
        "Description": "The user releases a powerful bolt of electricity at the target.",
        "Effect": "The target is paralyzed on 19+."
    },
    "Volt Switch": {
        "Type": "Electric",
        "Availability": "At-Will",
        "Attack Modifier": "+2",
        "Damage": "4d12",
        "Kind": "Special",
        "Range": "5",
        "Description": "The user strikes the target with electricity and switches out.",
        "Effect": "If the user hits the target, the user is immediately switched out and a new Pokémon can be deployed as a free action."
    },
    "Volt Tackle": {
        "Type": "Electric",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "5d10x2",
        "Kind": "Physical",
        "Range": "Melee, Rush",
        "Description": "The user charges at the target, electrifying itself.",
        "Effect": "The target is paralyzed on 19+. The user takes recoil damage equal to 1/3 of the damage it dealt."
    },
    "Wild Charge": {
        "Type": "Electric",
        "Availability": "At-Will",
        "Attack Modifier": "+2",
        "Damage": "3d12x2",
        "Kind": "Physical",
        "Range": "Melee, Rush, Line 3",
        "Description": "The user charges at the target with a wild electric charge.",
        "Effect": "When this move is used, it targets all squares in a line of 3. The user moves to the square at the end of that line. The user takes recoil damage equal to 1/4 of the damage it dealt to the last target hit."
    },
    "Zap Cannon": {
        "Type": "Electric",
        "Availability": "At-Will",
        "Attack Modifier": "-5",
        "Damage": "5d10x2",
        "Kind": "Special",
        "Range": "12",
        "Description": "The user fires a massive electric cannon at the target.",
        "Effect": "The target is paralyzed even if the attack roll misses."
    },

    ////////////////   FAIRY   /////////////////
    "Aromatic Mist": {
        "Type": "Fairy",
        "Availability": "2/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Burst 1",
        "Description": "The user releases a mist that boosts the defenses of allies.",
        "Effect": "All targets have their Sp.DEF raised by +1 CS."
    },
    "Baby-Doll Eyes": {
        "Type": "Fairy",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Kind": "Status",
        "Range": "5, Priority",
        "Description": "The user gives a pleading look, lowering the target's attack.",
        "Effect": "The target's ATK is lowered by 1 CS."
    },
    "Charm": {
        "Type": "Fairy",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Kind": "Status",
        "Range": "6",
        "Description": "The user charms the target, lowering its attack.",
        "Effect": "The target's ATK is lowered by -2 CS."
    },
    "Crafty Shield": {
        "Type": "Fairy",
        "Availability": "1/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "6, Interrupt",
        "Description": "The user intercepts a status move for its allies.",
        "Effect": "Crafty Shield may be used from 6 squares away. The user can intercept status moves for up to 3 allies within range. The user and protected allies suffer no effects from the intercepted attack."
    },
    "Dazzling Gleam": {
        "Type": "Fairy",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "3d10x2",
        "Kind": "Special",
        "Range": "Cone 3",
        "Description": "The user releases a dazzling burst of light to damage opponents.",
        "Effect": "None"
    },
    "Disarming Voice": {
        "Type": "Fairy",
        "Availability": "At-Will",
        "Attack Modifier": "N/A",
        "Damage": "2d8",
        "Kind": "Special",
        "Range": "Burst 1",
        "Description": "The user sings a disarming voice that strikes all enemies.",
        "Effect": "Disarming Voice cannot miss."
    },
    "Draining Kiss": {
        "Type": "Fairy",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "2d12",
        "Kind": "Special",
        "Range": "Melee",
        "Description": "The user kisses the target, draining its energy.",
        "Effect": "The user regains HP equal to 75% of the damage dealt."
    },
    "Fairy Lock": {
        "Type": "Fairy",
        "Availability": "1/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Burst 5",
        "Description": "The user locks all Pokémon in the area in place.",
        "Effect": "Until the end of the user's next turn, all Pokémon in the area are Trapped. The movement cost of all movement away from the user is doubled."
    },
    "Fairy Wind": {
        "Type": "Fairy",
        "Availability": "At-Will",
        "Attack Modifier": "+2",
        "Damage": "2d8",
        "Kind": "Special",
        "Range": "Line 3",
        "Description": "The user releases a gentle gust of wind infused with fairy energy.",
        "Effect": "None"
    },
    "Flower Shield": {
        "Type": "Fairy",
        "Availability": "1/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Burst 7",
        "Description": "The user boosts the defenses of Grass-type Pokémon around them.",
        "Effect": "Grass-type Pokémon in the area raise their DEF by +1 CS."
    },
    "Geomancy": {
        "Type": "Fairy",
        "Availability": "1/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Self",
        "Description": "The user gathers energy to prepare for a powerful next turn.",
        "Effect": "The user spends this turn charging energy. On its next turn, it raises its Sp.ATK, Sp.DEF, and SPD by +2 CS."
    },
    "Misty Terrain": {
        "Type": "Fairy",
        "Availability": "2/Day",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Burst 10",
        "Description": "The user creates a mystical terrain that protects Pokémon from status conditions.",
        "Effect": "The area becomes Misty terrain for 5 turns. While in Misty Terrain, Pokémon cannot be afflicted with new status conditions. Dragon-type moves entering the area or starting within have their damage halved (after other damage calculations)."
    },
    "Moonblast": {
        "Type": "Fairy",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "4d10x2",
        "Kind": "Special",
        "Range": "6, Burst 1",
        "Description": "The user releases a powerful burst of moon energy.",
        "Effect": "The target's Sp.ATK is reduced by -1 CS on a roll of 15+."
    },
    "Moonlight": {
        "Type": "Fairy",
        "Availability": "2/Day",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Self",
        "Description": "The user absorbs light to heal itself.",
        "Effect": "The user regains 50% HP in normal, clear weather. It regains 25% HP in rain, hail, or a sandstorm. It regains 75% HP in harsh sunlight or clear moonlight."
    },
    "Play Rough": {
        "Type": "Fairy",
        "Availability": "2/Battle",
        "Attack Modifier": "0",
        "Damage": "3d12x2",
        "Kind": "Physical",
        "Range": "Melee",
        "Description": "The user playfully attacks with a rough, fairy-powered move.",
        "Effect": "The target's ATK is reduced by -1 CS on a roll of 19+."
    },
    "Sweet Kiss": {
        "Type": "Fairy",
        "Availability": "1/Battle",
        "Attack Modifier": "0",
        "Damage": "N/A",
        "Kind": "Status",
        "Range": "Melee",
        "Description": "The user kisses the target, leaving them confused.",
        "Effect": "The target becomes confused (Mind save ends)."
    },

    ////////////   FIGHTING   ///////////////
    "Arm Thrust": {
        "Type": "Fighting",
        "Availability": "2/Battle",
        "Attack Modifier": "0",
        "Damage": "1d12",
        "Kind": "Physical",
        "Range": "Melee, Multistrike",
        "Description": "The user performs a quick series of punches.",
        "Effect": "None"
    },
    "Aura Sphere": {
        "Type": "Fighting",
        "Availability": "2/Battle",
        "Attack Modifier": "N/A",
        "Damage": "3d10x2",
        "Kind": "Special",
        "Range": "5",
        "Description": "The user fires a sphere of energy that cannot miss.",
        "Effect": "Aura Sphere cannot miss."
    },
    "Brick Break": {
        "Type": "Fighting",
        "Availability": "At-Will",
        "Attack Modifier": "+2",
        "Damage": "3d10x2",
        "Kind": "Physical",
        "Range": "Melee",
        "Description": "The user strikes the target with a powerful punch that breaks barriers.",
        "Effect": "Brick Break destroys any hazards from Light Screen or Reflect in a Burst 1 around the user. This move ignores 20 defense of objects."
    },
    "Bulk Up": {
        "Type": "Fighting",
        "Availability": "2/Battle",
        "Attack Modifier": "N/A",
        "Damage": "N/A",
        "Kind": "Status",
        "Range": "Self",
        "Description": "The user gains increased strength and endurance.",
        "Effect": "Increase the user's ATK and DEF by +1 CS."
    },
    "Circle Throw": {
        "Type": "Fighting",
        "Availability": "1/Battle",
        "Attack Modifier": "0",
        "Damage": "4d8",
        "Kind": "Physical",
        "Range": "Melee, Knockback",
        "Description": "The user throws the target in any direction of their choosing.",
        "Effect": "The user knocks the target back in any direction it chooses. If the target lands on its trainer it is forced to return to its Pokéball and another random Pokémon is drawn out. The user gets +2 on this knockback check."
    },
    "Close Combat": {
        "Type": "Fighting",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "5d10x2",
        "Kind": "Physical",
        "Range": "Melee",
        "Description": "The user attacks with intense close-quarters combat, sacrificing defense for power.",
        "Effect": "Reduce the user's DEF and Sp.DEF by -1 CS."
    },
    "Counter": {
        "Type": "Fighting",
        "Availability": "2/Day",
        "Attack Modifier": "N/A",
        "Damage": "N/A",
        "Kind": "Physical",
        "Range": "Any, Interrupt",
        "Description": "The user retaliates with double the damage after being hit by a physical move.",
        "Effect": "The user can activate this move after being hit by a physical move. The user deals twice as much damage as it just received."
    },
    "Cross Chop": {
        "Type": "Fighting",
        "Availability": "1/Battle",
        "Attack Modifier": "0",
        "Damage": "4d10x2",
        "Kind": "Physical",
        "Range": "Melee",
        "Description": "The user performs a powerful and precise chopping attack.",
        "Effect": "This move is a critical hit on 16+."
    },
    "Detect": {
        "Type": "Fighting",
        "Availability": "1/Battle",
        "Attack Modifier": "N/A",
        "Damage": "N/A",
        "Kind": "Status",
        "Range": "Self, Interrupt",
        "Description": "The user prepares to evade incoming attacks.",
        "Effect": "If the user is hit by a move, the user may use Detect. The attack misses and has no effect on the user."
    },
    "Double Kick": {
        "Type": "Fighting",
        "Availability": "At-Will",
        "Attack Modifier": "+1",
        "Damage": "2d6",
        "Kind": "Physical",
        "Range": "Melee, Double Strike",
        "Description": "The user delivers two rapid kicks in quick succession.",
        "Effect": "None"
    },
    "Drain Punch": {
        "Type": "Fighting",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "3d10x2",
        "Kind": "Physical",
        "Range": "Melee",
        "Description": "The user delivers a punch that heals it for part of the damage dealt.",
        "Effect": "The user regains HP equal to 50% of the damage dealt."
    },
    "Dynamic Punch": {
        "Type": "Fighting",
        "Availability": "At-Will",
        "Attack Modifier": "-5",
        "Damage": "4d10x2",
        "Kind": "Physical",
        "Range": "Melee",
        "Description": "The user delivers a powerful punch that can confuse the target.",
        "Effect": "The target is confused (Body save ends)."
    },
    "Final Gambit": {
        "Type": "Fighting",
        "Availability": "1/Battle",
        "Attack Modifier": "+2",
        "Damage": "N/A",
        "Kind": "Physical",
        "Range": "Melee",
        "Description": "The user sacrifices itself to deal massive damage to the target.",
        "Effect": "The user is reduced to 0 HP. The target receives damage equal to the amount of HP lost by the user when reduced to 0."
    },
    "Flying Press": {
        "Type": "Fighting",
        "Availability": "At-Will",
        "Attack Modifier": "+1",
        "Damage": "3d10x2",
        "Kind": "Physical",
        "Range": "Melee, Rush",
        "Description": "The user delivers a combined Flying-type and Fighting-type attack.",
        "Effect": "Half of the damage dealt is Flying-type, the other half is Fighting-type."
    },
    "Focus Blast": {
        "Type": "Fighting",
        "Availability": "1/Day",
        "Attack Modifier": "-3",
        "Damage": "5d10x2",
        "Kind": "Special",
        "Range": "Line 6",
        "Description": "The user releases a blast of energy that lowers the target's defense.",
        "Effect": "The target has its Sp.DEF reduced by -1 CS on 19+."
    },
    "Focus Punch": {
        "Type": "Fighting",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "8d8x2",
        "Kind": "Physical",
        "Range": "Melee, Priority",
        "Description": "The user focuses intensely before striking with an extremely powerful punch.",
        "Effect": "At the beginning of a round (before any turns take place), the user can use Focus Punch. The user spends the rest of the turn gathering focus and energy. After all other combatants have taken their turn, the user can move its speed and make an attack using Focus Punch's attack modifier, damage, and range. If the user is dealt damage before it can make this attack, it loses focus and the attack fails."
    },
    "Force Palm": {
        "Type": "Fighting",
        "Availability": "At-Will",
        "Attack Modifier": "+2",
        "Damage": "4d8",
        "Kind": "Physical",
        "Range": "Melee",
        "Description": "The user delivers a forceful palm strike, potentially paralyzing the target.",
        "Effect": "Force Palm paralyzes the target on 18+."
    },
    "Hammer Arm": {
        "Type": "Fighting",
        "Availability": "2/Battle",
        "Attack Modifier": "+1",
        "Damage": "4d10x2",
        "Kind": "Physical",
        "Range": "Melee",
        "Description": "The user swings their arm powerfully to deliver a crushing blow.",
        "Effect": "The user reduces their SPD by -1 CS."
    },
    "High Jump Kick": {
        "Type": "Fighting",
        "Availability": "2/Battle",
        "Attack Modifier": "+1",
        "Damage": "3d12x3",
        "Kind": "Physical",
        "Range": "Melee, Rush",
        "Description": "The user leaps high into the air and delivers a powerful kick.",
        "Effect": "The user takes 50% of its max HP in damage if it misses the target."
    },
    "Jump Kick": {
        "Type": "Fighting",
        "Availability": "At-Will",
        "Attack Modifier": "+2",
        "Damage": "4d10x2",
        "Kind": "Physical",
        "Range": "Melee, Rush",
        "Description": "The user jumps and kicks with great force.",
        "Effect": "The user takes 50% of its max HP in damage if it misses the target."
    },
    "Karate Chop": {
        "Type": "Fighting",
        "Availability": "At-Will",
        "Attack Modifier": "+2",
        "Damage": "2d12",
        "Kind": "Physical",
        "Range": "Melee",
        "Description": "The user strikes with a powerful chop.",
        "Effect": "This attack is a critical hit on 17+."
    },
    "Low Kick": {
        "Type": "Fighting",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "See Effect",
        "Kind": "Physical",
        "Range": "Melee, Weight Class",
        "Description": "The user targets the opponent's legs with a low, sweeping kick.",
        "Effect": "Low Kick has a damage tier of 3 against targets weighing between 0.1-10 kg. It has a damage tier of 5 against targets weighing 10.1-25 kg. Every 15 kg range increases the damage base by 2 (for a max damage tier of 12 against targets weighing 200 kg or more)."
    },
    "Low Sweep": {
        "Type": "Fighting",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "4d12",
        "Kind": "Physical",
        "Range": "Melee",
        "Description": "The user sweeps the target's legs to trip them.",
        "Effect": "The target reduces its SPD by -1 CS."
    },
    "Mach Punch": {
        "Type": "Fighting",
        "Availability": "At-Will",
        "Attack Modifier": "+2",
        "Damage": "2d8",
        "Kind": "Physical",
        "Range": "Melee, Priority",
        "Description": "The user strikes quickly with a fast, powerful punch.",
        "Effect": "None."
    },
    "Mat Block": {
        "Type": "Fighting",
        "Availability": "Daily",
        "Attack Modifier": "N/A",
        "Damage": "N/A",
        "Kind": "Status",
        "Range": "Burst 1",
        "Description": "The user intercepts an attack for an ally and protects all allies in range.",
        "Effect": "If the user intercepts an attack for an ally, Mat Block may be used as a free action to allow the user to intercept the attack for all allies in range. The user and protected allies suffer no effects of the attack. You may only use Mat Block during the first round the user is deployed (redeploying allows another use of Mat Block)."
    },
    "Power-Up Punch": {
        "Type": "Fighting",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "2d8",
        "Kind": "Physical",
        "Range": "Melee",
        "Description": "The user delivers a punch that powers up their own strength.",
        "Effect": "The user increases its ATK by +1 CS."
    },
    "Quick Guard": {
        "Type": "Fighting",
        "Availability": "1/Battle",
        "Attack Modifier": "N/A",
        "Damage": "N/A",
        "Kind": "Status",
        "Range": "Interrupt",
        "Description": "The user intercepts a priority attack for an ally.",
        "Effect": "If the user intercepts a priority attack for an ally, Quick Guard may be used as an interrupt to allow the user to intercept the attack for an additional ally. The additional ally must be adjacent to the first. The user and protected allies suffer no effects of the attack."
    },
    "Revenge": {
        "Type": "Fighting",
        "Availability": "1/Battle",
        "Attack Modifier": "+2",
        "Damage": "4d8",
        "Kind": "Physical",
        "Range": "Melee",
        "Description": "The user strikes back with greater force if the target has already dealt damage to it.",
        "Effect": "This attack has its damage tier increased from 6 to 10 (4d10x2) if it hits a target that dealt damage to the user this round."
    },
    "Reversal": {
        "Type": "Fighting",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "2d6",
        "Kind": "Physical",
        "Range": "Melee",
        "Description": "The user attacks with a powerful reversal, gaining power the lower their HP is.",
        "Effect": "Reversal gains +2 damage tiers (2d12) if the user is below 70% max HP. It gains +4 damage tiers (4d12) if it is below 40% max HP. It gains +6 damage tiers (3d12x2) if the user is below 10% max HP. It gains +8 damage tiers (4d12x2) if the user is below 5% max HP."
    },
    "Rock Smash": {
        "Type": "Fighting",
        "Availability": "At-Will",
        "Attack Modifier": "+2",
        "Damage": "2d8",
        "Kind": "Physical",
        "Range": "Melee",
        "Description": "The user smashes rocks with a powerful blow, potentially lowering the target's defense.",
        "Effect": "The target reduces its DEF by -1 CS on 11+. This attack ignores 35 defense of objects."
    },
    "Rolling Kick": {
        "Type": "Fighting",
        "Availability": "At-Will",
        "Attack Modifier": "0",
        "Damage": "4d8",
        "Kind": "Physical",
        "Range": "Melee",
        "Description": "The user performs a rolling kick that may cause the target to flinch.",
        "Effect": "The target flinches on 15+."
    },
    "Sacred Sword": {
        "Type": "Fighting",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "3d10x2",
        "Kind": "Physical",
        "Range": "Melee",
        "Description": "The user strikes with a powerful sword, ignoring any changes to the target's defenses or evasions.",
        "Effect": "The user ignores any changes to the target's DEF CS or any bonus to evasion from moves or abilities."
    },
    "Secret Sword": {
        "Type": "Fighting",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "3d10x2",
        "Kind": "Special",
        "Range": "Melee",
        "Description": "The user strikes with a special sword attack, using its Defense stat for damage calculation instead of Special Defense.",
        "Effect": "The target uses its Defense stat when calculating damage, not its Sp.Defense stat."
    },
    "Seismic Toss": {
        "Type": "Fighting",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "N/A",
        "Kind": "Status",
        "Range": "Melee",
        "Description": "The user throws the target and deals damage based on its level.",
        "Effect": "The target loses Hit Points equal to the level of Seismic Toss's user x 5."
    },
    "Sky Uppercut": {
        "Type": "Fighting",
        "Availability": "At-Will",
        "Attack Modifier": "0",
        "Damage": "3d12x2",
        "Kind": "Physical",
        "Range": "Melee",
        "Description": "The user delivers an uppercut that can target enemies even in midair.",
        "Effect": "The user can target enemies up to 10 squares in the air."
    },
    "Storm Throw": {
        "Type": "Fighting",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "4d8",
        "Kind": "Physical",
        "Range": "Melee",
        "Description": "The user strikes with a storm-like throw that always lands a critical hit.",
        "Effect": "Storm Throw is always a critical hit."
    },
    "Submission": {
        "Type": "Fighting",
        "Availability": "At-Will",
        "Attack Modifier": "-2",
        "Damage": "3d10x2",
        "Kind": "Physical",
        "Range": "Melee",
        "Description": "The user attempts to submit the target in a powerful grappling move, but takes recoil damage.",
        "Effect": "The user takes recoil damage equal to 1/4 of the damage it dealt. The user must use this attack as the action to initiate a grab."
    },
    "Superpower": {
        "Type": "Fighting",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "5d10x2",
        "Kind": "Physical",
        "Range": "Melee",
        "Description": "The user attacks with overwhelming power, but sacrifices some of its own strength.",
        "Effect": "The user reduces its ATK and DEF by -1 CS."
    },
    "Triple Kick": {
        "Type": "Fighting",
        "Availability": "At-Will",
        "Attack Modifier": "+1",
        "Damage": "1d10",
        "Kind": "Physical",
        "Range": "Melee, Doublestrike",
        "Description": "The user kicks the target three times in rapid succession, with increasing power on each hit.",
        "Effect": "Triple Kick follows the rules for Doublestrike moves, except the user can make three attacks. The 2nd kick that hits deals 2d8. The third kick that hits deals 4d8."
    },
    "Vacuum Wave": {
        "Type": "Fighting",
        "Availability": "At-Will",
        "Attack Modifier": "+2",
        "Damage": "2d8",
        "Kind": "Special",
        "Range": "4, Priority",
        "Description": "The user strikes first with a rapid vacuum wave of energy.",
        "Effect": "None."
    },
    "Vital Throw": {
        "Type": "Fighting",
        "Availability": "2/Battle",
        "Attack Modifier": "N/A",
        "Damage": "4d12",
        "Kind": "Physical",
        "Range": "Melee, Knockback",
        "Description": "The user throws the target with great force, but can only use this move if they are going last in the round.",
        "Effect": "This attack can only be used if the user is going last in a round. The user gains +2 on the knockback check."
    },
    "Wake-Up Slap": {
        "Type": "Fighting",
        "Availability": "1/Battle",
        "Attack Modifier": "+2",
        "Damage": "4d8",
        "Kind": "Physical",
        "Range": "Melee",
        "Description": "The user slaps the target awake, dealing increased damage if the target is asleep.",
        "Effect": "If the target is asleep, double the damage tier of Wake-Up Slap (to 5d10x2). The target wakes up."
    },

    /////////////   FIRE   /////////////
    "Blast Burn": {
        "Type": "Fire",
        "Availability": "2/Day",
        "Attack Modifier": "0",
        "Damage": "5d8x3",
        "Kind": "Special",
        "Range": "5, Blast 2",
        "Description": "The user releases an enormous burst of fire, sacrificing their next set of actions.",
        "Effect": "This attack causes the user to lose its next set of actions."
    },
    "Blaze Kick": {
        "Type": "Fire",
        "Availability": "2/Battle",
        "Attack Modifier": "0",
        "Damage": "3d10x2",
        "Kind": "Physical",
        "Range": "Melee",
        "Description": "The user kicks the target with fiery force, potentially burning the target.",
        "Effect": "Blaze Kick is a critical hit on 18+. Roll d20. On a roll of 19+ the target is burned."
    },
    "Blue Flare": {
        "Type": "Fire",
        "Availability": "2/Battle",
        "Attack Modifier": "-1",
        "Damage": "3d12x3",
        "Kind": "Special",
        "Range": "8",
        "Description": "The user releases a powerful blue flame attack with a chance to burn the target.",
        "Effect": "The target is burned on 17+."
    },
    "Ember": {
        "Type": "Fire",
        "Availability": "At-Will",
        "Attack Modifier": "+2",
        "Damage": "2d8",
        "Kind": "Special",
        "Range": "4",
        "Description": "The user shoots a small flame at the target, potentially burning it.",
        "Effect": "The target is burned on 18+. Special: Grants Firestarter."
    },
    "Eruption": {
        "Type": "Fire",
        "Availability": "Daily",
        "Attack Modifier": "0",
        "Damage": "5d8x3",
        "Kind": "Special",
        "Range": "6, Burst 3",
        "Description": "The user releases a massive eruption of fire, with reduced power depending on the user's HP.",
        "Effect": "The damage tier of this attack is reduced by the percentage of HP the user is missing, rounded down."
    },
    "Fiery Dance": {
        "Type": "Fire",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "3d10x2",
        "Kind": "Special",
        "Range": "Melee",
        "Description": "The user performs a fiery dance, increasing their Sp.ATK with each successful hit.",
        "Effect": "The user increases its Sp.ATK by +1 CS on 11+."
    },
    "Fire Blast": {
        "Type": "Fire",
        "Availability": "1/Battle",
        "Attack Modifier": "0",
        "Damage": "4d12x2",
        "Kind": "Special",
        "Range": "6, Burst 2",
        "Description": "The user releases a powerful blast of fire, with a chance to burn the target.",
        "Effect": "The target is burned on 19+."
    },
    "Fire Fang": {
        "Type": "Fire",
        "Availability": "At-Will",
        "Attack Modifier": "+1",
        "Damage": "4d12",
        "Kind": "Physical",
        "Range": "Melee",
        "Description": "The user bites the target with fiery fangs, potentially causing it to flinch or burn.",
        "Effect": "The target flinches on 19+. Roll 1d20. On a roll of 19+ the target is burned."
    },
    "Fire Pledge": {
        "Type": "Fire",
        "Availability": "1/Battle",
        "Attack Modifier": "+2",
        "Damage": "3d10x2",
        "Kind": "Special",
        "Range": "6",
        "Description": "The user either attacks or makes a pledge to boost the effect of a Grass Pledge.",
        "Effect": "This move can be used either as an attack or a pledge. When used as an attack, it functions as above but if a Grass Pledge has been made this turn by an ally within 10 squares, Fire Pledge instead deals 5d8x3 damage and creates a burst 3 field of fire around the target. Entering this fire or starting a turn in it deals 1/8 Max HP damage to non-fire-types and the fire fades after four rounds. If used as a Pledge, it deals no damage and can boost the effects of a Water Pledge."
    },
    "Fire Lash": {
        "Type": "Fire",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "3d10x2",
        "Kind": "Physical",
        "Range": "3",
        "Description": "The user lashes the target with fiery tendrils, reducing its defense.",
        "Effect": "The target has its DEF reduced by -1 CS."
    },
    "Fire Punch": {
        "Type": "Fire",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "3d10x2",
        "Kind": "Physical",
        "Range": "Melee",
        "Description": "The user punches the target with fiery power, potentially burning it.",
        "Effect": "The target is burned on 19+."
    },
    "Fire Spin": {
        "Type": "Fire",
        "Availability": "2/Battle",
        "Attack Modifier": "0",
        "Damage": "2d8",
        "Kind": "Special",
        "Range": "5",
        "Description": "The target is engulfed in a whirling fire, taking damage each turn and unable to be recalled.",
        "Effect": "The target becomes engulfed in a whirling fire, taking 1/8 max HP at the end of each turn. While engulfed, the Pokémon cannot be recalled to its Poké Ball and has its movement speeds reduced by half. After taking the damage each turn, the target can make a reflex save to end these effects."
    },
    "Flame Burst": {
        "Type": "Fire",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "4d12",
        "Kind": "Special",
        "Range": "8, Burst 5",
        "Description": "The user releases a burst of flames that damages the targets in the area.",
        "Effect": "Targets in the burst do not take the move's rolled damage and instead lose 1/10 their max HP."
    },
    "Flame Charge": {
        "Type": "Fire",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "2d12",
        "Kind": "Physical",
        "Range": "Melee, Rush, Line 3",
        "Description": "The user charges forward in a burst of flames, boosting their speed.",
        "Effect": "When this move is used, it targets all squares in a line 3. The user moves to the square at the end of that line. The user gains +1 SPD CS."
    },
    "Flame Wheel": {
        "Type": "Fire",
        "Availability": "At-Will",
        "Attack Modifier": "+2",
        "Damage": "4d8",
        "Kind": "Physical",
        "Range": "Melee",
        "Description": "The user curls into a wheel of fire and strikes the target, with a chance to burn.",
        "Effect": "If the user is Frozen, it can use Flame Wheel and thaws out before making the attack roll. The target is burned on 19+."
    },
    "Flamethrower": {
        "Type": "Fire",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "3d12x2",
        "Kind": "Special",
        "Range": "Cone 3",
        "Description": "The user breathes a massive flame, potentially burning the target.",
        "Effect": "The target is burned on 19+. Special: Grants Firestarter."
    },
    "Flare Blitz": {
        "Type": "Fire",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "5d10x2",
        "Kind": "Physical",
        "Range": "Melee, Rush, Knockback",
        "Description": "The user charges at the target in a fiery blitz, causing recoil damage.",
        "Effect": "The target is burned on 19+. The user takes recoil damage equal to 1/3 of the damage it dealt (before knockback). The user gains +1 on its knockback roll."
    },
    "Fusion Flare": {
        "Type": "Fire",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "4d10x2",
        "Kind": "Special",
        "Range": "8",
        "Description": "A powerful flame attack that also thaws the user and gains power if Fusion Bolt was used.",
        "Effect": "Fusion Flare will thaw the user out before it makes its attack roll. Fusion Flare has its damage tier doubled if Fusion Bolt was used this turn."
    },
    "Heat Crash": {
        "Type": "Fire",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "2d8",
        "Kind": "Physical",
        "Range": "Melee, Rush",
        "Description": "The user uses their weight to crush the target with a fiery attack, gaining extra damage if the target is lighter.",
        "Effect": "The user compares its weight with the target. If the target weighs less than 50% the weight of the user, increase the damage tier by 2 (4d8). If the target weighs less than 30% of the user's weight, the damage tier increases by 4 (3d10x2). If the target weighs less than 20% the weight of the user, increase the damage tier by 7 (4d12x2)."
    },
    "Heat Wave": {
        "Type": "Fire",
        "Availability": "1/Battle",
        "Attack Modifier": "0",
        "Damage": "4d10x2",
        "Kind": "Special",
        "Range": "Line 4",
        "Description": "The user releases a wave of heat, potentially burning targets in the area.",
        "Effect": "The line for this attack is 2 squares wide. The target is burned on 19+."
    },
    "Incinerate": {
        "Type": "Fire",
        "Availability": "At-Will",
        "Attack Modifier": "+2",
        "Damage": "4d8",
        "Kind": "Special",
        "Range": "Line 3",
        "Description": "The user unleashes a fiery attack that destroys consumable items held by the target.",
        "Effect": "Any consumable held item on the target is destroyed."
    },
    "Inferno": {
        "Type": "Fire",
        "Availability": "1/Battle",
        "Attack Modifier": "-5",
        "Damage": "4d10x2",
        "Kind": "Special",
        "Range": "6",
        "Description": "The user launches a massive fireball that burns the target severely.",
        "Effect": "The target is burned."
    },
    "Lava Plume": {
        "Type": "Fire",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "3d10x2",
        "Kind": "Special",
        "Range": "Burst 2",
        "Description": "A plume of molten lava erupts from the user, potentially burning those in the area.",
        "Effect": "The target is burned on 15+."
    },
    "Magma Storm": {
        "Type": "Fire",
        "Availability": "1/Battle",
        "Attack Modifier": "-2",
        "Damage": "4d10x2",
        "Kind": "Special",
        "Range": "6",
        "Description": "The target becomes trapped in a violent firestorm, taking damage each turn.",
        "Effect": "The target becomes surrounded in a firestorm, taking 1/8 max HP at the end of each turn. While surrounded, the Pokémon cannot be recalled to its Poké Ball and has its movement speeds reduced by half. After taking the damage each turn, the target can make a reflex save to end these effects."
    },
    "Mystical Fire": {
        "Type": "Fire",
        "Availability": "1/Battle",
        "Attack Modifier": "+2",
        "Damage": "4d12",
        "Kind": "Special",
        "Range": "6",
        "Description": "The user conjures a magical fire that lowers the target's Special Attack.",
        "Effect": "The target reduces its Sp.ATK by -1 CS."
    },
    "Overheat": {
        "Type": "Fire",
        "Availability": "1/Battle",
        "Attack Modifier": "0",
        "Damage": "3d12x3",
        "Kind": "Special",
        "Range": "8, Burst 1",
        "Description": "A massive fiery blast that heavily damages the target but weakens the user's Special Attack.",
        "Effect": "The user reduces its Sp.ATK by -2 CS."
    },
    "Sacred Fire": {
        "Type": "Fire",
        "Availability": "2/Battle",
        "Attack Modifier": "+1",
        "Damage": "4d10x2",
        "Kind": "Physical",
        "Range": "6",
        "Description": "A sacred flame that can burn the target while also thawing the user.",
        "Effect": "The user thaws out before making its attack roll. The target is burned on 11+."
    },
    "Searing Shot": {
        "Type": "Fire",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "4d10x2",
        "Kind": "Special",
        "Range": "Burst 2",
        "Description": "The user releases a shot of fiery energy that damages all in the area.",
        "Effect": "The target is burned on 15+."
    },
    "Sunny Day": {
        "Type": "Fire",
        "Availability": "2/Day",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Weather",
        "Description": "The user changes the weather to Sunny, boosting the power of Fire-type moves.",
        "Effect": "The user changes the weather to Sunny for 5 rounds."
    },
    "V-Create": {
        "Type": "Fire",
        "Availability": "Daily",
        "Attack Modifier": "+1",
        "Damage": "5d10x3",
        "Kind": "Physical",
        "Range": "Melee",
        "Description": "The user performs a powerful attack but at the cost of its defenses and speed.",
        "Effect": "The user reduces its DEF, Sp.DEF, and SPD by -1 CS."
    },
    "Will-O-Wisp": {
        "Type": "Fire",
        "Availability": "2/Battle",
        "Attack Modifier": "-1",
        "Kind": "Status",
        "Range": "6",
        "Description": "The user creates a will-o-wisp that burns the target.",
        "Effect": "The target is burned."
    },

    ///////////////   FLYING   /////////////////
    "Acrobatics": {
        "Type": "Flying",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "2d12",
        "Kind": "Physical",
        "Range": "Melee, Rush",
        "Description": "The user performs a fast and acrobatic attack. If no item is held, the damage increases.",
        "Effect": "If the user is not holding an item, increase the damage tier by 4 (3d12x2)."
    },
    "Aerial Ace": {
        "Type": "Flying",
        "Availability": "2/Battle",
        "Attack Modifier": "N/A",
        "Damage": "4d8",
        "Kind": "Physical",
        "Range": "Melee",
        "Description": "The user performs an unmissable aerial strike.",
        "Effect": "Aerial Ace cannot miss."
    },
    "Aeroblast": {
        "Type": "Flying",
        "Availability": "Daily",
        "Attack Modifier": "+1",
        "Damage": "4d10x2",
        "Kind": "Special",
        "Range": "Line 6",
        "Description": "A powerful flying-type move with a chance for a critical hit.",
        "Effect": "The line is two squares wide. The user scores a critical hit on 13+."
    },
    "Air Cutter": {
        "Type": "Flying",
        "Availability": "At-Will",
        "Attack Modifier": "+1",
        "Damage": "4d8",
        "Kind": "Special",
        "Range": "Cone 3",
        "Description": "The user sends a blast of sharp air that can score critical hits.",
        "Effect": "The user scores a critical hit on 18+."
    },
    "Air Slash": {
        "Type": "Flying",
        "Availability": "2/Battle",
        "Attack Modifier": "+1",
        "Damage": "3d10x2",
        "Kind": "Special",
        "Range": "6",
        "Description": "A quick slash of air that can cause the target to flinch.",
        "Effect": "The target flinches on 15+."
    },
    "Bounce": {
        "Type": "Flying",
        "Availability": "2/Day",
        "Attack Modifier": "0",
        "Damage": "3d10x2",
        "Kind": "Physical",
        "Range": "Size",
        "Description": "The user leaps into the air and then lands with a powerful attack.",
        "Effect": "The user leaps into the air a number of squares equal to its fastest movement speed +2. The user gains +1 damage tier for every 200 lbs. it weighs."
    },
    "Brave Bird": {
        "Type": "Flying",
        "Availability": "1/Battle",
        "Attack Modifier": "+2",
        "Damage": "5d10x2",
        "Kind": "Physical",
        "Range": "Melee, Rush, Knockback",
        "Description": "The user attacks with reckless force, dealing high damage but suffering recoil.",
        "Effect": "The user takes recoil damage equal to 1/3 of the damage it dealt (before knockback). The user gains +1 on its knockback roll."
    },
    "Chatter": {
        "Type": "Flying",
        "Availability": "1/Battle",
        "Attack Modifier": "+2",
        "Damage": "4d12",
        "Kind": "Special",
        "Range": "Burst 2",
        "Description": "The user emits a confusing sound that disorients the target.",
        "Effect": "The target is confused."
    },
    "Defog": {
        "Type": "Flying",
        "Availability": "2/Day",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Field, Weather",
        "Description": "The user clears the air, removing any weather effects and hazards.",
        "Effect": "The Weather becomes normal and clear, and all Buffs and Hazards in a burst 10 are destroyed."
    },
    "Drill Peck": {
        "Type": "Flying",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "3d10x2",
        "Kind": "Physical",
        "Range": "Melee, Rush",
        "Description": "The user performs a powerful drill-like attack.",
        "Effect": "None"
    },
    "Feather Dance": {
        "Type": "Flying",
        "Availability": "1/Battle",
        "Attack Modifier": "+2",
        "Kind": "Status",
        "Range": "Line 4, Discerning",
        "Description": "The user dances gracefully, reducing the target's offensive capabilities.",
        "Effect": "The target reduces its ATK by -2 CS."
    },
    "Fly": {
        "Type": "Flying",
        "Availability": "1/Battle",
        "Attack Modifier": "+1",
        "Damage": "3d10x2",
        "Kind": "Physical",
        "Range": "Melee, Rush",
        "Description": "The user takes flight, doubling its movement speed for a turn before attacking on the next.",
        "Effect": "The user doubles its fly speed for this turn and next but cannot make attacks this round. On its next turn, the user can make an attack using Fly's attack modifier and damage."
    },
    "Gust": {
        "Type": "Flying",
        "Availability": "At-Will",
        "Attack Modifier": "+2",
        "Damage": "2d8",
        "Kind": "Special",
        "Range": "4",
        "Description": "The user summons a gust of wind that targets a tall column above the opponent.",
        "Effect": "Gust hits an area that is a column 8 squares tall above the target's square."
    },
    "Hurricane": {
        "Type": "Flying",
        "Availability": "1/Battle",
        "Attack Modifier": "-3",
        "Damage": "4d12x2",
        "Kind": "Special",
        "Range": "4, Burst 1",
        "Description": "The user summons a violent hurricane that deals massive damage in a tall column.",
        "Effect": "Hurricane hits an area that is a column 10 squares tall above the burst 1. In rain, Hurricane has a +2 attack modifier, in sunny weather it has a -6 attack modifier."
    },
    "Mirror Move": {
        "Type": "Flying",
        "Availability": "2/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "6",
        "Description": "The user mimics the last attack used by the target.",
        "Effect": "Mirror Move becomes whatever attack was last used by the target, including range, modifier, and damage."
    },
    "Oblivion Wing": {
        "Type": "Flying",
        "Availability": "Daily",
        "Attack Modifier": "+2",
        "Damage": "3d10x2",
        "Kind": "Special",
        "Range": "Melee",
        "Description": "The user unleashes a powerful dark energy to heal itself.",
        "Effect": "The user regains HP equal to 75% of the damage dealt."
    },
    "Peck": {
        "Type": "Flying",
        "Availability": "At-Will",
        "Attack Modifier": "+2",
        "Damage": "2d8",
        "Kind": "Physical",
        "Range": "Melee",
        "Description": "The user pecks the target with its sharp beak.",
        "Effect": "None"
    },
    "Pluck": {
        "Type": "Flying",
        "Availability": "At-Will",
        "Attack Modifier": "+2",
        "Damage": "4d8",
        "Kind": "Physical",
        "Range": "Melee",
        "Description": "The user uses its beak to pluck an item from the target.",
        "Effect": "The user consumes any berries the target is holding."
    },
    "Roost": {
        "Type": "Flying",
        "Availability": "2/Day",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Self",
        "Description": "The user rests to regain strength.",
        "Effect": "The user loses its Flying-type and Fly speed until the start of its next turn. The user regains 50% max HP."
    },
    "Sky Attack": {
        "Type": "Flying",
        "Availability": "2/Day",
        "Attack Modifier": "0",
        "Damage": "5d12x2",
        "Kind": "Physical",
        "Range": "Melee, Rush",
        "Description": "The user charges up and then delivers a powerful aerial attack.",
        "Effect": "The user doubles its fly speed for this turn and next but cannot make attacks this round. On its next turn, the user can make an attack using Sky Attack's attack modifier and damage. This attack flinches on 17+."
    },
    "Sky Drop": {
        "Type": "Flying",
        "Availability": "1/Battle",
        "Attack Modifier": "+1",
        "Damage": "4d8",
        "Kind": "Physical",
        "Range": "Melee",
        "Description": "The user lifts the target into the air and drops them after a short flight.",
        "Effect": "The user increases its fly speed by 3 for this and next turn then grabs its target (entering a grapple) before flying as high as possible. On its next turn, it uses its action to release the Pokémon, which falls to the ground unless it has a fly speed.",
        "Special": "Sky Drop automatically fails if the target's weight is greater than the user's STRx40."
    },
    "Tailwind": {
        "Type": "Flying",
        "Availability": "2/Day",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Burst 5",
        "Description": "The user creates a powerful wind that boosts the speed of allies.",
        "Effect": "Allies in the area increase their speed stat by 50%."
    },
    "Wing Attack": {
        "Type": "Flying",
        "Availability": "At-Will",
        "Attack Modifier": "+2",
        "Damage": "4d8",
        "Kind": "Physical",
        "Range": "Melee",
        "Description": "The user strikes the target with its wings.",
        "Effect": "None"
    },

    //////////////   GHOST    //////////////////
    "Astonish": {
        "Type": "Ghost",
        "Availability": "At-Will",
        "Attack Modifier": "+2",
        "Damage": "2d6",
        "Kind": "Physical",
        "Range": "Melee",
        "Description": "The user scares the target with a sudden attack.",
        "Effect": "The target flinches on 15+."
    },

    "Confuse Ray": {
        "Type": "Ghost",
        "Availability": "1/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "6",
        "Description": "The user creates a ray of eerie light that confuses the target.",
        "Effect": "The target is Confused. Confuse Ray cannot miss."
    },
    "Curse": {
        "Type": "Ghost",
        "Availability": "1/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "6 or Self",
        "Description": "The user places a powerful curse on the target or itself.",
        "Effect": "If the user is a Ghost-type Pokémon, the user loses 50% of its max HP and the target is Cursed, losing 25% of its HP each turn. If the user is not a Ghost-type Pokémon, it reduces its SPD by -1 CS and increases its ATK and DEF by +1 CS."
    },
    "Destiny Bond": {
        "Type": "Ghost",
        "Availability": "1/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Self",
        "Description": "The user places a curse on the target so that if it dies, the user does as well.",
        "Effect": "Until the start of the user's next turn, any enemy that reduces it to 0 HP also drops to 0 HP."
    },
    "Grudge": {
        "Type": "Ghost",
        "Availability": "Daily",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "6, Interrupt",
        "Description": "The user curses the enemy, preventing them from using their attack again.",
        "Effect": "Until the start of the user's next turn, any enemy that reduces it to 0 HP cannot use that attack again this day."
    },
    "Hex": {
        "Type": "Ghost",
        "Availability": "1/Battle",
        "Attack Modifier": "+2",
        "Damage": "4d12",
        "Kind": "Special",
        "Range": "6",
        "Description": "The user unleashes a curse that targets the weaknesses of the opponent.",
        "Effect": "If the target has a persistent status effect, Hex increases its damage tier to 11 (4d12x2)."
    },
    "Lick": {
        "Type": "Ghost",
        "Availability": "At-Will",
        "Attack Modifier": "+2",
        "Damage": "2d6",
        "Kind": "Physical",
        "Range": "Melee",
        "Description": "The user delivers a lick that may paralyze the target.",
        "Effect": "The target is paralyzed on 15+."
    },
    "Night Shade": {
        "Type": "Ghost",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Kind": "Special",
        "Range": "8",
        "Description": "The user creates a shadowy wave that damages the target.",
        "Effect": "The target loses HP equal to the user's level x5. Do not apply weakness, resistance, or stats."
    },
    "Nightmare": {
        "Type": "Ghost",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Kind": "Status",
        "Range": "4",
        "Description": "The user traps the target in a nightmare, dealing damage over time.",
        "Effect": "If the target is asleep, it loses 25% of its max HP each turn until it wakes up."
    },
    "Ominous Wind": {
        "Type": "Ghost",
        "Availability": "1/Battle",
        "Attack Modifier": "+2",
        "Damage": "4d8",
        "Kind": "Special",
        "Range": "Line 5",
        "Description": "The user creates a gust of wind infused with eerie energy.",
        "Effect": "Roll d20. The user raises its ATK, DEF, Sp.ATK, Sp.DEF, and SPD by +1 CS on 19+."
    },
    "Phantom Force": {
        "Type": "Ghost",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "3d12x2",
        "Kind": "Physical",
        "Range": "Melee",
        "Description": "The user disappears and reappears to strike the target.",
        "Effect": "The user vanishes from the battlefield until its turn begins next round. It then reappears anywhere within 10 squares and attacks with Phantom Force's attack modifier and damage."
    },
    "Shadow Ball": {
        "Type": "Ghost",
        "Availability": "At-Will",
        "Attack Modifier": "+2",
        "Damage": "3d10x2",
        "Kind": "Special",
        "Range": "6",
        "Description": "The user creates a shadowy sphere and hurls it at the target.",
        "Effect": "The target reduces its Sp.DEF by -1 CS on 17+."
    },
    "Shadow Claw": {
        "Type": "Ghost",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "4d12",
        "Kind": "Physical",
        "Range": "Melee, Line 3",
        "Description": "The user slashes the target with shadow-infused claws.",
        "Effect": "When this move is used, it targets all squares in a line 3. The user moves to the square at the end of that line. Shadow Claw is a critical hit on 18+."
    },
    "Shadow Force": {
        "Type": "Ghost",
        "Availability": "Daily x3",
        "Attack Modifier": "+2",
        "Damage": "5d10x2",
        "Kind": "Physical",
        "Range": "Melee",
        "Description": "The user vanishes and strikes from a different angle.",
        "Effect": "The user vanishes from the battlefield until its turn begins next round. It then reappears anywhere within 10 squares and attacks with Shadow Force's attack modifier and damage."
    },
    "Shadow Punch": {
        "Type": "Ghost",
        "Availability": "2/Battle",
        "Attack Modifier": "N/A",
        "Damage": "4d8",
        "Kind": "Physical",
        "Range": "6",
        "Description": "The user strikes with a shadowy fist that never misses.",
        "Effect": "Shadow Punch cannot miss."
    },
    "Shadow Sneak": {
        "Type": "Ghost",
        "Availability": "At-Will",
        "Attack Modifier": "+2",
        "Damage": "2d8",
        "Kind": "Physical",
        "Range": "Melee, Priority",
        "Description": "The user strikes the target with a quick shadowy punch.",
        "Effect": "None."
    },
    "Spite": {
        "Type": "Ghost",
        "Availability": "1/Battle",
        "Attack Modifier": "+2",
        "Kind": "Status",
        "Range": "6",
        "Description": "The user erases the remaining uses of the target's most recent move.",
        "Effect": "The availability of the last move used by the target is shifted one step less available."
    },
    "Trick-or-Treat": {
        "Type": "Ghost",
        "Availability": "2/Daily",
        "Attack Modifier": "+2",
        "Kind": "Status",
        "Range": "6",
        "Description": "The user gives the target a special treat, changing its typing.",
        "Effect": "The target gains the Ghost-type until it switches out or the battle ends."
    },

    ////////////    GRASS   ////////////
    "Absorb": {
        "Type": "Grass",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "2d8",
        "Kind": "Special",
        "Range": "4",
        "Description": "The user absorbs the target's energy to heal itself.",
        "Effect": "The user regains HP equal to 50% of the damage dealt."
    },
    "Aromatherapy": {
        "Type": "Grass",
        "Availability": "1/Day",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Burst 2",
        "Description": "The user releases a sweet scent that cures the ailments of its allies.",
        "Effect": "All allies in the burst are cured of one status condition of their choice."
    },
    "Bullet Seed": {
        "Type": "Grass",
        "Availability": "2/Battle",
        "Attack Modifier": "0",
        "Damage": "2d6",
        "Kind": "Physical",
        "Range": "6, Multistrike",
        "Description": "The user fires multiple seeds at the target.",
        "Effect": "None."
    },
    "Cotton Guard": {
        "Type": "Grass",
        "Availability": "Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Self",
        "Description": "The user wraps itself in cotton to boost its defenses.",
        "Effect": "The user increases its DEF by +3 CS."
    },
    "Cotton Spore": {
        "Type": "Grass",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Kind": "Status",
        "Range": "Cone 3",
        "Description": "The user releases spores to slow down the target.",
        "Effect": "The target reduces its SPD by -2 CS."
    },
    "Energy Ball": {
        "Type": "Grass",
        "Availability": "1/Battle",
        "Attack Modifier": "+2",
        "Damage": "3d12x2",
        "Kind": "Special",
        "Range": "6",
        "Description": "The user creates a ball of energy and hurls it at the target.",
        "Effect": "The target reduces its Sp.DEF by -1 CS on 19+."
    },
    "Forest's Curse": {
        "Type": "Grass",
        "Availability": "2/Day",
        "Attack Modifier": "+2",
        "Kind": "Status",
        "Range": "6",
        "Description": "The user curses the target, making it gain the Grass typing.",
        "Effect": "The target gains the Grass-type until it switches out or the battle ends."
    },
    "Frenzy Plant": {
        "Type": "Grass",
        "Availability": "2/Day",
        "Attack Modifier": "0",
        "Damage": "5d8x3",
        "Kind": "Special",
        "Range": "Line 6",
        "Description": "The user releases a powerful plant attack in a line.",
        "Effect": "At the final square of the line this attack hits in a burst 1. This attack causes the user to lose its next set of actions."
    },
    "Giga Drain": {
        "Type": "Grass",
        "Availability": "1/Battle",
        "Attack Modifier": "+2",
        "Damage": "3d10x2",
        "Kind": "Special",
        "Range": "6",
        "Description": "The user drains the target's energy to heal itself.",
        "Effect": "The user regains HP equal to 50% of the damage dealt."
    },
    "Grass Knot": {
        "Type": "Grass",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "See Effect",
        "Kind": "Special",
        "Range": "6",
        "Description": "The user trips the target using plants based on its weight.",
        "Effect": "Grass has a damage tier of 3 against targets weighing between 0.1-10 kg. It has a damage tier of 5 against targets weighing 10.1-25 kg. Every 15 kg range increases the damage base by 2 (for a max damage tier of 12 against targets weighing 200 kg or more)."
    },
    "Grass Pledge": {
        "Type": "Grass",
        "Availability": "Battle",
        "Attack Modifier": "+2",
        "Damage": "3d10x2",
        "Kind": "Special",
        "Range": "6",
        "Description": "The user pledges its allegiance to the grass, boosting its power.",
        "Effect": "This move can be used either as an attack or a pledge. When used as an attack it functions as above but if a Water Pledge has been made this turn by an ally within 10 squares, Grass Pledge instead deals 5d8x3 damage and creates a burst 4 swamp around the target. While in this swamp, Speed stats are reduced by 75% and it counts as difficult terrain. This swamp fades after four rounds. If used as a Pledge, it deals no damage and can boost the effects of a Fire Pledge."
    },
    "Grass Whistle": {
        "Type": "Grass",
        "Availability": "1/Battle",
        "Attack Modifier": "-6",
        "Kind": "Status",
        "Range": "6",
        "Description": "The user plays a lullaby-like tune to put the target to sleep.",
        "Effect": "The target falls asleep."
    },
    "Grassy Terrain": {
        "Type": "Grass",
        "Availability": "2/Day",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Burst 10",
        "Description": "The user changes the terrain to boost Electric-type power.",
        "Effect": "The area becomes Electric terrain for 5 turns. While in Electric Terrain, creatures cannot fall asleep. Electric-type moves increase their damage tier by 50% (rounded down)."
    },
    "Horn Leech": {
        "Type": "Grass",
        "Availability": "1/Battle",
        "Attack Modifier": "+2",
        "Damage": "3d10x2",
        "Kind": "Physical",
        "Range": "Melee",
        "Description": "The user leeches energy from the target with its horn.",
        "Effect": "The user regains HP equal to 50% of the damage dealt."
    },
    "Ingrain": {
        "Type": "Grass",
        "Availability": "1/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Self, Buff",
        "Description": "The user roots itself into the ground, immobilizing itself.",
        "Effect": "The user shoots roots into the ground, becoming immobilized. At the end of each turn, the user regains 10% of its max HP. While rooted, the user is grounded and can be hit by Ground-type moves even if it usually could not be due to Levitate or being Flying-type. The user cannot be switched out (by its trainer or an enemy) unless the user is a Grass-type and allows it."
    },
    "Leaf Blade": {
        "Type": "Grass",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "3d12x2",
        "Kind": "Physical",
        "Range": "Melee, Line 3",
        "Description": "The user strikes with a blade of sharp leaves.",
        "Effect": "When this move is used, it targets all squares in a line of 3. The user moves to the square at the end of that line. Leaf Blade is a Critical Hit on 18+."
    },
    "Leaf Storm": {
        "Type": "Grass",
        "Availability": "1/Battle",
        "Attack Modifier": "0",
        "Damage": "3d12x3",
        "Kind": "Special",
        "Range": "8, Blast 3",
        "Description": "The user unleashes a furious storm of leaves.",
        "Effect": "The user's Sp.ATK is reduced by -2 CS."
    },
    "Leaf Tornado": {
        "Type": "Grass",
        "Availability": "1/Battle",
        "Attack Modifier": "0",
        "Damage": "4d12",
        "Kind": "Special",
        "Range": "6, Blast 1",
        "Description": "The user creates a violent tornado of leaves.",
        "Effect": "The target receives -2 on attack rolls for the rest of the battle on 11+."
    },
    "Leech Seed": {
        "Type": "Grass",
        "Availability": "1/Battle",
        "Attack Modifier": "0",
        "Kind": "Status",
        "Range": "6",
        "Description": "The user plants a seed that drains the target's energy.",
        "Effect": "The target is Seeded. While seeded, it loses 10% of its max HP at the end of its turn. The user regains HP equal to the amount the target lost."
    },
    "Magical Leaf": {
        "Type": "Grass",
        "Availability": "2/Battle",
        "Attack Modifier": "N/A",
        "Damage": "4d8",
        "Kind": "Special",
        "Range": "8",
        "Description": "The user hurls a flurry of magical leaves.",
        "Effect": "Magical Leaf cannot miss."
    },
    "Mega Drain": {
        "Type": "Grass",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "2d8",
        "Kind": "Special",
        "Range": "6",
        "Description": "The user drains the target's life force.",
        "Effect": "The user regains HP equal to 50% of the damage dealt."
    },
    "Needle Arm": {
        "Type": "Grass",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "4d8",
        "Kind": "Physical",
        "Range": "Melee",
        "Description": "The user attacks with thorny arms.",
        "Effect": "The target flinches on 15+."
    },
    "Petal Blizzard": {
        "Type": "Grass",
        "Availability": "1/Battle",
        "Attack Modifier": "+2",
        "Damage": "3d12x2",
        "Kind": "Physical",
        "Range": "Burst 3",
        "Description": "The user unleashes a flurry of petals in a burst of energy.",
        "Effect": "None."
    },
    "Petal Dance": {
        "Type": "Grass",
        "Availability": "2/Battle",
        "Attack Modifier": "+1",
        "Damage": "5d10x2",
        "Kind": "Special",
        "Range": "Burst 1",
        "Effect": "The user must make an attack using this move's modifier, damage, and range again next turn after moving to ensure it affects as many enemy targets as possible. After the second use, roll d20. On 10+, the user must make this attack once more next turn. If the user misses all valid targets after any of these attacks, Petal Dance ends."
    },
    "Power Whip": {
        "Type": "Grass",
        "Availability": "1/Battle",
        "Attack Modifier": "-1",
        "Damage": "5d10x2",
        "Kind": "Physical",
        "Range": "6",
        "Effect": "None"
    },
    "Razor Leaf": {
        "Type": "Grass",
        "Availability": "At-Will",
        "Attack Modifier": "0",
        "Damage": "4d8",
        "Kind": "Physical",
        "Range": "Cone 3",
        "Effect": "The user scores critical hits on 18+."
    },
    "Seed Bomb": {
        "Type": "Grass",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "3d10x2",
        "Kind": "Physical",
        "Range": "8",
        "Effect": "None"
    },
    "Seed Flare": {
        "Type": "Grass",
        "Availability": "1/Battle",
        "Attack Modifier": "-1",
        "Damage": "5d10x2",
        "Kind": "Special",
        "Range": "Line 6",
        "Effect": "The line is two squares wide. The target reduces its Sp.DEF by -2 CS on 12+."
    },
    "Sleep Powder": {
        "Type": "Grass",
        "Availability": "1/Battle",
        "Attack Modifier": "-2",
        "Kind": "Status",
        "Range": "5",
        "Effect": "The target falls asleep."
    },
    "Solar Beam": {
        "Type": "Grass",
        "Availability": "1/Battle",
        "Attack Modifier": "+2",
        "Damage": "5d8x3",
        "Kind": "Special",
        "Range": "Line 6",
        "Effect": "The user spends the rest of its turn charging energy. On its next turn, it can use its action to make an attack using Solar Beam's attack modifier, damage, and range. If the weather is sunny, the user does not need to spend a turn charging."
    },
    "Spiky Shield": {
        "Type": "Grass",
        "Availability": "Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Self, Interrupt",
        "Effect": "If the user is hit by an attack, the user may use Spiky Shield. The user suffers no effect of the attack. The attacker takes damage equal to 15% of its max HP."
    },
    "Spore": {
        "Type": "Grass",
        "Availability": "1/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "6",
        "Effect": "The target falls asleep. Grass-type Pokémon are immune to Spore."
    },
    "Stun Spore": {
        "Type": "Grass",
        "Availability": "2/Battle",
        "Attack Modifier": "-2",
        "Kind": "Status",
        "Range": "6",
        "Effect": "The target is paralyzed. Grass-type and Electric-type Pokémon are immune to Stun Spore."
    },
    "Synthesis": {
        "Type": "Grass",
        "Availability": "2/Day",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Self",
        "Effect": "The user regains 50% of its max HP. If the weather is sunny, it regains 7% of its max HP. If the weather is rain, hail, or sandstorm, it regains 25% of its max HP."
    },
    "Vine Whip": {
        "Type": "Grass",
        "Availability": "At-Will",
        "Attack Modifier": "+2",
        "Damage": "2d8",
        "Kind": "Physical",
        "Range": "4",
        "Effect": "None"
    },
    "Wood Hammer": {
        "Type": "Grass",
        "Availability": "1/Battle",
        "Attack Modifier": "+2",
        "Damage": "5d10x2",
        "Kind": "Physical",
        "Range": "Melee, Knockback",
        "Effect": "The user takes recoil damage equal to 1/3 of the damage it dealt (before knockback). The user gains +2 on its knockback check."
    },
    "Worry Seed": {
        "Type": "Grass",
        "Availability": "1/Battle",
        "Attack Modifier": "+2",
        "Kind": "Status",
        "Range": "8",
        "Effect": "One of the target's abilities is replaced at random by Insomnia (cannot replace Truant)."
    },

    ////////////  GROUND  ///////////////
    "Bone Club": {
        "Type": "Ground",
        "Availability": "At-Will",
        "Attack Modifier": "-1",
        "Damage": "4d12",
        "Kind": "Physical",
        "Range": "Melee",
        "Effect": "The target flinches on 19+."
    },
    "Bone Rush": {
        "Type": "Ground",
        "Availability": "1/Battle",
        "Attack Modifier": "0",
        "Damage": "2d6",
        "Kind": "Physical",
        "Range": "Melee, Multistrike",
        "Effect": "None"
    },
    "Bonemerang": {
        "Type": "Ground",
        "Availability": "1/Battle",
        "Attack Modifier": "+1",
        "Damage": "2d12",
        "Kind": "Physical",
        "Range": "6, Double Strike",
        "Effect": "None"
    },
    "Bulldoze": {
        "Type": "Ground",
        "Availability": "1/Battle",
        "Attack Modifier": "+2",
        "Damage": "4d8",
        "Kind": "Physical",
        "Range": "Burst 2",
        "Effect": "The target lowers its SPD by -1 CS."
    },
    "Dig": {
        "Type": "Ground",
        "Availability": "1/Battle",
        "Attack Modifier": "+2",
        "Damage": "3d10x2",
        "Kind": "Physical",
        "Range": "Burst 1, Groundsource",
        "Effect": "The user doubles its burrow speed for this turn and next but cannot make attacks this round. On its next turn the user can make an attack using Dig's attack modifier range, and damage.",
        "Special": "Grants +2 Burrow Movement"
    },
    "Drill Run": {
        "Type": "Ground",
        "Availability": "1/Battle",
        "Attack Modifier": "+1",
        "Damage": "3d10x2",
        "Kind": "Physical",
        "Range": "Melee, Rush, Line 3",
        "Effect": "When this move is used it targets all squares in a line 3. The user moves to the square at the end of that line. The user scores a critical hit on 18+."
    },
    "Earth Power": {
        "Type": "Ground",
        "Availability": "1/Battle",
        "Attack Modifier": "+2",
        "Damage": "3d12x2",
        "Kind": "Special",
        "Range": "6, Burst 1, Groundsource",
        "Effect": "The target reduces its Sp.DEF by -1 CS on 19+."
    },
    "Earthquake": {
        "Type": "Ground",
        "Availability": "1/Battle",
        "Attack Modifier": "+2",
        "Damage": "4d10x2",
        "Kind": "Physical",
        "Range": "Burst 4, Groundsource",
        "Effect": "Earthquake's area is a column that shoots 10 squares into the ground below the burst 4. If it hits a target below ground its damage is doubled after all other calculations. Earthquake ignores 20 Defense of buildings and structures.",
        "Special": "Grants Earthshaper"
    },
    "Fissure": {
        "Type": "Ground",
        "Availability": "1/Day",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "3, Groundsource",
        "Effect": "Roll 1d100. On a roll of 70+ the target is reduced to 0 HP. The user adds their level x5 to the roll. The target subtracts their level x5 from the roll."
    },
    "Land's Wrath": {
        "Type": "Ground",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "3d12x2",
        "Kind": "Physical",
        "Range": "Burst 5, Discerning, Groundsource",
        "Effect": "None"
    },
    "Magnitude": {
        "Type": "Ground",
        "Availability": "2/Battle",
        "Damage": "See Effect",
        "Kind": "Physical",
        "Range": "Burst 2, Groundsource",
        "Effect": "Roll 3d4. The result of the roll is the damage tier of magnitude. Magnitude's area is a column that shoots 8 squares into the ground below the burst 2. If it hits a target below ground its damage is doubled after all other calculations. Magnitude ignores 20 Defense of buildings and structures.",
        "Special": "Grants Earthshaper"
    },
    "Mud Bomb": {
        "Type": "Ground",
        "Availability": "1/Battle",
        "Attack Modifier": "0",
        "Damage": "4d12",
        "Kind": "Special",
        "Range": "6",
        "Effect": "The target receives -2 on attack rolls for the rest of the battle on 15+."
    },
    "Mud Shot": {
        "Type": "Ground",
        "Availability": "2/Battle",
        "Attack Modifier": "+1",
        "Damage": "4d8",
        "Kind": "Special",
        "Range": "4",
        "Effect": "The target reduces its SPD by -1 CS."
    },
    "Mud Sport": {
        "Type": "Ground",
        "Availability": "1/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Burst 5",
        "Effect": "Targets in the burst resist Electric-type damage by 2 more steps for 2d4 turns."
    },
    "Mud-Slap": {
        "Type": "Ground",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "1d12",
        "Kind": "Special",
        "Range": "4",
        "Effect": "The target receives -2 on attack rolls for the rest of the battle."
    },
    "Rototiller": {
        "Type": "Ground",
        "Availability": "1/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Burst 3",
        "Effect": "Grass-type Pokémon in contact with the ground increase their ATK and Sp.ATK CS by +1."
    },
    "Sand Attack": {
        "Type": "Ground",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Kind": "Status",
        "Range": "Cone 2",
        "Effect": "The target receives -2 on attack rolls until the end of the battle. Sand Attack can hit Flying-type Pokémon."
    },
    "Sand Tomb": {
        "Type": "Ground",
        "Availability": "2/Battle",
        "Attack Modifier": "0",
        "Damage": "2d8",
        "Kind": "Physical",
        "Range": "5",
        "Effect": "The target becomes entombed, taking 1/8 max HP at the end of each turn. While entombed the Pokémon cannot be recalled to its Poké Ball and has its movement speeds reduced by half. After taking the damage each turn, the target can make a Body save to end these effects."
    },
    "Spikes": {
        "Type": "Ground",
        "Availability": "2/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "6, Burst 4, Hazard",
        "Effect": "Spikes cover the ground in the burst. Any enemy moving into or out of a square covered in spikes loses 5% of its max HP in damage."
    },

    /////////////   ICE   ////////////
    "Aurora Beam": {
        "Type": "Ice",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "4d12",
        "Kind": "Special",
        "Range": "Line 4",
        "Effect": "The target reduces its ATK by -1 CS on 19+."
    },
    "Avalanche": {
        "Type": "Ice",
        "Availability": "1/Battle",
        "Attack Modifier": "+2",
        "Damage": "4d8",
        "Kind": "Physical",
        "Range": "Melee",
        "Effect": "This attack has its damage tier increased from 6 to 10 (4d10x2) if it hits a target that dealt damage to the user this round."
    },
    "Blizzard": {
        "Type": "Ice",
        "Availability": "1/Battle",
        "Attack Modifier": "-3",
        "Damage": "4d12x2",
        "Kind": "Special",
        "Range": "4, Blast 2",
        "Effect": "The target is frozen on 19+. If the weather is hailing, the attack modifier becomes +2."
    },
    "Freeze-Dry": {
        "Type": "Ice",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "4d12",
        "Kind": "Special",
        "Range": "6",
        "Effect": "This move is always x2 super-effective against Water or half Water-types, no more or less."
    },
    "Freeze Shock": {
        "Type": "Ice",
        "Availability": "Battle",
        "Attack Modifier": "0",
        "Damage": "5d12x2",
        "Kind": "Physical",
        "Range": "8",
        "Effect": "The user spends the rest of its turn charging energy. On its next turn it can use its action to make an attack using Freeze Shock's attack modifier, damage, and range."
    },
    "Frost Breath": {
        "Type": "Ice",
        "Availability": "1/Battle",
        "Attack Modifier": "+1",
        "Damage": "4d8",
        "Kind": "Special",
        "Range": "4",
        "Effect": "The user always scores a critical hit (unless an ability prevents critical hits on the target)."
    },
    "Glaciate": {
        "Type": "Ice",
        "Availability": "2/Battle",
        "Attack Modifier": "+1",
        "Damage": "4d12",
        "Kind": "Special",
        "Range": "Burst 3",
        "Effect": "The target reduces its SPD by -1 CS."
    },
    "Hail": {
        "Type": "Ice",
        "Availability": "2/Day",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Weather",
        "Effect": "The user changes the weather to Hail for 5 turns."
    },
    "Haze": {
        "Type": "Ice",
        "Availability": "2/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Burst 10",
        "Effect": "All targets have their active changes to combat stages reset to 0."
    },
    "Ice Ball": {
        "Type": "Ice",
        "Availability": "At-Will",
        "Attack Modifier": "0",
        "Damage": "2d6",
        "Kind": "Physical",
        "Range": "Melee",
        "Effect": "The user can initiate Rollout at any point during land movement. Any occupant of a square the user moves through during the remainder of this movement is targeted by the attack. Any time it hits a target, the target may make an opposed Strength check (user gains +3) to stop the user's movement and end Ice Ball. If Ice Ball is not stopped, the user must continue using it each turn until stopped or on the fourth turn. Each successive use increases the damage tier by 4 steps to a maximum of Tier 12."
    },
    "Ice Beam": {
        "Type": "Ice",
        "Availability": "1/Battle",
        "Attack Modifier": "+2",
        "Damage": "3d12x2",
        "Kind": "Special",
        "Range": "Line 4",
        "Effect": "The target is frozen on 19+."
    },
    "Ice Burn": {
        "Type": "Ice",
        "Availability": "Battle",
        "Attack Modifier": "0",
        "Damage": "5d12x2",
        "Kind": "Special",
        "Range": "8",
        "Effect": "The user spends the rest of its turn charging. On the next turn, it can make an attack using Ice Burn's attack modifier, damage, and range. Ice Burn causes Burn on 15+."
    },
    "Ice Fang": {
        "Type": "Ice",
        "Availability": "At-Will",
        "Attack Modifier": "+1",
        "Damage": "4d12",
        "Kind": "Physical",
        "Range": "Melee",
        "Effect": "The target flinches on 19+. On a 19+ roll, the target is frozen."
    },
    "Ice Punch": {
        "Type": "Ice",
        "Availability": "At-Will",
        "Attack Modifier": "+2",
        "Damage": "3d10x2",
        "Kind": "Physical",
        "Range": "Melee",
        "Effect": "The target is frozen on 19+."
    },
    "Ice Shard": {
        "Type": "Ice",
        "Availability": "At-Will",
        "Attack Modifier": "+2",
        "Damage": "2d8",
        "Kind": "Physical",
        "Range": "4, Priority",
        "Effect": "None"
    },
    "Icicle Crash": {
        "Type": "Ice",
        "Availability": "1/Battle",
        "Attack Modifier": "0",
        "Damage": "3d10x2",
        "Kind": "Physical",
        "Range": "6, Burst 1",
        "Effect": "The target flinches on 15+."
    },
    "Icicle Spear": {
        "Type": "Ice",
        "Availability": "2/Battle",
        "Attack Modifier": "0",
        "Damage": "2d6",
        "Kind": "Physical",
        "Range": "6, Multistrike",
        "Effect": "None"
    },
    "Icy Wind": {
        "Type": "Ice",
        "Availability": "2/Battle",
        "Attack Modifier": "+1",
        "Damage": "4d8",
        "Kind": "Special",
        "Range": "Cone 3",
        "Effect": "The target reduces its SPD by -1 CS."
    },
    "Mist": {
        "Type": "Ice",
        "Availability": "Battle x2",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Burst 4",
        "Effect": "All allies in the area cannot be afflicted with new status conditions."
    },
    "Powder Snow": {
        "Type": "Ice",
        "Availability": "At-Will",
        "Attack Modifier": "+2",
        "Damage": "2d8",
        "Kind": "Special",
        "Range": "4, Burst 1",
        "Effect": "The target is frozen on 19+."
    },
    "Sheer Cold": {
        "Type": "Ice",
        "Availability": "Daily",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "4",
        "Effect": "Roll 1d100. On a roll of 70+ the target is reduced to 0 HP. The user adds their level x5 to the roll. The target subtracts their level x5 from the roll."
    },

    //////////////   NORMAL    ///////////////////
    "Acupressure": {
        "Type": "Normal",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Kind": "Status",
        "Range": "Melee or Self",
        "Effect": "Roll 1d8. On a roll of 1-6 increase a random STAT of the target by +2 CS. On a roll of 7, the target gains +4 on attack rolls until the end of the battle. On a roll of 8, the target gains +4 Evasion until the end of the battle."
    },
    "After You": {
        "Type": "Normal",
        "Availability": "At-Will",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "6",
        "Effect": "The target gets to take its turn immediately after the user finishes theirs."
    },
    "Assist": {
        "Type": "Normal",
        "Availability": "2/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Self",
        "Effect": "The user randomly selects a move from the movelists of all Pokémon on its team. It uses that move."
    },
    "Attract": {
        "Type": "Normal",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Kind": "Status",
        "Range": "5",
        "Effect": "If the target's gender is opposite of the user, it becomes infatuated with the user (Mind save ends)."
    },
    "Barrage": {
        "Type": "Normal",
        "Availability": "At-Will",
        "Attack Modifier": "0",
        "Damage": "1d12",
        "Kind": "Physical",
        "Range": "6, Multistrike",
        "Effect": "None"
    },
    "Baton Pass": {
        "Type": "Normal",
        "Availability": "At-Will",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Self",
        "Effect": "The user is recalled to its Pokéball. Another allied Pokémon can be sent out as a free action. The allied Pokémon receives all Buffs and CS changes the user had before being recalled."
    },
    "Belly Drum": {
        "Type": "Normal",
        "Availability": "1/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Self",
        "Effect": "The user loses 50% of its max HP. The user gains +5 ATK CS."
    },
    "Bestow": {
        "Type": "Normal",
        "Availability": "At-Will",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Melee",
        "Effect": "The user throws its held item to the target. The target can only have 1 active held item at a time (as normal). Bestow can be used as a Free Action."
    },
    "Bide": {
        "Type": "Normal",
        "Availability": "1/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Physical",
        "Range": "Burst 1, Discerning, Interrupt",
        "Effect": "The user begins storing damage. It uses its next attack action to continue biding its time. On its next set of actions the user can move and then unleash the stored damage and deal twice the amount of damage it endured in a burst 1."
    },
    "Bind": {
        "Type": "Normal",
        "Availability": "Passive",
        "Attack Modifier": "+1",
        "Kind": "Physical",
        "Effect": "The user grapples the target. The user gains +3 on all checks made to maintain a grapple. Whenever the user ends their turn and is grappling a target, that target loses 10% of their Max HP. All effects stack with Wrap and Clamp."
    },
    "Block": {
        "Type": "Normal",
        "Availability": "1/Battle",
        "Attack Modifier": "+2",
        "Kind": "Status",
        "Range": "Melee",
        "Effect": "The target is trapped and must stay adjacent to the user until the beginning of the user's next turn."
    },
    "Body Slam": {
        "Type": "Normal",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "4d10x2",
        "Kind": "Physical",
        "Range": "Melee, Rush",
        "Effect": "The target is paralyzed on 15+."
    },
    "Boomburst": {
        "Type": "Normal",
        "Availability": "1/Battle",
        "Attack Modifier": "+2",
        "Damage": "5d12x2",
        "Kind": "Special",
        "Range": "Burst 3",
        "Effect": "None"
    },
    "Camouflage": {
        "Type": "Normal",
        "Availability": "2/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Self",
        "Effect": "The user's type becomes Normal in buildings, cities, or mowed lawns. Its type becomes Ground if on sand, ruins, in a desert. Its type becomes Rock in caves or if on natural stone. Its type becomes Grass if in tall grass, forests, or thick foliage. Its type becomes Water if in a body of water."
    },
    "Captivate": {
        "Type": "Normal",
        "Availability": "1/Battle",
        "Attack Modifier": "+2",
        "Kind": "Status",
        "Range": "Cone 3, Discerning",
        "Effect": "The target reduces its Sp.ATK by -2 CS if it is the opposite gender of the user."
    },
    "Chip Away": {
        "Type": "Normal",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "4d12",
        "Kind": "Physical",
        "Range": "Melee",
        "Effect": "The user deals damage and ignores all changes to the DEF CS or Evasion of the target."
    },
    "Comet Punch": {
        "Type": "Normal",
        "Availability": "At-Will",
        "Attack Modifier": "0",
        "Damage": "1d12",
        "Kind": "Physical",
        "Range": "Melee, Multistrike",
        "Effect": "None"
    },
    "Confide": {
        "Type": "Normal",
        "Availability": "At-Will",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "4",
        "Effect": "The target's Sp.ATK is lowered 1 CS. This attack cannot miss."
    },
    "Constrict": {
        "Type": "Normal",
        "Availability": "At-Will",
        "Attack Modifier": "+2",
        "Damage": "1d10",
        "Kind": "Physical",
        "Range": "Melee",
        "Effect": "Roll d20. Constrict reduces the target's SPD by -1 CS on 19+. Constrict may be used as a Move Action against targets the user is Grappling, and automatically hits when performed this way."
    },
    "Conversion": {
        "Type": "Normal",
        "Availability": "At-Will",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Self",
        "Effect": "The user changes its type to the type of a move it knows. This change lasts until the end of battle."
    },
    "Conversion2": {
        "Type": "Normal",
        "Availability": "At-Will",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Self",
        "Effect": "The user changes its type to a random type that resists or is immune to the move type that last hit it."
    },
    "Copycat": {
        "Type": "Normal",
        "Availability": "1/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "10",
        "Effect": "The user uses the last move used in range."
    },
    "Covet": {
        "Type": "Normal",
        "Availability": "At-Will",
        "Attack Modifier": "+2",
        "Damage": "4d8",
        "Kind": "Physical",
        "Range": "Melee",
        "Effect": "If the user is not holding anything, it takes the held item of the target."
    },
    "Crush Claw": {
        "Type": "Normal",
        "Availability": "1/Battle",
        "Attack Modifier": "+1",
        "Damage": "3d10x2",
        "Kind": "Physical",
        "Range": "Melee",
        "Effect": "The target reduces its DEF by -1 CS on 11+."
    },
    "Crush Grip": {
        "Type": "Normal",
        "Availability": "Battle",
        "Attack Modifier": "+2",
        "Damage": "5d10x2",
        "Kind": "Physical",
        "Range": "Melee",
        "Effect": "The damage tier of Crush Grip is reduced by the percentage of HP the target is missing."
    },
    "Cut": {
        "Type": "Normal",
        "Availability": "At-Will",
        "Attack Modifier": "+1",
        "Damage": "2d12",
        "Kind": "Physical",
        "Range": "Melee",
        "Effect": "Cut ignores 20 of an object's DEF stat."
    },
    "Defense Curl": {
        "Type": "Normal",
        "Availability": "At-Will",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Self",
        "Effect": "The user increases its DEF by +1 CS. The user now doubles the damage it deals with Rollout or Ice Ball after other damage calculations. This bonus damage lasts until the end of battle or the user is recalled."
    },
    "Disable": {
        "Type": "Normal",
        "Availability": "1/Battle",
        "Attack Modifier": "+2",
        "Kind": "Status",
        "Range": "6",
        "Effect": "The last move the target used becomes unusable for 4 turns."
    },
    "Dizzy Punch": {
        "Type": "Normal",
        "Availability": "At-Will",
        "Attack Modifier": "+2",
        "Damage": "4d12",
        "Kind": "Physical",
        "Range": "Melee",
        "Effect": "The target is confused on 17+."
    },
    "Double Hit": {
        "Type": "Normal",
        "Availability": "2/Battle",
        "Attack Modifier": "+1",
        "Damage": "2d8",
        "Kind": "Physical",
        "Range": "Melee, Double Strike",
        "Effect": "None"
    },
    "Double Slap": {
        "Type": "Normal",
        "Availability": "At-Will",
        "Attack Modifier": "0",
        "Damage": "1d12",
        "Kind": "Physical",
        "Range": "Melee, Multistrike",
        "Effect": "None"
    },
    "Double Team": {
        "Type": "Normal",
        "Availability": "1/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Burst 3, Buff",
        "Effect": "The user creates image echoes that look identical to itself. It creates 2d4 images that occupy squares within the burst. When targeted by an attack, the attacker must roll a Perception check DC 10+ the number of echoes remaining or hit an echo by mistake."
    },
    "Double-Edge": {
        "Type": "Normal",
        "Availability": "1/Battle",
        "Attack Modifier": "+2",
        "Damage": "5d10x2",
        "Kind": "Physical",
        "Range": "Melee, Rush",
        "Effect": "The user takes recoil damage equal to 1/3 of the damage it dealt."
    },
    "Echoed Voice": {
        "Type": "Normal",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "2d8",
        "Kind": "Special",
        "Range": "3",
        "Effect": "The damage tier increases by 4 for every round Echoed Voice has been used consecutively by any user within 10 squares."
    },
    "Egg Bomb": {
        "Type": "Normal",
        "Availability": "2/Battle",
        "Attack Modifier": "-2",
        "Damage": "4d10x2",
        "Kind": "Physical",
        "Range": "5, Burst 1",
        "Effect": "None"
    },
    "Encore": {
        "Type": "Normal",
        "Availability": "2/Day",
        "Attack Modifier": "+2",
        "Kind": "Status",
        "Range": "6",
        "Effect": "The target must use the move it used last for its next 3 attack actions. It can still move and be recalled but any attack action it takes must be to use the move."
    },
    "Endeavor": {
        "Type": "Normal",
        "Availability": "2/Day",
        "Attack Modifier": "+2",
        "Damage": "See Effect",
        "Kind": "Physical",
        "Range": "Melee",
        "Effect": "The target's HP is reduced to the user's current HP."
    },
    "Endure": {
        "Type": "Normal",
        "Availability": "2/Day",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Self, Interrupt",
        "Effect": "If the user is hit by a damaging attack, Endure can be used. If the attack would reduce the user to 0 HP, it is instead reduced to 1 HP."
    },
    "Entrainment": {
        "Type": "Normal",
        "Availability": "Battle",
        "Attack Modifier": "+2",
        "Kind": "Status",
        "Range": "4",
        "Effect": "The target changes one of its abilities, chosen randomly, to one of the user's, also chosen randomly. This cannot replace Truant."
    },
    "Explosion": {
        "Type": "Normal",
        "Availability": "Daily",
        "Attack Modifier": "+2",
        "Damage": "6d10x3",
        "Kind": "Physical",
        "Range": "Burst 2",
        "Effect": "The user's HP are reduced to 0."
    },
    "Extreme Speed": {
        "Type": "Normal",
        "Availability": "2/Day",
        "Attack Modifier": "+2",
        "Damage": "3d10x2",
        "Kind": "Physical",
        "Range": "Melee, Rush, Priority",
        "Effect": "None"
    },
    "Façade": {
        "Type": "Normal",
        "Availability": "1/Battle",
        "Attack Modifier": "+2",
        "Damage": "4d12",
        "Kind": "Physical",
        "Range": "Melee",
        "Effect": "The damage tier for Façade is increased to 14 (5d12x2) if the user is poisoned, paralyzed, or burned."
    },
    "Fake Out": {
        "Type": "Normal",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "2d8",
        "Kind": "Physical",
        "Range": "Melee, Priority",
        "Effect": "If the user entered the battle or became active this round, Fake Out flinches the target."
    },
    "False Swipe": {
        "Type": "Normal",
        "Availability": "At-Will",
        "Attack Modifier": "+2",
        "Damage": "2d8",
        "Kind": "Physical",
        "Range": "Melee",
        "Effect": "The target cannot be reduced below 1 HP with this attack."
    },
    "Feint": {
        "Type": "Normal",
        "Availability": "Battle",
        "Damage": "2d8",
        "Kind": "Status",
        "Range": "Melee",
        "Effect": "Feint cannot be interrupted by Protect, Detect, Wide Guard, Quick Guard, Mat Block, Spiky Shield, King's Shield, or Baneful Bunker."
    },
    "Flail": {
        "Type": "Normal",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "2d8",
        "Kind": "Physical",
        "Range": "Melee",
        "Effect": "If the user's HP is below 70% of its max, increase the damage tier of Flail by +2 (4d8). If the user's HP is below 40%, increase the damage tier by +4 (3d10x2). If the user's HP is below 20%, increase the damage tier by +7 (4d12x2). If the user's HP is below 5%, increase the damage tier by +11 (5d8x3)."
    },
    "Flash": {
        "Type": "Normal",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Kind": "Status",
        "Range": "Burst 2 or Cone 4",
        "Effect": "The target receives -2 on attack rolls until the end of the battle.",
        "Special": "Grants Luminous"
    },
    "Focus Energy": {
        "Type": "Normal",
        "Availability": "2/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Self, Buff",
        "Effect": "The user increases its critical threat range by 3."
    },
    "Follow Me": {
        "Type": "Normal",
        "Availability": "1/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Burst 8",
        "Effect": "The user becomes the target of all enemy attacks that originate within the area until the start of the user's next turn."
    },
    "Foresight": {
        "Type": "Normal",
        "Availability": "1/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Self, Buff",
        "Effect": "The user ignores changes to the evasion of targets from moves that have affected them. The user can hit Ghost-type Pokémon with Fighting or Normal-type moves."
    },
    "Frustration": {
        "Type": "Normal",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "See Effect",
        "Kind": "Physical",
        "Range": "Melee",
        "Effect": "Frustration has a damage tier of 10 (4d10x2) if the user's loyalty is 0. For every loyalty the user has towards its trainer, reduce the damage tier by 2."
    },
    "Fury Attack": {
        "Type": "Normal",
        "Availability": "At-Will",
        "Attack Modifier": "0",
        "Damage": "1d12",
        "Kind": "Physical",
        "Range": "Melee, Multistrike",
        "Effect": "None"
    },
    "Fury Swipes": {
        "Type": "Normal",
        "Availability": "2/Battle",
        "Attack Modifier": "-1",
        "Damage": "2d6",
        "Kind": "Physical",
        "Range": "Melee, Multistrike",
        "Effect": "None"
    },
    "Giga Impact": {
        "Type": "Normal",
        "Availability": "2/Day",
        "Attack Modifier": "0",
        "Damage": "5d8x3",
        "Kind": "Physical",
        "Range": "Burst 1, Rush",
        "Effect": "This attack causes the user to lose its next set of actions."
    },
    "Glare": {
        "Type": "Normal",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Kind": "Status",
        "Range": "5",
        "Effect": "The target is paralyzed."
    },
    "Growl": {
        "Type": "Normal",
        "Availability": "At-Will",
        "Attack Modifier": "+2",
        "Kind": "Status",
        "Range": "Burst 1, Discerning",
        "Effect": "The target has its ATK reduced -1 CS."
    },
    "Growth": {
        "Type": "Normal",
        "Availability": "2/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Self",
        "Effect": "The user increases its Sp.ATK and ATK by +1 CS. If the weather is Sunny, increase them by +2 CS instead."
    },
    "Guillotine": {
        "Type": "Normal",
        "Availability": "1/Day",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Melee",
        "Effect": "Roll 1d100. On a roll of 70+ the target is reduced to 0 HP. The user adds their level x5 to the roll. The target subtracts their level x5 from the roll."
    },
    "Harden": {
        "Type": "Normal",
        "Availability": "At-Will",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Self",
        "Effect": "The user increases its DEF by +1 CS."
    },
    "Head Charge": {
        "Type": "Normal",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "5d10x2",
        "Kind": "Physical",
        "Range": "Melee, Rush, Knockback",
        "Effect": "The user takes recoil damage equal to 1/3 of the damage it dealt (before knockback). The user gains +1 on its knockback check."
    },
    "Headbutt": {
        "Type": "Normal",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "4d12",
        "Kind": "Physical",
        "Range": "Melee",
        "Effect": "Headbutt Flinches the target on 15+."
    },
    "Heal Bell": {
        "Type": "Normal",
        "Availability": "Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Burst 3",
        "Effect": "All allies in the area are cured of their status conditions."
    },
    "Helping Hand": {
        "Type": "Normal",
        "Availability": "2/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "4, Priority",
        "Effect": "The target deals 50% more damage (after other calculations) on its next attack this round."
    },
    "Hidden Power": {
        "Type": "Normal",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "4d8",
        "Kind": "Special",
        "Range": "Burst 1",
        "Effect": "Hidden Power has a damage type randomly determined for each Pokémon. Roll 1d20 and assign each Pokémon type a number, Hidden Power is permanently the type that is shown on this roll."
    },
    "Horn Attack": {
        "Type": "Normal",
        "Availability": "At-Will",
        "Attack Modifier": "+2",
        "Damage": "4d12",
        "Kind": "Physical",
        "Range": "Melee",
        "Effect": "None"
    },
    "Horn Drill": {
        "Type": "Normal",
        "Availability": "Daily",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Melee",
        "Effect": "Roll 1d100. On a roll of 70+ the target is reduced to 0 HP. The user adds their level x5 to the roll. The target subtracts their level x5 from the roll."
    },
    "Howl": {
        "Type": "Normal",
        "Availability": "At-Will",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Self",
        "Effect": "The user increases its ATK by +1 CS."
    },
    "Hyper Beam": {
        "Type": "Normal",
        "Availability": "1/Day",
        "Attack Modifier": "0",
        "Damage": "5d8x3",
        "Kind": "Special",
        "Range": "8",
        "Effect": "Hyper Beam hits 3 squares in a line within range. This attack causes the user to lose its next set of actions."
    },
    "Hyper Fang": {
        "Type": "Normal",
        "Availability": "At-Will",
        "Attack Modifier": "0",
        "Damage": "3d10x2",
        "Kind": "Physical",
        "Range": "Melee",
        "Effect": "The target flinches on 19+."
    },
    "Hyper Voice": {
        "Type": "Normal",
        "Availability": "1/Battle",
        "Attack Modifier": "+2",
        "Damage": "3d12x2",
        "Kind": "Special",
        "Range": "Burst 3, Knockback",
        "Effect": "All targets are knockedback. The user gains +1 on its knockback check."
    },
    "Judgment": {
        "Type": "Normal",
        "Availability": "Daily",
        "Attack Modifier": "+2",
        "Damage": "4d10x2",
        "Kind": "Special",
        "Range": "Burst 5",
        "Effect": "Judgment is whatever type that is most super-effective against the target."
    },
    "Last Resort": {
        "Type": "Normal",
        "Availability": "1/Battle",
        "Attack Modifier": "+2",
        "Damage": "5d12x2",
        "Kind": "Special",
        "Range": "Melee",
        "Effect": "The user can only use Last Resort if it has used all other moves this battle (or cannot use a daily because it's already been used this day)."
    },
    "Leer": {
        "Type": "Normal",
        "Availability": "At-Will",
        "Attack Modifier": "+2",
        "Kind": "Status",
        "Range": "Cone 3, Discerning",
        "Effect": "The target reduces its DEF by 1 CS."
    },
    "Lock-On": {
        "Type": "Normal",
        "Availability": "2/Day",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "10",
        "Effect": "If the user makes an attack against the target next round it cannot miss."
    },
    "Lovely Kiss": {
        "Type": "Normal",
        "Availability": "2/Battle",
        "Attack Modifier": "-2",
        "Kind": "Status",
        "Range": "Melee",
        "Effect": "The target falls asleep."
    },
    "Lucky Chant": {
        "Type": "Normal",
        "Availability": "1/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Burst 10",
        "Effect": "All allies in the area when the move is used cannot have a critical hit scored on them for 5 turns."
    },
    "Me First": {
        "Type": "Normal",
        "Availability": "2/Day",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "8, Interrupt",
        "Effect": "After the target has declared it is making an attack, but before the move is revealed, the user can initiate Me First. The target then reveals the attack it was going to make, and the user makes that same attack against the target but with +2 damage tiers."
    },
    "Mean Look": {
        "Type": "Normal",
        "Availability": "Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "6",
        "Effect": "The target becomes trapped and slowed (Mind save ends). Mean Look does not affect Ghost-type Pokémon."
    },
    "Mega Kick": {
        "Type": "Normal",
        "Availability": "2/Day",
        "Attack Modifier": "-2",
        "Damage": "5d10x2",
        "Kind": "Physical",
        "Range": "Melee",
        "Effect": "None."
    },
    "Mega Punch": {
        "Type": "Normal",
        "Availability": "At-Will",
        "Attack Modifier": "0",
        "Damage": "3d10x2",
        "Kind": "Physical",
        "Range": "Melee",
        "Effect": "None."
    },
    "Metronome": {
        "Type": "Normal",
        "Availability": "1/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Self, ?",
        "Effect": "Roll 1d20 with each Pokémon type assigned a number. After a type has been determined from the d20, roll 1d100 (or 1d20 if appropriate) to randomly select a move of the type. Metronome becomes that move for this usage. If it is a melee move the user can move up to half its movement speed before making that attack."
    },
    "Milk Drink": {
        "Type": "Normal",
        "Availability": "2/Day",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Melee or Self",
        "Effect": "The target regains 50% of its max HP."
    },
    "Mimic": {
        "Type": "Normal",
        "Availability": "2/Day",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "6",
        "Effect": "Mimic becomes the move last used by the target. The user can use this move with its normal availability, damage, modifier, and range. Mimic becomes Mimic again at the end of battle or upon being recalled."
    },
    "Mind Reader": {
        "Type": "Normal",
        "Availability": "2/Day",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "6, Buff",
        "Effect": "The user's next attack against the target before the end of the user's next turn will not miss."
    },
    "Minimize": {
        "Type": "Normal",
        "Availability": "1/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Self, Buff",
        "Effect": "The user gains +4 Evasion. The user becomes 1/3 its regular height and width, granting +3 Stealth and possibly affecting cover, where it can squeeze, or other effects."
    },
    "Morning Sun": {
        "Type": "Normal",
        "Availability": "2/Day",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Self",
        "Effect": "The user regains 50% max HP. In Sunny weather it regains 75% max HP. In rain, hail, or sandstorm it regains 25% max HP."
    },
    "Natural Gift": {
        "Type": "Normal",
        "Availability": "1/Battle",
        "Attack Modifier": "+2",
        "Damage": "See Effect",
        "Kind": "Special",
        "Range": "6, Berry",
        "Effect": "The damage and type of Natural Gift depends on the held berry of the user. Without a berry the user cannot use this move. The berry is destroyed (not consumed) upon use of Natural Gift. See appendix A for damage and effects."
    },
    "Nature Power": {
        "Type": "Normal",
        "Availability": "1/Battle",
        "Attack Modifier": "See Effect",
        "Kind": "Status",
        "Damage": "See Effect",
        "Range": "See Effect",
        "Effect": "This attack becomes a different move depending on the environment surrounding the user. Building, city, plains : Tri Attack ; Cave : Power Gem ; Sand, dirt, rock : Earth Power ; Clear Water : Water Pump ; Swamp, Marsh : Mud Bomb ; Ice : Ice Beam ; Volcano, Fire : Lava Plume ; Forest, foliage, jungle : Energy Ball ; Ruins, burial ground : Shadow Ball ; Flying, sky : Air Slash ; Snow : Frost Breath"
    },
    "Noble Roar": {
        "Type": "Normal",
        "Availability": "1/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Burst 2, Discerning",
        "Effect": "The target reduces its ATK and Sp.ATK by 1. Noble Roar cannot miss."
    },
    "Odor Sleuth": {
        "Type": "Normal",
        "Availability": "1/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "6",
        "Effect": "The user ignores changes to evasion from moves. The user can hit targets with Fighting-type and Normal-type moves, even if they are a Ghost-type. After using Odor Sleuth, the user gains +5 on Survival checks to track by scent.",
        "Special": "Grants Tracker"
    },
    "Pain Split": {
        "Type": "Normal",
        "Availability": "2/Day",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "5",
        "Effect": "The current HP of the user and the target are added together then split in half. Both the user and the target have their HP set to this value (but not above their max). This attack cannot miss."
    },
    "Pay Day": {
        "Type": "Normal",
        "Availability": "1/Battle",
        "Attack Modifier": "+2",
        "Damage": "2d8",
        "Kind": "Physical",
        "Range": "Line 4",
        "Effect": "The user creates actual, valuable coins with this move that are shot through the area. The value of the coins is equal to the level of the user x20. Out of battle, this attack can be used once per day."
    },
    "Perish Song": {
        "Type": "Normal",
        "Availability": "Daily",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Burst 10",
        "Effect": "All targets in the area will be reduced to 0 HP in 4 turns. If the battle ends, the effect ends. If a target leaves the battle (safely out of the area) or is recalled to its Poké Ball, the timer is removed from that target."
    },
    "Play Nice": {
        "Type": "Normal",
        "Availability": "2/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "6",
        "Effect": "The target reduces its ATK by 1 CS. This attack cannot miss."
    },
    "Pound": {
        "Type": "Normal",
        "Availability": "At-Will",
        "Attack Modifier": "+2",
        "Damage": "2d8",
        "Kind": "Physical",
        "Range": "Melee",
        "Effect": "None"
    },
    "Present": {
        "Type": "Normal",
        "Availability": "2/Battle",
        "Attack Modifier": "+1",
        "Damage": "See Effect",
        "Kind": "Physical",
        "Range": "4",
        "Effect": "Roll d20. On a roll of 1-8 present's damage tier is 4. On a roll of 9-14 the damage tier is 8. On a roll of 15-16 the damage tier is 12. On a roll of 17-20 the target is healed 25% of its max HP."
    },
    "Protect": {
        "Type": "Normal",
        "Availability": "1/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Self, Interrupt",
        "Effect": "If the user is hit by an attack the user may use Protect. The user is instead not hit by the move."
    },
    "Psych Up": {
        "Type": "Normal",
        "Availability": "Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status, Buff",
        "Range": "6",
        "Effect": "The user replicates all changes to the target's CS, accuracy, evasion, and critical threat range and applies them to itself (replacing any it had before)."
    },
    "Quick Attack": {
        "Type": "Normal",
        "Availability": "At-Will",
        "Attack Modifier": "+2",
        "Damage": "2d8",
        "Kind": "Physical",
        "Range": "Melee, Priority",
        "Effect": "None"
    },
    "Rage": {
        "Type": "Normal",
        "Availability": "At-Will",
        "Attack Modifier": "+2",
        "Damage": "1d12",
        "Kind": "Physical",
        "Range": "Melee",
        "Effect": "If the user is hit before the start of its next turn, it gains +1 ATK CS."
    },
    "Rapid Spin": {
        "Type": "Normal",
        "Availability": "At-Will",
        "Attack Modifier": "+2",
        "Damage": "1d12",
        "Kind": "Physical",
        "Range": "Melee",
        "Effect": "The user clears all hazards within burst 5. It also removes the effects of leech seed, trapping moves, or bind, clamp, and wrap in the same area."
    },
    "Razor Wind": {
        "Type": "Normal",
        "Availability": "1/Battle",
        "Attack Modifier": "+2",
        "Damage": "3d10x2",
        "Kind": "Special",
        "Range": "Line 6",
        "Effect": "The user spends the rest of its turn creating a powerful whirlwind. On its next turn, the user can spend an action to make an attack using Razor Wind's attack modifier, damage, and range. This attack is a critical on an 18+."
    },
    "Recover": {
        "Type": "Normal",
        "Availability": "2/Day",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Self",
        "Effect": "The user regains 50% of its max HP."
    },
    "Recycle": {
        "Type": "Normal",
        "Availability": "1/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Self",
        "Effect": "If the user consumed an item this battle, the item is recovered."
    },
    "Reflect Type": {
        "Type": "Normal",
        "Availability": "2/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Melee",
        "Effect": "The user's type(s) becomes the type(s) of the target. This attack cannot miss."
    },
    "Refresh": {
        "Type": "Normal",
        "Availability": "1/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Self",
        "Effect": "The user is cured of burn, poison, and paralysis."
    },
    "Relic Song": {
        "Type": "Normal",
        "Availability": "1/Battle",
        "Attack Modifier": "+2",
        "Damage": "3d10x2",
        "Kind": "Special",
        "Range": "Burst 3, Discerning",
        "Effect": "The target falls asleep on 19+."
    },
    "Retaliate": {
        "Type": "Normal",
        "Availability": "2/Day",
        "Attack Modifier": "+2",
        "Damage": "4d12",
        "Kind": "Physical",
        "Range": "Melee",
        "Effect": "If an ally of the user fainted this round or last, increase the damage tier by 7 (to 14)."
    },
    "Return": {
        "Type": "Normal",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "See Effect",
        "Kind": "Physical",
        "Range": "Melee",
        "Effect": "Return has a damage tier of 10 (4d10x2) if the user's loyalty is 5. For every loyalty below 5 the user has towards its trainer, reduce the damage tier by 2."
    },
    "Roar": {
        "Type": "Normal",
        "Availability": "1/Battle",
        "Attack Modifier": "+2",
        "Kind": "Status",
        "Range": "Burst 1",
        "Effect": "The target spends its next move action to move as far away from the user as possible. The target can use its other actions as normal."
    },
    "Rock Climb": {
        "Type": "Normal",
        "Availability": "2/Battle",
        "Attack Modifier": "-1",
        "Damage": "3d10x2",
        "Kind": "Physical",
        "Range": "Melee, Rush",
        "Effect": "The target is confused on 17+.",
        "Special": "The user gains +2 climb speed on stone or rock surfaces."
    },
    "Round": {
        "Type": "Normal",
        "Availability": "1/Battle",
        "Attack Modifier": "+2",
        "Damage": "4d8",
        "Kind": "Special",
        "Range": "Burst 1",
        "Effect": "If another creature has used Round this round of battle, increase the damage tier to 12."
    },
    "Safeguard": {
        "Type": "Normal",
        "Availability": "Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Burst 5",
        "Effect": "Allies in the area cannot be afflicted with burn, paralyze, poison, sleep, or confusion for 5 rounds."
    },
    "Scary Face": {
        "Type": "Normal",
        "Availability": "1/Battle",
        "Attack Modifier": "+2",
        "Kind": "Status",
        "Range": "Cone 2",
        "Effect": "The target reduces its SPD by 1 CS."
    },
    "Scratch": {
        "Type": "Normal",
        "Availability": "At-Will",
        "Attack Modifier": "+2",
        "Damage": "2d8",
        "Kind": "Physical",
        "Range": "Melee",
        "Effect": "None"
    },
    "Screech": {
        "Type": "Normal",
        "Availability": "2/Battle",
        "Attack Modifier": "0",
        "Kind": "Status",
        "Range": "Burst 1",
        "Effect": "The target reduces its DEF by 2 CS."
    },
    "Secret Power": {
        "Type": "Normal",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "4d12",
        "Kind": "Special",
        "Range": "4",
        "Effect": "The target receives a status condition determined by the terrain on 17+.\nBuilding, city, plains: Paralysis; Cave: Flinch; Sand, dirt, rock: -2 attack mod; Clear Water: -1 ATK CS; Swamp, Marsh: -1 SPEED CS; Ice, Snow: Frozen; Volcano, Fire: Burn; Forest, foliage, jungle: Sleep; Ruins, burial ground: Flinch; Flying, sky: -1 SPEED CS"
    },
    "Self-Destruct": {
        "Type": "Normal",
        "Availability": "Daily",
        "Attack Modifier": "+2",
        "Damage": "5d8x4",
        "Kind": "Physical",
        "Range": "Burst 2",
        "Effect": "The user's HP are reduced to 0."
    },
    "Sharpen": {
        "Type": "Normal",
        "Availability": "At-Will",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Self",
        "Effect": "The user increases its ATK by +1 CS."
    },
    "Shell Smash": {
        "Type": "Normal",
        "Availability": "1/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Self",
        "Effect": "The user reduces its DEF and Sp.DEF by 1 CS. It raises its ATK, Sp.ATK, and SPD by +2 CS."
    },
    "Simple Beam": {
        "Type": "Normal",
        "Availability": "Battle",
        "Attack Modifier": "+2",
        "Kind": "Status",
        "Range": "6",
        "Effect": "The target's ability becomes Simple. If it has two abilities, the user picks one to become Simple (it cannot change Truant)."
    },
    "Sing": {
        "Type": "Normal",
        "Availability": "1/Battle",
        "Attack Modifier": "-6",
        "Kind": "Status",
        "Range": "Burst 3",
        "Effect": "The target falls asleep."
    },
    "Sketch": {
        "Type": "Normal",
        "Availability": "Daily",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "6",
        "Effect": "The user permanently replaces Sketch on its movelist with the move last used by the target. Sketch cannot miss."
    },
    "Skull Bash": {
        "Type": "Normal",
        "Availability": "Battle x2",
        "Attack Modifier": "+2",
        "Damage": "3d12x3",
        "Kind": "Physical",
        "Range": "Melee, Knockback",
        "Effect": "The user spends the rest of its turn preparing in a defensive position and gains +1 DEF CS. On its next turn, the user can spend an action to make an attack using Skull Bash's attack modifier, damage, and range. This attack gives +1 to the user's knockback roll."
    },
    "Slack Off": {
        "Type": "Normal",
        "Availability": "2/Day",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Self",
        "Effect": "The user regains 50% of its max HP."
    },
    "Slam": {
        "Type": "Normal",
        "Availability": "At-Will",
        "Attack Modifier": "-2",
        "Damage": "3d10x2",
        "Kind": "Physical",
        "Range": "Melee",
        "Effect": "None"
    },
    "Slash": {
        "Type": "Normal",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "4d12",
        "Kind": "Physical",
        "Range": "Melee",
        "Effect": "The user scores a critical hit on 18+."
    },
    "Sleep Talk": {
        "Type": "Normal",
        "Availability": "1/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Self",
        "Effect": "If the user is asleep it can select a move at random from its move list and use that move."
    },
    "Smelling Salts": {
        "Type": "Normal",
        "Availability": "1/Battle",
        "Attack Modifier": "+2",
        "Damage": "4d12",
        "Kind": "Physical",
        "Range": "Melee",
        "Effect": "If the target is paralyzed, double the damage tier of Smelling Salts (to 5d10x2). The target is no longer paralyzed."
    },
    "Smokescreen": {
        "Type": "Normal",
        "Availability": "2/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Cone 4",
        "Effect": "The target receives -2 on attack rolls until the battle ends. The area becomes filled with dark mist that obscures sight into or out of the cloud."
    },
    "Snore": {
        "Type": "Normal",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "2d12",
        "Kind": "Special",
        "Range": "Cone 3",
        "Effect": "Snore can only be used if the user is sleeping. The target flinches on 15+."
    },
    "Soft-Boiled": {
        "Type": "Normal",
        "Availability": "2/Day",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Melee or Self",
        "Effect": "The target regains 50% of its max HP."
    },
    "Sonic Boom": {
        "Type": "Normal",
        "Availability": "2/Battle",
        "Attack Modifier": "-2",
        "Kind": "Special",
        "Damage": "Special",
        "Range": "6",
        "Effect": "The target takes 20 damage."
    },
    "Spike Cannon": {
        "Type": "Normal",
        "Availability": "2/Battle",
        "Attack Modifier": "0",
        "Damage": "2d6",
        "Kind": "Physical",
        "Range": "6, Multistrike",
        "Effect": "None"
    },
    "Spit Up": {
        "Type": "Normal",
        "Availability": "1/Battle",
        "Attack Modifier": "+2",
        "Damage": "See Effect",
        "Kind": "Special",
        "Range": "5",
        "Effect": "The user loses all Stockpiles (see the Stockpile move). The damage tier of Spit Up is 10 if one Stockpile is consumed, and it gets +6 damage tier per stockpile past 1 consumed."
    },
    "Splash": {
        "Type": "Normal",
        "Availability": "At-Will",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Self",
        "Effect": "The user flips. And then it flops."
    },
    "Stockpile": {
        "Type": "Normal",
        "Availability": "3/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Self",
        "Effect": "The user stores up energy as a Stockpile. The user increases their DEF and Sp.DEF by 1 for each stockpile it has gained."
    },
    "Stomp": {
        "Type": "Normal",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "4d12",
        "Kind": "Physical",
        "Range": "Melee",
        "Effect": "The target flinches on 15+."
    },
    "Strength": {
        "Type": "Normal",
        "Availability": "1/Battle",
        "Attack Modifier": "0",
        "Damage": "3d10x2",
        "Kind": "Physical",
        "Range": "Melee, Knockback",
        "Effect": "The user receives +3 on its knockback check.",
        "Special": "Grants +1 STR"
    },
    "Substitute": {
        "Type": "Normal",
        "Availability": "2/Day",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Self, Buff",
        "Effect": "The user loses 25% of its max HP and creates a Substitute with that amount of HP. The substitute looks identical to the user and appears in a square next to it. The substitute mimics the user's movements and actions, becoming indistinguishable from the user. Any time the user is hit by an attack, it can instead have the substitute take the damage. Once the substitute is reduced to 0 HP, it is destroyed."
    },
    "Super Fang": {
        "Type": "Normal",
        "Availability": "1/Battle",
        "Attack Modifier": "0",
        "Kind": "Physical",
        "Range": "Melee",
        "Effect": "The target loses 50% of their current HP."
    },
    "Supersonic": {
        "Type": "Normal",
        "Availability": "2/Battle",
        "Attack Modifier": "-2",
        "Kind": "Status",
        "Range": "Cone 3",
        "Effect": "The target is confused."
    },
    "Swagger": {
        "Type": "Normal",
        "Availability": "2/Battle",
        "Attack Modifier": "0",
        "Kind": "Status",
        "Range": "6",
        "Effect": "The target increases its ATK by 2 CS. The target is confused."
    },
    "Swallow": {
        "Type": "Normal",
        "Availability": "2/Day",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Self",
        "Effect": "The user loses all Stockpiles (see the Stockpile move). The user restores 25% max HP if one Stockpile is consumed, 50% if two are consumed, and 100% if 3 are consumed."
    },
    "Sweet Scent": {
        "Type": "Normal",
        "Availability": "1/Battle",
        "Attack Modifier": "+2",
        "Kind": "Status",
        "Range": "Burst 2, Discerning",
        "Effect": "The target reduces its Evasion by 4.",
        "Special": "Grants the Enticing Odor innate feature."
    },
    "Swift": {
        "Type": "Normal",
        "Availability": "1/Battle",
        "Attack Modifier": "N/A",
        "Damage": "4d8",
        "Kind": "Special",
        "Range": "8",
        "Effect": "Swift cannot miss. Swift hits 2 targets in range."
    },
    "Swords Dance": {
        "Type": "Normal",
        "Availability": "2/Day",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Self",
        "Effect": "The user increases its ATK by 2 CS."
    },
    "Tackle": {
        "Type": "Normal",
        "Availability": "At-Will",
        "Attack Modifier": "+2",
        "Damage": "2d8",
        "Kind": "Physical",
        "Range": "Melee",
        "Effect": "None"
    },
    "Tail Slap": {
        "Type": "Normal",
        "Availability": "2/Battle",
        "Attack Modifier": "0",
        "Damage": "2d6",
        "Kind": "Physical",
        "Range": "Melee, Multistrike",
        "Effect": "None"
    },
    "Tail Whip": {
        "Type": "Normal",
        "Availability": "At-Will",
        "Attack Modifier": "+2",
        "Kind": "Status",
        "Range": "Burst 1, Discerning",
        "Effect": "The target reduces its DEF by 1 CS."
    },
    "Take Down": {
        "Type": "Normal",
        "Availability": "2/Battle",
        "Attack Modifier": "-1",
        "Damage": "3d12x2",
        "Kind": "Physical",
        "Range": "Melee, Rush",
        "Effect": "The user takes recoil damage equal to 1/4 of the damage it dealt."
    },
    "Techno Blast": {
        "Type": "Normal",
        "Availability": "1/Battle",
        "Attack Modifier": "+2",
        "Damage": "5d10x2",
        "Kind": "Special",
        "Range": "6, Line 3",
        "Effect": "Techno Blast has a type based on the Drive inserted in the user. Techno Blast hits a Line 3 anywhere in range."
    },
    "Teeter Dance": {
        "Type": "Normal",
        "Availability": "1/Battle",
        "Attack Modifier": "+2",
        "Kind": "Status",
        "Range": "Burst 1",
        "Effect": "The target is confused."
    },
    "Thrash": {
        "Type": "Normal",
        "Availability": "1/Battle",
        "Attack Modifier": "+2",
        "Damage": "5d10x2",
        "Kind": "Physical",
        "Range": "Melee, Burst 1",
        "Effect": "The user must make an attack using this move's modifier, damage, and range again next turn after moving to ensure it affects as many enemy targets as possible. After the second use, roll d20, on 10+ the user must make this attack once more next turn. If the user misses all valid targets after any of these attacks, or cannot make an attack (due to a status), Thrash ends. When Thrash ends the user is confused."
    },
    "Tickle": {
        "Type": "Normal",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Kind": "Status",
        "Range": "Melee",
        "Effect": "The target lowers its ATK and DEF by 1 CS."
    },
    "Transform": {
        "Type": "Normal",
        "Availability": "At-Will",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "10",
        "Effect": "The user picks a target within 10 meters and assumes the form of the target. It gains all of the user's STATs, Moves, gains its Abilities, and copies its weight and height and Innate Features. Transform lasts until the user is switched out, KO'd, or until the end of the battle. If a battle or encounter is ending, the user can attempt to maintain the transformation for another 5 minutes with an Endurance check DC 15 +5 per previous attempt. The user may choose to end the transformation on its turn as a free action, regaining its previous Move List. The user's current and Max HP do not change from using Transform. Transform cannot miss. If using Transform to mimic a human, the user gains +10 on the Deception check to the disguise but cannot talk."
    },
    "Tri Attack": {
        "Type": "Normal",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "3d10x2",
        "Kind": "Special",
        "Range": "6",
        "Effect": "Roll d20. On a roll of 20, the target is paralyzed. On a roll of 19, the target is frozen. On a roll of 18, the target is burned. On a roll of 17, roll again."
    },
    "Trump Card": {
        "Type": "Normal",
        "Availability": "2/Day",
        "Attack Modifier": "+2",
        "Damage": "6d6x4",
        "Kind": "Special",
        "Range": "6",
        "Effect": "For every other move the user currently has available, reduce the damage tier of Trump Card by 4. (5d12x2 with 1 other move available, 4d10x2 with 2 others available, 4d8 with 3 other moves available, 1d10 with 4 others available)"
    },
    "Uproar": {
        "Type": "Normal",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "3d12x2",
        "Kind": "Special",
        "Range": "Burst 1",
        "Effect": "The user must make an attack using this move's modifier, damage, and range again next turn. After the second use, roll d20, on 10+ the user must make this attack once more next turn. If the user misses all valid targets after any of these attacks, Uproar ends. Creatures in a burst 5 around the user wake up with each use of this attack."
    },
    "Vice Grip": {
        "Type": "Normal",
        "Availability": "At-Will",
        "Attack Modifier": "+2",
        "Damage": "4d8",
        "Kind": "Physical",
        "Range": "Melee",
        "Effect": "The user gains +3 on grapple checks to maintain a grab. If the target is currently grabbed, increase the damage tier of Vice Grip by 2 (3d10x2)."
    },
    "Weather Ball": {
        "Type": "Normal",
        "Availability": "1/Battle",
        "Attack Modifier": "+2",
        "Damage": "2d12",
        "Kind": "Special",
        "Range": "8",
        "Effect": "Increase Weather Ball's damage tier by 5 (4d10x2) in any exceptional weather and change its type. Fire-type in Sunny weather. Water-type in Rain. Ice-type in Hail. Rock-type in a Sandstorm. Normal-type (but 4d10x2) in Fog."
    },
    "Whirlwind": {
        "Type": "Normal",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Kind": "Status",
        "Range": "Line 8, Knockback",
        "Effect": "The line is 2 wide. The user gains +4 power when determining knockback distance. If a target is knocked back into its trainer, it is forced into its Poké ball and its trainer must select a new Pokémon to deploy. Whirlwind removes any Smokescreen or Fog effects on the field."
    },
    "Wish": {
        "Type": "Normal",
        "Availability": "2/Day",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "4",
        "Effect": "The user chooses a square. At the end of the user's next turn (or when its turn would take place), any target in the square regains 50% of the user's Max HP."
    },
    "Work Up": {
        "Type": "Normal",
        "Availability": "2/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Self",
        "Effect": "Increase the user's ATK and Sp.ATK by 1 CS."
    },
    "Wrap": {
        "Type": "Normal",
        "Availability": "Passive",
        "Attack Modifier": "+1",
        "Kind": "Physical",
        "Effect": "The user grapples the target. The user gains +3 on all checks made to maintain a grapple. Whenever the user ends their turn and is grappling a target, that target loses 1/10th of their Max Hit Points. All effects stack with Bind and Clamp. See Grab (pg. 77) for more details on grappling."
    },
    "Wring Out": {
        "Type": "Normal",
        "Availability": "2/Day",
        "Attack Modifier": "+2",
        "Damage": "5d10x2",
        "Kind": "Special",
        "Range": "Melee",
        "Effect": "Reduce the damage tier of Wring Out by the percentage missing from the target's max HP."
    },
    "Yawn": {
        "Type": "Normal",
        "Availability": "1/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "4",
        "Effect": "The target falls asleep at the end of the user's next turn. This attack cannot miss."
    },  
    
    //////////////   POISON   /////////////////
    "Acid": {
        "Type": "Poison",
        "Availability": "At-Will",
        "Attack Modifier": "+2",
        "Damage": "2d8",
        "Kind": "Special",
        "Range": "Cone 3",
        "Effect": "The target reduces its DEF by 1 CS on 19+. Acid continues to deal its damage every turn for 1d3 turns to objects in the area."
    },
    "Acid Armor": {
        "Type": "Poison",
        "Availability": "2/Day",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Self, Buff",
        "Effect": "The user increases its DEF by 2 CS. The user is now in a semi-liquid form, capable of blending into water or other liquid and becoming invisible while in a body of liquid. It can also move through spaces or cracks like a liquid at 4x the movement speed cost."
    },
    "Acid Spray": {
        "Type": "Poison",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "2d8",
        "Kind": "Special",
        "Range": "4",
        "Effect": "The target reduces its Sp.DEF by 2 CS."
    },
    "Belch": {
        "Type": "Poison",
        "Availability": "1/Battle",
        "Attack Modifier": "0",
        "Damage": "5d10x2",
        "Kind": "Special",
        "Range": "Line 3",
        "Effect": "Belch cannot be used unless the user has consumed a berry during the battle."
    },
    "Clear Smog": {
        "Type": "Poison",
        "Availability": "2/Battle",
        "Attack Modifier": "N/A",
        "Damage": "2d12",
        "Kind": "Special",
        "Range": "6",
        "Effect": "The target resets all changes to its combat stages."
    },
    "Coil": {
        "Type": "Poison",
        "Availability": "1/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Self",
        "Effect": "The user increases its ATK and DEF by 1 CS. The user gains +2 on attack rolls until the end of battle."
    },
    "Cross Poison": {
        "Type": "Poison",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "4d12",
        "Kind": "Physical",
        "Range": "Melee, Line 4",
        "Effect": "The user scores a critical hit on 18+. Roll d20. On a roll of 19+ the target is poisoned."
    },
    "Gastro Acid": {
        "Type": "Poison",
        "Availability": "1/Battle",
        "Attack Modifier": "+2",
        "Kind": "Status",
        "Range": "4",
        "Effect": "The target has one of its abilities disabled until the end of battle."
    },
    "Gunk Shot": {
        "Type": "Poison",
        "Availability": "2/Day",
        "Attack Modifier": "-1",
        "Damage": "5d10x2",
        "Kind": "Physical",
        "Range": "6",
        "Effect": "The target is poisoned on 15+."
    },
    "Poison Fang": {
        "Type": "Poison",
        "Availability": "1/Battle",
        "Attack Modifier": "+2",
        "Damage": "2d12",
        "Kind": "Physical",
        "Range": "Melee",
        "Effect": "The target is badly poisoned on 11+."
    },
    "Poison Gas": {
        "Type": "Poison",
        "Availability": "1/Battle",
        "Attack Modifier": "-2",
        "Kind": "Status",
        "Range": "Cone 3",
        "Effect": "The target is poisoned."
    },
    "Poison Jab": {
        "Type": "Poison",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "3d10x2",
        "Kind": "Physical",
        "Range": "Melee",
        "Effect": "The target is poisoned on 15+."
    },
    "Poison Powder": {
        "Type": "Poison",
        "Availability": "2/Battle",
        "Attack Modifier": "-2",
        "Kind": "Status",
        "Range": "4",
        "Effect": "The target is poisoned. Grass-type Pokémon are immune to Poison Powder."
    },
    "Poison Sting": {
        "Type": "Poison",
        "Availability": "At-Will",
        "Attack Modifier": "+2",
        "Damage": "1d12",
        "Kind": "Physical",
        "Range": "6",
        "Effect": "The target is poisoned on 17+."
    },
    "Poison Tail": {
        "Type": "Poison",
        "Availability": "At-Will",
        "Attack Modifier": "+2",
        "Damage": "2d12",
        "Kind": "Physical",
        "Range": "Melee",
        "Effect": "The user scores a critical hit on 18+. Roll d20. On a roll of 19+ the target is poisoned."
    },
    "Sludge": {
        "Type": "Poison",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "4d12",
        "Kind": "Special",
        "Range": "6",
        "Effect": "The target is poisoned on 15+."
    },
    "Sludge Bomb": {
        "Type": "Poison",
        "Availability": "1/Battle",
        "Attack Modifier": "+2",
        "Damage": "3d12x2",
        "Kind": "Special",
        "Range": "6, Burst 1",
        "Effect": "The target is poisoned on 15+."
    },
    "Sludge Wave": {
        "Type": "Poison",
        "Availability": "1/Battle",
        "Attack Modifier": "+2",
        "Damage": "4d10x2",
        "Kind": "Special",
        "Range": "Line 6",
        "Effect": "The target is poisoned on 19+."
    },
    "Smog": {
        "Type": "Poison",
        "Availability": "At-Will",
        "Attack Modifier": "-3",
        "Damage": "2d6",
        "Kind": "Special",
        "Range": "Line 2",
        "Effect": "The target is poisoned on 13+."
    },
    "Toxic": {
        "Type": "Poison",
        "Availability": "2/Battle",
        "Attack Modifier": "0",
        "Kind": "Status",
        "Range": "4",
        "Effect": "The target is badly poisoned. If the user is a Poison-type Pokémon, the range increases to 8 and the attack modifier is +2."
    },
    "Toxic Spikes": {
        "Type": "Poison",
        "Availability": "2/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "6, Burst 1, Hazard",
        "Effect": "Toxic Spikes cover the ground in the burst. Any enemy moving into or out of a square covered in spikes becomes poisoned. If they move into or out of a square with two sets of toxic spikes layered on it, they become badly poisoned."
    },
    "Toxic Thread": {
        "Type": "Poison",
        "Availability": "2/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "6",
        "Effect": "The target reduces its SPD by 1 CS. The target is poisoned."
    },
    "Venom Drench": {
        "Type": "Poison",
        "Availability": "2/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Cone 4",
        "Effect": "The target lowers its ATK, Sp.ATK, and SPD by 1 CS if it is poisoned."
    },
    "Venoshock": {
        "Type": "Poison",
        "Availability": "1/Battle",
        "Attack Modifier": "+2",
        "Damage": "4d12",
        "Kind": "Special",
        "Range": "6",
        "Effect": "If the target is poisoned, increase Venoshock's damage tier to 12 (5d10x2)."
    },

    ////////////   Psychic    /////////////
    "Agility": {
        "Type": "Psychic",
        "Availability": "1/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Self",
        "Effect": "The user increases its SPD by 2 CS. Increases movement speed by 2 each."
    },
    "Ally Switch": {
        "Type": "Psychic",
        "Availability": "1/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "10, Interrupt",
        "Effect": "The user switches places with an ally within range. If the ally was being targeted by an attack, the user becomes the new target for that attack."
    },
    "Amnesia": {
        "Type": "Psychic",
        "Availability": "2/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Self",
        "Effect": "The user increases their Sp.DEF by 2 CS."
    },
    "Barrier": {
        "Type": "Psychic",
        "Availability": "1/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Hazard",
        "Effect": "The user can choose one of two options: 1) Wrap themselves in a barrier, increasing their DEF by 2 CS. 2) Place 3 barriers in adjacent squares. These barriers have DEF and Sp.DEF equal to the user's Sp.ATK and HP equal to the user's Sp.DEF. The barriers act like a large, transparent, impassable wall that fills the square they are in, allowing creatures to take cover behind them as a normal wall of equal size. If an attack misses a target due to the Evasion granted by this cover, the wall takes the hit instead and is destroyed when reduced to 0 HP."
    },
    "Calm Mind": {
        "Type": "Psychic",
        "Availability": "2/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Self",
        "Effect": "The user increases their Sp.ATK and Sp.DEF by 1 CS."
    },
    "Confusion": {
        "Type": "Psychic",
        "Availability": "At-Will",
        "Attack Modifier": "+2",
        "Damage": "2d12",
        "Kind": "Special",
        "Range": "6",
        "Effect": "The target is confused on 19+."
    },
    "Cosmic Power": {
        "Type": "Psychic",
        "Availability": "2/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Self",
        "Effect": "The target increases its DEF and Sp.DEF by 1 CS."
    },
    "Dream Eater": {    
        "Type": "Psychic",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "4d10x2",
        "Kind": "Special",
        "Range": "Melee",
        "Effect": "Dream Eater can only be used against a sleeping target. The user regains HP equal to 50% of the damage dealt."
    },
    "Extrasensory": {
        "Type": "Psychic",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "3d10x2",
        "Kind": "Special",
        "Range": "5",
        "Effect": "The target flinches on 19+."
    },
    "Future Sight": {
        "Type": "Psychic",
        "Availability": "1/Battle",
        "Attack Modifier": "N/A",
        "Damage": "5d10x2",
        "Kind": "Special",
        "Range": "10",
        "Effect": "The user chooses a target within range. At the beginning of the user's turn after next, the target takes the damage from Future Sight (it cannot miss unless the target is recalled or already KO'd)."
    },
    "Gravity": {
        "Type": "Psychic",
        "Availability": "2/Day",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Burst 10",
        "Effect": "All attacks against creatures in the burst gain +4 on attack rolls. All levitating or flying Pokémon in the burst fall to the ground. Moves that move the user or the target in this area do not cause this movement."
    },
    "Guard Split": {
        "Type": "Psychic",
        "Availability": "1/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "4",
        "Effect": "The user and the target add their Defense and Sp.Defense stats (ignoring CS changes) and divide that number by 4. The result is their new Defense and Sp.Defense scores."
    },
    "Guard Swap": {
        "Type": "Psychic",
        "Availability": "1/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "4",
        "Effect": "The user switches all changes to DEF and Sp.DEF CS with the target."
    },
    "Heal Block": {
        "Type": "Psychic",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Kind": "Status",
        "Range": "Burst 2",
        "Effect": "Enemies in the burst cannot regain HP (Mind save ends)."
    },
    "Heal Pulse": {
        "Type": "Psychic",
        "Availability": "2/Day",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "4",
        "Effect": "The target regains 50% max HP."
    },
    "Healing Wish": {
        "Type": "Psychic",
        "Availability": "Daily",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "6",
        "Effect": "The user faints and enters its Poké Ball. Its trainer can send out a new Pokémon as a free action. The newly deployed Pokémon regains 50% max HP and has all status conditions removed."
    },
    "Heart Stamp": {
        "Type": "Psychic",
        "Availability": "2/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "5",
        "Effect": "The target flinches on 15+."
    },
    "Heart Swap": {
        "Type": "Psychic",
        "Availability": "2/Day",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "6",
        "Effect": "The user and the target switch all CS modifications."
    },
    "Hypnosis": {
        "Type": "Psychic",
        "Availability": "1/Battle",
        "Attack Modifier": "-2",
        "Kind": "Status",
        "Range": "5",
        "Effect": "The target falls asleep."
    },
    "Imprison": {
        "Type": "Psychic",
        "Availability": "2/Day",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Burst 10",
        "Effect": "Enemies in the area cannot use attacks known by the user."
    },
    "Kinesis": {
        "Type": "Psychic",
        "Availability": "2/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "6",
        "Effect": "The target gets -4 on attack rolls until the end of the battle."
    },
    "Light Screen": {
        "Type": "Psychic",
        "Availability": "1/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Melee",
        "Effect": "The user chooses 4 adjacent squares to be filled with a light screen. Any enemy special attack passing through a light screen deals half damage (after other damage calculations). After a screen reduces damage three times, it fades."
    },
    "Lunar Dance": {
        "Type": "Psychic",
        "Availability": "Daily",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "8",
        "Effect": "The user is reduced to 0 HP. If wild, the user disappears in a beam of moonlight after choosing one target to regain 100% HP and be cured of all status conditions. If owned by a trainer, the Pokémon returns to its Poké Ball and another is sent out as a free action. The newly deployed Pokémon regains 100% of its HP and is cured of all status conditions."
    },      
    "Luster Purge": {
        "Type": "Psychic",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "4d12",
        "Kind": "Special",
        "Range": "Line 6",
        "Effect": "The target reduces its Sp.Def on 11+."
    },
    "Magic Coat": {
        "Type": "Psychic",
        "Availability": "1/Day",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Interrupt",
        "Effect": "The user reflects any status moves back on their user."
    },
    "Magic Room": {
        "Type": "Psychic",
        "Availability": "2/Day",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Burst 10",
        "Effect": "All targets in the burst cannot use items or gain the benefits of held items."
    },
    "Meditate": {
        "Type": "Psychic",
        "Availability": "At-Will",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Self",
        "Effect": "The user increases its ATK by 1 CS."
    },
    "Miracle Eye": {
        "Type": "Psychic",
        "Availability": "2/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "6",
        "Effect": "Attacks against the target ignore positive changes to its Evasion. The target can be hit by Psychic-type moves even if it would otherwise be immune to them."
    },
    "Mirror Coat": {
        "Type": "Psychic",
        "Availability": "2/Day",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Any, Interrupt",
        "Effect": "The user can activate this move after being hit by a special move. The user deals twice as much damage as it just received to the attacker."
    },
    "Mist Ball": {
        "Type": "Psychic",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "4d12",
        "Kind": "Special",
        "Range": "8, Burst 1",
        "Effect": "The target reduces its Sp.Atk on 11+."
    },
    "Power Split": {
        "Type": "Psychic",
        "Availability": "1/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "4",
        "Effect": "The user and the target add their Attack and Sp.Attack stats (ignoring CS changes) and divide that number by 4. The result is their new Attack and Sp.Attack scores."
    },
    "Power Swap": {
        "Type": "Psychic",
        "Availability": "1/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "4",
        "Effect": "The user switches all changes to ATK and Sp.ATK CS with the target."
    },
    "Power Trick": {
        "Type": "Psychic",
        "Availability": "1/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Self, Buff",
        "Effect": "The user switches its Attack and Defense (ignoring CS changes)."
    },
    "Psybeam": {
        "Type": "Psychic",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "4d12",
        "Kind": "Special",
        "Range": "Line 4",
        "Effect": "The target is confused on 19+."
    },
    "Psychic": {
        "Type": "Psychic",
        "Availability": "1/Battle",
        "Attack Modifier": "+2",
        "Damage": "3d12x2",
        "Kind": "Special",
        "Range": "5, knockback",
        "Effect": "The user applies INT to the knockback instead of STR. The user gains +1 on its knockback roll and can decide the direction of the knockback. The target reduces its Sp.DEF by 1 CS on 19+. Grants Telekinetic."
    },
    "Psycho Boost": {
        "Type": "Psychic",
        "Availability": "1/Battle",
        "Attack Modifier": "0",
        "Damage": "5d12x2",
        "Kind": "Special",
        "Range": "8, Burst 3",
        "Effect": "The user reduces its Sp.ATK by 2 CS."
    },
    "Psycho Cut": {
        "Type": "Psychic",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "4d12",
        "Kind": "Physical",
        "Range": "Melee",
        "Effect": "The user scores a critical hit on 18+."
    },
    "Psycho Shift": {
        "Type": "Psychic",
        "Availability": "1/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "5",
        "Effect": "The user removes all status conditions from itself and inflicts them on the target."
    },
    "Psyshock": {
        "Type": "Psychic",
        "Availability": "1/Battle",
        "Attack Modifier": "+2",
        "Damage": "3d10x2",
        "Kind": "Special",
        "Range": "4",
        "Effect": "The target uses its Defense stat instead of its Sp.Defense stat when calculating damage from Psyshock."
    },
    "Psystrike": {
        "Type": "Psychic",
        "Availability": "1/Battle",
        "Attack Modifier": "+2",
        "Damage": "4d10x2",
        "Kind": "Special",
        "Range": "4",
        "Effect": "The target uses its Defense stat instead of its Sp.Defense stat when calculating damage from Psystrike."
    },
    "Psywave": {
        "Type": "Psychic",
        "Availability": "1/Battle",
        "Attack Modifier": "-1",
        "Kind": "Special",
        "Range": "Line 3",
        "Effect": "The target takes damage equal to the user's level x 5 x R. Roll d20, on a roll of 1-4 R is .5, on a roll of 5-8 R is .75, on a roll of 9-12 R is 1, on a roll of 13-17 R is 1.25, on a roll of 18-20 R is 1.5."
    },
    "Reflect": {
        "Type": "Psychic",
        "Availability": "1/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Melee",
        "Effect": "The user chooses 4 adjacent squares to be filled with a reflecting barrier. Any enemy physical attack passing through a reflecting barrier deals half damage (after other damage calculations). After reducing damage three times, the barrier fades."
    },
    "Rest": {
        "Type": "Psychic",
        "Availability": "1/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Self",
        "Effect": "The user falls asleep. The user regains 100% max HP."
    },
    "Role Play": {
        "Type": "Psychic",
        "Availability": "2/Day",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "4",
        "Effect": "The user replaces one of its abilities with one of the abilities of the target."
    },
    "Skill Swap": {
        "Type": "Psychic",
        "Availability": "1/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "3",
        "Effect": "The user exchanges one of its abilities with one of the abilities of the target. If the target is recalled, the user regains its original ability."
    },
    "Stored Power": {
        "Type": "Psychic",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "1d12",
        "Kind": "Special",
        "Range": "8",
        "Effect": "Increase the damage tier of Stored Power by 2 for every positive change to the user's CS."
    },
    "Synchronoise": {
        "Type": "Psychic",
        "Availability": "1/Battle",
        "Attack Modifier": "+2",
        "Damage": "5d10x2",
        "Kind": "Special",
        "Range": "Burst 3",
        "Effect": "Only targets that share a type with the user will take damage."
    },
    "Telekinesis": {
        "Type": "Psychic",
        "Availability": "2/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "4",
        "Effect": "The user grabs the target (see special below). Special: Grants Telekinetic. Any creature that knows Telekinesis can grapple targets up to 4 squares away and uses its INT instead of STR for grapple checks."
    },
    "Teleport": {
        "Type": "Psychic",
        "Availability": "1/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Self, Interrupt",
        "Effect": "The user Teleports up to X squares, where X is its INT+2. Teleport can be used as an Interrupt at any time. Moves that targeted Teleport's user miss, but might hit objects in the surrounding squares. When used out of battle, Teleport has a range of X km, where X is the user's INT. When teleporting, you can only teleport to areas you can see or that you are familiar with."
    },
    "Trick": {
        "Type": "Psychic",
        "Availability": "1/Battle",
        "Attack Modifier": "+2",
        "Kind": "Status",
        "Range": "Melee",
        "Effect": "The user switches held items with the target."
    },
    "Trick Room": {
        "Type": "Psychic",
        "Availability": "2/Day",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Burst 10",
        "Effect": "Beginning at the end of the current round all creatures in the area reverse their initiative order. The lowest initiative goes first, and the fastest initiative goes last."
    },
    "Wonder Room": {
        "Type": "Psychic",
        "Availability": "2/Day",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Burst 10",
        "Effect": "All targets in the area switch their Defense and Sp.Defense stats (ignoring CS changes)."
    },
    "Zen Headbutt": {
        "Type": "Psychic",
        "Availability": "2/Battle",
        "Attack Modifier": "0",
        "Damage": "3d10x2",
        "Kind": "Physical",
        "Range": "Melee",
        "Effect": "The target flinches on 17+."
    },

    ////////////   ROCK   /////////////
    "Ancient Power": {
        "Type": "Rock",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "4d8",
        "Kind": "Special",
        "Range": "6",
        "Effect": "The user increases its ATK, DEF, Sp.ATK, Sp.DEF, and SPD by 1 CS on 19+."
    },
    "Head Smash": {
        "Type": "Rock",
        "Availability": "2/Day",
        "Attack Modifier": "-1",
        "Damage": "5d8x3",
        "Kind": "Physical",
        "Range": "Melee, knockback",
        "Effect": "The user gains +3 on its knockback roll. The user takes recoil damage equal to 1/2 of the damage it dealt (before knockback)."
    },
    "Power Gem": {
        "Type": "Rock",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "3d10x2",
        "Kind": "Special",
        "Range": "Line 4",
        "Effect": "None"
    },
    "Rock Blast": {
        "Type": "Rock",
        "Availability": "2/Battle",
        "Attack Modifier": "-1",
        "Damage": "2d6",
        "Kind": "Physical",
        "Range": "6, Multistrike",
        "Effect": "None",
        "Special": "Grants Earthmaker"
    },
    "Rock Polish": {
        "Type": "Rock",
        "Availability": "1/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Self",
        "Effect": "The user increases its SPD by 2 CS."
    },
    "Rock Slide": {
        "Type": "Rock",
        "Availability": "1/Battle",
        "Attack Modifier": "0",
        "Damage": "3d10x2",
        "Kind": "Physical",
        "Range": "6, Burst 3",
        "Effect": "The target flinches on 15+. The burst area is now difficult terrain."
    },
    "Rock Throw": {
        "Type": "Rock",
        "Availability": "At-Will",
        "Attack Modifier": "0",
        "Damage": "2d12",
        "Kind": "Physical",
        "Range": "6",
        "Effect": "None"
    },
    "Rock Tomb": {
        "Type": "Rock",
        "Availability": "2/Battle",
        "Attack Modifier": "-1",
        "Damage": "4d8",
        "Kind": "Physical",
        "Range": "3",
        "Effect": "The target reduces its SPD by 1 CS and becomes immobilized (Body save ends).",
        "Special": "Grants Earthmaker"
    },
    "Rock Wrecker": {
        "Type": "Rock",
        "Availability": "2/Day",
        "Attack Modifier": "0",
        "Damage": "5d8x3",
        "Kind": "Physical",
        "Range": "4, Burst 1",
        "Effect": "This attack causes the user to lose its next set of actions.",
        "Special": "Grants Earthmaker"
    },
    "Rollout": {
        "Type": "Rock",
        "Availability": "2/Battle",
        "Attack Modifier": "0",
        "Damage": "2d6",
        "Kind": "Physical",
        "Range": "Melee",
        "Effect": "The user can initiate Rollout at any point during movement. Any occupant of a square the user moves through during the remainder of this movement is targeted by the attack. Any time it hits a target, the target may make an opposed STR check (the user gains +3 on this check) to end the user's movement and end Rollout. If Rollout has not been ended, the user must continue to use Rollout on each of its turns until they are stopped or on the fourth turn of using Rollout. Each successive use of Rollout increases Rollout's Damage tier by 4 steps to a maximum of Tier 12."
    },
    "Sandstorm": {
        "Type": "Rock",
        "Availability": "2/Day",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Weather",
        "Effect": "The user changes the weather to a Sandstorm."
    },
    "Smack Down": {
        "Type": "Rock",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "2d12",
        "Kind": "Physical",
        "Range": "8",
        "Effect": "The target is hit into the ground and cannot use fly speeds or levitate until it is recalled or it spends an action regaining its footing. Pokémon can be hit by Ground-type moves if they have not recovered from Smack Down."
    },
    "Stealth Rock": {
        "Type": "Rock",
        "Availability": "2/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "8, Burst 3, Hazard",
        "Effect": "Stealth Rocks cover the ground in the burst. Any enemy moving into or out of a square covered in rocks takes 5% of its max HP in damage. Multiple uses of Stealth Rock can stack in a single area."
    },
    "Stone Edge": {
        "Type": "Rock",
        "Availability": "1/Battle",
        "Attack Modifier": "-1",
        "Damage": "4d10x2",
        "Kind": "Physical",
        "Range": "8, Groundsource",
        "Effect": "The user scores a critical hit on 17+."
    },
    "Wide Guard": {
        "Type": "Rock",
        "Availability": "1/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Interrupt",
        "Effect": "If the user intercepts an attack for an ally, Wide Guard may be used as an interrupt to allow the user to intercept the attack for an additional ally. The additional ally must be adjacent to the first. The user and protected allies suffer no effects of the attack."
    },

    /////////   STEEL   ///////////
    "Autotomize": {
        "Type": "Steel",
        "Availability": "2/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Self",
        "Effect": "The user raises its SPD by 2 CS. The user reduces its weight by 50%."
    },
    "Bullet Punch": {
        "Type": "Steel",
        "Availability": "At-Will",
        "Attack Modifier": "+2",
        "Damage": "2d8",
        "Kind": "Physical",
        "Range": "Melee, Priority",
        "Effect": "None"
    },
    "Doom Desire": {
        "Type": "Steel",
        "Availability": "1/Battle",
        "Attack Modifier": "N/A",
        "Damage": "5d12x2",
        "Kind": "Special",
        "Range": "10",
        "Effect": "The user chooses a target within range. At the beginning of the user's turn after next, the target takes the damage from Doom Desire (it cannot miss unless the target is recalled or already KO'd)."
    },
    "Flash Cannon": {
        "Type": "Steel",
        "Availability": "1/Battle",
        "Attack Modifier": "+2",
        "Damage": "3d10x2",
        "Kind": "Special",
        "Range": "Line 6",
        "Effect": "The target reduces its Sp.DEF by 1 on 19+."
    },
    "Gear Grind": {
        "Type": "Steel",
        "Availability": "2/Battle",
        "Attack Modifier": "+1",
        "Damage": "2d12",
        "Kind": "Physical",
        "Range": "Melee, Double Strike",
        "Effect": "None"
    },
    "Gyro Ball": {
        "Type": "Steel",
        "Availability": "1/Battle",
        "Attack Modifier": "+2",
        "Damage": "See Effect",
        "Kind": "Physical",
        "Range": "Melee",
        "Effect": "Gyro Ball's damage tier = 3 x (TargetSPD / UserSPD), rounded down."
    },
    "Heavy Slam": {
        "Type": "Steel",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "2d8",
        "Kind": "Physical",
        "Range": "Melee",
        "Effect": "The user compares its weight with the target's weight. If the target weighs 50%-30% as much as the user, increase Heavy Slam's damage tier by 3. If the target weighs 15%-29% as much as the user, increase the damage tier by 6. If the target weighs 1-14% as much as the user, increase the damage tier by 9."
    },
    "Iron Defense": {
        "Type": "Steel",
        "Availability": "2/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Self",
        "Effect": "The user raises its DEF by 2 CS."
    },
    "Iron Head": {
        "Type": "Steel",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "3d10x2",
        "Kind": "Physical",
        "Range": "Melee",
        "Effect": "The target flinches on 15+."
    },
    "Iron Tail": {
        "Type": "Steel",
        "Availability": "2/Battle",
        "Attack Modifier": "-2",
        "Damage": "4d10x2",
        "Kind": "Physical",
        "Range": "Melee",
        "Effect": "The target reduces its DEF by 2 CS on 15+."
    },
    "King's Shield": {
        "Type": "Steel",
        "Availability": "1/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Self, Interrupt",
        "Effect": "If the user is hit by an attack, the user may use King's Shield. The user is instead not hit by the move. If the attack was melee, the attacker reduces its ATK by 2 CS."
    },
    "Magnet Bomb": {
        "Type": "Steel",
        "Availability": "2/Battle",
        "Attack Modifier": "N/A",
        "Damage": "4d8",
        "Kind": "Physical",
        "Range": "6",
        "Effect": "This attack cannot miss.",
        "Special": "Grants Magnetic"
    },
    "Metal Burst": {
        "Type": "Steel",
        "Availability": "2/Day",
        "Attack Modifier": "N/A",
        "Damage": "See Effect",
        "Kind": "Physical",
        "Range": "4",
        "Effect": "The target takes damage equal to 1.5x the damage the user took from its last damaging attack."
    },
    "Metal Claw": {
        "Type": "Steel",
        "Availability": "At-Will",
        "Attack Modifier": "+1",
        "Damage": "2d12",
        "Kind": "Physical",
        "Range": "Melee",
        "Effect": "The user raises its ATK by 1 CS on 19+."
    },
    "Metal Sound": {
        "Type": "Steel",
        "Availability": "2/Battle",
        "Attack Modifier": "0",
        "Kind": "Status",
        "Range": "Cone 3",
        "Effect": "The target reduces its Sp.DEF by 2 CS."
    },
    "Meteor Mash": {
        "Type": "Steel",
        "Availability": "1/Battle",
        "Attack Modifier": "0",
        "Damage": "3d12x2",
        "Kind": "Physical",
        "Range": "Melee, Rush",
        "Effect": "The user raises its ATK by 1 CS on 17+."
    },
    "Mirror Shot": {
        "Type": "Steel",
        "Availability": "2/Battle",
        "Attack Modifier": "-1",
        "Damage": "4d12",
        "Kind": "Special",
        "Range": "Cone 4",
        "Effect": "The target receives -2 on attack rolls on 15+."
    },
    "Shift Gear": {
        "Type": "Steel",
        "Availability": "2/Day",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Self",
        "Effect": "The user raises its SPD by 2 CS and its ATK by 1 CS."
    },
    "Steel Wing": {
        "Type": "Steel",
        "Availability": "2/Battle",
        "Attack Modifier": "+1",
        "Damage": "4d12",
        "Kind": "Physical",
        "Range": "Melee, Rush, Line 3",
        "Effect": "When this move is used, it targets all squares in a line 3. The user moves to the square at the end of that line. The user raises its DEF by 1 CS on 19+."
    },

    ///////////   WATER   /////////////
    "Aqua Jet": {
        "Type": "Water",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "2d8",
        "Kind": "Physical",
        "Range": "Melee, Priority",
        "Effect": "None"
    },
    "Aqua Ring": {
        "Type": "Water",
        "Availability": "1/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Self, Buff",
        "Effect": "The user regains 10% of its max HP at the end of its turn. This lasts until the end of battle or it is recalled."
    },
    "Aqua Tail": {
        "Type": "Water",
        "Availability": "1/Battle",
        "Attack Modifier": "0",
        "Damage": "3d12x2",
        "Kind": "Physical",
        "Range": "Melee",
        "Effect": "None"
    },
    "Brine": {
        "Type": "Water",
        "Availability": "1/Battle",
        "Attack Modifier": "+2",
        "Damage": "4d12",
        "Kind": "Special",
        "Range": "6",
        "Effect": "If the target's HP is below 50% of its max, increase Brine's Damage Tier to 12 (4d10x2)."
    },
    "Bubble": {
        "Type": "Water",
        "Availability": "At-Will",
        "Attack Modifier": "+2",
        "Damage": "2d8",
        "Kind": "Special",
        "Range": "4",
        "Effect": "The target reduces its SPD by 1 CS on 19+."
    },
    "Bubble Beam": {
        "Type": "Water",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "4d12",
        "Kind": "Special",
        "Range": "Line 4",
        "Effect": "The target reduces its SPD on 19+."
    },
    "Clamp": {
        "Type": "Water",
        "Availability": "Passive",
        "Kind": "Physical",
        "Attack Modifier": "+1",
        "Effect": "The user grapples the target. The user gains +3 on all checks made to maintain a grapple. Whenever the user ends their turn and is grappling a target, that target loses 10% of their max HP. All effects stack with Bind and Wrap."
    },
    "Crabhammer": {
        "Type": "Water",
        "Availability": "2/Battle",
        "Attack Modifier": "0",
        "Damage": "4d10x2",
        "Kind": "Physical",
        "Range": "Melee",
        "Effect": "The user scores a critical hit on 18+."
    },
    "Dive": {
        "Type": "Water",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "3d10x2",
        "Kind": "Physical",
        "Range": "Burst 1",
        "Effect": "This move can only be used in water. The user doubles its swim speed for this turn and next but cannot make attacks this round. On its next turn, the user can make an attack using Dive's attack modifier, range, and damage."
    },
    "Hydro Cannon": {
        "Type": "Water",
        "Availability": "2/Day",
        "Attack Modifier": "0",
        "Damage": "5d8x3",
        "Kind": "Special",
        "Range": "Line 8",
        "Effect": "This attack causes the user to lose its next set of actions."
    },
    "Hydro Pump": {
        "Type": "Water",
        "Availability": "1/Battle",
        "Attack Modifier": "0",
        "Damage": "4d12x2",
        "Kind": "Special",
        "Range": "Line 6, Knockback",
        "Effect": "None"
    },
    "Muddy Water": {
        "Type": "Water",
        "Availability": "1/Battle",
        "Attack Modifier": "-1",
        "Damage": "3d12x2",
        "Kind": "Special",
        "Range": "Line 3",
        "Effect": "The line is two squares wide. The target receives -2 on attack rolls on 15+."
    },
    "Octazooka": {
        "Type": "Water",
        "Availability": "2/Battle",
        "Attack Modifier": "+1",
        "Damage": "4d12",
        "Kind": "Special",
        "Range": "7",
        "Effect": "The target receives -2 on attack rolls on 11+."
    },
    "Rain Dance": {
        "Type": "Water",
        "Availability": "2/Day",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Weather",
        "Effect": "The user changes the weather to Rain."
    },
    "Razor Shell": {
        "Type": "Water",
        "Availability": "2/Battle",
        "Attack Modifier": "+1",
        "Damage": "4d12",
        "Kind": "Physical",
        "Range": "Melee",
        "Effect": "The target reduces its DEF by 1 CS on 11+."
    },
    "Scald": {
        "Type": "Water",
        "Availability": "2/Battle",
        "Attack Modifier": "+2",
        "Damage": "3d10x2",
        "Kind": "Special",
        "Range": "4",
        "Effect": "The target gets burned on 15+."
    },
    "Soak": {
        "Type": "Water",
        "Availability": "2/Day",
        "Attack Modifier": "+2",
        "Kind": "Status",
        "Range": "5",
        "Effect": "The target changes its types to Water-type."
    },
    "Surf": {
        "Type": "Water",
        "Availability": "1/Day",
        "Attack Modifier": "+2",
        "Damage": "3d12x2",
        "Kind": "Special",
        "Range": "Line 4, Knockback",
        "Effect": "The line is 3 squares wide. The user can decide to ride the wave and move to any square at the end of the line. The user increases its Swim speed by 2. Grants Wellspring."
    },
    "Water Gun": {
        "Type": "Water",
        "Availability": "At-Will",
        "Attack Modifier": "+2",
        "Damage": "2d8",
        "Kind": "Special",
        "Range": "5",
        "Effect": "None",
        "Special": "Grants Wellspring"
    },
    "Water Pledge": {
        "Type": "Water",
        "Availability": "Battle x2",
        "Attack Modifier": "+2",
        "Damage": "3d10x2",
        "Kind": "Special",
        "Range": "6",
        "Effect": "This move can be used either as an attack or a pledge. When used as an attack, it deals 3d10x2 damage, but if a Fire Pledge has been made this turn by an ally within 10 squares, Water Pledge deals 5d8x3 damage and creates a rainbow over the target. All allies within 10 squares of the rainbow have their effect ranges doubled for 4 rounds. If used as a Pledge, it boosts the effects of a Grass Pledge."
    },
    "Water Pulse": {
        "Type": "Water",
        "Availability": "At-Will",
        "Attack Modifier": "+2",
        "Damage": "4d8",
        "Kind": "Special",
        "Range": "8",
        "Effect": "The target is confused on 17+."
    },
    "Water Shuriken": {
        "Type": "Water",
        "Availability": "2/Battle",
        "Attack Modifier": "0",
        "Damage": "1d12",
        "Kind": "Physical",
        "Range": "6, Multistrike, Priority",
        "Effect": "None"
    },
    "Water Sport": {
        "Type": "Water",
        "Availability": "1/Battle",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Burst 3, Buff",
        "Effect": "The target takes 50% less damage from Fire-type moves for 5 rounds. This buff lasts for 5 rounds.",
        "Special": "Grants Fountain"
    },
    "Water Spout": {
        "Type": "Water",
        "Availability": "1/Day",
        "Attack Modifier": "0",
        "Damage": "5d8x3",
        "Kind": "Special",
        "Range": "Burst 1",
        "Effect": "Reduce the damage tier of Water Spout by the percent the user is below its max HP (rounded down)."
    },
    "Waterfall": {
        "Type": "Water",
        "Availability": "1/Battle",
        "Attack Modifier": "+2",
        "Damage": "3d10x2",
        "Kind": "Physical",
        "Range": "Melee, Rush, Line 3",
        "Effect": "When this move is used, it targets all squares in a line of 3. The user moves to the square at the end of that line. The target flinches on 17+."
    },
    "Whirlpool": {
        "Type": "Water",
        "Availability": "2/Battle",
        "Attack Modifier": "0",
        "Damage": "2d8",
        "Kind": "Special",
        "Range": "3",
        "Effect": "The target becomes engulfed, taking 1/8 of its max HP at the end of each turn. While engulfed, the Pokémon cannot be recalled to its Poké Ball and has its movement speeds reduced by half. After taking the damage each turn, the target can make a Reflex save to end these effects."
    },
    "Withdraw": {
        "Type": "Water",
        "Availability": "At-Will",
        "Attack Modifier": "N/A",
        "Kind": "Status",
        "Range": "Self",
        "Effect": "The user raises its DEF by 1 CS. Once per day, the user can use Withdraw as an interrupt that functions like Protect."
    }
}
const mt = { //// CLAUSULADO, LAS MT's Y HM's CAMBIAN DE UNA GEN A OTRA
    "TM01": "Hone Claws",
    "TM02": "Dragon Claw",
    "TM03": "Psyshock",
    "TM04": "Calm Mind",
    "TM05": "Roar",
    "TM06": "Toxic",
    "TM07": "Hail",
    "TM08": "Bulk Up",
    "TM09": "Venoshock",
    "TM10": "Hidden Power",
    "TM11": "Sunny Day",
    "TM12": "Taunt",
    "TM13": "Ice Beam",
    "TM14": "Blizzard",
    "TM15": "Hyper Beam",
    "TM16": "Light Screen",
    "TM17": "Protect",
    "TM18": "Rain Dance",
    "TM19": "Roost",
    "TM20": "Safeguard",
    "TM21": "Frustation",
    "TM22": "Solar Beam",
    "TM23": "Smack Down",
    "TM24": "Thunderbolt",
    "TM25": "Thunder",
    "TM26": "Earthquake",
    "TM27": "Return",
    "TM28": "Dig",
    "TM29": "Psychic",
    "TM30": "Shadow Ball",
    "TM31": "Brick Break",
    "TM32": "Double Team",
    "TM33": "Reflect",
    "TM34": "Sludge Wave",
    "TM35": "Flamethrower",
    "TM36": "Sludge Bomb",
    "TM37": "Sandstorm",
    "TM38": "Fire Blast",
    "TM39": "Rock Tomb",
    "TM40": "Aerial Ace",
    "TM41": "Torment",
    "TM42": "Facade",
    "TM43": "Flame Charge",
    "TM44": "Rest",
    "TM45": "Attract",
    "TM46": "Thief",
    "TM47": "Low Sweep",
    "TM48": "Round",
    "TM49": "Echoed Voice",
    "TM50": "Overheat",
    "TM51": "Steel Wing",
    "TM52": "Focus Blast",
    "TM53": "Energy Ball",
    "TM54": "False Swipe",
    "TM55": "Scald",
    "TM56": "Fling",
    "TM57": "Charge Beam",
    "TM58": "Sky Drop",
    "TM59": "Incinerate",
    "TM60": "Quash",
    "TM61": "Will-O-Wisp",
    "TM62": "Acrobatics",
    "TM63": "Embargo",
    "TM64": "Explosion",
    "TM65": "Shadow Claw",
    "TM66": "Payback",
    "TM67": "Retaliate",
    "TM68": "Giga Impact",
    "TM69": "Rock Polish",
    "TM70": "Flash",
    "TM71": "Stone Edge",
    "TM72": "Volt Switch",
    "TM73": "Thunder Wave",
    "TM74": "Gyro Ball",
    "TM75": "Sword Dance",
    "TM76": "Struggle Bug",
    "TM77": "Psych Up",
    "TM78": "Bullzone",
    "TM79": "Frost Breath",
    "TM80": "Rock Slide",
    "TM81": "X-Scissor",
    "TM82": "Dragon Tail",
    "TM83": "Infestation",
    "TM84": "Poison Jab",
    "TM85": "Dream Eater",
    "TM86": "Grass Knot",
    "TM87": "Swagger",
    "TM88": "Sleep Talk",
    "TM89": "U-Turn",
    "TM90": "Substitute",
    "TM91": "Flash Cannon",
    "TM92": "Trick Room",
    "TM93": "Wild Charge",
    "TM94": "Secret Power",
    "TM95": "Snarl",
    "TM96": "Nature Power",
    "TM97": "Dark Pulse",
    "TM98": "Power-Up Punch",
    "TM99": "Dazzling Gleam",
    "TM100": "Confice",
    "HM01":"Cut",
    "HM02":"Fly",
    "HM03":"Surf",
    "HM04":"Strength",
    "HM05":"Waterfall",
    "HM06":"Rock Smash",
    "HM07":"Dive"
}


// Clases
class Pokemon {
    // Constructor
    constructor(dexNum, nombre, tipo, especie, altura, peso, gruposHuevo,genero, habilidades, stats, velocidades, atributos, skills, caracteristicas, evolucion, movimientos) {
        this.dexNum = dexNum;
        this.nombre = nombre;
        this.tipo = tipo;
        this.especie = especie;
        this.altura = altura;
        this.peso = peso;
        this.gruposHuevo = gruposHuevo;
        this.genero = genero;
        this.habilidades = habilidades;
        this.stats = stats;
        this.velocidades = velocidades;
        this.atributos = atributos;
        this.skills = skills;
        this.caracteristicas = caracteristicas;
        this.evolucion = evolucion;

        this.movimientos = movimientos;
    }
}
class Tipo {
    // Constructor
    constructor(tipo1, tipo2=null){
        this.tipo1 = tipo1;
        this.tipo2 = tipo2;
    }

    // Funciones
    getDebilidades(){
        var debilidadesPokemon = {};
        debilidadesPokemon = debilidades[this.tipo1];
        if (this.tipo2 !== null) {
            var debilidadesTipo2 = debilidades[this.tipo2];
            Object.keys(debilidades[this.tipo2]).forEach(debilidad => {
                debilidadesPokemon[debilidad] *= debilidadesTipo2[debilidad]; 
            });
        }
        return debilidadesPokemon;
    }
}
class Genero {
    //Constructor
    constructor(maleRatio=50, femaleRatio=50) {
        this.maleRatio = maleRatio;
        this.femaleRatio = femaleRatio;
    }
}
class Stats {
    // Constructor
    constructor(hp,atk,def,spAtk,spDef,speed){
        this.hp = hp;
        this.atk = atk;
        this.def = def;
        this.spAtk = spAtk;
        this.spDef = spDef;
        this.speed = speed;
        this.total = this.hp+this.atk+this.def+this.spAtk+this.spDef+this.speed;
    }
}
class Velocidades {
    // Constructor
    constructor(land, fly, burrow, swim, climb){
        this.land = land;
        this.fly = fly;
        this.burrow = burrow;
        this.swim = swim;
        this.climb = climb;
    }
}
class Atributos {
    // Constructor
    constructor(int,str){
        this.int = int;
        this.str = str;
    }
}
class Movimientos {
    // Constructor
    constructor(levelMoves, tutorMoves, eggMoves, tmMoves){
        this.levelMoves = levelMoves;
        this.tutorMoves = tutorMoves;
        this.eggMoves = eggMoves;
        this.tmMoves = tmMoves;
    }
}



////////////////////////////////////////////////////////
////////////       FUNCIONES      //////////////////////
////////////////////////////////////////////////////////
function parsePokemonData(data) {
    // Dividir cada Pokemon por la palabra Name
    //data = data.replace("‐","-");
    const entries = data.split(/(?=Name\s)/g).map(entry => entry.trim());
    const pokedex = [];


    entries.forEach(entry => {
        // Variables de trozos
        let trozoInfo = entry.split(separadorMovimientos)[0];
        let trozoMovimientos = entry.split(separadorMovimientos)[1];
        
        // Trozos info
        let trozoLineas = trozoInfo.split("\r\nBSTs \r\n")[0].split("\n").map(line => line.trim());
        let trozoStats = trozoInfo.split("\r\nBSTs \r\n")[1].split("\r\nTotal")[0].split("\n").map(line => line.trim());
        let trozoVelocidades = trozoInfo.split("\r\nMove Speeds \r\n")[1].split("\r\nAttributes\r\n")[0].split("\n").map(line => line.trim());
        let trozoAtributos = trozoInfo.split("\r\nAttributes\r\n")[1].split("\r\nSkills\r\n")[0].split("\n").map(line => line.trim());
        let skills = trozoInfo.split("\r\nSkills\r\n")[1].split("\r\nFeatures\r\n")[0].split("\n").map(line => line.trim());
        let caracteristicas = trozoInfo.split("\r\nFeatures\r\n")[1].split("\r\nEvolution \r\n")[0].split("\n").map(line => line.trim());
        let evolucion = trozoInfo.split("\r\nFeatures\r\n")[1].split("\r\nEvolution \r\n")[1].split("\n").map(line => line.trim());

        // Trozos movimientos
        let levelMoves = trozoMovimientos.split("\r\nTutor Moves")[0].split("\n").map(line => line.trim());
        let tutorMoves = trozoMovimientos.split("\r\nTutor Moves")[1].split("\r\nEgg Moves")[0].split("\n").map(line => line.trim());
        let eggMoves = trozoMovimientos.split("\r\nEgg Moves")[1].split("\r\nTM")[0].split("\n").map(line => line.trim());
        let tmMoves = trozoMovimientos.split("\r\nEgg Moves")[1].replace(eggMoves+"\r\n","").split("\n").map(line => line.trim());

        // Inicializacion de variables
        let dexNum, nombre, tipo1, tipo2, especie, altura, peso, gruposHuevo, genero, habilidades, stats;
        let hp, atk, def, spAtk, spDef, spd;
        let velocidades, landSpeed, flySpeed, burrowSpeed, swimSpeed, climbSpeed, atributos, intAtrib, strAtrib;


        // Procesar cada linea
        trozoLineas.forEach(line => {
            line = line.trim().replaceAll("  "," ");
            // Indicar secciones
            if (line.startsWith("Name")){
                nombre = line.split(" ")[1].trim();
            }
            else if (line.startsWith("Dex No")){
                dexNum = line.split(" ")[2];
            }
            else if (line.startsWith("Type")){
                let tipos = line.replaceAll(" ∙ ","∙").split(" ")[1].split("∙");
                tipo1 = tipos[0].trim();
                if ((tipos.length == 2)){
                    tipo2 = tipos[1].trim();
                }
            }
            else if (line.startsWith("Species")){
                especie = line.replaceAll("  "," ").replaceAll("Species ","");
            }
            else if (line.startsWith("Height")){
                altura = line.split("∙")[1].trim();
            }
            else if (line.startsWith("Weight")){
                peso = line.split("∙")[1].trim();
            }
            else if (line.startsWith("Egg Groups")){
                gruposHuevo = line.split(" ").slice(2).join("").split("∙").map(g => g.trim());
            }
            else if (line.startsWith("Gender")){
                const ratios = line.split("♂:")[1].split("♀:");
                genero = new Genero(parseFloat(ratios[0]), parseFloat(ratios[1]));
            }
            else if (line.startsWith("Abilities")){
                habilidades = line.split(" ").slice(1).join("").split("∙").map(h => h.trim());
            }
        })

        // Pocesar las Stats
        trozoStats.forEach(stat => {
            stat = stat.replaceAll("  "," ");
            // Separar Stats
            if (stat.startsWith("HP")){
                hp = parseInt(stat.split(" ")[1].trim());
            }
            else if (stat.startsWith("ATK")){
                atk = parseInt(stat.split(" ")[1].trim());
            }
            else if (stat.startsWith("DEF")){
                def = parseInt(stat.split(" ")[1].trim());
            }
            else if (stat.startsWith("Sp.ATK")){
                spAtk = parseInt(stat.split(" ")[1].trim());
            }
            else if (stat.startsWith("Sp.DEF")){
                spDef = parseInt(stat.split(" ")[1].trim());
            }
            else if (stat.startsWith("SPD")){
                spd = parseInt(stat.split(" ")[1].trim());
            }
        })
        stats = new Stats(hp,atk,def,spAtk,spDef,spd);

        // Procesar las velocidades
        trozoVelocidades.forEach(velocidad => {
            velocidad = velocidad.replaceAll("  "," ");
            // Separar velocidades
            if (velocidad.startsWith("Land")){
                if (velocidad.split(" ")[1].trim()=="-"){
                    landSpeed = null;
                }
                else {
                    landSpeed = parseInt(velocidad.split(" ")[1].trim());
                }
            }
            else if (velocidad.startsWith("Fly")){
                if (velocidad.split(" ")[1].trim()=="-"){
                    flySpeed = null;
                }
                else {
                    flySpeed = parseInt(velocidad.split(" ")[1].trim());
                }
            }
            else if (velocidad.startsWith("Burrow")){
                if (velocidad.split(" ")[1].trim()=="-"){
                    burrowSpeed = null;
                }
                else {
                    burrowSpeed = parseInt(velocidad.split(" ")[1].trim());
                }
            }
            else if (velocidad.startsWith("Swim")){
                if (velocidad.split(" ")[1].trim()=="-"){
                    swimSpeed = null;
                }
                else {
                    swimSpeed = parseInt(velocidad.split(" ")[1].trim());
                }
            }
            else if (velocidad.startsWith("Climb")){
                if (velocidad.split(" ")[1].trim()=="-"){
                    climbSpeed = null;
                }
                else {
                    climbSpeed = parseInt(velocidad.split(" ")[1].trim());
                }
            }
        })
        velocidades = new Velocidades(landSpeed,flySpeed,burrowSpeed,swimSpeed,climbSpeed);

        // Procesar los atributos
        trozoAtributos.forEach(atributo => {
            atributo = atributo.replaceAll("  "," ");
            if (atributo.startsWith("INT")){
                if (atributo.split(" ")[1].trim()=="-"){
                    intAtrib = null;
                }
                else {
                    intAtrib = parseInt(atributo.split(" ")[1].trim());
                }
            }
            else if (atributo.startsWith("STR")){
                if (atributo.split(" ")[1].trim()=="-"){
                    strAtrib = null;
                }
                else {
                    strAtrib = parseInt(atributo.split(" ")[1].trim());
                }
            }
        })
        atributos = new Atributos(intAtrib,strAtrib);

        // Formar Pokemon
        let pokemon = new Pokemon(dexNum,nombre,new Tipo(tipo1,tipo2),especie,altura,peso,gruposHuevo,genero,habilidades,stats,velocidades,atributos,skills,caracteristicas,evolucion,new Movimientos(levelMoves,tutorMoves,eggMoves,tmMoves));
        pokedex.push(pokemon);
    })
    return pokedex;
}



////////////////////////////////////////////////////////
////////////////       MAIN      ///////////////////////
////////////////////////////////////////////////////////
let entradaTexto;
fetch("prueba.txt")
    .then((res) => res.text())
    .then((text) => {
        entradaTexto = text;
    })
    .catch((e) => console.error(e));

console.log(entradaTexto);
