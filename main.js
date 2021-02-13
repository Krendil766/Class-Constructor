/////////////////////FUNCTION CONSTRUCTOR

const Character = function(param) {
    this.name = param.name;
    this.server = param.server;
    this.gender = param.gender;
}

Character.prototype.walk = function() {
    console.log(this.name + " walk ");
}

Character.prototype.run = function() {
    console.log(this.name + ' run ');
}

const Race = function(param) {
    Character.apply(this, arguments)
    this.race = param.race;
}

Race.prototype.mainSkills = function() {
    console.log(this.name + ' mag ');
}
Object.setPrototypeOf(Race.prototype, Character.prototype)
    // Race.prototype = Object.create(Character.prototype);
    // Race.prototype.constructor = Character;

const Class = function(param) {
    Race.apply(this, arguments)
    this.class = param.class;
    this.specialskills = getspecialskills();

    function getspecialskills() {
        if (this.class = 'war') {
            return this.specialskills = 'sword strice';
        }
    }
}
Class.prototype.classSkill = function() {
    console.log(`${this.race} ${this.name} ${this.class} inflicts ${this.specialskills}`);
}
Object.setPrototypeOf(Class.prototype, Race.prototype)

let cla = new Class({
    name: 'Aleh',
    server: 'host',
    gender: "men",
    race: 'org',
    class: 'war'

})

console.log(cla);
cla.classSkill();
cla.walk()

//////////////////////////////////////////CLASS

class Character {
    constructor(param) {
        this.name = param.name;
        this.server = param.server;
        this.gender = param.gender;
    }

    walk() {
        console.log(this.name + ' walk');
    }
    run() {
        console.log(this.name + " run");
    }
}

class Race extends Character {
    constructor(param) {
        super(param);
        this.race = param.race;
    }
    mainSkills() {
        console.log(this.name + ' mag');
    }
    run() {
        super.run();
        console.log(this.name + ' run run run');
    }
}

class Class extends Race {
    constructor(param) {
        super(param);
        this.class = param.class;
        this.specialskills = this.getSkills();
    }
    classSkill() {
        console.log(`${this.race} ${this.name} ${this.class} inflicts ${this.specialskills}`);
    }
    getSkills() {
        if (this.class == 'war') {
            return 'sworg strice';
        }
    }
}

let cla = new Class({
    name: 'Aleh',
    server: 'host',
    gender: "men",
    race: 'org',
    class: 'war'
})

console.log(cla);
cla.classSkill();
cla.run()