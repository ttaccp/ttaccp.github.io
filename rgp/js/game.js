/**
 * blog:http://www.jcore.cn/
 * Created by zjj on 14-11-2.
 */

function Game(ops){

    // 私有变量
    var debug = ops.debug || false, // 调试模式
        mapMatrix = ops.map || [ [ 0, 0, 0],[ 0, 0, 0],[ 0, 0, 0]], // 游戏地图
        tileWidth = ops.tileWidth || 64, // 格子图片宽
        tileHeight = ops.tileHeight || 32, // 格子图片高
        startPoint = ops.startPoint || [2, 2], // 默认起点
        roleAbbreviation = ops.roleAbbreviation || "mlh", // 默认角色名称
        aStarType = ops.aStarType || "DiagonalFree", // 默认寻路类型（Manhattan,Diagonal,DiagonalFree,Euclidean,EuclideanFree）
        viewTileNumX = mapMatrix.length, // 地图X轴格子数量
        viewTileNumY = mapMatrix[0].length, // 地图Y轴格子数量
        viewWidth = viewTileNumX * tileWidth, // 地图实际宽（格子宽*X轴格子数量）
        viewHeight = viewTileNumY * tileHeight, // 地图实际高（格子高*Y轴格子数量）
        viewOffsetX = viewWidth / 2 - tileWidth / 2, // 修正地图显示x区域
        viewOffsetY = 0, // 默认地图显示y区域
        direction = 0, // 默认人物朝向（下）
        move = false, // 判断是否可以执行移动
        roleMove, // 角色移动
        rn = function(){ return Math.floor(Math.random()*2+1); } // 随机执行默认人物动画

    /**
     * NPC设置
     * @param xy 默认角色出现的x、y轴
     * @param roleAbbreviation 角色简写
     * @param direction 角色朝向
     */
    this.npc = function(xy,roleAbbreviation,direction){

    }

    /**
     * 角色设置
     * @param xy 默认角色出现的x、y轴
     * @param roleAbbreviation 角色简写
     * @param direction 角色朝向
     */
    this.role = function(xy,_roleAbbreviation,_direction){

        var _role_x = xy.x,
            _role_y = xy.y;

        startPoint = [_role_x, _role_y]; // 设置主角起点坐标
        roleAbbreviation = _roleAbbreviation;
        direction = _direction; // 角色八方向转向

        var _people = document.getElementById("people");
            _people.innerHTML = '<div id="role" class="none role z3 {0}_z{1}" ></div>'.format(roleAbbreviation, rn()),
            _role = document.getElementById("role"),
            _rolexy = tileToPix(_role_x, _role_y),
            roleLeft = _rolexy.x - 68,  // 左距离
            roleTop = _rolexy.y - 145; // 右距离
        _role.style.left = roleLeft + "px"; // 修正人物实际X坐标
        _role.style.top  = roleTop  + "px"; // 修正人物实际Y坐标

        imageMove = new roleImageMove(_role); // 人物跑动函数
        imageMove.stopRoleImage(direction); // 默认执行动画

        roleMove = new moving({ x: _rolexy.x, y : _rolexy.y }, 100);

        roleMove.update(function(_point,_direction){
            imageMove.update(_direction, 0);
            // 修复人物移动坐标
            _role.style.left = _point.x - 68 + "px";
            _role.style.top  = _point.y - 145 + "px";
        });

    }

    /**
     * 初始化游戏
     */
    this.init = function(){

        var tilesHTML =  init45Map(); // 初始化地图
        document.body.onclick = function(e){ // 绑定全局事件
            var _pix = pixToTile(e.pageX, e.pageY); // 屏幕坐标转45度地图坐标
            var _tile = document.getElementById("t_{0}_{1}".format(_pix.x, _pix.y)); // 地图格子节点
            initDebug(tilesHTML); // 显示格子

            if(_pix.x<0 || _pix.x > viewTileNumX - 1 || // 超出边界不处理事件
               _pix.y<0 || _pix.y > viewTileNumY - 1) return false;
            if(debug && (!_tile || _tile && _tile.getAttribute("stop")==1)) return false; // 格子不存在或障碍不可点击
            var endPoint = [_pix.x, _pix.y]; // 结束事件
            // console.log(endPoint);

            var resultPath = findPath(startPoint,endPoint); // 返回最优路径
            showPath(resultPath);
            movePath(resultPath.slice(1)); //删除当前自己所处坐标
        }

        initDebug(tilesHTML); // 显示格子

    }

    // 私有化函数 ----------

    function initDebug(outHTML){
        if(debug){
            var _debug = document.getElementById("debug");
            _debug.innerHTML = outHTML;
        }
    }

    // 45度函数
    function init45Map(){
        var tilePool = []; // 默认格子数量
        for (var i = 0; i < viewTileNumY; i++) {
            for (var j = 0; j < viewTileNumY; j++) {
                var tx = j, // x坐标
                    ty = i, // y坐标
                    point = tileToPix(j, i), // 坐标转换
                    tl = point.x, // 左距离
                    tr = point.y, // 右距离
                    st = mapMatrix[ty][tx], //是否障碍
                    d  = (parseInt(st) == 1) ? 1 : 2;
                    tml = '<div id="t_{0}_{1}" stop="{2}" class="d{3}" style="display: block; left: {4}px; top: {5}px;">[{6},{7}]</div>'
                    //tml = '<div id="t_{0}_{1}" stop="{2}" class="d{3}" style="display: block; left: {4}px; top: {5}px;"></div>'
                    .format(tx,ty,st,d,tl,tr,tx,ty); // 替换模板
                tilePool.push( tml ); // 加入数组
            }
        }
        return tilePool.join("");
    }

    // 屏幕坐标转45度地图坐标
    function pixToTile(px, py){

        var viewTileWidth = viewTileNumX / 2,
            viewTileHeight = viewTileNumY / 2;

        var x = Math.floor(px/tileWidth + py/tileHeight - viewTileWidth);
        var y = -(Math.ceil(px/tileWidth - py/tileHeight - viewTileHeight));

        return { x: x, y: y };
    }

    // 45度地图坐标转屏幕坐标
    function tileToPix(tx, ty){

        var x = (viewOffsetX + (tx - ty) * tileWidth / 2);
        var y = (viewOffsetY + (tx + ty) * tileHeight / 2);

        return { x: x, y: y };
    }

    // 寻路函数
    function findPath(startPoint,endPoint,callbackFun){

        var bench = (new Date()).getTime(),
            result = AStar(mapMatrix, startPoint, endPoint, aStarType),
            endTime = (new Date()).getTime() - bench;

        console.log("寻路消耗时间：{0}ms,路径节点长度：{1}".format(endTime/1000,result.length));

        return result;
    }

    // 显示路径
    function showPath(result){
        if(debug)
        {
            for(var i = 0; i<result.length; i++){ // 遍历路径节点
                (function(i){
                    var xy = result[i];
                    var dom = document.getElementById("t_{0}_{1}".format(xy[0],xy[1])); // 查找对应节点
                    var timer = null;
                    timer = setTimeout(function () { // 延时更改样式
                        dom.className = "d3 z3";
                        clearTimeout(timer); // 清空定时器
                    }, i * 30);
                })(i);
            }
        }
    }

    // 根据寻路路径队列数组，移动人物
    function movePath(queues) {

        if (!move) doMove();

        function doMove() { // 是否移动函数

            if (!queues.length) { // 路径队列结束，停止
                move = false;
                roleMove.stop();
                imageMove.stopRoleImage();

                return;
            }

            window.clearInterval(imageMove.clear());

            var _queue = queues.shift(); // 取出队列

            startPoint = [_queue[0], _queue[1]]; // 开始坐标

            roleMove.start(tileToPix(_queue[0], _queue[1]), doMove);
        }

    }


    // 移动函数
    function moving(startPoint, fps){

        var _nowPoint = startPoint,  // 起始坐标
        // 临时变量
            _endPoint, // 结束坐标
            _direction, // 人物方向
            _onupdate, // 执行过程函数
            _onfinish, // 到达目标回调函数
            _timer,
        // 内部对象
            self = this;

        // 移动函数
        this.move = function(){

            if(Math.abs(_nowPoint.x - _endPoint.x) <=1 &&
                Math.abs(_nowPoint.y - _endPoint.y) <=1 ) // 判断到达结束目标
            {
                self.end(_nowPoint, _direction); // 执行结束函数
            }else if(Math.abs(_nowPoint.x - _endPoint.x) <= 1){
                if(_nowPoint.y < _endPoint.y) _direction = 0; else _direction = 3;
            }else if(Math.abs(_nowPoint.y - _endPoint.y) <= 1){
                if(_nowPoint.x < _endPoint.x) _direction = 2; else _direction = 1;
            }else{
                if(_nowPoint.x > _endPoint.x){
                    if(_nowPoint.y < _endPoint.y) _direction = 4; else _direction = 6;
                }else{
                    if(_nowPoint.y < _endPoint.y) _direction = 5; else _direction = 7;
                }
            }
            // console.log(_direction);
            switch (_direction){ // 判断移动方向
                case 0: _nowPoint.y +=1; break; // 下
                case 1: _nowPoint.x -=1; break; // 左
                case 2: _nowPoint.x +=1; break; // 右
                case 3: _nowPoint.y -=1; break; // 上
                case 4: _nowPoint.x -=2; _nowPoint.y +=1; break; // 左下
                case 5: _nowPoint.x +=2; _nowPoint.y +=1; break; // 右下
                case 6: _nowPoint.x -=2; _nowPoint.y -=1; break; // 左上
                case 7: _nowPoint.x +=2; _nowPoint.y -=1; break; // 右上
            }

            direction = _direction;

            if(_onupdate) _onupdate(_nowPoint, _direction);
        }

        // 执行函数
        this.start = function(endPoint, onfinish){
            _endPoint = endPoint; // 赋值结束坐标
            _onfinish = onfinish; // 结束函数
            window.clearInterval(_timer); // 清空定时器
            _timer = window.setInterval(this.move, 1000/fps); // 执行移动函数
        }

        // 停止函数
        this.stop = function(){
            window.clearInterval(_timer);
        }

        // 终止函数
        this.end = function(_nowPoint, _direction){
            window.clearInterval(_timer); // 清空定时器
            if(_onfinish) _onfinish(_nowPoint, _direction); // 执行回调函数
        }

        // 更新函数
        this.update = function(callback){
            _onupdate = callback;
        }

        // 结束函数
        this.finish = function(callback){
            _onfinish = callback;
        }

    }

    // 人物动画
    function roleImageMove(role){

        var order = 0, // 动画帧数计数器
            count = 0, // 帧数计数器;
            self = this,
            timer;

        // 移动函数
        this.moving = function(_direction, n){

            var station = [ // 人物图片切图
                [ [0,0],[-200,0],[-400,0],[-600,0],[-800,0],[-1000,0],[-1200,0],[-1400,0] ],
                [ [0,-200],[-200,-200],[-400,-200],[-600,-200],[-800,-200],[-1000,-200],[-1200,-200],[-1400,-200] ],
                [ [0,-400],[-200,-400],[-400,-400],[-600,-400],[-800,-400],[-1000,-400],[-1200,-400],[-1400,-400] ],
                [ [0,-600],[-200,-600],[-400,-600],[-600,-600],[-800,-600],[-1000,-600],[-1200,-600],[-1400,-600] ],
                [ [0,-800],[-200,-800],[-400,-800],[-600,-800],[-800,-800],[-1000,-800],[-1200,-800],[-1400,-800] ],
                [ [0,-1000],[-200,-1000],[-400,-1000],[-600,-1000],[-800,-1000],[-1000,-1000],[-1200,-1000],[-1400,-1000] ],
                [ [0,-1200],[-200,-1200],[-400,-1200],[-600,-1200],[-800,-1200],[-1000,-1200],[-1200,-1200],[-1400,-1200] ],
                [ [0,-1400],[-200,-1400],[-400,-1400],[-600,-1400],[-800,-1400],[-1000,-1400],[-1200,-1400],[-1400,-1400] ],
                [ [0,-1600],[-200,-1600],[-400,-1600],[-600,-1600],[-800,-1600],[-1000,-1600],[-1200,-1600],[-1400,-1600] ]
            ];
            role.style.backgroundPosition = station[_direction][order][0] + 'px ' + station[_direction][order][1] + 'px';
            if(order == 7) order = 0; else order++;
        }

        // 更新图片效果
        this.update = function(_direction, n){
            role.className = "role z3 {0}_z{1}".format(roleAbbreviation, n);
            count += 2; // 步长加2
            if(count % 12 == 0){ // 每五次执行一次角色图片执行函数
                this.moving(_direction , n); // 执行移动函数
                count = 0; // 恢复计数器
            }
        }

        // 随机方向人物动画播放
        this.stopRoleImage = function(n){

            var roudom = rn();

            window.clearInterval(timer);
            timer = window.setInterval(function(){

                role.className = "role z3 {0}_z{1}".format(roleAbbreviation, n || roudom);

                count += 2; // 步长加2
                if(count % 10 == 0){ // 每五次执行一次角色图片执行函数
                    self.moving(direction , roudom); // 执行移动函数
                    count = 0; // 恢复计数器
                }
            },1000/25)

        }

        // 清空动画事件
        this.clear = function(){
            window.clearInterval(timer);
        }

    }

}