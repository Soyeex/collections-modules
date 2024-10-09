// Задание 1

const musicCollection = {
    albums: [
        { title: "Интро", artist: "Macan", year: "2024" },
        { title: "I AM", artist: "Macan", year: "2024" },
        { title: "TSM", artist: "Macan", year: "2024" },
        { title: "Заново", artist: "Macan", year: "2024" },
        { title: "Привыкаю", artist: "Macan", year: "2024" },
        { title: "Москва бежит", artist: "Macan", year: "2024" },
        { title: "Salut", artist: "Macan", year: "2024" },
        { title: "Сгорел", artist: "Macan", year: "2024" },
        { title: "А у меня", artist: "Macan", year: "2024" },
        { title: "Все правильно", artist: "Macan", year: "2024" },
        { title: "21+", artist: "Macan", year: "2024" },
        { title: "Все равно", artist: "Macan", year: "2024" },
        { title: "Как je", artist: "Macan", year: "2024" },
        { title: "Я хочу с тобой", artist: "Macan", year: "2024" },
        { title: "Беги", artist: "Macan", year: "2024" },
        { title: "Детство на кухне у огня", artist: "Macan", year: "2024" },
        { title: "Все будет хорошо", artist: "Macan", year: "2024" },
        { title: "Если Бог с нами", artist: "Macan", year: "2024" },
        { title: "Первая буква имени", artist: "Macan", year: "2024" },
        { title: "Взгляды", artist: "Macan", year: "2024" }
    ],


    [Symbol.iterator]: function() {
        let index = 0; 
        const albums = this.albums; 


        return {
            next: () => {
                if (index < albums.length) {
                    return { value: albums[index++], done: false };
                } else {
                    return { done: true }; 
                }
            }
        };
    }
};


for (const album of musicCollection) {
    console.log(`${album.title} - ${album.artist} (${album.year})`);
}

// Задание 2


const chefs = new Map([
    ["Виктор", "Пицца"],
    ["Ольга", "Суши"],
    ["Дмитрий", "Десерты"]
]);


const dishes = new Map([
    ["Маргарита", "Виктор"],
    ["Пепперони", "Виктор"],
    ["Филадельфия", "Ольга"],
    ["Калифорния", "Ольга"],
    ["Тирамису", "Дмитрий"],
    ["Чизкейк", "Дмитрий"]
]);


const orders = new Map();


function addOrder(clientName, orderedDishes) {
    const client = { name: clientName }; 
    orders.set(client, orderedDishes);
}


addOrder("Алексей", ["Пепперони", "Тирамису"]);
addOrder("Мария", ["Калифорния", "Маргарита"]);
addOrder("Ирина", ["Чизкейк"]);


function displayOrders() {
    for (const [client, orderedDishes] of orders) {
        const dishDetails = orderedDishes.map(dish => {
            const chef = dishes.get(dish); 
            return `${dish} (повар: ${chef})`;
        }).join(", ");
        
        console.log(`${client.name} заказал: ${dishDetails}`);
    }
}


displayOrders();