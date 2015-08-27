<?php
require_once "jssdk/jssdk.php";
$jssdk       = new JSSDK("wxb6b25160f0aacad7", "6fff7fda51bea8c8d1bbf0c89b805f17");
$signPackage = $jssdk->GetSignPackage();
?>
<!doctype html>
<html lang="en">
<head>
  <title>德勤内部朋友圈大曝光</title>
  <meta charset="UTF-8"/>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
  <meta http-equiv="Content-Language" content="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=0"/>
  <meta name="apple-mobile-web-app-capable" content="yes"/>
  <meta content="telephone=no" name="format-detection"/>
  <link rel="stylesheet" type="text/css" href="../css/base.css"/>
  <link rel="stylesheet" type="text/css" href="../css/friend.css"/>
</head>
<body>

<div class="head-box">
  <div class="bg-box">
    <img src="../img/headbg.png" class="img"/>
  </div>
  <div class="user-info">
    <img src="../img/head.png" class="head"/>

    <div class="name">I Love Deloitte</div>
  </div>
</div>

<div class="msg-list">
  <div class="msg-line">
    <img src="../img/head1.png" class="head"/>

    <div class="name">梁捷</div>
    <div class="content">今年校园招聘又有新招，一早匆匆赶去拍摄，某个段子说了7遍也是醉了！结束后赶去和我连轴转的老师练舞，再冲回家电话会议，这是周五吗？！
      默默想到自己说的话：因为有热情，才会发自内心滴去投入，用严格的自律，把一天分割成小块，一个个完成。好吧，现在的任务，赶紧睡觉。。。。。。
    </div>
    <div class="img-list">
      <img src="../img/pic1.png" class="img"/>
      <img src="../img/pic2.png" class="img"/>
      <img src="../img/pic3.png" class="img"/>
      <img src="../img/pic4.png" class="img"/>
      <img src="../img/pic5.png" class="img"/>
      <img src="../img/pic6.png" class="img"/>
    </div>
    <div class="time-box">
      <span class="time">1分钟前</span>
      <i class="more-btn" name="moreBtn"></i>

      <div class="menu-box">
        <div class="menu">
          <div class="praise" name="praise" _id="1">赞</div>
          <div class="comment" name="comment" _id="1">评论</div>
        </div>
      </div>
    </div>
    <div class="comment-praise-box">
      <div class="praise-box" id="praisebox1">Jaimie , 潘青 , Terrence</div>
      <div class="comment-box" id="commentbox1">
        <div class="comment-line">
          <span class="s">Pascal：</span>第二张亮了，职场双面女王啊！！！
        </div>
        <div class="comment-line">
          <span class="s">潘青：</span>给梁女王点赞，舞蹈比赛加油！
        </div>
        <div class="comment-line">
          <span class="s">HR姐姐：</span>霸气
        </div>
        <div class="comment-line">
          <span class="s">MC：</span>我还在录。。。（晚10点回复）
        </div>
      </div>
    </div>
  </div>

  <div class="msg-line">
    <img src="../img/head2.png" class="head"/>

    <div class="name">潘青</div>
    <div class="content">今天招聘时，有个小朋友问我，我们公司是不是特别喜欢招金牛座，因为金牛座会理财。如果要按星座选人，还不如选双子座和双鱼座，还可以省下一份钱
      ，德勤选人，只会按能力来，只要有能力，就能一展所长。
    </div>
    <div class="img-list one">
      <img src="../img/pic7.png" class="img"/>
    </div>
    <div class="time-box">
      <span class="time">4分钟前</span>
      <i class="more-btn" name="moreBtn"></i>

      <div class="menu-box">
        <div class="menu">
          <div class="praise" name="praise" _id="2">赞</div>
          <div class="comment" name="comment" _id="2">评论</div>
        </div>
      </div>
    </div>
    <div class="comment-praise-box">
      <div class="praise-box" id="praisebox2">Jaimie, HR姐姐 , Terrence , Pascal</div>
      <div class="comment-box" id="commentbox2">
        <div class="comment-line">
          <span class="s">HR姐姐：</span>第一次知道自己可以省钱耶~~
        </div>
        <div class="comment-line">
          <span class="s">Terrence：</span>我是金牛座，牛牛很棒的，不可以黑
        </div>
        <div class="comment-line">
          <span class="s">Pascal：</span>哈哈哈，潘老师冷笑话100则
        </div>
      </div>
    </div>
  </div>

  <div class="msg-line">
    <img src="../img/head3.png" class="head"/>

    <div class="name">Pascal</div>
    <div class="content">今天录制招聘宣传的video，HR让我讲讲如何发挥自己。我觉得，在德勤，能力的边界就是职责的边界，这就是最好的发挥。</div>
    <div class="img-list one">
      <img src="../img/pic8.png" class="img"/>
      <img src="../img/pic9.png" class="img"/>
    </div>
    <div class="time-box">
      <span class="time">20分钟前</span>
      <i class="more-btn" name="moreBtn"></i>

      <div class="menu-box">
        <div class="menu">
          <div class="praise" name="praise" _id="3">赞</div>
          <div class="comment" name="comment" _id="3">评论</div>
        </div>
      </div>
    </div>
    <div class="comment-praise-box">
      <div class="praise-box" id="praisebox3">梁捷 , 潘青 , Pascal , MC , HR姐姐 , Terrence Zizi ,
        Jaimie
      </div>
      <div class="comment-box" id="commentbox3">
        <div class="comment-line">
          <span class="s">Jaimie：</span>Pascal好帅
        </div>
        <div class="comment-line">
          <span class="s">梁捷：</span>帅
        </div>
        <div class="comment-line">
          <span class="s">HR姐姐：</span>小萌神，好可爱
        </div>
        <div class="comment-line">
          <span class="s">潘青：</span>能力的边界就是职责的边界，讲的好
        </div>
      </div>
    </div>
  </div>

  <div class="msg-line">
    <img src="../img/head4.png" class="head"/>

    <div class="name">MC</div>
    <div class="content">晚上10点才录制结束，伤不起 但是，状态很好，拍得很棒，很欣慰，期待效果。</div>
    <div class="img-list one">
      <img src="../img/pic10.png" class="img"/>
    </div>
    <div class="time-box">
      <span class="time">25分钟前</span>
      <i class="more-btn" name="moreBtn"></i>

      <div class="menu-box">
        <div class="menu">
          <div class="praise" name="praise" _id="4">赞</div>
          <div class="comment" name="comment" _id="4">评论</div>
        </div>
      </div>
    </div>
    <div class="comment-praise-box">
      <div class="praise-box" id="praisebox4">梁捷 , 潘青 , Pascal , MC , HR姐姐 , Terrence Zizi ,
        Jaimie
      </div>
      <div class="comment-box" id="commentbox4">
        <div class="comment-line">
          <span class="s">HR姐姐：</span>辛苦啦
        </div>
        <div class="comment-line">
          <span class="s">Jaimie：</span>MC好敬业的
        </div>
        <div class="comment-line">
          <span class="s">梁捷：</span>同期待效果中~
        </div>
        <div class="comment-line">
          <span class="s">Zizi：</span>MC看起来帅帅的，略有古天乐的气势~
        </div>
      </div>
    </div>
  </div>

  <div class="msg-line">
    <img src="../img/head5.png" class="head"/>

    <div class="name">HR姐姐</div>
    <div class="content">持续三天的录制终于收工，撒花庆祝 梁老师女王范儿，潘老师稳重范儿，Pascal酷劲十足，Terrence耍帅依旧，Jaimie美美哒，MC小黑呦
      ，我们大家都很敬业哟，希望8月31号在线宣讲大成功！！！
    </div>
    <div class="img-list">
      <img src="../img/pic11.png" class="img"/>
      <img src="../img/pic12.png" class="img"/>
      <img src="../img/pic13.png" class="img"/>
      <img src="../img/pic14.png" class="img"/>
      <img src="../img/pic15.png" class="img"/>
      <img src="../img/pic16.png" class="img"/>
    </div>
    <div class="time-box">
      <span class="time">30分钟前</span>
      <i class="more-btn" name="moreBtn"></i>

      <div class="menu-box">
        <div class="menu">
          <div class="praise" name="praise" _id="5">赞</div>
          <div class="comment" name="comment" _id="5">评论</div>
        </div>
      </div>
    </div>
    <div class="comment-praise-box">
      <div class="praise-box" id="praisebox5">梁捷 , 潘青 , Pascal , MC , HR姐姐 , Terrence Zizi ,
        Jaimie
      </div>
      <div class="comment-box" id="commentbox5">
        <div class="comment-line">
          <span class="s">梁捷：</span>Everyone can make an impact at Deloitte，同祝在线宣讲大成功！！！
        </div>
        <div class="comment-line">
          <span class="s">潘青：</span>拍个video还要化妆。。。一点也不稳重范儿
        </div>
        <div class="comment-line">
          <span class="s">Pascal：</span>我明明是精英范儿
        </div>
        <div class="comment-line">
          <span class="s">Terrence：</span>本色出演有木有
        </div>
        <div class="comment-line">
          <span class="s">MC：</span>HR姐姐怎么可以黑我 加班到10点多的我最敬业有木有
        </div>
      </div>
    </div>
  </div>

  <div class="msg-line">
    <img src="../img/head6.png" class="head"/>

    <div class="name">Terrence</div>
    <div class="content">午夜12点，飞机落地，这次上海之行又是一段有意义的旅程。</div>
    <div class="img-list one">
      <img src="../img/pic17.png" class="img"/>
    </div>
    <div class="time-box">
      <span class="time">30分钟前</span>
      <i class="more-btn" name="moreBtn"></i>

      <div class="menu-box">
        <div class="menu">
          <div class="praise" name="praise" _id="6">赞</div>
          <div class="comment" name="comment" _id="6">评论</div>
        </div>
      </div>
    </div>
    <div class="comment-praise-box">
      <div class="praise-box" id="praisebox6">Jaimie , 梁捷 , 潘青 , Pascal</div>
      <div class="comment-box" id="commentbox6">
        <div class="comment-line">
          <span class="s">Jaimie：</span>午夜同落地。
        </div>
        <div class="comment-line">
          <span class="s">梁捷：</span>顺利到达啦~
        </div>
        <div class="comment-line">
          <span class="s">HR姐姐：</span>顺利到达就好，这次招聘拍摄辛苦啦~
        </div>
      </div>
    </div>
  </div>

  <div class="msg-line">
    <img src="../img/head7.png" class="head"/>

    <div class="name">Zizi</div>
    <div class="content">德勤现场拍摄花絮~~原来德勤大咖都这么嗨！点击快来看看！</div>
    <div class="img-list one">
      <img src="../img/pic18.png" class="img"/>
      <img src="../img/pic19.png" class="img"/>
    </div>
    <div class="time-box">
      <span class="time">30分钟前</span>
      <i class="more-btn" name="moreBtn"></i>

      <div class="menu-box">
        <div class="menu">
          <div class="praise" name="praise" _id="7">赞</div>
          <div class="comment" name="comment" _id="7">评论</div>
        </div>
      </div>
    </div>
    <div class="comment-praise-box">
      <div class="praise-box" id="praisebox7">HR姐姐 , Pascal</div>
      <div class="comment-box" id="commentbox7">
        <div class="comment-line">
          <span class="s">HR姐姐：</span>两年来，Zizi进步很大哦，再也不是当初刚通过德勤俱乐部走出来的青涩小姑娘啦
        </div>
        <div class="comment-line">
          <span class="s">Pascal：</span>支持小朋友
        </div>
        <div class="comment-line">
          <span class="s">德勤路人甲：</span>加油！
        </div>
        <div class="comment-line">
          <span class="s">德勤路人乙：</span>我也是GenY的一员，小姑娘你好~
        </div>
      </div>
    </div>
  </div>

  <div class="msg-line">
    <img src="../img/head8.png" class="head"/>

    <div class="name">剪辑师</div>
    <div class="content">德勤现场拍摄花絮~~原来德勤大咖都这么嗨！点击快来看看！</div>
    <div class="img-list">
      <img src="../img/pic20.png" class="img1" onclick="QrCode.show()"/>
    </div>
    <div class="time-box">
      <span class="time">30分钟前</span>
      <i class="more-btn" name="moreBtn"></i>

      <div class="menu-box">
        <div class="menu">
          <div class="praise" name="praise" _id="8">赞</div>
          <div class="comment" name="comment" _id="8">评论</div>
        </div>
      </div>
    </div>
    <div class="comment-praise-box">
      <div class="praise-box" id="praisebox8">梁捷 , 潘青 , Pascal , MC , HR姐姐 , Terrence Zizi ,
        Jaimie
      </div>
      <div class="comment-box" id="commentbox8">

      </div>
    </div>
  </div>

  <div class="msg-line">
    <img src="../img/head5.png" class="head"/>

    <div class="name">HR姐姐</div>
    <div class="content">德勤831空中宣讲，在线与精英面对面的机会！抓紧在下面的评论中留下你的问题，你的问题将有机会在831宣讲会现场被回复！同学们，831等你相约！
    </div>
    <div class="img-list one">
      <img src="../img/pic18.png" class="img"/>
      <img src="../img/pic19.png" class="img"/>
    </div>
    <div class="time-box">
      <span class="time">30分钟前</span>
      <i class="more-btn" name="moreBtn"></i>

      <div class="menu-box">
        <div class="menu">
          <div class="praise" name="praise" _id="9">赞</div>
          <div class="comment" name="comment" _id="9">评论</div>
        </div>
      </div>
    </div>
    <div class="comment-praise-box">
      <div class="praise-box" id="praisebox9">HR姐姐 , Pascal</div>
      <div class="comment-box" id="commentbox9">
        <div class="comment-line">
          <span class="s">Rackea：</span>德勤的五大雇主形象关键点是什么？
        </div>
        <div class="comment-line">
          <span class="s">Summer：</span>德勤的五大部门对人才的需求不同点在哪里？
        </div>
        <div class="comment-line">
          <span class="s">Cissie：</span>德勤对于新人的内部培训是什么样的？
        </div>
        <div class="comment-line">
          <span class="s">Kitty：</span>德勤的员工都是怎么平衡生活与工作的？
        </div>
        <div class="comment-line">
          <span class="s">HR姐姐：</span>你的问题HR姐姐已经收到啦！想知道你的问题会不会在现场被回复？让我们一起锁定831空中宣讲！
        </div>
      </div>
    </div>
  </div>

