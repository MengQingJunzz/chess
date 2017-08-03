/**
 * Created by Administrator on 2017/8/2.
 */
var game = {
    top:0,
    status : false,
    dataArr : [],
    analysisXY : function (xy) {
        return {
            x : xy[0],
            y : xy[1]
        }
    },
    createTable : function () {
        var table=document.createElement('table');
        var tr=document.createElement('tr');
        var td=document.createElement('td');
        table.border=1;
        table.border.listStyle='none';
        for(var i=0;i<8;i++){
            var ttr=tr.cloneNode(false)
            for(var j=0;j<8;j++){
                var ttd=td.cloneNode(false)
                ttr.appendChild(ttd)
                if((j%2==0 &&i%2==0)||(j%2!=0 &&i%2!=0)){
                    ttd.style.backgroundColor='white'
                }
                else if((j%2!=0 &&i%2==0)||(j%2==0 &&i%2!=0)){
                    ttd.style.backgroundColor='gray'
                }
                var xy= i+''+j;
                ttd.setAttribute('data-xy',xy);

            }
            table.appendChild(ttr)
        }
        return table;
    },
    reset : function (box,table) {
        if(box.children[0] !== undefined){
            this.dataArr = [];
            this.status = true;
            document.getElementById('current').innerText = 0;
            document.getElementById('top').innerText = this.top;
            var tdList = box.querySelectorAll('td');
            for(var i in tdList){
                try{
                    if(tdList[i].hasChildNodes()){
                        tdList[i].removeChild(tdList[i].children[0]);
                    }
                }catch (e){}
            }
            console.log(this);
        }else {
            box.appendChild(table);
        }
    },
    gameover : function () {
        if(!this.status){
            document.querySelector('.box_back').querySelector('span').innerText = this.dataArr.length;
            if(this.top < this.dataArr.length){
                this.top = this.dataArr.length;
            }
            show();
        }
    }
};
