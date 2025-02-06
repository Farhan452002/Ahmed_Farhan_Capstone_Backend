require("dotenv").config();
const mongoose = require("mongoose");
const Question = require("../models/Question");
const connectDB = require("../config/db");

const seedQuestions = [
    // Prophets
    { category: "Prophets", question: "Who was the first Prophet of known to man?", answer: "Prophet Adam (A.S)", points: 100 },
    { category: "Prophets", question: "Which Prophet was able to cure the blind, raise the dead and cure skin disease with the permission of God?", answer: "Prophet Esa/Jesus (A.S)", points: 200 },
    { category: "Prophets", question: "Which Prophet is known as KhalilUllah (Friend of God)?", answer: "Prophet Ibrahim/Abraham (A.S)", points: 300 },
    { category: "Prophets", question: "The Prophet Mohammad (S.A.W)is from the lineage of which son of Prophet Abraham (A.S)?", answer: "Prophet Ismail/Ishmael (A.S)", points: 400 },
    // Islamic History
    { category: "Islamic History", question: "Name the 4 Caliphs after the Prophet Mohammad (S.A.W)", answer: "Abu Bakr As-Siddiq (R.A), Omar ibn Al-Khattab (R.A), Uthman ibn Al-Affan (R.A), Ali ibn Abi-Talib (R.A)", points: 100 },
    { category: "Islamic History", question: "What was the name of the first battle for the muslims?", answer: "Battle of Badr", points: 200 },
    { category: "Islamic History", question: "What was the name of that young Sahabi/Companion who was rich but still accepted Islam even though his parents would disown him such that he died without enough cloth to even cover his corpse?", answer: "Mushab ibn Umair (R.A)", points: 300 },
    { category: "Islamic History", question: "Which Ummayad Caliph was known as the 5th Rightly Guided Caliph?", answer: "Umar ibn Abdul-Aziz (R.a)", points: 400 },

    // Quran
    { category: "Quran", question: "How many Surahs are there in the Quran?", answer: "114", points: 100 },
    { category: "Quran", question: "Which Surah is known as 'The Heart of the Quran'?", answer: "Surah Yaseen", points: 200 },
    { category: "Quran", question: "Which Prophet is mentioned the most times in the Quran?", answer: "Prophet Musa/Moses (A.S)", points: 300 },
    { category: "Quran", question: "Name and translate the Surah that is about the oneness of God", answer: "Surah Ekhlas/Scincerity: 'Say (Oh Mohammad), God is one. He is independent. He was not born of anything and nothing was born of him. There is none like him'", points: 400 },

    // Islamic Law
    { category: "Islamic Law", question: "What are the three times a muslim is forbidden from praying?", answer: "Sunrise, When the Sun is at its peak, Right before Sunset", points: 100 },
    { category: "Islamic Law", question: "How many fard/obligatory acts are there in Wudu/Ablution? Name them", answer: "4. Washing the whole face once, Washing both arms upto and including the elbows once, Wiping 1/4th of the head, Washing both feet upto and including the ankles", points: 200 },
    { category: "Islamic Law", question: "How much Zakat must a Muslim give from their saved wealth?", answer: "2.5%", points: 300 },
    { category: "Islamic Law", question: "Is it permissible to loan money and recieve extra in return? Who are the types of people cursed by God in these transactions", answer: "No. The person who takes interest, gives it, witnesses it, writes down the contract", points: 400 },

    // Tabligh
    { category: "Tabligh", question: "What does 'Dawah' mean in Islam?", answer: "Inviting others to Islam", points: 100 },
    { category: "Tabligh", question: "Who is the primary audience of the effort of Dawah and Tabligh?", answer: "Muslims", points: 200 },
    { category: "Tabligh", question: "Who was the pioneer of the effort of Dawah and Tabligh?", answer: "Maulana Ilyas Khandalavi (R.a)", points: 300 },
    { category: "Tabligh", question: "Name the 6 qualities of Dawah and Tabligh?", answer: "Firm Belief in the Kalimah, Steadfastness in Salah, Seeking Ilm and Doing Zikr, Ikram ul-Muslimeen, Ekhlas e Niyat, Dawah and Tabligh", points: 400 }
];

const seedDB = async () => {
    try {
        await connectDB();
        await Question.deleteMany();
        await Question.insertMany(seedQuestions);
        console.log("Database seeded successfully");
        process.exit();
    } catch (error) {
        console.error("Seeding error:", error);
        process.exit(1);
    }
};

seedDB();
