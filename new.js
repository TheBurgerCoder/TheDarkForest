const noises = {
	a: new Audio("J1.mp3"),
	b: new Audio("J2.mp3"),
	c: new Audio("J3.mp3"),
	d: new Audio("J4.mp3"),
	fire: new Audio("Fire.mp3"),
	open: new Audio("open.mp3"),
	close: new Audio("close.mp3"),
	on: new Audio("on.mp3"),
	off: new Audio("off.mp3")
};
const images = {
	startScreen: [
		"Start.png",
		"inline-block",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none"
	],
	s1: [
		"Fronty.png",
		"inline-block",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none"
	],
	s2: [
		"Roomy.png",
		"inline-block",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none"
	],
	s3: [
		"Tops.png",
		"inline-block",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none"
	],
	s4: [
		"Windy.png",
		"inline-block",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none"
	],
	FrontD0: [
		"DarkFront1.jpg",
		"none",
		"none",
		"none",
		"none",
		"none",
		"inline-block",
		"none",
		"none",
		"none",
		"none",
		"none"
	],
	FrontD1: [
		"DarkFront2.jpg",
		"none",
		"none",
		"none",
		"none",
		"none",
		"inline-block",
		"none",
		"none",
		"none",
		"none",
		"none"
	],
	FrontD2: [
		"DarkFront3.jpg",
		"none",
		"none",
		"none",
		"none",
		"none",
		"inline-block",
		"none",
		"none",
		"none",
		"none",
		"none"
	],
	FrontD3: [
		"DarkFront4.jpg",
		"none",
		"none",
		"none",
		"none",
		"none",
		"inline-block",
		"none",
		"none",
		"none",
		"none",
		"none"
	],
	FrontL0: [
		"FrontLight1.jpg",
		"none",
		"inline-block",
		"inline-block",
		"none",
		"none",
		"inline-block",
		"none",
		"none",
		"none",
		"none",
		"none"
	],
	FrontL1: [
		"FrontLight2.jpg",
		"none",
		"inline-block",
		"inline-block",
		"none",
		"none",
		"inline-block",
		"none",
		"none",
		"none",
		"none",
		"none"
	],
	FrontL2: [
		"FrontLight3.jpg",
		"none",
		"inline-block",
		"inline-block",
		"none",
		"none",
		"inline-block",
		"none",
		"none",
		"none",
		"none",
		"none"
	],
	FrontL3: [
		"FrontLight4.jpg",
		"none",
		"inline-block",
		"inline-block",
		"none",
		"none",
		"inline-block",
		"none",
		"none",
		"none",
		"none",
		"none"
	],
	FireL0: [
		"FireLit1.jpg",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"inline-block",
		"none",
		"none",
		"none"
	],
	FireL1: [
		"FireLit2.jpg",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"inline-block",
		"none",
		"none",
		"none"
	],
	FireU0: [
		"FireUnlit1.jpg",
		"none",
		"inline-block",
		"inline-block",
		"none",
		"none",
		"none",
		"none",
		"inline-block",
		"none",
		"none",
		"none"
	],
	FireU1: [
		"FireUnlit2.jpg",
		"none",
		"inline-block",
		"inline-block",
		"none",
		"none",
		"none",
		"none",
		"inline-block",
		"none",
		"none",
		"none"
	],
	Windows00: [
		"Windows00.jpg",
		"none",
		"inline-block",
		"inline-block",
		"inline-block",
		"inline-block",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none"
	],
	Windows01: [
		"Windows01.jpg",
		"none",
		"inline-block",
		"inline-block",
		"inline-block",
		"inline-block",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none"
	],
	Windows03: [
		"Windows03.jpg",
		"none",
		"inline-block",
		"inline-block",
		"inline-block",
		"inline-block",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none"
	],
	Windows10: [
		"Windows10.jpg",
		"none",
		"inline-block",
		"inline-block",
		"inline-block",
		"inline-block",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none"
	],
	Windows11: [
		"Windows11.jpg",
		"none",
		"inline-block",
		"inline-block",
		"inline-block",
		"inline-block",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none"
	],
	Windows12: [
		"Windows12.jpg",
		"none",
		"inline-block",
		"inline-block",
		"inline-block",
		"inline-block",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none"
	],
	Windows13: [
		"Windows13.jpg",
		"none",
		"inline-block",
		"inline-block",
		"inline-block",
		"inline-block",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none"
	],
	Windows21: [
		"Windows21.jpg",
		"none",
		"inline-block",
		"inline-block",
		"inline-block",
		"inline-block",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none"
	],
	Windows30: [
		"Windows30.jpg",
		"none",
		"inline-block",
		"inline-block",
		"inline-block",
		"inline-block",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none"
	],
	Windows31: [
		"Windows31.jpg",
		"none",
		"inline-block",
		"inline-block",
		"inline-block",
		"inline-block",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none"
	],
	Door0: [
		"Door1.jpg",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"inline-block",
		"none",
		"none",
		"inline-block",
		"none"
	],
	Door1: [
		"Door2.jpg",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"inline-block",
		"none",
		"none",
		"inline-block",
		"none"
	],
	Door2: [
		"Door3.jpg",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"inline-block",
		"none",
		"none",
		"inline-block",
		"none"
	],
	Door3: [
		"Door4.jpg",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"inline-block",
		"none",
		"none",
		"inline-block",
		"none"
	],
	Door4: [
		"Door5.jpg",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"inline-block",
		"none",
		"none",
		"inline-block",
		"none"
	],
	DoorC: [
		"DoorClosed1.jpg",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"inline-block",
		"none",
		"none",
		"inline-block",
		"none"
	],
	DoorUC: [
		"DoorClosed0.jpg",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"inline-block",
		"none",
		"none"
	],
	DoorUO: [
		"DoorCracked.jpg",
		"none",
		"inline-block",
		"inline-block",
		"none",
		"none",
		"none",
		"none",
		"none",
		"inline-block",
		"none",
		"none"
	],
	JFire0: [
		"Fireplace1.png",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none"
	],
	JFire1: [
		"FIreplace2.png",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none"
	],
	JFront0: [
		"Front1.png",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none"
	],
	JFront1: [
		"Front2.png",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none"
	],
	JFront2: [
		"Front3.png",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none"
	],
	JFront3: [
		"Front4.png",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none"
	],
	JWindows0: [
		"Windows1.png",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none"
	],
	JWindows1: [
		"WIndows2.png",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none"
	],
	JBedroom: [
		"BedroomJump.png",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none"
	],
	Died: [
		"Death.jpg",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none"
	],
	Expired: [
		"Lost.png",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none"
	],
	Won: [
		"Victory.png",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"inline-block"
	],
	Tip1: [
		"Tip1.jpg",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"inline-block"
	],
	Tip2: [
		"Tip2.jpg",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"inline-block"
	],
	Tip3: [
		"Tip3.jpg",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"inline-block"
	],
	Tip4: [
		"Tip4.jpg",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"inline-block"
	],
	Tip5: [
		"Tip5.jpg",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"inline-block"
	],
	Tip6: [
		"Tip6.jpg",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"inline-block"
	],
	Tip7: [
		"Tip7.jpg",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"inline-block"
	],
	Tip8: [
		"Tip8.jpg",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"inline-block"
	],
	Tip9: [
		"Tip9.png",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"inline-block"
	],
	Tip10: [
		"Tip10.png",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"none",
		"inline-block"
	]
};

