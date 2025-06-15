//       |\___,,,__|\
//       {   -'  .'- }
// ~~~~~~~'\|~~~~~~|/~~~~~
// ~     yipaddie day    ~
// ~~~~~~~~~~~~~~~~~~~~~~~
//   _/|_/|  ____ |
//   \___/|/    |/`

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Template { 
    elements: {},
    pattern: "",
}

let ears = { "|\", "/\", "/|" };
let topknot = {",,,", "_,_", "___", ".-."};
const ear_template = Template { {ears, topknot }, "#1___#2__#1" }

let eyes = { "-", {">","<"}, "o", "O", "x", "X" };
let nose = { ".", "w", "W", "x" };
let whiskers = { {"{","}"}, {"(",")"}, {"[","]"} }
const face_template = Template { {eyes, nose, whiskers}, "#1   #2'  #3 '#2#1" }

let front = { "'\|~~~~~~|/", };
let tail = {
    `
_/|_/
\___/`},
    `  
n__.'
\`---'`},
}
let back = {
    `
|  ____ |
|/    |/`,
};
const back_template = Template {{tail, back}, "#1    #2"}

// costumes
const Costume {
    turned:    0,
    mix-face:  0,
    mix-ears:  0,
    mix-front: 0,
    mix-back:  0,
    ears:      ears[     random(0, ears.length - 1)],
    topknot:   topknot[  random(0, topknot.length - 1)],
    whiskers:  whiskers[ random(0, whiskers.length - 1)],
    eyes:      eyes[     random(0, eyes.length - 1)],
    front:     front[    random(0, front.length - 1)],
    back:      back[     random(0, back.length - 1)],
    tail:      ears[     random(0, ears.length - 1)],
}

function MakeCostume(overrides = {}) {
    return {...Costume, ...overrides};
}

const fluffy_costume = MakeCostume ({
    topknot:  topknot[0],
    whiskers: whiskers[0],
    tail:     tail[0],
});

const round_costume = MakeCostume ({
    topknot:  topknot[2],
    whiskers: whiskers[2],
    tail:     tail[1],
});

const constumes = Costume {fluffy_costume, round_costume, Costume}

// functions
function choose_part(part, index) {
    if (Array.isArray(part)) {
        return part[index]
    }

    return part
}


function put_parts(template) {
    parse_pattern()
}


function construct_a_kitty(msg) {
    length = msg.length
    console.log(put_parts(ears_template));
    console.log(put_parts(face_template);
    console.log(choose_part(front);
    console.log("~   " + msg + "   ~");
    console.log("~~~~~~~~~~~~~~~~~~~");
    console.log(row_back(back_template, 0))
    console.log(row_back(back_template, 1))
}

