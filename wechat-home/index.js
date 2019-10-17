var parent = document.getElementById('content-items');


var sent=document.getElementById('sent')
sent.addEventListener('click', function () {
    var html = $('<li class="content-item">'+
        '<div class="pic">' +
        '<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568993146031&di=fbce29fdd56160a0d32c878b837b863a&imgtype=0&src=http%3A%2F%2Fportrait3.sinaimg.cn%2F1239235402%2Fblog%2F180" alt="">' +
        '</div>' +
        '<div class="message">' +
        '<p class="name">盖世猪熊</p>' +
        '<p class="detail">小小猪熊真神奇</p>' +
        '</div>' +
        '</li>')
    html.appendTo(parent);


   /* var li = document.createElement('li');
    li.setAttribute('class', 'content-item');

    var divPic = document.createElement('div')
    divPic.setAttribute('class', 'pic')
    li.appendChild(divPic)

    var img = document.createElement('img')
    img.setAttribute('src', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568993146031&di=fbce29fdd56160a0d32c878b837b863a&imgtype=0&src=http%3A%2F%2Fportrait3.sinaimg.cn%2F1239235402%2Fblog%2F180')'
    divPic.append(img)

    var message = document.createElement('div')
    message.setAttribute('class', 'message')
    li.append(message)

    var pOfName = document.createElement('p')//创建元素节点
    pOfName.setAttribute('class', 'name')
    var pName = document.createTextNode('ha???')//创建文本节点
    pOfName.appendChild(pName)//添加文本节点
    message.append(pOfName);//添加元素节点

    var pOfDetail = document.createElement('p')
    pOfDetail.setAttribute('class', 'detail')
    var pDetail = document.createTextNode('shazia??')//创建文本节点
    pOfDetail.appendChild(pDetail)//添加文本节点
    message.append(pOfDetail);

    parent.appendChild(li)
*/
})