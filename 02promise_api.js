var fs = require('fs')

var p1 = new Promise(function (resolve, reject) {
    fs.readFile('./data/a.txt', 'utf8', function (err, data) {
        if (err) {
            reject(err)
        }
        resolve(data)
    })
})

var p2 = new Promise(function (resolve, reject) {
    fs.readFile('./data/b.txt', 'utf8', function (err, data) {
        if (err) {
            reject(err)
        }
        resolve(data)
    })
})

var p3 = new Promise(function (resolve, reject) {
    fs.readFile('./data/c.txt', 'utf8', function (err, data) {
        if (err) {
            reject(err)
        }
        resolve(data)
    })
})


p1
    .then(function (data) {        //then的链式调用，就依次调用p1,p2,p3， p1执行完了才执行p2,p2执行完了才执行p3
        console.log(data)
        return p2   //这里return的是new Promise 对象，这个return什么下一个.then中的data就是什么
        //return '123'  //return123那么第二个then中的data收到的就是123
    }, function (err) {
        console.log('读取文件失败' + err)
    })

    .then(function (data) {
        console.log(data)
        return p3
    })

    .then(function(data){
        console.log(data)
    })

