let playerNum = 0;
let curPlayer = 0;
let cards = [];
let cardName = [];
let cardText = [];
let chosenCards = [];
let discardedCards = [];

cardName[0] = "하이";
cardName[1] = "로우";
cardName[2] = "체인";
cardName[3] = "더블";
cardName[4] = "듀오";
cardName[5] = "넥스트";
cardName[6] = "와이드";
cardName[7] = "트리플";
cardName[8] = "트리오";
cardName[9] = "시퀀스";
cardName[10] = "컬러풀";
cardName[11] = "더블스";
cardName[12] = "콰르텟";
cardName[13] = "풀 하우스";
cardName[14] = "플러쉬";
cardName[15] = "스몰";
cardName[16] = "미디움";
cardName[17] = "라지";

cardText[0] = "숫자가 클수록 강합니다. 하트 1을 가진 사람이 선 플레이어입니다.";
cardText[1] = "숫자가 작을수록 강합니다. 스페이드 13을 가진 사람이 선 플레이어입니다.";
cardText[2] = "첫 장은 자유롭게 냅니다. 앞 사람이 낸 카드와 숫자가 같은 카드나 문양이 같으면서 차이가 1인 숫자 카드만 낼 수 있습니다. 다이아몬드 7을 가진 사람이 선 플레이어입니다.";
cardText[3] = "같은 숫자인 카드 2장을 냅니다. 숫자가 클수록 강합니다.";
cardText[4] = "같은 문양인 카드 2장을 냅니다. 숫자 합이 작을수록 강합니다.";
cardText[5] = "숫자 차이가 1인 카드 2장을 냅니다. 숫자가 클수록 강합니다.";
cardText[6] = "카드 2장을 냅니다. 두 수의 차이가 클수록 강합니다.";
cardText[7] = "같은 숫자인 카드 3장을 냅니다. 숫자가 클수록 강합니다.";
cardText[8] = "같은 문양 3장을 냅니다. 숫자 합이 작을수록 강합니다.";
cardText[9] = "등차수열인 3장을 냅니다. 공차가 클수록 강합니다.";
cardText[10] = "모든 문양을 1장씩 냅니다. 숫자 합이 작을수록 강합니다.";
cardText[11] = "같은 숫자 2장을 2쌍 냅니다. 큰 숫자가 클수록 강합니다. 큰 쪽이 같다면 다른 쪽이 클수록 강합니다.";
cardText[12] = "같은 문양 4장을 냅니다. 숫자 합이 작을수록 강합니다.";
cardText[13] = "같은 숫자 2장과 같은 숫자 3장을 함께 냅니다. 3장 쪽의 숫자가 클수록 강합니다.";
cardText[14] = "같은 문양 5장을 냅니다. 숫자 합이 작을수록 강합니다.";
cardText[15] = "1 이상 4 이하인 카드들을 냅니다. 2장으로 시작해 앞 사람보다 1장 더 많이 내야 합니다.";
cardText[16] = "5 이상 9 이하인 카드들을 냅니다. 2장으로 시작해 앞 사람보다 1장 더 많이 내야 합니다.";
cardText[17] = "10 이상 13 이하인 카드들을 냅니다. 2장으로 시작해 앞 사람보다 1장 더 많이 내야 합니다.";

function fullscreen() {
    let doc = document.documentElement;
    if (doc.requestFullscreen) doc.requestFullscreen();
    else if (doc.webkitRequestFullscreen) doc.webkitRequestFullscreen();
    else if (doc.mozRequestFullScreen) doc.mozRequestFullScreen();
    else if (doc.msRequestFullscreen) doc.msRequestFullscreen();
}

function loadPlayerChoiceScreen() {
    let titleScreen = document.getElementById("title_screen");
    let playerChoiceScreen = document.getElementById("player_choice_screen");

    titleScreen.style.display = "none";
    playerChoiceScreen.style.display = "block";
}

function setPlayerNum(num) {
    playerNum = num;

    loadCardChoiceScreen();
    generateRandomCards();
}

function loadCardChoiceScreen() {
    let playerChoiceScreen = document.getElementById("player_choice_screen");
    let cardChoiceScreen = document.getElementById("card_choice_screen");

    playerChoiceScreen.style.display = "none";
    cardChoiceScreen.style.display = "block";
}

function generateRandomCards() {
    let i;

    if (curPlayer < playerNum) {
        let j;
        let repeated;

        while (true) {
            cards[0] = Math.floor(Math.random() * 15) + 3;
            repeated = false;

            for (j = 0; j < chosenCards.length; j++) {
                if (chosenCards[j] == cards[0] || discardedCards[j] == cards[0]) {
                    repeated = true;
                }
            }
            if (!repeated) {
                break;
            }
        }

        while (true) {
            cards[1] = Math.floor(Math.random() * 15) + 3;
            repeated = false;
            
            for (j = 0; j < chosenCards.length; j++) {
                if (chosenCards[j] == cards[1] || discardedCards[j] == cards[1] || cards[0] == cards[1]) {
                    repeated = true;
                }
            }
            if (!repeated) {
                break;
            }
        }

        document.getElementById("card_name0").textContent = cardName[cards[0]];
        document.getElementById("card_text0").textContent = cardText[cards[0]];
        document.getElementById("card_name1").textContent = cardName[cards[1]];
        document.getElementById("card_text1").textContent = cardText[cards[1]];
    } else {

    }
}

function selectCard(num) {
    if (num == 0) {
        chosenCards[curPlayer] = cards[0];
        discardedCards[curPlayer] = cards[1];
    } else {
        chosenCards[curPlayer] = cards[1];
        discardedCards[curPlayer] = cards[0];
    }
    curPlayer += 1;
    generateRandomCards();
}