OOP : Lập trình Hướng đối tượng (Concept)
Pascal : Lập hướng hàm (JS)

ES6(2015) : class, instance (thực thể --> link kiến thức thực tế)

Class : lớp các thực thể ( ) 

Heroes : 
Enimes : 
BackGround : 

// Kế thừa : 
TV : function on,off,volume+,volumn-, channel+, channel-,...

Điều hòa : function on, off, temp+, temp-, hot, cold,....

// Class Electric {
    constructor() {
        name : string,
        brand : string,
        width : number,
        height : number,
        color : string
    }

    // methods
    on() {
        /// logic//
        return true;
    }

    off() {

    }

    volumn() {

    }

    channel() {

    }
}

const TV_2020 = new Electric("Tivi", "Sony", 120, 90, "black");
const TV_2021 = new Electric("Tivi", "Samsung", 150,100, "gold");
const check = TV_2020.on() ;
if (check) {

}
