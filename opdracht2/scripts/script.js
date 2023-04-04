// JavaScript Document
console.log('howdy');

/**========================================================================
 *                    DARK / LIGHT MODE CHECK EN CHANGE
 *========================================================================**/

function changeLogo() {
	const logoImage = document.querySelector('body > img');
	const prefersDark =
		window.matchMedia &&
		window.matchMedia('(prefers-color-scheme: dark)').matches;
	const favoritesCounter = document.querySelector('body>button>span');

	if (prefersDark) {
		logoImage.src = './images/filmstash-dark.PNG';
		console.log('hello darkness my old friend');
		favoritesCounter.style.color = 'var(--color-maindonkerder)';
	} else {
		logoImage.src = './images/filmstash-light.PNG';
		console.log('let there be light');
		favoritesCounter.style.color = 'var(--color-muur)';
	}
}

setInterval(changeLogo, 1000);

/**========================================================================
 *                   ÉÉN FILM TEGELIJK LATEN ZIEN
 *========================================================================**/

function closeOtherSections(exceptSection) {
	const sections = document.querySelectorAll(
		'body > section:first-of-type > section:first-of-type > section:first-of-type > section'
	);
	sections.forEach((section) => {
		if (section !== exceptSection) {
			section.style.display = 'none';
		}
	});
}

/**========================================================================
 *                      FILMS INLADEN MET DRAG AND DROP
 *========================================================================**/

function drag(ev) {
	ev.dataTransfer.setData('text', ev.target.id);
}

document
	.getElementById('televisie')
	.addEventListener('dragover', function (event) {
		event.preventDefault();
	});

document.getElementById('televisie').addEventListener('drop', function (event) {
	event.preventDefault();
	const data = event.dataTransfer.getData('text');
	const sectionId = data + '-section';
	const section = document.getElementById(sectionId);
	if (section) {
		section.style.display = 'flex';
		const sections = document.querySelectorAll(
			'body > section:first-of-type > section:first-of-type > section:first-of-type > section'
		);
		sections.forEach((sec) => {
			if (sec !== section) {
				sec.style.display = 'none';
			}
		});
	}
});
/**========================================================================
 *               FILMS INLADEN MET MUIS (KLIK) + TOETSENBORD
 *========================================================================**/
// Eerste film
const eeaao = document.querySelector(
	'body > section:nth-of-type(2) > ul > li:first-of-type'
);

const eeaaoInformatie = document.getElementById('eeaao-section');
let openEeaao = false;

eeaao.addEventListener('click', (event) => {
	// KLIK
	if (openEeaao === false) {
		eeaaoInformatie.style.display = 'flex';
		openEeaao = true;
		closeOtherSections(eeaaoInformatie);
	} else {
		eeaaoInformatie.style.display = 'none';
		openEeaao = false;
	}
});

function showEeaao(e) {
	// TOETSENBORD
	if (e.keyCode === 49 && openEeaao === false) {
		eeaaoInformatie.style.display = 'flex';
		openEeaao = true;
		closeOtherSections(eeaaoInformatie);
	} else if (e.keyCode === 49 && openEeaao === true) {
		eeaaoInformatie.style.display = 'none';
		openEeaao = false;
	}
}

document.addEventListener('keydown', showEeaao);

// Tweede film
const thewhale = document.querySelector(
	'body > section:nth-of-type(2) > ul > li:nth-of-type(2)'
);
const thewhaleInformatie = document.getElementById('thewhale-section');
let opentheWhale = false;

thewhale.addEventListener('click', (event) => {
	// KLIK
	if (opentheWhale === false) {
		thewhaleInformatie.style.display = 'flex';
		opentheWhale = true;
		closeOtherSections(thewhaleInformatie);
	} else {
		thewhaleInformatie.style.display = 'none';
		opentheWhale = false;
	}
});

function showtheWhale(e) {
	// TOETSENBORD
	if (e.keyCode === 50 && opentheWhale === false) {
		thewhaleInformatie.style.display = 'flex';
		opentheWhale = true;
		closeOtherSections(thewhaleInformatie);
	} else if (e.keyCode === 50 && opentheWhale === true) {
		thewhaleInformatie.style.display = 'none';
		opentheWhale = false;
	}
}

document.addEventListener('keydown', showtheWhale);

// Derde film
const thelittlemermaid = document.querySelector(
	'body > section:nth-of-type(2) > ul > li:nth-of-type(3)'
);
const tlmInformatie = document.getElementById('tlm-section');
let openTLM = false;

