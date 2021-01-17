const characteristics = [
    `is generally smaller than the African bush elephant and has the highest
    body point on the head.`,
    `male, when fully-grown, is about 2.75 m (9.0 ft) tall at the shoulder and
    4 t (4.4 short tons) in weight, while females are smaller at about 2.40 m
    (7.9 ft) at the shoulder and 2.7 t (3.0 short tons) in weight.`,
    `trunk is an elongation of the nose and upper lip combined; the nostrils
    are at its tip, which has a one finger-like process. The trunk contains
    as many as 60,000 muscles, which consist of longitudinal and radiating sets.`,
    `tusks serve to dig for water, salt, and rocks, to debark and uproot trees,
    as levers for maneuvering fallen trees and branches, for work, for display,
    for marking trees, as weapon for offence and defence, as trunk-rests, and
    as protection for the trunk. Elephants are known to be right or left tusked.`,
    `skin colour is usually grey, and may be masked by soil because of dusting
    and wallowing. Their wrinkled skin is movable and contains many nerve centres.`,
    `has a very large and highly developed neocortex, a trait also shared by
    humans, apes and certain dolphin species. They have a greater volume of
    cerebral cortex available for cognitive processing than all other existing
    land animals.`
];
const habitat = [
    `They inhabit grasslands, tropical evergreen forests, semi-evergreen forests,
    moist deciduous forests, dry deciduous forests and dry thorn forests, in
    addition to cultivated and secondary forests and scrublands`,
    `Their habitats occur from sea level to over 3,000 m (9,800 ft). In the
    eastern Himalaya in northeast India, they regularly move up above 3,000 m
    (9,800 ft) in summer at a few sites.`,
    `In China, the Asian elephant survives only in the prefectures of
    Xishuangbanna, Simao, and Lincang of southern Yunnan.`,
    `Three subspecies are recognized: Sri Lankan, Indian, and Sumatran.`,
    `In Bangladesh, some isolated populations survive in the south-east
    Chittagong Hills. A herd of 20–25 wild elephants was reported as
    being present in the Garo Hills of Mymensingh in the late-1990s.`,
    `The Borneo elephant occurs in Borneo's northern and northeastern parts.
    In 2003, mitochondrial DNA analysis and microsatellite data indicated that
    the Borneo elephant population is derived from stock that originated in the
    region of the Sunda Islands.`
];
const behavior = [
    `Asian elephants are classified as megaherbivores and consume up to 150 kg
    (330 lb) of plant matter per day.`,
    `Asian elephants are crepuscular mammals. This means they are active
    primarily during the twilight period.`,
    `Asian elephants are known to feed on at least 112 different plant species,
    most commonly of the order Malvales, as well as the legume, palm, sedge and
    true grass families.`,
    `Asian elephants need 80–200 litres of water a day and use even more for
    bathing. At times, they scrape the soil for clay or minerals`,
    `Adult females and calves move about together as groups, while adult males
    disperse from their mothers upon reaching adolescence.`,
    `Unlike African elephants, which rarely use their forefeet for anything
    other than digging or scraping soil, Asian elephants are more agile at using
    their feet in conjunction with the trunk for manipulating objects.`
];

const getIndex = array => {
    index =  Math.floor(Math.random() * 6);
    return array[index];
}

const messageGenerator = () => {
    const charMessage = getIndex(characteristics);
    const habMessage = getIndex(habitat);
    const behavMessage = getIndex(behavior);
    return `
    |-------------------------------------------|
    |  Here are your Elephant Facts for today!  |
    |-------------------------------------------|

    CHARACTERISTICS:
    The Asian elephant ${charMessage}

    HABITAT:
    ${habMessage}

    BEHAVIOR:
    ${behavMessage}
                                                                    
    |---------------------------------------------------------------|
    |                Thank you for using Elephant Facts!            |
    |  (Facts are compiled from the Asian Elephant Wikipedia page)  |
    |---------------------------------------------------------------|

                                _    _
                                /=\\""/=\\
                               (=(0_0 |=)__
                                \\_\\ _/_/   )
                                  /_/   _  /\\
                                 |/ |\\ || |
                                    ~ ~  ~
    `
}

console.log(messageGenerator());
