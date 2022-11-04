let arr = [
    {
        name: "Ha",
        gender: 'female',
        poin: 8
    },
    {
        name: "Huy",
        gender: 'male',
        poin: 9
    },
    {
        name: "Hung",
        gender: 'male',
        poin: 7
    },
    {
        name: "Phuong",
        gender: 'female',
        poin: 6
    },
    {
        name: "Huyen",
        gender: 'female',
        poin: 10
    },
    {
        name: "Long",
        gender: 'male',
        poin: 5
    },
    {
        name: "Luan",
        gender: 'male',
        poin: 10
    },
    {
        name: "Linh",
        gender: 'female',
        poin: 8
    }

];

let studentMan = arr.filter(function (item){
    return item.gender == 'male';
}).map(stu => {
    return stu.poin;
}).reduce(function (total,poinMan){
    return total + poinMan;
},0);

console.log('điểm trung bình các bạn nam '+ studentMan);
let studentGirl = arr.filter(function (item1){
    return item1.gender == 'female';
}).map(stu =>{
    return stu.poin;
}).reduce(function (total1,poinGirl){
    return total1 + poinGirl;
},0);
console.log('điểm trung bình các bạn nữ '+ studentGirl);