thelittlemermaid.addEventListener('click', (event) => {
	if (openTLM === false) {
		tlmInformatie.style.display = 'flex';
		openTLM = true;
		closeOtherSections(tlmInformatie);
	} else {
		tlmInformatie.style.display = 'none';
		openTLM = false;
	}
});

function showTLM(e) {
	// TOETSENBORD
	if (e.keyCode === 51 && openTLM === false) {
		tlmInformatie.style.display = 'flex';
		openTLM = true;
		closeOtherSections(tlmInformatie);
	} else if (e.keyCode === 51 && openTLM === true) {
		tlmInformatie.style.display = 'none';
		openTLM = false;
	}
}

document.addEventListener('keydown', showTLM);

// Vierde film
const blackpanther = document.querySelector(
	'body > section:nth-of-type(2) > ul > li:nth-of-type(4)'
);
const bpInformatie = document.getElementById('blackpanther-section');
let openbp = false;

blackpanther.addEventListener('click', (event) => {
	if (openbp === false) {
		bpInformatie.style.display = 'flex';
		openbp = true;
		closeOtherSections(bpInformatie);
	} else {
		bpInformatie.style.display = 'none';
		openbp = false;
	}
});

function showBlackPanther(e) {
	// TOETSENBORD
	if (e.keyCode === 52 && openbp === false) {
		bpInformatie.style.display = 'flex';
		openbp = true;
		closeOtherSections(bpInformatie);
	} else if (e.keyCode === 52 && openbp === true) {
		bpInformatie.style.display = 'none';
		openbp = false;
	}
}

document.addEventListener('keydown', showBlackPanther);

// Vijfde film
const parasite = document.querySelector(
	'body > section:nth-of-type(2) > ul > li:nth-of-type(5)'
);
const parasiteInformatie = document.getElementById('parasite-section');
let openParasite = false;

parasite.addEventListener('click', (event) => {
	if (openParasite === false) {
		parasiteInformatie.style.display = 'flex';
		openParasite = true;
		closeOtherSections(parasiteInformatie);
	} else {
		parasiteInformatie.style.display = 'none';
		openParasite = false;
	}
});

function showParasite(e) {
	// TOETSENBORD
	if (e.keyCode === 53 && openParasite === false) {
		parasiteInformatie.style.display = 'flex';
		openParasite = true;
		closeOtherSections(parasiteInformatie);
	} else if (e.keyCode === 53 && openParasite === true) {
		parasiteInformatie.style.display = 'none';
		openParasite = false;
	}
}

document.addEventListener('keydown', showParasite);

// Zesde film
const avatar = document.querySelector(
	'body > section:nth-of-type(2) > ul > li:nth-of-type(6)'
);
const avatarInformatie = document.getElementById('avatar-section');
let openAvatar = false;

avatar.addEventListener('click', (event) => {
	if (openAvatar === false) {
		avatarInformatie.style.display = 'flex';
		openAvatar = true;
		closeOtherSections(avatarInformatie);
	} else {
		avatarInformatie.style.display = 'none';
		openAvatar = true;
	}
});

function showAvatar(e) {
	// TOETSENBORD
	if (e.keyCode === 54 && openAvatar === false) {
		avatarInformatie.style.display = 'flex';
		openAvatar = true;
		closeOtherSections(avatarInformatie);
	} else if (e.keyCode === 54 && openAvatar === true) {
		avatarInformatie.style.display = 'none';
		openAvatar = false;
	}
}

document.addEventListener('keydown', showAvatar);

// Zevende film
const dwd = document.querySelector(
	'body > section:nth-of-type(2) > ul > li:nth-of-type(7)'
);
const dwdInformatie = document.getElementById('dwd-section');
let opendwd = false;

dwd.addEventListener('click', (event) => {
	if (opendwd === false) {
		dwdInformatie.style.display = 'flex';
		opendwd = true;
		closeOtherSections(dwdInformatie);
	} else {
		dwdInformatie.style.display = 'none';
		opendwd = false;
	}
});

function showDWD(e) {
	// TOETSENBORD
	if (e.keyCode === 55 && opendwd === false) {
		dwdInformatie.style.display = 'flex';
		opendwd = true;
		closeOtherSections(dwdInformatie);
	} else if (e.keyCode === 55 && opendwd === true) {
		dwdInformatie.style.display = 'none';
		opendwd = false;
	}
}

