const hello = {
    world : 1
}
const hello2 = {
    world2 : -1
}

export {hello,hello2}

setInterval(function () {

        console.log("export: "+hello.world)
        console.log("export: "+hello2.world2)
}, 500)

