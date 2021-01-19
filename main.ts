function check_for_collision () {
    if (player.isTouching(bullet_1)) {
        game.removeLife(1)
        basic.pause(bullet_speed + 25)
    }
    if (player.isTouching(bullet_2)) {
        game.removeLife(1)
        basic.pause(bullet_speed + 25)
    }
    if (_0 == 1) {
        basic.pause(100)
        if (player.isTouching(bullet_3)) {
            game.removeLife(1)
            basic.pause(bullet_speed + 25)
        }
        if (player.isTouching(bullet_4)) {
            game.removeLife(1)
            basic.pause(bullet_speed + 25)
        }
    }
}
input.onButtonPressed(Button.A, function () {
    player.change(LedSpriteProperty.X, -1)
    music.playTone(262, music.beat(BeatFraction.Eighth))
})
input.onButtonPressed(Button.B, function () {
    player.change(LedSpriteProperty.X, 1)
    music.playTone(262, music.beat(BeatFraction.Eighth))
})
let _02 = 0
let bullet_4: game.LedSprite = null
let bullet_3: game.LedSprite = null
let player: game.LedSprite = null
let bullet_2: game.LedSprite = null
let bullet_1: game.LedSprite = null
let bullet_speed = 0
let _0 = 0
game.setScore(0)
_0 = 0
let _1 = 2
let _2 = 3
let _3 = 5
let _4 = 0
let _5 = 4
bullet_speed = 1500
game.setLife(3)
bullet_1 = game.createSprite(randint(0, 1), 0)
bullet_2 = game.createSprite(randint(2, 4), 0)
player = game.createSprite(2, 3)
basic.forever(function () {
    if (!(game.isGameOver())) {
        for (let index = 0; index < 5; index++) {
            basic.pause(bullet_speed)
            music.playTone(131, music.beat(BeatFraction.Quarter))
            bullet_1.change(LedSpriteProperty.Y, 1)
            bullet_2.change(LedSpriteProperty.Y, 1)
            if (_0 == 1) {
                bullet_3.change(LedSpriteProperty.Y, 1)
                bullet_4.change(LedSpriteProperty.Y, 1)
            }
        }
        game.addScore(1)
        bullet_1.set(LedSpriteProperty.X, randint(_02, _1))
        bullet_2.set(LedSpriteProperty.X, randint(_2, _3))
        bullet_1.set(LedSpriteProperty.Y, 0)
        bullet_2.set(LedSpriteProperty.Y, 0)
        if (_0 == 1) {
            bullet_3.set(LedSpriteProperty.X, randint(_4, _5))
            bullet_4.set(LedSpriteProperty.X, randint(_4, _5))
            bullet_3.set(LedSpriteProperty.Y, 0)
            bullet_4.set(LedSpriteProperty.Y, 0)
        }
        bullet_speed += -100
        if (bullet_speed < 750) {
            basic.pause(1000)
            bullet_speed += 18
        }
    }
})
basic.forever(function () {
    basic.pause(bullet_speed - 100)
    if (bullet_1.get(LedSpriteProperty.Y) == 3) {
        check_for_collision()
    }
})
basic.forever(function () {
    basic.pause(500)
    if (game.score() == 6) {
        bullet_3 = game.createSprite(randint(0, 4), 0)
        bullet_4 = game.createSprite(randint(0, 4), 0)
        bullet_1 = game.createSprite(randint(0, 4), 0)
        bullet_2 = game.createSprite(randint(0, 4), 0)
        _02 = 0
        _1 = 4
        _2 = 0
        _3 = 4
        _0 = 1
        basic.pause(5000)
    } else {
        for (let index = 0; index < 99; index++) {
            basic.pause(5000)
        }
    }
})
