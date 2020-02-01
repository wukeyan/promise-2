var fs = require('fs')

var p1 = new Promise(function (resolve, reject) {
    fs.readFile('./data/a.txt', 'utf8', function (err, data) {
        if (err) {
            reject(err)  //把容器的状态Pending变为rejected
        }
        resolve(data)   // 把容器的状态Pending改为成功resolveed
    })
})
//当p1成功了然后（hten）做指定的工作
p1
    .then(function (data) {   //then里面的这个function（data）就是resolve（data）
    console.log(data)
}, function (err) {
    console.log('读取文件失败' + err)
})

