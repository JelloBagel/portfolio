import React, { useEffect, useRef } from "react";
import Phaser from "phaser";

import loading from "./Scenes/loading";
import title from "./Scenes/title";
import game from "./Scenes/game";

export default React.memo(() => {
  const gameWrapper = useRef();

  useEffect(() => {
    if (gameWrapper) {
      const config = {
        type: Phaser.AUTO,
        width: gameWrapper.current.offsetWidth * window.devicePixelRatio,
        height: gameWrapper.current.offsetHeight * window.devicePixelRatio,
        parent: "phaser-game",
        physics: {
          default: "arcade",
          arcade: {
            gravity: { y: 300 },
            debug: false
          }
        },
        backgroundColor: "#E5E5E5",
        scene: [loading, title, game]
      };

      const phaserGame = new Phaser.Game(config);
      return () => phaserGame.destroy(true);
    }
  }, []);

  return <div ref={gameWrapper} id="phaser-game" />;
});

// let player;
// let cursors;
// let hydrants;
// let score = 0;
// let scoreText;
// let bombs;
// let gameOver = false;

// function preload() {
//   this.load.image("background", bgImg);
//   this.load.image("ground", groundImg);
//   this.load.image("platform", platformImg);
//   this.load.image("hydrant", hydrantImg);
//   this.load.image("bomb", bombImg);
//   this.load.spritesheet("dude", dudeImg, {
//     frameWidth: 32,
//     frameHeight: 48
//   });
// }

// function create() {
//   const grounds = this.physics.add.staticGroup();

//   grounds.create(300, 300, "ground");

//   player = this.physics.add.sprite(100, 0, "dude");

//   player.setBounce(0.2);
//   player.setCollideWorldBounds(true);

//   // this.anims.create({
//   //   key: "left",
//   //   frames: this.anims.generateFrameNumbers("dude", { hydrantt: 0, end: 3 }),
//   //   frameRate: 10,
//   //   repeat: -1
//   // });

//   this.anims.create({
//     key: "turn",
//     frames: [{ key: "dude", frame: 4 }],
//     frameRate: 20
//   });

//   // this.anims.create({
//   //   key: "right",
//   //   frames: this.anims.generateFrameNumbers("dude", { hydrantt: 5, end: 8 }),
//   //   frameRate: 10,
//   //   repeat: -1
//   // });

//   cursors = this.input.keyboard.createCursorKeys();

//   scoreText = this.add.text(16, 16, "score: 0", {
//     fontSize: "32px",
//     fill: "#000"
//   });

//   bombs = this.physics.add.group();
//   // this.add.image(300, 200, "background");

//   this.physics.add.collider(player, grounds);
//   this.physics.add.collider(hydrants, grounds);
//   this.physics.add.collider(bombs, grounds);

//   // this.physics.add.overlap(player, hydrants, collecthydrant, null, this);
//   this.physics.add.collider(player, bombs, hitBomb, null, this);
// }

// function update() {
//   if (gameOver) {
//     return;
//   }

//   // if (cursors.left.isDown) {
//   //   player.setVelocityX(-160);
//   //   player.anims.play("left", true);
//   // } else if (cursors.right.isDown) {
//   //   player.setVelocityX(160);
//   //   player.anims.play("right", true);
//   // } else {
//   //   player.setVelocityX(0);
//   //   player.anims.play("turn");
//   // }
//   player.setVelocityX(0);
//   player.anims.play("turn");

//   if (player.body.touching.down && cursors.up.isDown) {
//     player.setVelocityY(-330);
//   }
// }

// function createHydrant(player, hydrant) {
//   hydrant.disableBody(true, true);

//   score += 10;
//   scoreText.setText("Score: " + score);

//   if (hydrants.countActive(true) === 0) {
//     hydrants.children.iterate(function(child) {
//       child.enableBody(true, child.x, 0, true, true);
//     });

//     var x =
//       player.x < 300
//         ? Phaser.Math.Between(300, 600)
//         : Phaser.Math.Between(0, 300);

//     var bomb = bombs.create(x, 16, "bomb");
//     bomb.setBounce(1);
//     bomb.setCollideWorldBounds(true);
//     bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
//   }
// }

// function hitBomb(player, bomb) {
//   this.physics.pause();

//   player.setTint(0xff0000);

//   player.anims.play("turn");

//   gameOver = true;
// }