</div>

<div class="tip-txt">朋友圈就看到这啦！想了解更多关于德勤大趴信息，锁定8月31日空中宣讲，快来预报名吧！</div>
<input type="button" value="点击分享并预约" class="share-btn"/>

<div class="qrcode" id="qrcode">
  <img src="../img/qrcode.jpg" class="img"/>
</div>

<div class="videobox" id="videobox">
  <div class="bg"></div>
  <video class="video" id="videoDom" width="320" height="214" controls="" preload="none" poster="../img/pic20.png">
    <source src="../audio/video.mp4" type="video/mp4">
    <source src="../audio/video.ogv" type="video/ogg">
  </video>
</div>


<script src="../js/fastclick.js" type="text/javascript" charset="utf-8"></script>
<script src="../js/jquery-1.8.3.min.js" type="text/javascript" charset="utf-8"></script>
<script src="../js/friend.js" type="text/javascript" charset="utf-8"></script>
<script type="text/javascript">
  var userInfo = {
    name: 'I Love Deloitte'
  }
</script>

<!-- 微信分享相关 -->
<script type="text/javascript" charset="utf-8" src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script type="text/javascript">

  wx.config({
    debug: false,
    appId: '<?php echo $signPackage["appId"];?>',
    timestamp: '<?php echo $signPackage["timestamp"];?>',
    nonceStr: '<?php echo $signPackage["nonceStr"];?>',
    signature: '<?php echo $signPackage["signature"];?>',
    jsApiList: [
      'onMenuShareTimeline',
      'onMenuShareAppMessage',
      'onMenuShareQQ',
      'onMenuShareWeibo',
      'previewImage'
    ]
  });

  wx.ready(function () {
    setShareInfo();
  });

  // 设置分享信息
  function setShareInfo() {

    var shareData = {
      title: 'title', //分享标题
      desc: 'desc',
      link: location.href,
      imgUrl: 'imgurl',
      success: function () {
        location.href = 'deloitte.careerfrog.com.cn';
      }
    };

    wx.onMenuShareAppMessage(shareData);
    wx.onMenuShareTimeline(shareData);
    wx.onMenuShareQQ(shareData);
    wx.onMenuShareWeibo(shareData);
  }
</script>
</body>
</html>