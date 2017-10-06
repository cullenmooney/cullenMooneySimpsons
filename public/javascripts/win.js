var winState = {
	create: function() {
		var winBack = game.add.image(100, 60, 'bartWin');
		winBack.scale.setTo(.55, .55)
		var startLabel = game.add.text(100, game.world.height-80,
										'YOU WON!!! press "W" to play again',
										{font: '25px Helvetica', fill: '#000000'});
		var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);
		wkey.onDown.addOnce(this.restart, this);
	},

	restart: function() {
		game.state.start('boot')
	},
};