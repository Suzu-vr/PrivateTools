const roll = () => {
    const rollButton = document.getElementById("roll");
    let intervalId;
    let startTime = Date.now();

    // アニメーションを開始
    intervalId = setInterval(() => {
        const randomNum = Math.floor(Math.random() * 6) + 1;
        rollButton.innerText = "Dice : " + randomNum;
    }, 75);

    // 1秒後にアニメーションを停止し、最終結果を表示
    setTimeout(() => {
        clearInterval(intervalId);
        const result = Math.floor(Math.random() * 6) + 1;
        rollButton.innerText = "Dice : " + result;
        console.log("Roll button clicked, result: " + result);
    }, 1000);
};

document.getElementById("roll").addEventListener("click", roll);