const image = document.getElementById("viewedImage"),
	lights = document.getElementById("lightSwitch"),
	left = document.getElementById("leftWindow"),
	right = document.getElementById("rightWindow"),
	door = document.getElementById("doorKnob"),
	fire = document.getElementById("fireplace"),
	start = document.getElementById("start"),
	forward = document.getElementById("getCloser"),
	back = document.getElementById("stepBack"),
	turnL = document.getElementById("left"),
	turnR = document.getElementById("right"),
	startScreenButton = document.getElementById("acceptFate"),
	devbar = document.getElementById("devbar"),
	space1 = document.getElementById("windowSpace"),
	space2 = document.getElementById("doorSpace"),
	pointsContainer = document.getElementById("pointsContainer"),
	points = document.getElementById("points"),
	timeContainer = document.getElementById("timeContainer"),
	time = document.getElementById("time"),
	finalTime = document.getElementById("finalTime");
let ranTip,
	fireplaceIsLit,
	fireStage,
	lightsAreOn,
	frontStage,
	doorIsOpen,
	doorIsZoomed,
	doorStage,
	windowClosed,
	windowStage,
	windowSide,
	wall,
	arrowsWork = false,
	lightAnimTick,
	fireAnimTick,
	windowsAnimTick,
	alive,
	frontTick,
	fireTick,
	windowsActive,
	doorTick,
	windowsTick,
	loaded = false,
	startScreen = true,
	gameActive = false,
	pointsNum = 0,
	timeTicks = 0,
	hour = 8,
	minutes = 0,
	displayTime = "8:00 PM",
	speed = 1,
	ticker1,
	ticker2;

