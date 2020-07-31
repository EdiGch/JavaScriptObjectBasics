function showSecondMsg() {
    return 'Hellow admin from fuction showSecondMsg';
}

var user = {
    name: 'admin',
    showMsg: function(){
        return 'Hellow admin'
    },
    showSecondMsg:showSecondMsg
}

console.log(user.showMsg());
console.log(user.showSecondMsg());