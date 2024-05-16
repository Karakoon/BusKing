let playerNum = 0;
let curPlayer = 1;
let cardName = [];
let cardText = [];
let cardImg = [];
let generatedCards = [];
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

cardText[0] = "숫자가 클수록 강합니다. 다이아몬드 1이 선입니다.";
cardText[1] = "숫자가 작을수록 강합니다. 스페이드 13이 선입니다.";
cardText[2] = "첫 장은 자유. 앞 카드와 숫자가 같은 카드나 문양이 같고 숫자 차이가 1인 카드만 낼 수 있습니다. 하트 7이 선입니다.";
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

cardImg[0] = "High";
cardImg[1] = "Low";
cardImg[2] = "Chain";
cardImg[3] = "Double";
cardImg[4] = "Duo";
cardImg[5] = "Next";
cardImg[6] = "Wide";
cardImg[7] = "Triple";
cardImg[8] = "Trio";
cardImg[9] = "Sequence";
cardImg[10] = "Colorful4";
cardImg[11] = "Doubles";
cardImg[12] = "Quartet";
cardImg[13] = "Full House";
cardImg[14] = "Flush";
cardImg[15] = "Small";
cardImg[16] = "Medium";
cardImg[17] = "Large";

function fullscreen() {
    let doc = document.documentElement;
    if (doc.requestFullscreen) doc.requestFullscreen();
    else if (doc.webkitRequestFullscreen) doc.webkitRequestFullscreen();
    else if (doc.mozRequestFullScreen) doc.mozRequestFullScreen();
    else if (doc.msRequestFullscreen) doc.msRequestFullscreen();
}

function loadPlayerChoiceScreen() {
    document.getElementById("title_screen").style.display = "none";
    document.getElementById("player_choice_screen").style.display = "block";
}

function loadCardChoiceScreen() {
    document.getElementById("player_choice_screen").style.display = "none";
    document.getElementById("card_choice_screen").style.display = "block";
}

function loadFinalScreen() {
    document.getElementById("title").style.display = "none";
    document.getElementById("card_choice_screen").style.display = "none";
    document.getElementById("final_screen").style.display = "block";

    if (playerNum == 3) {
        cardImg[10] = "Colorful3";
        document.getElementById("card_three_players").style.display = "grid";
        generateRandomSingleCard();
        for (let i = 0; i <= playerNum; i++) {
            loadCardData("three_card", i, chosenCards[i]);
        }
    } else if (playerNum == 4) {
        cardImg[10] = "Colorful4";
        document.getElementById("card_four_players").style.display = "grid";
        generateRandomSingleCard();
        for (let i = 0; i <= playerNum; i++) {
            loadCardData("four_card", i, chosenCards[i]);
        }
    }
}

function setPlayerNum(num) {
    playerNum = num;

    loadCardChoiceScreen();
    generateRandomCards();
}

function generateRandomCards() {
    if (curPlayer <= playerNum) {
        let repeated;

        while (true) {
            generatedCards[0] = Math.floor(Math.random() * 15) + 3;
            repeated = false;

            for (let i = 1; i < chosenCards.length; i++) {
                if (chosenCards[i] == generatedCards[0] || discardedCards[i] == generatedCards[0]) {
                    repeated = true;
                }
            }
            if (!repeated) {
                break;
            }
        }

        while (true) {
            generatedCards[1] = Math.floor(Math.random() * 15) + 3;
            repeated = false;
            
            if (generatedCards[0] == generatedCards[1]) continue;
            for (let i = 1; i < chosenCards.length; i++) {
                if (chosenCards[i] == generatedCards[1] || discardedCards[i] == generatedCards[1]) {
                    repeated = true;
                }
            }
            if (!repeated) {
                break;
            }
        }

        loadCardData("gen_card", 0, generatedCards[0]);
        loadCardData("gen_card", 1, generatedCards[1]);
    } else {
        loadFinalScreen();
    }
}

function generateRandomSingleCard() {
    chosenCards[0] = Math.floor(Math.random() * 3);    
}

function selectCard(num) {
    if (num == 0) {
        chosenCards[curPlayer] = generatedCards[0];
        discardedCards[curPlayer] = generatedCards[1];
    } else {
        chosenCards[curPlayer] = generatedCards[1];
        discardedCards[curPlayer] = generatedCards[0];
    }
    curPlayer += 1;
    generateRandomCards();
}

function loadCardData(target, index, id) {
    document.getElementById(target + "_name" + index).textContent = cardName[id];
    document.getElementById(target + "_text" + index).textContent = cardText[id];
    document.getElementById(target + "_img" + index).src = "/res/" + cardImg[id] + ".png";
}