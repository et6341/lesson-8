while (true) {
    console.log(input.lightLevel())
    if (input.lightLevel() + 25 <= 85) {
        light.setAll(light.rgb(255, 0, 255))
    } else if (input.lightLevel() + 25 >= 85) {
        light.setAll(light.rgb(0, 0, 255))
    } else if (input.lightLevel() + 25 <= 150) {
        light.setAll(light.rgb(0, 255, 0))
    } else if (input.lightLevel() + 25 >= 150) {
        light.setAll(light.rgb(255, 255, 0))
    } else {
        light.clear()
    }
    
}