document.addEventListener('keydown', showDWD);

// Achtste film
const dune = document.querySelector(
	'body > section:nth-of-type(2) > ul > li:nth-of-type(8)'
);
const duneInformatie = document.getElementById('dune-section');
let openDune = false;

dune.addEventListener('click', (event) => {
	if (openDune === false) {
		duneInformatie.style.display = 'flex';
		openDune = true;
		closeOtherSections(duneInformatie);
	} else {
		duneInformatie.style.display = 'none';
		openDune = false;
	}
});

function showDune(e) {
	// TOETSENBORD
	if (e.keyCode === 56 && openDune === false) {
		duneInformatie.style.display = 'flex';
		openDune = true;
		closeOtherSections(duneInformatie);
	} else if (e.keyCode === 56 && openDune === true) {
		duneInformatie.style.display = 'none';
		openDune = false;
	}
}

document.addEventListener('keydown', showDune);

// Negende film
const tar = document.querySelector(
	'body > section:nth-of-type(2) > ul > li:nth-of-type(9)'
);
const tarInformatie = document.getElementById('tar-section');
let openTar = false;

tar.addEventListener('click', (event) => {
	if (openTar === false) {
		tarInformatie.style.display = 'flex';
		openTar = true;
		closeOtherSections(tarInformatie);
	} else {
		tarInformatie.style.display = 'none';
		openTar = false;
	}
});

function showTar(e) {
	// TOETSENBORD
	if (e.keyCode === 57 && openTar === false) {
		tarInformatie.style.display = 'flex';
		openTar = true;
		closeOtherSections(tarInformatie);
	} else if (e.keyCode === 57 && openTar === true) {
		tarInformatie.style.display = 'none';
		openTar = false;
	}
}

document.addEventListener('keydown', showTar);

// Tiende film
const nope = document.querySelector(
	'body > section:nth-of-type(2) > ul > li:nth-of-type(10)'
);
const nopeInformatie = document.getElementById('nope-section');
let openNope = false;

nope.addEventListener('click', (event) => {
	if (openNope === false) {
		nopeInformatie.style.display = 'flex';
		openNope = true;
		closeOtherSections(nopeInformatie);
	} else {
		nopeInformatie.style.display = 'none';
		openNope = false;
	}
});

function showNope(e) {
	// TOETSENBORD
	if (e.keyCode === 48 && openNope === false) {
		nopeInformatie.style.display = 'flex';
		openNope = true;
		closeOtherSections(nopeInformatie);
	} else if (e.keyCode === 48 && openNope === true) {
		nopeInformatie.style.display = 'none';
		openNope = false;
	}
}

document.addEventListener('keydown', showNope);

// Elfde film
const pinocchio = document.querySelector(
	'body > section:nth-of-type(2) > ul > li:nth-of-type(11)'
);
const pinocchioInformatie = document.getElementById('pinocchio-section');
let openPin = false;

pinocchio.addEventListener('click', (event) => {
	if (openPin === false) {
		pinocchioInformatie.style.display = 'flex';
		openPin = true;
		closeOtherSections(pinocchioInformatie);
	} else {
		pinocchioInformatie.style.display = 'none';
		openPin = false;
	}
});

function showPinocchio(e) {
	// TOETSENBORD
	if (e.keyCode === 173 && openPin === false) {
		pinocchioInformatie.style.display = 'flex';
		openPin = true;
		closeOtherSections(pinocchioInformatie);
	} else if (e.keyCode === 173 && openPin === true) {
		pinocchioInformatie.style.display = 'none';
		openPin = false;
	}
}

document.addEventListener('keydown', showPinocchio);

// Twaalfde film
const knivesout = document.querySelector(
	'body > section:nth-of-type(2) > ul > li:nth-of-type(12)'
);
const knivesoutInformatie = document.getElementById('knivesout-section');
let openKO = false;

knivesout.addEventListener('click', (event) => {
	if (openKO === false) {
		knivesoutInformatie.style.display = 'flex';
		openKO = true;
		closeOtherSections(knivesoutInformatie);
	} else {
		knivesoutInformatie.style.display = 'none';
		openKO = false;
	}
});

function showKnivesOut(e) {
	// TOETSENBORD
	if (e.keyCode === 61 && openKO === false) {
		knivesoutInformatie.style.display = 'flex';
		openKO = true;
		closeOtherSections(knivesoutInformatie);
	} else if (e.keyCode === 61 && openKO === true) {
		knivesoutInformatie.style.display = 'none';
		openKO = false;
	}
}

