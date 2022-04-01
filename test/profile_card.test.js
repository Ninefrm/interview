const chai = require("chai");
const assert = chai.assert;
const profile_card = require('../profile_card');

// test('sumar 1 + 2 es igual a 3', () => {
//     expect(berlin_clock(1, 2)).toBe(3);
// });

describe("Tests", () => {
    it("complete succcessfully", () => {
        // User Data https://api.namefake.com/
        // Description fantasynamegenerators.com/character-descriptions.php
        var profileDataNew = {
            name: "Dr. Boris Konopelski",
            carrer: "Murray, Runolfsdottir and Murazik",
            profile_description: "Brown, shoulder-length hair is pulled back to reveal a fresh, lived-in face. Shining green eyes, set narrowly within their sockets, watch anxiously over the children they've grown affactionate of for so long. Fair skin gracefully compliments his hair and leaves a bittersweet memory of his luck. This is the face of Almon Moonwalker, a true globetrotter among high elves. He stands towering above others, despite his athletic frame. There's something seductive about him, perhaps it's his sense of comradery or perhaps it's simply his persistence. But nonetheless, people tend to buy him a drink, while secretly training to become more like him.",
            picture: "https://picsum.photos/200/300?random="+Math.random(), //Preventing creating a file upload function 
            email_user: "cindy.flatley@mphaotu.com",
            phone_user: "4929637710831685",
            username: "rafaelamurphy"
        };
        assert.strictEqual(profile_card(profileDataNew),
            true);
    });
    it("more data", () => {
        var profileDataNew2 = {
            name: "Dr. Jerel Pric",
            carrer: "Murray, Runolfsdottir and Murazik",
            profile_description: "Brown, shoulder-length hair is pulled back to reveal a fresh, lived-in face. Shining green eyes, set narrowly within their sockets, watch anxiously over the children they've grown affactionate of for so long. Fair skin gracefully compliments his hair and leaves a bittersweet memory of his luck. This is the face of Almon Moonwalker, a true globetrotter among high elves. He stands towering above others, despite his athletic frame. There's something seductive about him, perhaps it's his sense of comradery or perhaps it's simply his persistence. But nonetheless, people tend to buy him a drink, while secretly training to become more like him.",
            picture: "https://picsum.photos/200/300?random="+Math.random(), //Preventing creating a file upload function 
            email_user: "cindy.flatley@mphaotu.com",
            phone_user: "4929637710831685",
            username: "rafaelamurphy",
            cellphone: "46212351231",
            blood_type: "O-"
        };
        assert.strictEqual(profile_card(profileDataNew2),
            true);
    });
    it("Less data", () => {
        var profileDataNew2 = {
            name: "Torey Balistreri",
            carrer: "Murray, Runolfsdottir and Murazik",
            profile_description: "Brown, shoulder-length hair is pulled back to reveal a fresh, lived-in face. Shining green eyes, set narrowly within their sockets, watch anxiously over the children they've grown affactionate of for so long. Fair skin gracefully compliments his hair and leaves a bittersweet memory of his luck. This is the face of Almon Moonwalker, a true globetrotter among high elves. He stands towering above others, despite his athletic frame. There's something seductive about him, perhaps it's his sense of comradery or perhaps it's simply his persistence. But nonetheless, people tend to buy him a drink, while secretly training to become more like him.",
            picture: "https://picsum.photos/200/300?random="+Math.random() //Preventing creating a file upload function 
        };
        assert.strictEqual(profile_card(profileDataNew2),
            false);
    });
    it("Unfill fields", () => {
        // User Data https://api.namefake.com/
        // Description fantasynamegenerators.com/character-descriptions.php
        var profileDataNew = {
            name: "",
            carrer: "Murray, Runolfsdottir and Murazik",
            profile_description: "Brown, shoulder-length hair is pulled back to reveal a fresh, lived-in face. Shining green eyes, set narrowly within their sockets, watch anxiously over the children they've grown affactionate of for so long. Fair skin gracefully compliments his hair and leaves a bittersweet memory of his luck. This is the face of Almon Moonwalker, a true globetrotter among high elves. He stands towering above others, despite his athletic frame. There's something seductive about him, perhaps it's his sense of comradery or perhaps it's simply his persistence. But nonetheless, people tend to buy him a drink, while secretly training to become more like him.",
            picture: "https://picsum.photos/200/300?random="+Math.random(), //Preventing creating a file upload function 
            email_user: "cindy.flatley@mphaotu.com",
            phone_user: "4929637710831685",
            username: "rafaelamurphy"
        };
        assert.strictEqual(profile_card(profileDataNew),
            false);
    });
});