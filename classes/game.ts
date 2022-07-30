export class Game {
    public players: string[] = [];
    public player_images : string[] = [];
    public stack: string[] = [];
    public playedCards: string[] = [];
    public currentPlayer: number = 0;
    public takeCardAnimation = false;
    public currentCard: string = '';
    private cardColour: string[] = ['ace', 'clubs', 'diamonds', 'hearts'];
    constructor() {
        for (let c = 0; c < 4; c++) {

            for (let i = 1; i < 14; i++) {
                this.stack.push(this.cardColour[c] + '_' + i)

            }
        }
        shuffle(this.stack);
    }





    public toJson() {
        console.log(this.players,this.playedCards,this.currentPlayer);
        return {        
            players: this.players,
            player_images: this.player_images,
            stack: this.stack,
            playedCards: this.playedCards,
            currentPlayer: this.currentPlayer,
            takeCardAnimation: this.takeCardAnimation,
            currentCard: this.currentCard
        };

    }
}

function shuffle(array: string[]) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}