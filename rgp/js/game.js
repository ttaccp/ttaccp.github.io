/**
 * blog:http://www.jcore.cn/
 * Created by zjj on 14-11-2.
 */

function Game(ops){

    // ˽�б���
    var debug = ops.debug || false, // ����ģʽ
        mapMatrix = ops.map || [ [ 0, 0, 0],[ 0, 0, 0],[ 0, 0, 0]], // ��Ϸ��ͼ
        tileWidth = ops.tileWidth || 64, // ����ͼƬ��
        tileHeight = ops.tileHeight || 32, // ����ͼƬ��
        startPoint = ops.startPoint || [2, 2], // Ĭ�����
        roleAbbreviation = ops.roleAbbreviation || "mlh", // Ĭ�Ͻ�ɫ����
        aStarType = ops.aStarType || "DiagonalFree", // Ĭ��Ѱ·���ͣ�Manhattan,Diagonal,DiagonalFree,Euclidean,EuclideanFree��
        viewTileNumX = mapMatrix.length, // ��ͼX���������
        viewTileNumY = mapMatrix[0].length, // ��ͼY���������
        viewWidth = viewTileNumX * tileWidth, // ��ͼʵ�ʿ����ӿ�*X�����������
        viewHeight = viewTileNumY * tileHeight, // ��ͼʵ�ʸߣ����Ӹ�*Y�����������
        viewOffsetX = viewWidth / 2 - tileWidth / 2, // ������ͼ��ʾx����
        viewOffsetY = 0, // Ĭ�ϵ�ͼ��ʾy����
        direction = 0, // Ĭ�����ﳯ���£�
        move = false, // �ж��Ƿ����ִ���ƶ�
        roleMove, // ��ɫ�ƶ�
        rn = function(){ return Math.floor(Math.random()*2+1); } // ���ִ��Ĭ�����ﶯ��

    /**
     * NPC����
     * @param xy Ĭ�Ͻ�ɫ���ֵ�x��y��
     * @param roleAbbreviation ��ɫ��д
     * @param direction ��ɫ����
     */
    this.npc = function(xy,roleAbbreviation,direction){

    }

    /**
     * ��ɫ����
     * @param xy Ĭ�Ͻ�ɫ���ֵ�x��y��
     * @param roleAbbreviation ��ɫ��д
     * @param direction ��ɫ����
     */
    this.role = function(xy,_roleAbbreviation,_direction){

        var _role_x = xy.x,
            _role_y = xy.y;

        startPoint = [_role_x, _role_y]; // ���������������
        roleAbbreviation = _roleAbbreviation;
        direction = _direction; // ��ɫ�˷���ת��

        var _people = document.getElementById("people");
            _people.innerHTML = '<div id="role" class="none role z3 {0}_z{1}" ></div>'.format(roleAbbreviation, rn()),
            _role = document.getElementById("role"),
            _rolexy = tileToPix(_role_x, _role_y),
            roleLeft = _rolexy.x - 68,  // �����
            roleTop = _rolexy.y - 145; // �Ҿ���
        _role.style.left = roleLeft + "px"; // ��������ʵ��X����
        _role.style.top  = roleTop  + "px"; // ��������ʵ��Y����

        imageMove = new roleImageMove(_role); // �����ܶ�����
        imageMove.stopRoleImage(direction); // Ĭ��ִ�ж���

        roleMove = new moving({ x: _rolexy.x, y : _rolexy.y }, 100);

        roleMove.update(function(_point,_direction){
            imageMove.update(_direction, 0);
            // �޸������ƶ�����
            _role.style.left = _point.x - 68 + "px";
            _role.style.top  = _point.y - 145 + "px";
        });

    }

    /**
     * ��ʼ����Ϸ
     */
    this.init = function(){

        var tilesHTML =  init45Map(); // ��ʼ����ͼ
        document.body.onclick = function(e){ // ��ȫ���¼�
            var _pix = pixToTile(e.pageX, e.pageY); // ��Ļ����ת45�ȵ�ͼ����
            var _tile = document.getElementById("t_{0}_{1}".format(_pix.x, _pix.y)); // ��ͼ���ӽڵ�
            initDebug(tilesHTML); // ��ʾ����

            if(_pix.x<0 || _pix.x > viewTileNumX - 1 || // �����߽粻�����¼�
               _pix.y<0 || _pix.y > viewTileNumY - 1) return false;
            if(debug && (!_tile || _tile && _tile.getAttribute("stop")==1)) return false; // ���Ӳ����ڻ��ϰ����ɵ��
            var endPoint = [_pix.x, _pix.y]; // �����¼�
            // console.log(endPoint);

            var resultPath = findPath(startPoint,endPoint); // ��������·��
            showPath(resultPath);
            movePath(resultPath.slice(1)); //ɾ����ǰ�Լ���������
        }

        initDebug(tilesHTML); // ��ʾ����

    }

    // ˽�л����� ----------

    function initDebug(outHTML){
        if(debug){
            var _debug = document.getElementById("debug");
            _debug.innerHTML = outHTML;
        }
    }

    // 45�Ⱥ���
    function init45Map(){
        var tilePool = []; // Ĭ�ϸ�������
        for (var i = 0; i < viewTileNumY; i++) {
            for (var j = 0; j < viewTileNumY; j++) {
                var tx = j, // x����
                    ty = i, // y����
                    point = tileToPix(j, i), // ����ת��
                    tl = point.x, // �����
                    tr = point.y, // �Ҿ���
                    st = mapMatrix[ty][tx], //�Ƿ��ϰ�
                    d  = (parseInt(st) == 1) ? 1 : 2;
                    tml = '<div id="t_{0}_{1}" stop="{2}" class="d{3}" style="display: block; left: {4}px; top: {5}px;">[{6},{7}]</div>'
                    //tml = '<div id="t_{0}_{1}" stop="{2}" class="d{3}" style="display: block; left: {4}px; top: {5}px;"></div>'
                    .format(tx,ty,st,d,tl,tr,tx,ty); // �滻ģ��
                tilePool.push( tml ); // ��������
            }
        }
        return tilePool.join("");
    }

    // ��Ļ����ת45�ȵ�ͼ����
    function pixToTile(px, py){

        var viewTileWidth = viewTileNumX / 2,
            viewTileHeight = viewTileNumY / 2;

        var x = Math.floor(px/tileWidth + py/tileHeight - viewTileWidth);
        var y = -(Math.ceil(px/tileWidth - py/tileHeight - viewTileHeight));

        return { x: x, y: y };
    }

    // 45�ȵ�ͼ����ת��Ļ����
    function tileToPix(tx, ty){

        var x = (viewOffsetX + (tx - ty) * tileWidth / 2);
        var y = (viewOffsetY + (tx + ty) * tileHeight / 2);

        return { x: x, y: y };
    }

    // Ѱ·����
    function findPath(startPoint,endPoint,callbackFun){

        var bench = (new Date()).getTime(),
            result = AStar(mapMatrix, startPoint, endPoint, aStarType),
            endTime = (new Date()).getTime() - bench;

        console.log("Ѱ·����ʱ�䣺{0}ms,·���ڵ㳤�ȣ�{1}".format(endTime/1000,result.length));

        return result;
    }

    // ��ʾ·��
    function showPath(result){
        if(debug)
        {
            for(var i = 0; i<result.length; i++){ // ����·���ڵ�
                (function(i){
                    var xy = result[i];
                    var dom = document.getElementById("t_{0}_{1}".format(xy[0],xy[1])); // ���Ҷ�Ӧ�ڵ�
                    var timer = null;
                    timer = setTimeout(function () { // ��ʱ������ʽ
                        dom.className = "d3 z3";
                        clearTimeout(timer); // ��ն�ʱ��
                    }, i * 30);
                })(i);
            }
        }
    }

    // ����Ѱ··���������飬�ƶ�����
    function movePath(queues) {

        if (!move) doMove();

        function doMove() { // �Ƿ��ƶ�����

            if (!queues.length) { // ·�����н�����ֹͣ
                move = false;
                roleMove.stop();
                imageMove.stopRoleImage();

                return;
            }

            window.clearInterval(imageMove.clear());

            var _queue = queues.shift(); // ȡ������

            startPoint = [_queue[0], _queue[1]]; // ��ʼ����

            roleMove.start(tileToPix(_queue[0], _queue[1]), doMove);
        }

    }


    // �ƶ�����
    function moving(startPoint, fps){

        var _nowPoint = startPoint,  // ��ʼ����
        // ��ʱ����
            _endPoint, // ��������
            _direction, // ���﷽��
            _onupdate, // ִ�й��̺���
            _onfinish, // ����Ŀ��ص�����
            _timer,
        // �ڲ�����
            self = this;

        // �ƶ�����
        this.move = function(){

            if(Math.abs(_nowPoint.x - _endPoint.x) <=1 &&
                Math.abs(_nowPoint.y - _endPoint.y) <=1 ) // �жϵ������Ŀ��
            {
                self.end(_nowPoint, _direction); // ִ�н�������
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
            switch (_direction){ // �ж��ƶ�����
                case 0: _nowPoint.y +=1; break; // ��
                case 1: _nowPoint.x -=1; break; // ��
                case 2: _nowPoint.x +=1; break; // ��
                case 3: _nowPoint.y -=1; break; // ��
                case 4: _nowPoint.x -=2; _nowPoint.y +=1; break; // ����
                case 5: _nowPoint.x +=2; _nowPoint.y +=1; break; // ����
                case 6: _nowPoint.x -=2; _nowPoint.y -=1; break; // ����
                case 7: _nowPoint.x +=2; _nowPoint.y -=1; break; // ����
            }

            direction = _direction;

            if(_onupdate) _onupdate(_nowPoint, _direction);
        }

        // ִ�к���
        this.start = function(endPoint, onfinish){
            _endPoint = endPoint; // ��ֵ��������
            _onfinish = onfinish; // ��������
            window.clearInterval(_timer); // ��ն�ʱ��
            _timer = window.setInterval(this.move, 1000/fps); // ִ���ƶ�����
        }

        // ֹͣ����
        this.stop = function(){
            window.clearInterval(_timer);
        }

        // ��ֹ����
        this.end = function(_nowPoint, _direction){
            window.clearInterval(_timer); // ��ն�ʱ��
            if(_onfinish) _onfinish(_nowPoint, _direction); // ִ�лص�����
        }

        // ���º���
        this.update = function(callback){
            _onupdate = callback;
        }

        // ��������
        this.finish = function(callback){
            _onfinish = callback;
        }

    }

    // ���ﶯ��
    function roleImageMove(role){

        var order = 0, // ����֡��������
            count = 0, // ֡��������;
            self = this,
            timer;

        // �ƶ�����
        this.moving = function(_direction, n){

            var station = [ // ����ͼƬ��ͼ
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

        // ����ͼƬЧ��
        this.update = function(_direction, n){
            role.className = "role z3 {0}_z{1}".format(roleAbbreviation, n);
            count += 2; // ������2
            if(count % 12 == 0){ // ÿ���ִ��һ�ν�ɫͼƬִ�к���
                this.moving(_direction , n); // ִ���ƶ�����
                count = 0; // �ָ�������
            }
        }

        // ����������ﶯ������
        this.stopRoleImage = function(n){

            var roudom = rn();

            window.clearInterval(timer);
            timer = window.setInterval(function(){

                role.className = "role z3 {0}_z{1}".format(roleAbbreviation, n || roudom);

                count += 2; // ������2
                if(count % 10 == 0){ // ÿ���ִ��һ�ν�ɫͼƬִ�к���
                    self.moving(direction , roudom); // ִ���ƶ�����
                    count = 0; // �ָ�������
                }
            },1000/25)

        }

        // ��ն����¼�
        this.clear = function(){
            window.clearInterval(timer);
        }

    }

}