document.addEventListener('keydown', showKnivesOut);

/**========================================================================
 *                           FILMS OPSLAAN
 *========================================================================**/

const menuknop = document.querySelector('body > button');
const opgeslagen = document.querySelector('body>section:last-of-type');
let menuOpen = false;

menuknop.addEventListener('click', (event) => {
	if (menuOpen === false) {
		opgeslagen.classList.add('open');
		menuknop.style.backgroundColor = 'var(--color-mainlicht)';
		menuOpen = true;
	} else {
		opgeslagen.classList.remove('open');
		menuknop.style.backgroundColor = 'var(--color-maindonker)';
		menuOpen = false;
	}
});

/**========================================================================
 *                      SLA FILMS OP EN VERWIJDER
 *========================================================================**/

/**======================
 *   Everything Everywhere All At Once
 *========================**/
const saveEEAAO = document.querySelector(
	'body > section:first-of-type > section:first-of-type > section:first-of-type button'
);
const eeaaoSaved = document.querySelector(
	'body > section:last-of-type > section:nth-of-type(2)'
);
const eeaaoRemove = document.querySelector(
	'body > section:last-of-type > section:nth-of-type(2) button'
);

let eeaaoOpgeslagen = false;

saveEEAAO.addEventListener('click', (event) => {
	if (eeaaoOpgeslagen === false) {
		eeaaoSaved.classList.toggle('added');
		saveEEAAO.textContent = 'Verwijder uit opgeslagen films';
		saveEEAAO.style.backgroundColor = 'var(--color-maindonker)';
		saveEEAAO.style.color = 'var(--color-tvbackground)';
		eeaaoOpgeslagen = true;
	} else {
		eeaaoSaved.classList.remove('added');
		saveEEAAO.textContent = 'Sla deze film op';
		saveEEAAO.style.backgroundColor = 'var(--color-mainlicht)';
		saveEEAAO.style.color = 'var(--color-text)';
		eeaaoOpgeslagen = false;
	}
});

eeaaoRemove.addEventListener('click', (event) => {
	eeaaoSaved.classList.remove('added');
	saveEEAAO.textContent = 'Sla deze film op';
	saveEEAAO.style.backgroundColor = 'var(--color-mainlicht)';
	saveEEAAO.style.color = 'var(--color-text)';
	eeaaoOpgeslagen = false;
});

/**======================
 *    The Whale
 *========================**/
const savetheWhale = document.querySelector(
	'body > section:first-of-type > section:first-of-type > section:first-of-type > section:nth-of-type(2) button'
);
const theWhaleSaved = document.querySelector(
	'body > section:last-of-type > section:nth-of-type(3)'
);
const theWhaleRemove = document.querySelector(
	'body > section:last-of-type > section:nth-of-type(3) button'
);

let thewhaleOpgeslagen = false;

savetheWhale.addEventListener('click', (event) => {
	if (thewhaleOpgeslagen === false) {
		theWhaleSaved.classList.toggle('added');
		savetheWhale.textContent = 'Verwijder uit opgeslagen films';
		savetheWhale.style.backgroundColor = 'var(--color-maindonker)';
		savetheWhale.style.color = 'var(--color-tvbackground)';
		thewhaleOpgeslagen = true;
	} else {
		theWhaleSaved.classList.remove('added');
		savetheWhale.textContent = 'Sla deze film op';
		savetheWhale.style.backgroundColor = 'var(--color-mainlicht)';
		savetheWhale.style.color = 'var(--color-text)';
		thewhaleOpgeslagen = false;
	}
});

theWhaleRemove.addEventListener('click', (event) => {
	theWhaleSaved.classList.remove('added');
	savetheWhale.textContent = 'Sla deze film op';
	savetheWhale.style.backgroundColor = 'var(--color-mainlicht)';
	savetheWhale.style.color = 'var(--color-text)';
	thewhaleOpgeslagen = false;
});

/**======================
 *    The Little Mermaid
 *========================**/
const saveTLM = document.querySelector(
	'body > section:first-of-type > section:first-of-type > section:first-of-type > section:nth-of-type(3) button'
);
const tlmSaved = document.querySelector(
	'body > section:last-of-type > section:nth-of-type(4)'
);
const tlmRemove = document.querySelector(
	'body > section:last-of-type > section:nth-of-type(4) button'
);