function setScreen(screen) {
	image.src = images[screen][0];
	start.style = "display:" + images[screen][1] + ";";
	turnL.style = "display:" + images[screen][2] + ";";
	turnR.style = "display:" + images[screen][2] + ";";
	left.style = "display:" + images[screen][4] + ";";
	right.style = "display:" + images[screen][5] + ";";
	space1.style = "display:" + images[screen][5] + ";";
	lights.style = "display:" + images[screen][6] + ";";
	door.style = "display:" + images[screen][7] + ";";
	space2.style = "display:" + images[screen][7] + ";";
	fire.style = "display:" + images[screen][8] + ";";
	forward.style = "display:" + images[screen][9] + ";";
	back.style = "display:" + images[screen][10] + ";";
	startScreenButton.style = "display:" + images[screen][11] + ";";
	if (!gameActive) {
		pointsContainer.style.display = "none";
		points.style.display = "none";
		timeContainer.style.display = "none";
		time.style.display = "none";
	} else {
		pointsContainer.style.display = "inline-block";
		points.style.display = "inline-block";
		timeContainer.style.display = "inline-block";
		time.style.display = "inline-block";
	}
	if (screen == "Won") {
		finalTime.style.display = "inline-block";
	} else {
		finalTime.style.display = "none";
	}
	if (images[screen][3] == "none") {
		arrowsWork = false;
	} else {
		arrowsWork = true;
	}
}
function wallToScreen() {
	if (wall == 0) {
		lightsInit();
	} else if (wall == 1) {
		fireInit();
	} else if (wall == 2) {
		windowsInit();
	} else {
		doorInit();
	}
}

function turnLeft() {
	wall = wall - 1;
	if (wall < 0) {
		wall = 3;
	}
	wallToScreen();
}
function turnRight() {
	wall = wall + 1;
	if (wall > 3) {
		wall = 0;
	}
	wallToScreen();
}

function startGame() {
	if (loaded === true) {
		ranTip = Math.round(Math.random);
		fireplaceIsLit = false;
		fireStage = 0;
		lightsAreOn = true;
		frontStage = 0;
		doorIsOpen = true;
		doorIsZoomed = false;
		doorStage = 0;
		windowClosed = "none";
		windowStage = 0;
		windowSide = "left";
		wall = 0;
		arrowsWork = false;
		lightAnimTick = 1;
		fireAnimTick = 1;
		windowsAnimTick = 1;
		alive = true;
		frontTick = 0;
		fireTick = 0;
		windowsActive = false;
		doorTick = 0;
		windowsTick = 0;
		startScreen = false;
		gameActive = true;
		setScreen("FrontL0");
		pointsNum = 0;
		timeTicks = 0;
		hour = 8;
		minutes = 0;
		displayTime = "8:00 PM";
	}
	points.textContent = pointsNum;
	ticker1 = setInterval(function () {
		if (gameActive) {
			frontUpd();
			fireUpd();
			windowsUpd();
			devbar.innerHTML = `
			Front: ${(Math.round(frontTick * 1000) / 1000) * 25}%
			<br> Fire: ${(Math.round(fireTick * 10000) / 10000) * 50}%
			<br> Windows: ${(windowsTick - 20) * 2.5}% 
			<br> Door: ${(Math.round(doorTick * 1000) / 1000) * 20}%
		`;
			doorUpd();
		}
	}, 1000 / speed);
	ticker2 = setInterval(function () {
		if (gameActive) {
			pointsHandler();
			timeHandler();
		}
	}, 500 / speed);
}
function returnToStart() {
	setScreen("startScreen");
	wall = "ham";
	frontStage = 0;
	fireStage = 0;
	windowStage = 0;
	doorStage = 0;
	startScreen = true;
	clearInterval(ticker1);
	clearInterval(ticker2);
}

