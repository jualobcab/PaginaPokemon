"use strict";

////////////////////////////////////////////////////////
/////////////       DATOS      /////////////////////////
////////////////////////////////////////////////////////
// Definir constantes
const separadorMovimientos = "\r\nLevel Moves  Tutor Moves  Egg Moves  TM Moves \r\nLvl‐Move  Lvl‐Move  Move  Move  TM: Move  TM: Move  TM: Move \r\n";
//const separadorMovimientos = "\r\nLevel Moves  Tutor Moves  Egg Moves  TM Moves \r\nLvl-Move  Lvl-Move  Move  Move  TM: Move  TM: Move  TM: Move \r\n";

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
            // Indicar secciones
            if (line.startsWith("Name")){
                nombre = line.split(" ")[1].trim();
            }
            else if (line.startsWith("Dex No")){
                dexNum = line.split(" ")[2];
            }
            else if (line.startsWith("Type")){
                const tipos = line.split(" ")[1].split("∙");
                tipo1 = tipos[0].trim();
                tipo2 = tipos[1] ? tipos[1].trim() : null;
            }
            else if (line.startsWith("Species")){
                especie = line.split(" ")[1];
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
            // Separar Stats
            if (stat.startsWith("HP")){
                hp = stat.split(" ")[1].trim();
            }
            else if (stat.startsWith("ATK")){
                atk = stat.split(" ")[1].trim();
            }
            else if (stat.startsWith("DEF")){
                def = stat.split(" ")[1].trim();
            }
            else if (stat.startsWith("Sp.ATK")){
                spAtk = stat.split(" ")[1].trim();
            }
            else if (stat.startsWith("Sp.DEF")){
                spDef = stat.split(" ")[1].trim();
            }
            else if (stat.startsWith("SPD")){
                spd = stat.split(" ")[1].trim();
            }
        })
        stats = new Stats(hp,atk,def,spAtk,spDef,spd);

        // Procesar las velocidades
        trozoVelocidades.forEach(velocidad => {
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


let entradaTexto;
fetch("prueba.txt")
    .then((res) => res.text())
    .then((text) => {
        entradaTexto = text;
    })
    .catch((e) => console.error(e));

console.log(entradaTexto);