let tlmOpgeslagen = false;

saveTLM.addEventListener('click', (event) => {
	if (tlmOpgeslagen === false) {
		tlmSaved.classList.toggle('added');
		saveTLM.textContent = 'Verwijder uit opgeslagen films';
		saveTLM.style.backgroundColor = 'var(--color-maindonker)';
		saveTLM.style.color = 'var(--color-tvbackground)';
		tlmOpgeslagen = true;
	} else {
		tlmSaved.classList.remove('added');
		saveTLM.textContent = 'Sla deze film op';
		saveTLM.style.backgroundColor = 'var(--color-mainlicht)';
		saveTLM.style.color = 'var(--color-text)';
		tlmOpgeslagen = false;
	}
});

tlmRemove.addEventListener('click', (event) => {
	tlmSaved.classList.remove('added');
	saveTLM.textContent = 'Sla deze film op';
	saveTLM.style.backgroundColor = 'var(--color-mainlicht)';
	saveTLM.style.color = 'var(--color-text)';
	tlmOpgeslagen = false;
});

/**======================
 *    Black Panther
 *========================**/
const saveBP = document.querySelector(
	'body > section:first-of-type > section:first-of-type > section:first-of-type > section:nth-of-type(4) button'
);
const bpSaved = document.querySelector(
	'body > section:last-of-type > section:nth-of-type(5)'
);
const bpRemove = document.querySelector(
	'body > section:last-of-type > section:nth-of-type(5) button'
);

let bpOpgeslagen = false;

saveBP.addEventListener('click', (event) => {
	if (bpOpgeslagen === false) {
		bpSaved.classList.toggle('added');
		saveBP.textContent = 'Verwijder uit opgeslagen films';
		saveBP.style.backgroundColor = 'var(--color-maindonker)';
		saveBP.style.color = 'var(--color-tvbackground)';
		bpOpgeslagen = true;
	} else {
		bpSaved.classList.remove('added');
		saveBP.textContent = 'Sla deze film op';
		saveBP.style.backgroundColor = 'var(--color-mainlicht)';
		saveBP.style.color = 'var(--color-text)';
		bpOpgeslagen = false;
	}
});

bpRemove.addEventListener('click', (event) => {
	bpSaved.classList.remove('added');
	saveBP.textContent = 'Sla deze film op';
	saveBP.style.backgroundColor = 'var(--color-mainlicht)';
	saveBP.style.color = 'var(--color-text)';
	bpOpgeslagen = false;
});

/**======================
 *    Parasite
 *========================**/
const saveParasite = document.querySelector(
	'body > section:first-of-type > section:first-of-type > section:first-of-type > section:nth-of-type(5) button'
);
const parasiteSaved = document.querySelector(
	'body > section:last-of-type > section:nth-of-type(6)'
);
const parasiteRemove = document.querySelector(
	'body > section:last-of-type > section:nth-of-type(6) button'
);

let parasiteOpgeslagen = false;

saveParasite.addEventListener('click', (event) => {
	if (parasiteOpgeslagen === false) {
		parasiteSaved.classList.toggle('added');
		saveParasite.textContent = 'Verwijder uit opgeslagen films';
		saveParasite.style.backgroundColor = 'var(--color-maindonker)';
		saveParasite.style.color = 'var(--color-tvbackground)';
		parasiteOpgeslagen = true;
	} else {
		parasiteSaved.classList.remove('added');
		saveParasite.textContent = 'Sla deze film op';
		saveParasite.style.backgroundColor = 'var(--color-mainlicht)';
		saveParasite.style.color = 'var(--color-text)';
		parasiteOpgeslagen = false;
	}
});

parasiteRemove.addEventListener('click', (event) => {
	parasiteSaved.classList.remove('added');
	saveParasite.textContent = 'Sla deze film op';
	saveParasite.style.backgroundColor = 'var(--color-mainlicht)';
	saveParasite.style.color = 'var(--color-text)';
	parasiteOpgeslagen = false;
});

/**======================
 *    Avatar
 *========================**/
const saveAvatar = document.querySelector(
	'body > section:first-of-type > section:first-of-type > section:first-of-type > section:nth-of-type(6) > section > button'
);

const avatarSaved = document.querySelector(
	'body > section:last-of-type > section:nth-of-type(7)'
);

