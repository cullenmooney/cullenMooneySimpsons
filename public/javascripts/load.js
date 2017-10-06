var loadState = {
	preload: function() {
		var loadingLabel = game.add.text(80, 150, 'loading...', {font: '30px Courier', fill: '#ffffff'});

		game.load.tilemap('simpsonMapOne', 'images/simpsonMapOne.json', null, Phaser.Tilemap.TILED_JSON);
		game.load.image('tiles', 'images/newsky.png');
		game.load.image('tilesTwo', 'images/buildings.png');
    	game.load.spritesheet('bart', 'images/bartWalking.png', 89.9, 155);
    	game.load.spritesheet('homer', 'images/homerSprite.png', 170, 156);
    	game.load.image('homerIcon', 'images/newHomerIcon.png')
    	game.load.audio('doh', 'sounds/homerDoh.wav');
    	game.load.audio('ow', 'sounds/newBartOw.wav');
    	game.load.audio('uppercut', 'sounds/kick.wav');
    	game.load.image('bartWin', 'images/bartWin.png');
	},
	
	create: function() {
		game.state.start('play');
	}
};