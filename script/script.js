// Task 2
changeBg = (box) => {
    if (box === "box1") {
        document.getElementById('img1').style.backgroundImage = "url('./assets/1.jpeg')";
        document.getElementById(box).style.cursor = "pointer";
    } else if (box === "box2") {
        document.getElementById('img1').style.backgroundImage = "url('./assets/2.jpeg')";
        document.getElementById(box).style.cursor = "pointer";
    } else if (box === "box3") {
        document.getElementById('img1').style.backgroundImage = "url('./assets/3.png')";
        document.getElementById(box).style.cursor = "pointer";
    } else {
        document.getElementById('img1').style.backgroundImage = "none";
    }
}

// Task 3
isPrime = (n) => {
    for(let i = 2; i < n; i++)
        if(n % i === 0) return false;
    return n > 1;
}

// Task 4
isLeapYear = (year) => {
    return new Date(year, 1, 29).getDate() === 29;
}