const avatarRemove = document.querySelector(
	'body > section:last-of-type > section:nth-of-type(7) button'
);

let avatarOpgeslagen = false;

saveAvatar.addEventListener('click', (event) => {
	if (avatarOpgeslagen === false) {
		avatarSaved.classList.toggle('added');
		saveAvatar.textContent = 'Verwijder uit opgeslagen films';
		saveAvatar.style.backgroundColor = 'var(--color-maindonker)';
		saveAvatar.style.color = 'var(--color-tvbackground)';
		avatarOpgeslagen = true;
	} else {
		avatarSaved.classList.remove('added');
		saveAvatar.textContent = 'Sla deze film op';
		saveAvatar.style.backgroundColor = 'var(--color-mainlicht)';
		saveAvatar.style.color = 'var(--color-text)';
		avatarOpgeslagen = false;
	}
});

avatarRemove.addEventListener('click', (event) => {
	avatarSaved.classList.remove('added');
	saveAvatar.textContent = 'Sla deze film op';
	saveAvatar.style.backgroundColor = 'var(--color-mainlicht)';
	saveAvatar.style.color = 'var(--color-text)';
	avatarOpgeslagen = false;
});

/**======================
 *    Don't Worry Darling
 *========================**/
const saveDWD = document.querySelector(
	'body > section:first-of-type > section:first-of-type > section:first-of-type > section:nth-of-type(7) button'
);
const dwdSaved = document.querySelector(
	'body > section:last-of-type > section:nth-of-type(8)'
);
const dwdRemove = document.querySelector(
	'body > section:last-of-type > section:nth-of-type(8) button'
);

let dwdOpgeslagen = false;

saveDWD.addEventListener('click', (event) => {
	if (dwdOpgeslagen === false) {
		dwdSaved.classList.toggle('added');
		saveDWD.textContent = 'Verwijder uit opgeslagen films';
		saveDWD.style.backgroundColor = 'var(--color-maindonker)';
		saveDWD.style.color = 'var(--color-tvbackground)';
		dwdOpgeslagen = true;
	} else {
		dwdSaved.classList.remove('added');
		saveDWD.textContent = 'Sla deze film op';
		saveDWD.style.backgroundColor = 'var(--color-mainlicht)';
		saveDWD.style.color = 'var(--color-text)';
		dwdOpgeslagen = false;
	}
});

dwdRemove.addEventListener('click', (event) => {
	dwdSaved.classList.remove('added');
	saveDWD.textContent = 'Sla deze film op';
	saveDWD.style.backgroundColor = 'var(--color-mainlicht)';
	saveDWD.style.color = 'var(--color-text)';
	dwdOpgeslagen = false;
});

/**======================
 *    Dune
 *========================**/
const saveDune = document.querySelector(
	'body > section:first-of-type > section:first-of-type > section:first-of-type > section:nth-of-type(8) button'
);
const duneSaved = document.querySelector(
	'body > section:last-of-type > section:nth-of-type(9)'
);
const duneRemove = document.querySelector(
	'body > section:last-of-type > section:nth-of-type(9) button'
);

let duneOpgeslagen = false;

saveDune.addEventListener('click', (event) => {
	if (duneOpgeslagen === false) {
		duneSaved.classList.toggle('added');
		saveDune.textContent = 'Verwijder uit opgeslagen films';
		saveDune.style.backgroundColor = 'var(--color-maindonker)';
		saveDune.style.color = 'var(--color-tvbackground)';
		duneOpgeslagen = true;
	} else {
		duneSaved.classList.remove('added');
		saveDune.textContent = 'Sla deze film op';
		saveDune.style.backgroundColor = 'var(--color-mainlicht)';
		saveDune.style.color = 'var(--color-text)';
		duneOpgeslagen = false;
	}
});

duneRemove.addEventListener('click', (event) => {
	duneSaved.classList.remove('added');
	saveDune.textContent = 'Sla deze film op';
	saveDune.style.backgroundColor = 'var(--color-mainlicht)';
	saveDune.style.color = 'var(--color-text)';
	duneOpgeslagen = false;
});

/**======================
 *    Tàr
 *========================**/
const saveTar = document.querySelector(
	'body > section:first-of-type > section:first-of-type > section:first-of-type > section:nth-of-type(9) button'
);
const tarSaved = document.querySelector(
	'body > section:last-of-type > section:nth-of-type(10)'
);
const tarRemove = document.querySelector(
	'body > section:last-of-type > section:nth-of-type(10) button'
);

