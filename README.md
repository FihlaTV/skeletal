# skeletal

2d骨骼动画研究及使用

可参考案例

- [一个人人都能读懂的故事](http://youandme.heymeo.net/)
- [粘粘的游戏](http://tgc.qq.com/act/a20161205h5sp/index.html)
- [火柴人](http://alloyteam.github.io/AlloyStick/demo_simple.html)



## 问题

**Q1:** AE，3dmax暂时没有特别方便的插件可以为程序员输出可用的数据文件和材质。(Ae使用duik骨骼动画插件

**Q2:** 序列帧图片过多，导致项目占用内存，size大。

**Q3:** 序列帧图片过少，动画效果差，影响用户体验。



## 目的

便于程序员将动画“程序化”。

极大减少大量序列帧图片，轻量化高效化h5

骨架动画，极大程度保存了动画效果，动画更加流畅逼真，动作可控制，用户交互体验好！



## 现状

常用软件 spine  和  dragonbones，生成json数据和texture，相应的数据格式也根据软件不同而定：

- dragonbones 为国内白鹭开发，能够更快运用无缝接入，最好也使用白鹭引擎渲染2d画面
- spine在国内外都很通用，绝大多数开发2d开发插件均支持，比如pixi.js等 eg. [Walking Animation](http://pixijs.github.io/examples/#/spine/spineboy.js) 

spine 功能强大但很复杂，且付费贼贵

dragonbones  免费简单，但是在版本兼容方面会有小bug（规范操作应该可以避免，导致图片缺失等情况。



## 步骤

通常步骤如下：

1. 能对素材进行可视的切分编辑，把每一块骨骼需要用的素材部分切分出来使用
2. 能方便的对每一块骨骼进行关节的添加，删除，编辑。同时，在进行骨骼组装的时候，关节能有锁定的功能，方便后续的可视化动作编辑。
3. 能方便的对骨骼进行一些拖拽，旋转的可视化编辑操作。而且不能脱离关节，对已经绑定好关节的骨骼能做到前向或者逆向的联动。
4. 最后，有些有规律的动作其实不用自己一帧一帧的去摆，去添加，而是可以设置一个起始动作和结束动作，中间的补帧可以自动动态的插入。

*notice：*避免太过复杂的动作及骨骼, 考虑动作可行性。目前还算是比较小众的技术与展现效果，时刻关注技术更新。