const STAR_NUMBER = 101
const stars = []

const TREE_NUMBER = 20
const trees = []

function setup() {
    for (let i = 0; i < STAR_NUMBER; i++) {
        stars.push({
            size:  RND(1, 4),
            color: RND(3),
            x: RND(ctx.width),
            y: RND(ry(.5)),
        })
    }

    for (let i = 0; i < TREE_NUMBER; i++) {
        trees.push({
            x: RND(ctx.width),
            y: ry(.5) + RND(ry(.5)),
        })
    }
}

function draw() {
    // sky
    fill(.65, .5, .15)
    rect(0, 0, rx(1), ry(.5))

    for (let i = 0; i < stars.length; i++) {
        const star = stars[i]
        lineWidth(star.size)
        switch(star.color) {
            case 0: fill(.01, .5, .5); break;
            case 1: fill(.15, .5, .5); break;
            case 2: fill(.45, .5, .5); break;
            case 3: fill(.60, .5, .5); break;
        }
        plot(star.x, star.y)
    }

    // sun
    lineWidth(2)
    fill(.03, .5, .5)
    circle(rx(.7), ry(.45), ry(.1))

    // ground
    fill(.75, .3, .2)
    rect(0, ry(.5), rx(1), ry(.5))

    // skyline
    lineWidth(3)
    stroke(.55, .5, .5)
    line(0, ry(.5), rx(1), ry(.5))

    trees.forEach(tree => {
        const base = 25
        lineWidth(5)
        stroke(.4, .4, .05)
        line(tree.x, tree.y, tree.x, tree.y-base)

        const h = 30
        const r = 30
        let x = tree.x
        let y = tree.y - base- h
        fill(.55, .4, .1)
        triangle(x, y, x-r, y+h, x+r, y+h)
        y -= h - 10
        triangle(x, y, x-r, y+h, x+r, y+h)
        y -= h - 10
        triangle(x, y, x-r, y+h, x+r, y+h)
    })
}
