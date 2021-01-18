input.onButtonPressed(Button.A, function () {
    player.change(LedSpriteProperty.X, -1)
    music.playTone(247, music.beat(BeatFraction.Quarter))
})
input.onButtonPressed(Button.B, function () {
    player.change(LedSpriteProperty.X, 1)
    music.playTone(262, music.beat(BeatFraction.Quarter))
})
let bullet_4: game.LedSprite = null
let bullet_3: game.LedSprite = null
let player: game.LedSprite = null
let _5 = 0
let _4 = 0
let _0 = 0
let _1 = 2
let _2 = 3
let _3 = 5
let bullet_speed = 1500
game.setLife(3)
let bullet_1 = game.createSprite(randint(0, 1), 0)
let bullet_2 = game.createSprite(randint(2, 4), 0)
player = game.createSprite(2, 3)
basic.forever(function () {
    if (!(game.isGameOver())) {
        for (let index = 0; index < 4; index++) {
            basic.pause(bullet_speed)
            music.playTone(131, music.beat(BeatFraction.Quarter))
            bullet_1.change(LedSpriteProperty.Y, 1)
            bullet_2.change(LedSpriteProperty.Y, 1)
            if (game.score() > 5) {
                bullet_3.change(LedSpriteProperty.Y, 1)
                bullet_4.change(LedSpriteProperty.Y, 1)
            }
        }
    }
})
basic.forever(function () {
    basic.pause(125)
    bullet_speed += -2
    if (bullet_speed < 750) {
        basic.pause(125)
        bullet_speed += 1
    }
})
basic.forever(function () {
    if (bullet_1.get(LedSpriteProperty.X) == 3) {
        if (player.isTouching(bullet_1)) {
            game.removeLife(1)
            basic.pause(bullet_speed + 25)
        }
    }
})
basic.forever(function () {
    if (game.score() == 6) {
        _0 = 0
        _1 = 4
        _2 = 0
        _3 = 4
        _4 = 0
        _5 = 4
        bullet_1 = game.createSprite(randint(0, 4), 0)
        bullet_2 = game.createSprite(randint(0, 4), 0)
        bullet_3 = game.createSprite(randint(0, 4), 0)
        bullet_4 = game.createSprite(randint(0, 4), 0)
        basic.pause(5000)
    } else {
        basic.pause(1023)
    }
})