function toggleLights() {
	if (lightsAreOn == true) {
		lightsAreOn = false;
		lightsInit();
		lights.textContent = "Turn on lights";
		noises.off.play();
	} else {
		lightsAreOn = true;
		lightsInit();
		lights.textContent = "Turn off lights";
		noises.on.play();
	}
}
function lightsInit() {
	if (lightsAreOn == true) {
		if (frontStage == 0) {
			setScreen("FrontL0");
		} else if (frontStage == 1) {
			setScreen("FrontL1");
		} else if (frontStage == 2) {
			setScreen("FrontL2");
		} else if (frontStage == 3) {
			setScreen("FrontL3");
		}
	} else {
		if (frontStage == 0) {
			setScreen("FrontD0");
		} else if (frontStage == 1) {
			setScreen("FrontD1");
		} else if (frontStage == 2) {
			setScreen("FrontD2");
		} else if (frontStage == 3) {
			setScreen("FrontD3");
		}
	}
}

function lightFire() {
	if (fireplaceIsLit == false) {
		noises.fire.play();
		fireplaceIsLit = true;
		fire.textContent = 10;
		setTimeout(() => {
			fire.textContent = 9;
			setTimeout(() => {
				fire.textContent = 8;
				setTimeout(() => {
					fire.textContent = 7;
					setTimeout(() => {
						fire.textContent = 6;
						setTimeout(() => {
							fire.textContent = 5;
							setTimeout(() => {
								fire.textContent = 4;
								setTimeout(() => {
									fire.textContent = 3;
									setTimeout(() => {
										fire.textContent = 2;
										setTimeout(() => {
											fire.textContent = 1;
											setTimeout(() => {
												fireplaceIsLit = false;
												fire.textContent = "Light fire";
											}, 1000 / speed);
										}, 1000 / speed);
									}, 1000 / speed);
								}, 1000 / speed);
							}, 1000 / speed);
						}, 1000 / speed);
					}, 1000 / speed);
				}, 1000 / speed);
			}, 1000 / speed);
		}, 1000 / speed);
	}
}

function fireInit() {
	if (fireplaceIsLit) {
		if (fireStage == 0) {
			setScreen("FireL0");
		} else if (fireStage == 1) {
			setScreen("FireL1");
		}
	} else {
		if (fireStage == 0) {
			setScreen("FireU0");
		} else if (fireStage == 1) {
			setScreen("FireU1");
		}
	}
}

