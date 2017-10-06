var map;
var bart;
var layer;
var p;
var cursors;
var spaceKey;
var homerSprite;
var homerOne;
var homerTwo;
var homerThree;
var homerFour;

function bartOw () {
    map.bart.position.x-=100;
}

function bartAttack () {
    map.bart.position.x+=200;
}

function makeUppercutOne () {
    homerOne.position.x+=20;
}

function makeUppercutTwo () {
    homerTwo.position.x+=20;
}

function makeUppercutThree () {
    homerThree.position.x+=20;
}

function makeUppercutFour () {
    homerFour.position.x+=20;
}

var playTwoState = {
create: function() {
    map = game.add.tilemap('simpsonMapTwo');
    map.addTilesetImage('moes', 'tiles');
    layer = map.createLayer('back')
    layertwo = map.createLayer('foreground');



    homerLogoOne = game.add.sprite(425, 0, "homerIcon");
    homerLogoOne.fixedToCamera = true;
    homerLogoOne.alpha = .9;
    homerLogoOne.scale.setTo(.3, .3);

    homerLogoTwo = game.add.sprite(475, 0 , "homerIcon");
    homerLogoTwo.fixedToCamera = true;
    homerLogoTwo.alpha = .9;
    homerLogoTwo.scale.setTo(.3, .3);

    homerLogoThree = game.add.sprite(525, 0 , "homerIcon");
    homerLogoThree.fixedToCamera = true;
    homerLogoThree.alpha = .9;
    homerLogoThree.scale.setTo(.3, .3);

    homerLogoFour = game.add.sprite(575, 0 , "homerIcon");
    homerLogoFour.fixedToCamera = true;
    homerLogoFour.alpha = .9;
    homerLogoFour.scale.setTo(.3, .3);

    map.bart=game.add.sprite(0, 210, "bart");
    game.physics.arcade.enable(map.bart);
    map.bart.body.collideWorldBounds = true;
    map.bart.maxHealth=20;
    map.bart.health=20;
    map.bartHealthMeter = map.game.add.plugin(Phaser.Plugin.HealthMeter);
    map.bartHealthMeter.bar(
        map.bart,
        {x: 20, y: 12.5, width: 100, height: 20});
    map.bart.scale.setTo(.6, .6);
    map.bart.animations.add('run', [0,1,2,3], 9, true);
    map.bart.animations.add('kick', [0,1,2,3], 60, false);

    homerOne=game.add.sprite(500, 180, 'homer');
    game.physics.arcade.enable(homerOne);
    homerOne.health=10;
    homerOne.scale.x=-1;
    homerOne.body.mass= -100;
    homerOne.animations.add('hammer', [0,1,2,3,4], 5, true);
    homerOne.animations.play('hammer');
    homerOne.body.velocity.setTo(-40,0);

    homerTwo=game.add.sprite(1000, 180, 'homer');
    game.physics.arcade.enable(homerTwo);
    homerTwo.health=10;
    homerTwo.scale.x=-1;
    homerTwo.body.mass= -100;
    homerTwo.animations.add('hammer', [0,1,2,3,4], 5, true);
    homerTwo.animations.play('hammer');
    homerTwo.body.velocity.setTo(-40,0);

    homerThree=game.add.sprite(1500, 180, 'homer');
    game.physics.arcade.enable(homerThree);
    homerThree.health=10;
    homerThree.scale.x=-1;
    homerThree.body.mass= -100;
    homerThree.animations.add('hammer', [0,1,2,3,4], 5, true);
    homerThree.animations.play('hammer');
    homerThree.body.velocity.setTo(-40,0);

    homerFour=game.add.sprite(2000, 180, 'homer');
    game.physics.arcade.enable(homerFour);
    homerFour.health=10;
    homerFour.scale.x=-1;
    homerFour.body.mass= -100;
    homerFour.animations.add('hammer', [0,1,2,3,4], 5, true);
    homerFour.animations.play('hammer');
    homerFour.body.velocity.setTo(-40,0);
    
    layer.resizeWorld();

    doh = game.add.audio('doh');
    game.sound.setDecodedCallback([doh], homerOne.kill, this);

    dohTwo = game.add.audio('doh');
    game.sound.setDecodedCallback([doh], homerTwo.kill, this);

    dohThree = game.add.audio('doh');
    game.sound.setDecodedCallback([doh], homerThree.kill, this);

    dohFour = game.add.audio('doh');
    game.sound.setDecodedCallback([doh], homerFour.kill, this);

    ow = game.add.audio('ow');
    game.sound.setDecodedCallback([ow], bartOw, this);

    uppercut = game.add.audio('uppercut');
    game.sound.setDecodedCallback([uppercut], makeUppercutOne, this);

    uppercutTwo = game.add.audio('uppercut');
    game.sound.setDecodedCallback([uppercut], makeUppercutTwo, this);

    uppercutThree = game.add.audio('uppercut');
    game.sound.setDecodedCallback([uppercut], makeUppercutThree, this);

    uppercutFour = game.add.audio('uppercut');
    game.sound.setDecodedCallback([uppercut], makeUppercutFour, this);

    game.camera.follow(map.bart)
    
    cursors = game.input.keyboard.createCursorKeys();
    spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
},

update: function() {
	map.bart.body.velocity.x = 0;
    console.log(map.bart.health)

    if (cursors.left.isDown) {
        map.bart.body.velocity.x = -100
        map.bart.animations.play('run');
        map.bart.scale.x=-.6;
    }
    
    else if (cursors.right.isDown) {
        map.bart.body.velocity.x = 100
        map.bart.animations.play('run');
        map.bart.scale.x=.6;
    }

    else {
        map.bart.animations.stop('run');
    }

    if (spaceKey.isDown) {
        map.bart.animations.play('kick');
    }

    if (game.physics.arcade.collide(map.bart, homerOne)) {
        map.bart.health--
        homerOne.body.velocity.setTo(-40,0)
        bartOw();
            if(map.bart.position.x-=100) {
                ow.play();
            }
            
            if (map.bart.health === 0) {
            map.bart.kill();
            game.state.start('load');
            }

        if(spaceKey.isDown && (cursors.left.isDown || cursors.right.isDown)) {
            homerOne.health--
            bartAttack();
            ow.stop();
            makeUppercutOne();
                if (homerOne.position.x+=40) {
                    uppercut.play();
                }
                if(homerOne.health === 0) {
                    doh.play();
                    homerOne.kill();
                    homerLogoOne.kill();
                    console.log(homerOne)
                }
        }

    }

    else {
        if (map.bart.health < 20) {
            map.bart.health+=.003;
                if (map.bart.health > 20) {
                    map.bart.health+=0;
                }
                if (map.bart.health < 0) {
                    map.bart.kill();
                    game.state.start('load');
                }  

         }
    }

    if (game.physics.arcade.collide(map.bart, homerTwo)) {
        map.bart.health--
        homerTwo.body.velocity.setTo(-40,0)
        bartOw();
        if(map.bart.position.x-=100) {
            ow.play();
        }
        if (map.bart.health === 0) {
            map.bart.kill();
            game.state.start('load');
        }

        if(spaceKey.isDown && (cursors.left.isDown || cursors.right.isDown)) {
            homerTwo.health--
            bartAttack();
            ow.stop();
            makeUppercutTwo()
                if (homerTwo.position.x+=40) {
                    uppercutTwo.play();
                }
                if(homerTwo.health === 0) {
                    dohTwo.play();
                    homerTwo.kill();
                    homerLogoTwo.kill();
                }
        }

    }

    else {
        if (map.bart.health < 20) {
            map.bart.health+=.003;
                if (map.bart.health > 20) {
                    map.bart.health+=0;
                }
                if (map.bart.health < 0) {
                    map.bart.kill();
                    game.state.start('load');
                }              
         }
    }

    if (game.physics.arcade.collide(map.bart, homerThree)) {
        map.bart.health--
        homerThree.body.velocity.setTo(-40,0)
        bartOw();
        if(map.bart.position.x-=100) {
            ow.play();
        }
        if (map.bart.health === 0) {
            map.bart.kill();
            game.state.start('load');

        }

        if(spaceKey.isDown && (cursors.left.isDown || cursors.right.isDown)) {
            homerThree.health--
            bartAttack();
            ow.stop();
            makeUppercutThree()
                if (homerThree.position.x+=40) {
                    uppercutThree.play();
                }
                if(homerThree.health === 0) {
                    dohThree.play();
                    homerThree.kill();
                    homerLogoThree.kill();
                }
        }
    }

    else {
        if (map.bart.health < 20) {
            map.bart.health+=.003;
                if (map.bart.health > 20) {
                    map.bart.health+=0;
                }
                if (map.bart.health < 0) {
                    map.bart.kill();
                    game.state.start('load');
                }              
         }
    }

    if (game.physics.arcade.collide(map.bart, homerFour)) {
        map.bart.health--
        homerFour.body.velocity.setTo(-40,0)
        bartOw();
        if(map.bart.position.x-=100) {
            ow.play();
        }
        if (map.bart.health === 0) {
            map.bart.kill();
            game.state.start('load');

        }

        if(spaceKey.isDown && (cursors.left.isDown || cursors.right.isDown)) {
            homerFour.health--
            bartAttack();
            ow.stop();
            makeUppercutThree()
                if (homerFour.position.x+=40) {
                    uppercutFour.play();
                }
                if(homerThree.health === 0) {
                    dohFour.play();
                    homerFour.kill();
                    homerLogoFour.kill();
                    game.state.start('win');
                }
        }
    }

    else {
        if (map.bart.health < 20) {
            map.bart.health+=.003;
                if (map.bart.health > 20) {
                    map.bart.health+=0;
                }
                if (map.bart.health < 0) {
                    map.bart.kill();
                    game.state.start('load');
                }             
         }
    }
},

Win: function() {
	game.state.start('win');
}
};