let tarOpgeslagen = false;

saveTar.addEventListener('click', (event) => {
	if (tarOpgeslagen === false) {
		tarSaved.classList.toggle('added');
		saveTar.textContent = 'Verwijder uit opgeslagen films';
		saveTar.style.backgroundColor = 'var(--color-maindonker)';
		saveTar.style.color = 'var(--color-tvbackground)';
		tarOpgeslagen = true;
	} else {
		tarSaved.classList.remove('added');
		saveTar.textContent = 'Sla deze film op';
		saveTar.style.backgroundColor = 'var(--color-mainlicht)';
		saveTar.style.color = 'var(--color-text)';
		tarOpgeslagen = false;
	}
});

tarRemove.addEventListener('click', (event) => {
	tarSaved.classList.remove('added');
	saveTar.textContent = 'Sla deze film op';
	saveTar.style.backgroundColor = 'var(--color-mainlicht)';
	saveTar.style.color = 'var(--color-text)';
	tarOpgeslagen = false;
});

/**======================
 *    Nope
 *========================**/
const saveNope = document.querySelector(
	'body > section:first-of-type > section:first-of-type > section:first-of-type > section:nth-of-type(10) button'
);
const nopeSaved = document.querySelector(
	'body > section:last-of-type > section:nth-of-type(11)'
);
const nopeRemove = document.querySelector(
	'body > section:last-of-type > section:nth-of-type(11) button'
);

let nopeOpgeslagen = false;

saveNope.addEventListener('click', (event) => {
	if (nopeOpgeslagen === false) {
		nopeSaved.classList.toggle('added');
		saveNope.textContent = 'Verwijder uit opgeslagen films';
		saveNope.style.backgroundColor = 'var(--color-maindonker)';
		saveNope.style.color = 'var(--color-tvbackground)';
		nopeOpgeslagen = true;
	} else {
		nopeSaved.classList.remove('added');
		saveNope.textContent = 'Sla deze film op';
		saveNope.style.backgroundColor = 'var(--color-mainlicht)';
		saveNope.style.color = 'var(--color-text)';
		nopeOpgeslagen = false;
	}
});

nopeRemove.addEventListener('click', (event) => {
	nopeSaved.classList.remove('added');
	saveNope.textContent = 'Sla deze film op';
	saveNope.style.backgroundColor = 'var(--color-mainlicht)';
	saveNope.style.color = 'var(--color-text)';
	nopeOpgeslagen = false;
});

/**======================
 *    Pinocchio
 *========================**/
const savePinocchio = document.querySelector(
	'body > section:first-of-type > section:first-of-type > section:first-of-type > section:nth-of-type(11) button'
);
const pinocchioSaved = document.querySelector(
	'body > section:last-of-type > section:nth-of-type(12)'
);
const pinocchioRemove = document.querySelector(
	'body > section:last-of-type > section:nth-of-type(12) button'
);

let pinOpgeslagen = false;

savePinocchio.addEventListener('click', (event) => {
	if (pinOpgeslagen === false) {
		pinocchioSaved.classList.add('added');
		savePinocchio.textContent = 'Verwijder uit opgeslagen films';
		savePinocchio.style.backgroundColor = 'var(--color-maindonker)';
		savePinocchio.style.color = 'var(--color-tvbackground)';
		pinOpgeslagen = true;
	} else {
		pinocchioSaved.classList.remove('added');
		savePinocchio.textContent = 'Sla deze film op';
		savePinocchio.style.backgroundColor = 'var(--color-mainlicht)';
		savePinocchio.style.color = 'var(--color-text)';
		pinOpgeslagen = false;
	}
});

pinocchioRemove.addEventListener('click', (event) => {
	pinocchioSaved.classList.remove('added');
	savePinocchio.textContent = 'Sla deze film op';
	savePinocchio.style.backgroundColor = 'var(--color-mainlicht)';
	savePinocchio.style.color = 'var(--color-text)';
	pinOpgeslagen = false;
});

/**======================
 *    Knives Out
 *========================**/
const saveKnivesOut = document.querySelector(
	'body > section:first-of-type > section:first-of-type > section:first-of-type > section:nth-of-type(12) button'
);
const knivesoutSaved = document.querySelector(
	'body > section:last-of-type > section:nth-of-type(13)'
);
const knivesoutRemove = document.querySelector(
	'body > section:last-of-type > section:nth-of-type(13) button'
);

