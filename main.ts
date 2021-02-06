scene.onOverlapTile(SpriteKind.Player, assets.tile`tile4`, function (sprite, location) {
    game.over(true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -125
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile0`, function (sprite, location) {
    game.over(false, effects.melt)
})
let mySprite: Sprite = null
scene.setBackgroundColor(9)
mySprite = sprites.create(img`
    . . . . . 3 3 . . . . . . . . . 
    . . . . 3 3 3 3 . . . . . . . . 
    . . . . 3 3 3 3 . . . . . . . . 
    . . . . . 3 3 . . . . . . . . . 
    . . . . 1 f f 1 . . . . . . . . 
    . . . 1 f f f f 1 . . . . . . . 
    . . . 1 f f f f 1 . . . . . . . 
    . . . . 1 f f 1 . . . . . . . . 
    . . . f f 1 1 f f . . . . . . . 
    . . . f . . . . f . . . . . . . 
    . . . f . . . . f . . . . . . . 
    . . e e . . . . e e . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
tiles.setTilemap(tilemap`level1`)
mySprite.ay = 350
scene.cameraFollowSprite(mySprite)