function leftToggle() {
	if (windowClosed == "left") {
		windowClosed = "none";
		noises.open.play();
	} else if (windowClosed == "right") {
		windowClosed = "left";
		noises.open.play();
		noises.close.play();
	} else {
		windowClosed = "left";
		noises.close.play();
	}
	windowsInit();
}
function rightToggle() {
	if (windowClosed == "left") {
		windowClosed = "right";
		noises.open.play();
		noises.close.play();
	} else if (windowClosed == "right") {
		windowClosed = "none";
		noises.open.play();
	} else {
		windowClosed = "right";
		noises.close.play();
	}
	windowsInit();
}
function windowsInit() {
	if (windowStage == 1) {
		if (windowClosed == "left") {
			if (windowSide == "left") {
				setScreen("Windows21");
			} else {
				setScreen("Windows03");
			}
			left.textContent = "Open";
			right.textContent = "Close";
		} else if (windowClosed == "right") {
			if (windowSide == "left") {
				setScreen("Windows30");
			} else {
				setScreen("Windows12");
			}
			left.textContent = "Close";
			right.textContent = "Open";
		} else {
			if (windowSide == "left") {
				setScreen("Windows31");
			} else {
				setScreen("Windows13");
			}
			left.textContent = "Close";
			right.textContent = "Close";
		}
	} else if (windowStage == 0) {
		if (windowClosed == "left") {
			setScreen("Windows01");
			left.textContent = "Open";
			right.textContent = "Close";
		} else if (windowClosed == "right") {
			setScreen("Windows10");
			left.textContent = "Close";
			right.textContent = "Open";
		} else {
			setScreen("Windows11");
			left.textContent = "Close";
			right.textContent = "Close";
		}
	}
}

function doorToggle() {
	if (doorIsOpen) {
		doorIsOpen = false;
		door.textContent = "Open";
		noises.close.play();
		doorInit();
	} else {
		doorIsOpen = true;
		door.textContent = "Close";
		noises.open.play();
		doorInit();
	}
}
function distanceToggle() {
	if (doorIsZoomed) {
		doorIsZoomed = false;
		doorInit();
	} else {
		doorIsZoomed = true;
		doorInit();
	}
}
function doorInit() {
	if (doorIsZoomed) {
		if (doorIsOpen == false) {
			setScreen("DoorC");
			door.textContent("Open");
		} else if (doorStage == 0) {
			setScreen("Door0");
			door.textContent("Close");
		} else if (doorStage == 1) {
			setScreen("Door1");
			door.textContent("Close");
		} else if (doorStage == 2) {
			setScreen("Door2");
			door.textContent("Close");
		} else if (doorStage == 3) {
			setScreen("Door3");
			door.textContent("Close");
		} else {
			setScreen("Door4");
			door.textContent("Close");
		}
	} else if (doorIsOpen) {
		setScreen("DoorUO");
	} else {
		setScreen("DoorUC");
	}
}

function lightScare() {
	gameActive = false;
	lightAnimTick = 0;
	noises.a.volume = 0.5;
	noises.b.volume = 0.5;
	noises.c.volume = 0.5;
	noises.d.volume = 0.5;
	noises.a.playbackRate = speed;
	noises.b.playbackRate = speed;
	noises.c.playbackRate = speed;
	noises.d.playbackRate = speed;
	noises.a.play();
	noises.b.play();
	noises.c.play();
	noises.d.play();
	lightsLoop();
	setTimeout(function () {
		setScreen("Died");
		setTimeout(function () {
			if (ranTip == 0) {
				setScreen("Tip7");
			} else {
				setScreen("Tip8");
			}
			ranTip = ranTip + 1;
			ranTip = ranTip % 2;
		}, 2000);
	}, 3000);
}
function lightsLoop() {
	setTimeout(function () {
		lightsAnim();
		if (lightAnimTick < 5) {
			lightsLoop();
			lightAnimTick++;
		}
	}, 600);
}
function lightsAnim() {
	lightAnimTick++;
	setTimeout(function () {
		setScreen("JFront0");
		setTimeout(function () {
			setScreen("JFront1");
			setTimeout(function () {
				setScreen("JFront2");
				setTimeout(function () {
					setScreen("JFront3");
				}, 150);
			}, 150);
		}, 150);
	}, 150);
}

