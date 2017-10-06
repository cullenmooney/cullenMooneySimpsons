var game = new Phaser.Game(640, 320, Phaser.AUTO, 'myGame');

game.state.add('boot' , bootState);
game.state.add('load', loadState);
game.state.add('play', playState);
game.state.add('loadTwo', loadTwoState);
game.state.add('playTwo', playTwoState);
game.state.add('win', winState);

game.state.start('boot');