let knivesoutOpgeslagen = false;

saveKnivesOut.addEventListener('click', (event) => {
	if (knivesoutOpgeslagen === false) {
		knivesoutSaved.classList.toggle('added');
		saveKnivesOut.textContent = 'Verwijder uit opgeslagen films';
		saveKnivesOut.style.backgroundColor = 'var(--color-maindonker)';
		saveKnivesOut.style.color = 'var(--color-tvbackground)';
		knivesoutOpgeslagen = true;
	} else {
		knivesoutSaved.classList.remove('added');
		saveKnivesOut.textContent = 'Sla deze film op';
		saveKnivesOut.style.backgroundColor = 'var(--color-mainlicht)';
		saveKnivesOut.style.color = 'var(--color-text)';
		knivesoutOpgeslagen = false;
	}
});

knivesoutRemove.addEventListener('click', (event) => {
	knivesoutSaved.classList.remove('added');
	saveKnivesOut.textContent = 'Sla deze film op';
	saveKnivesOut.style.backgroundColor = 'var(--color-mainlicht)';
	saveKnivesOut.style.color = 'var(--color-text)';
	knivesoutOpgeslagen = false;
});

/**========================================================================
 *                  SCHERM WORDT WIT ALS FILM IS INGELADEN
 *========================================================================**/

function checkForFlexSections() {
	const screen = document.querySelector(
		'body > section:first-of-type > section:first-of-type > section:first-of-type'
	);
	const sections = screen.querySelectorAll('section');

	let displayFlexFound = false;

	sections.forEach((section) => {
		if (window.getComputedStyle(section).display === 'flex') {
			displayFlexFound = true;
			console.log('Echt een flex');
			return;
		} else {
			console.log('Geen flex hier');
		}
	});

	if (displayFlexFound) {
		screen.style.backgroundColor = 'var(--color-tvbackground)';
		screen.style.boxShadow =
			'rgba(255, 255, 255, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;';
	} else {
		screen.style.backgroundColor = 'var(--color-text)';
		screen.style.boxShadow = 'inset 0px 0px 20px rgba(31, 31, 31, 0.9);';
	}
}

setInterval(checkForFlexSections, 1000); // run elke seconde

/**========================================================================
 *                  OPSLAAN-KNOP GEEFT FEEDBACK OVER AANTAL OPGESLAGEN FILMS
 *========================================================================**/

function updateSavedCount() {
	const sections = document.querySelectorAll(
		'body > section:last-of-type > section.added'
	);
	const noMovies = document.querySelector(
		'body>section:last-of-type > section:first-of-type'
	);
	const savedCount = document.querySelector('body > button > span');

	if (sections.length > 0) {
		savedCount.textContent = sections.length;
		noMovies.style.display = 'none';
	} else {
		savedCount.textContent = 0;
		noMovies.style.display = 'inline';
	}
}

setInterval(updateSavedCount, 1000);

/**========================================================================
 *                  FILTER DE FILMS
 *========================================================================**/

const form = document.querySelector('body > section:nth-of-type(2) > form');
const moviesList = document.querySelector('.movies');
const optionAlles = document.querySelector('#filter-alles');
const optionGrappig = document.querySelector('#filter-grappig');
const optionSpannend = document.querySelector('#filter-spannend');
const optionKindvriendelijk = document.querySelector('#filter-kindvriendelijk');
const optionDiepgaand = document.querySelector('#filter-diepgaand');

optionAlles.addEventListener('change', filterList);
optionGrappig.addEventListener('change', filterList);
optionSpannend.addEventListener('change', filterList);
optionKindvriendelijk.addEventListener('change', filterList);
optionDiepgaand.addEventListener('change', filterList);

function filterList(event) {
	let deLijst = document.querySelector('body>section:nth-of-type(2)>ul');
	let nieuweFilter = event.target.value;

	moviesList.classList.remove('slide-in-right');
	moviesList.classList.add('slide-out-right');
	setTimeout(() => {
		moviesList.className = `movies ${nieuweFilter}`;
		moviesList.classList.add('slide-in-right');
	}, 500);

	if (
		deLijst.className !== 'alles' &&
		window.matchMedia('(min-width: 80em)').matches
	) {
		deLijst.style.justifyContent = 'flex-end';
		deLijst.style.position = 'absolute';
		deLijst.style.bottom = '8.5vh';
		form.style.zIndex = 10;
	}
}