function fireScare() {
	gameActive = false;
	fireAnimTick = 1;
	noises.a.volume = 0.5;
	noises.b.volume = 0.5;
	noises.c.volume = 0.5;
	noises.d.volume = 0.5;
	noises.a.playbackRate = speed;
	noises.b.playbackRate = speed;
	noises.c.playbackRate = speed;
	noises.d.playbackRate = speed;
	noises.a.play();
	noises.b.play();
	noises.c.play();
	noises.d.play();
	fireLoop();
	setTimeout(function () {
		setScreen("Died");
		setTimeout(function () {
			if (ranTip == 0) {
				setScreen("Tip5");
			} else {
				setScreen("Tip6");
			}
			ranTip = ranTip + 1;
			ranTip = ranTip % 2;
		}, 2000);
	}, 2600);
}
function fireLoop() {
	setTimeout(function () {
		fireAnim();
		fireAnimTick++;
		if (fireAnimTick < 10) {
			fireLoop();
		}
	}, 200);
}
function fireAnim() {
	setTimeout(function () {
		setScreen("JFire0");
		setTimeout(function () {
			setScreen("JFire1");
		}, 100);
	}, 100);
}

function windowScare() {
	gameActive = false;
	windowsAnimTick = 1;
	noises.a.volume = 0.5;
	noises.b.volume = 0.5;
	noises.c.volume = 0.5;
	noises.d.volume = 0.5;
	noises.a.playbackRate = speed;
	noises.b.playbackRate = speed;
	noises.c.playbackRate = speed;
	noises.d.playbackRate = speed;
	noises.a.play();
	noises.b.play();
	noises.c.play();
	noises.d.play();
	windowsLoop();
	setTimeout(function () {
		setScreen("Died");
		setTimeout(function () {
			if (ranTip == 0) {
				setScreen("Tip3");
			} else {
				setScreen("Tip4");
			}
			ranTip = ranTip + 1;
			ranTip = ranTip % 2;
		}, 2000);
	}, 3000);
}
function windowsLoop() {
	setTimeout(function () {
		windowsAnim();
		windowsAnimTick++;
		if (windowsAnimTick < 10) {
			windowsLoop();
		}
	}, 200);
}
function windowsAnim() {
	setTimeout(function () {
		setScreen("JWindows0");
		setTimeout(function () {
			setScreen("JWindows1");
		}, 100);
	}, 100);
}

function doorScare() {
	gameActive = false;
	setScreen("JBedroom");
	noises.a.playbackRate = speed;
	noises.b.playbackRate = speed;
	noises.c.playbackRate = speed;
	noises.d.playbackRate = speed;
	noises.a.play();
	noises.b.play();
	noises.c.play();
	noises.d.play();
	setTimeout(function () {
		setScreen("Died");
		setTimeout(function () {
			if (ranTip == 0) {
				setScreen("Tip1");
			} else {
				setScreen("Tip2");
			}
			ranTip = ranTip + 1;
			ranTip = ranTip % 2;
		}, 2000);
	}, 1184);
}

document.addEventListener("keydown", function (event) {
	if (event.key == "ArrowLeft") {
		if (arrowsWork) {
			turnLeft();
		}
	} else if (event.key == "ArrowUp") {
	} else if (event.key == "ArrowRight") {
		if (arrowsWork) {
			turnRight();
		}
	} else if (event.key == "ArrowDown") {
	}
});

function frontUpd() {
	if (lightsAreOn) {
		frontTick = frontTick + 0.05;
	} else {
		frontTick = frontTick - 0.1;
	}
	if (frontTick < 0.05) {
		frontTick = 0;
	}
	if (frontTick > 3.95) {
		frontTick = 4;
	}
	frontStage = Math.floor(frontTick);
	if (wall == 0 && alive == true) {
		lightsInit();
	}
	if (frontStage == 4 && alive == true) {
		lightScare();
		alive = false;
	}
}

function fireUpd() {
	if (!fireplaceIsLit) {
		fireTick = fireTick + 0.025;
	} else {
		fireTick = fireTick - 0.1;
	}
	if (fireTick < 0.025) {
		fireTick = 0;
	}
	if (fireTick > 1.975) {
		fireTick = 2;
	}
	fireStage = Math.floor(fireTick);
	if (wall == 1 && alive == true) {
		fireInit();
	}
	if (fireStage == 2 && alive == true) {
		fireScare();
		alive = false;
	}
}

