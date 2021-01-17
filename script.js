const characteristics = [
    "is generally smaller than the African bush elephant and has the highest body point on the head.",
    
];
const habitat = [];
const behavior = [
    "Asian elephants are classified as megaherbivores and consume up to 150 kg (330 lb) of plant matter per day.",
    "Asian elephants are crepuscular mammals. This means they are active primarily during the twilight period.",
    "Asian elephants are known to feed on at least 112 different plant species, most commonly of the order Malvales, as well as the legume, palm, sedge and true grass families.",
    "Asian elephants need 80–200 litres of water a day and use even more for bathing. At times, they scrape the soil for clay or minerals",
    "Adult females and calves move about together as groups, while adult males disperse from their mothers upon reaching adolescence.",
    "Unlike African elephants, which rarely use their forefeet for anything other than digging or scraping soil, Asian elephants are more agile at using their feet in conjunction with the trunk for manipulating objects"
];

const messageGenerator = () => {
    const charIndex = '';
    const habitatIndex = '';
    const behaviorIndex = '';
    return `
    Here are you Elephant Facts for today!

    The Asian elephant <characteristics>.
    <habitat>.
    <behavior>.

    Thank you for using Elephant Facts!
    `
}

console.log(messageGenerator());