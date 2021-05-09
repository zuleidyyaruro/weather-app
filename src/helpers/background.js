export const setBackgroundImage = (op) => {

    let background = "";
    switch (op) {

        case "Rain":
            background = "https://image.freepik.com/foto-gratis/lluvia-fuera-ventanas-villa_1321-908.jpg";
            break;
        case "Thunderstorm":
            background = "https://images.pexels.com/photos/1114688/pexels-photo-1114688.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
            break;
        case "Drizzle":
            background="https://cdn.pixabay.com/photo/2017/08/05/15/19/puddle-2584378_960_720.jpg"
            break;
        case "Clouds":
            background="https://images.pexels.com/photos/2678435/pexels-photo-2678435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            break;
    

    }
    return background;
}