function doorUpd() {
	if (doorIsOpen) {
		doorTick = doorTick + 0.05;
	} else {
		doorTick = doorTick - 0.1;
	}
	if (doorTick < 0.05) {
		doorTick = 0;
	}
	if (doorTick > 4.95) {
		doorTick = 5;
	}
	doorStage = Math.floor(doorTick);
	if (wall == 3 && alive == true) {
		doorInit();
	}
	if (doorstage == 5 && alive == true) {
		doorScare();
		alive = false;
	}
}

function windowsUpd() {
	windowsTick++;
	if (windowsTick == 40) {
		windowsChoose();
		windowStage = 1;
		if (wall == 2 && alive == true) {
			windowsInit();
		}
	}
	if (windowsTick == 80) {
		if (windowClosed == windowSide) {
			windowsChoose();
			windowsTick = 40;
		} else {
			windowStage = 2;
		}
	}
	if (wall == 2 && alive == true) {
		windowsInit();
	}
	if (windowStage == 2 && alive == true) {
		windowScare();
		alive = false;
	}
}
function windowsChoose() {
	if (windowClosed == "left") {
		windowSide = "right";
	} else if (windowClosed == "right") {
		windowSide = "left";
	} else if (ranTip == 0) {
		windowSide = "left";
	} else {
		windowSide = "right";
	}
	if (wall == 2 && alive == true) {
		windowsInit();
	}
}

function executeFunction() {
	const rand = Math.floor(Math.random() * 4 + 1);
	setScreen(`s${rand}`);
	setTimeout(function () {
		setScreen("startScreen");
	}, 500);
}
function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min) * 1000;
}
function executeWithRandomDelay() {
	const randomDelay = randomNumber(10, 30);
	setTimeout(function () {
		if (startScreen) {
			executeFunction();
			executeWithRandomDelay();
		}
	}, randomDelay);
}

function pointsHandler() {
	if (lightsAreOn && doorIsOpen && !fireplaceIsLit) {
		pointsNum++;
		points.textContent = pointsNum;
	}
}

function timeHandler() {
	minutes++;
	if (minutes > 59) {
		hour++;
		minutes = 0;
	}
	if (hour > 12) {
		hour = 1;
	}
	varsToTime();
}
function varsToTime() {
	let timeLabel;
	if (hour > 7 && hour < 12) {
		timeLabel = "PM";
	} else {
		timeLabel = "AM";
	}
	if (minutes < 10) {
		minutes = `0${minutes}`;
	}
	time.textContent = `${hour}:${minutes} ${timeLabel}`;
	if (pointsNum > 299 && isNumber(pointsNum)) {
		gameActive = false;
		setScreen("Won");
		finalTime.textContent = `You won at ${hour}:${minutes} ${timeLabel}`;
	}
	if (hour == 6) {
		gameActive = false;
		setScreen("Expired");
		setTimeout(function () {
			if (ranTip == 0) {
				setScreen("Tip9");
			} else {
				setScreen("Tip10");
			}
			ranTip = ranTip + 1;
			ranTip = ranTip % 2;
		}, 2000);
	}
}

function isNumber(value) {
	return typeof value === "number";
}
executeWithRandomDelay();
setScreen("startScreen");

var slider = document.getElementById("myRange");
var output = document.getElementById("speed");
output.innerHTML = slider.value;
slider.oninput = function () {
	speed = this.value;
	output.innerHTML = Math.round(this.value * 10) / 10;
	noises.fire.playbackRate = speed;
	clearInterval(ticker1);
	clearInterval(ticker2);
	ticker1 = setInterval(function () {
		if (gameActive) {
			frontUpd();
			fireUpd();
			windowsUpd();
			devbar.innerHTML = `
			Front: ${(Math.round(frontTick * 1000) / 1000) * 25}%
			<br> Fire: ${(Math.round(fireTick * 10000) / 10000) * 50}%
			<br> Windows: ${(windowsTick - 20) * 2.5}% 
			<br> Door: ${(Math.round(doorTick * 1000) / 1000) * 20}%
		`;
			doorUpd();
		}
	}, 1000 / speed);
	ticker2 = setInterval(function () {
		if (gameActive) {
			pointsHandler();
			timeHandler();
		}
	}, 500 / speed);
};
