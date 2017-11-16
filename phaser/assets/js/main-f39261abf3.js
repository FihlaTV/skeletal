(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/sanchez/Work/test/dragon/src/assets/js/main.js":[function(require,module,exports){
/**
 * Created by sanchez 
 */
'use strict';




window.h5 = {
    initPhaser: function() {
        //缺失了部分图案
        var sprite;
        var index = -1;

        var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'mycanvas', {
            init: function() {
                this.dragonBonesPlugin = this.game.plugins.add(Rift.DragonBonesPlugin);
            },
            preload: function() {
                this.dragonBonesPlugin.addResourceByNames('SwordsMan',
                    './assets/img/SwordsMan_ske.json', './assets/img/SwordsMan_tex.json', './assets/img/SwordsMan_tex.png');
                this.dragonBonesPlugin.loadResources();
            },
            create: function() {
                console.log(1)
                this.add.text(this.world.centerX, 50, 'Phaser Skeletal Animation\nClick Click Click', { fill: '#fff', font: '30px Arial',align:'center' }).anchor.setTo(0.5);
                sprite = this.dragonBonesPlugin.getArmature('SwordsMan');
                sprite.position.setTo(200, this.game.height - 100);
                sprite.scale.setTo(0.5);
                this.world.add(sprite);

                // this.changeAnimation();
                var names = sprite.animation._animationNames;
                // sprite.animation.play(names[0], false);
                this.input.onDown.add(this.changeAnimation, this);
            },
            changeAnimation: function(animation) {
                var names = sprite.animation._animationNames;
                index = (index + 1) % 8;
                sprite.animation.play(names[index], false);
            },
            update: function() {
                // this.dragonBonesPlugin.refreshClock(); // when switching states this needs called
            }
        });
    }
};
window.h5.initPhaser();


function showStats() {
    var stats = new Stats();
    stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
    var fs = document.createElement('div');
    fs.style.position = 'absolute';
    fs.style.left = 0;
    fs.style.top = 0;
    fs.style.zIndex = 999;
    fs.appendChild(stats.domElement);
    document.body.appendChild(fs);

    function animate() {
        stats.begin();
        // monitored code goes here
        stats.end();
        requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
}
showStats();
},{}]},{},["/Users/sanchez/Work/test/dragon/src/assets/js/main.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXNzZXRzL2pzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKlxuICogQ3JlYXRlZCBieSBzYW5jaGV6IFxuICovXG4ndXNlIHN0cmljdCc7XG5cblxuXG5cbndpbmRvdy5oNSA9IHtcbiAgICBpbml0UGhhc2VyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy/nvLrlpLHkuobpg6jliIblm77moYhcbiAgICAgICAgdmFyIHNwcml0ZTtcbiAgICAgICAgdmFyIGluZGV4ID0gLTE7XG5cbiAgICAgICAgdmFyIGdhbWUgPSBuZXcgUGhhc2VyLkdhbWUoODAwLCA2MDAsIFBoYXNlci5DQU5WQVMsICdteWNhbnZhcycsIHtcbiAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ29uQm9uZXNQbHVnaW4gPSB0aGlzLmdhbWUucGx1Z2lucy5hZGQoUmlmdC5EcmFnb25Cb25lc1BsdWdpbik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJlbG9hZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmFnb25Cb25lc1BsdWdpbi5hZGRSZXNvdXJjZUJ5TmFtZXMoJ1N3b3Jkc01hbicsXG4gICAgICAgICAgICAgICAgICAgICcuL2Fzc2V0cy9pbWcvU3dvcmRzTWFuX3NrZS5qc29uJywgJy4vYXNzZXRzL2ltZy9Td29yZHNNYW5fdGV4Lmpzb24nLCAnLi9hc3NldHMvaW1nL1N3b3Jkc01hbl90ZXgucG5nJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmFnb25Cb25lc1BsdWdpbi5sb2FkUmVzb3VyY2VzKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3JlYXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygxKVxuICAgICAgICAgICAgICAgIHRoaXMuYWRkLnRleHQodGhpcy53b3JsZC5jZW50ZXJYLCA1MCwgJ1BoYXNlciBTa2VsZXRhbCBBbmltYXRpb25cXG5DbGljayBDbGljayBDbGljaycsIHsgZmlsbDogJyNmZmYnLCBmb250OiAnMzBweCBBcmlhbCcsYWxpZ246J2NlbnRlcicgfSkuYW5jaG9yLnNldFRvKDAuNSk7XG4gICAgICAgICAgICAgICAgc3ByaXRlID0gdGhpcy5kcmFnb25Cb25lc1BsdWdpbi5nZXRBcm1hdHVyZSgnU3dvcmRzTWFuJyk7XG4gICAgICAgICAgICAgICAgc3ByaXRlLnBvc2l0aW9uLnNldFRvKDIwMCwgdGhpcy5nYW1lLmhlaWdodCAtIDEwMCk7XG4gICAgICAgICAgICAgICAgc3ByaXRlLnNjYWxlLnNldFRvKDAuNSk7XG4gICAgICAgICAgICAgICAgdGhpcy53b3JsZC5hZGQoc3ByaXRlKTtcblxuICAgICAgICAgICAgICAgIC8vIHRoaXMuY2hhbmdlQW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgdmFyIG5hbWVzID0gc3ByaXRlLmFuaW1hdGlvbi5fYW5pbWF0aW9uTmFtZXM7XG4gICAgICAgICAgICAgICAgLy8gc3ByaXRlLmFuaW1hdGlvbi5wbGF5KG5hbWVzWzBdLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dC5vbkRvd24uYWRkKHRoaXMuY2hhbmdlQW5pbWF0aW9uLCB0aGlzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGFuZ2VBbmltYXRpb246IGZ1bmN0aW9uKGFuaW1hdGlvbikge1xuICAgICAgICAgICAgICAgIHZhciBuYW1lcyA9IHNwcml0ZS5hbmltYXRpb24uX2FuaW1hdGlvbk5hbWVzO1xuICAgICAgICAgICAgICAgIGluZGV4ID0gKGluZGV4ICsgMSkgJSA4O1xuICAgICAgICAgICAgICAgIHNwcml0ZS5hbmltYXRpb24ucGxheShuYW1lc1tpbmRleF0sIGZhbHNlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1cGRhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuZHJhZ29uQm9uZXNQbHVnaW4ucmVmcmVzaENsb2NrKCk7IC8vIHdoZW4gc3dpdGNoaW5nIHN0YXRlcyB0aGlzIG5lZWRzIGNhbGxlZFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGluaXRQaXhpOiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy9QaXhpLXNwaW5lIDEuMy54IHdvcmtzIE9OTFkgd2l0aCBkYXRhIGV4cG9ydGVkIGZyb20gU3BpbmUgMy41Lu+8ge+8ge+8ge+8ge+8ge+8ge+8ge+8ge+8ge+8gVxuICAgICAgICB2YXIgYXBwID0gbmV3IFBJWEkuQXBwbGljYXRpb24oKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhcHAudmlldyk7XG5cbiAgICAgICAgLy8gbG9hZCBzcGluZSBkYXRhXG4gICAgICAgIFBJWEkubG9hZGVyXG4gICAgICAgICAgICAuYWRkKCdkcmFnb24nLCAnLi9hc3NldHMvaW1nL05ld0RyYWdvbi5qc29uJylcbiAgICAgICAgICAgIC5sb2FkKGZ1bmN0aW9uKGxvYWRlciwgcmVzKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRyYWdvbiA9IG5ldyBQSVhJLnNwaW5lLlNwaW5lKHJlcy5kcmFnb24uc3BpbmVEYXRhKTtcblxuXG4gICAgICAgICAgICAgICAgLy8gc2V0IHRoZSBwb3NpdGlvblxuICAgICAgICAgICAgICAgIGRyYWdvbi54ID0gYXBwLnJlbmRlcmVyLndpZHRoIC8gMjtcbiAgICAgICAgICAgICAgICBkcmFnb24ueSA9IGFwcC5yZW5kZXJlci5oZWlnaHQ7XG5cbiAgICAgICAgICAgICAgICBkcmFnb24uc2NhbGUuc2V0KDAuOCk7XG5cbiAgICAgICAgICAgICAgICAvLyBzZXQgdXAgdGhlIG1peGVzIVxuXG4gICAgICAgICAgICAgICAgLy8gcGxheSBhbmltYXRpb25cblxuXG4gICAgICAgICAgICAgICAgYXBwLnN0YWdlLmFkZENoaWxkKGRyYWdvbik7XG5cbiAgICAgICAgICAgICAgICBkcmFnb24uc3RhdGUuc2V0QW5pbWF0aW9uKDAsICdzdGFuZCcsIHRydWUpO1xuXG4gICAgICAgICAgICAgICAgYXBwLnN0YXJ0KCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBhcHAuc3RhZ2UuaW50ZXJhY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgIGZ1bmN0aW9uIG9uQXNzZXRzTG9hZGVkKGxvYWRlciwgcmVzKSB7XG4gICAgICAgICAgICAvLyBjcmVhdGUgYSBzcGluZSBib3lcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcm9vdFJlc2l6ZTI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAvL29yaWVudGF0aW9uIGxhbmRzY2FwZSB3aWR0aD0xMzM0cHhcbiAgICAgICAgdmFyIHdGc2l6ZTtcbiAgICAgICAgdmFyIHdXaWR0aCA9IChzY3JlZW4ud2lkdGggPiAwKSA/ICh3aW5kb3cuaW5uZXJXaWR0aCA+PSBzY3JlZW4ud2lkdGggfHwgd2luZG93LmlubmVyV2lkdGggPT0gMCkgPyBzY3JlZW4ud2lkdGggOlxuICAgICAgICAgICAgd2luZG93LmlubmVyV2lkdGggOiB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgdmFyIHdIZWlnaHQgPSAoc2NyZWVuLmhlaWdodCA+IDApID8gKHdpbmRvdy5pbm5lckhlaWdodCA+PSBzY3JlZW4uaGVpZ2h0IHx8IHdpbmRvdy5pbm5lckhlaWdodCA9PSAwKSA/XG4gICAgICAgICAgICBzY3JlZW4uaGVpZ2h0IDogd2luZG93LmlubmVySGVpZ2h0IDogd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICBpZiAod1dpZHRoID4gd0hlaWdodCkge1xuICAgICAgICAgICAgd0hlaWdodCA9IHdXaWR0aDtcbiAgICAgICAgfVxuICAgICAgICB3RnNpemUgPSB3SGVpZ2h0IC8gMTMuMzQ7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdodG1sJylbMF0uc3R5bGUuZm9udFNpemUgPSB3RnNpemUgKyAncHgnO1xuICAgIH0sXG4gICAgcm9vdFJlc2l6ZTE6IGZ1bmN0aW9uKCkge1xuICAgICAgICAvL29yaWVudGF0aW9uIGxhbmRzY2FwZSB3aWR0aD0xMzM0cHhcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICB2YXIgRHByID0gMSxcbiAgICAgICAgICAgIHVBZ2VudCA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50O1xuICAgICAgICB2YXIgaXNJT1MgPSB1QWdlbnQubWF0Y2goL2lwaG9uZS9pKTtcbiAgICAgICAgdmFyIGlzWUlYSU4gPSB1QWdlbnQubWF0Y2goL3lpeGluL2kpO1xuICAgICAgICB2YXIgaXMyMzQ1ID0gdUFnZW50Lm1hdGNoKC9NYjIzNDUvaSk7XG4gICAgICAgIHZhciBpc2hhb3NvdSA9IHVBZ2VudC5tYXRjaCgvbXNvX2FwcC9pKTtcbiAgICAgICAgdmFyIGlzU29nb3UgPSB1QWdlbnQubWF0Y2goL3NvZ291bW9iaWxlYnJvd3Nlci9pZyk7XG4gICAgICAgIHZhciBpc0xpZWJhbyA9IHVBZ2VudC5tYXRjaCgvbGllYmFvZmFzdC9pKTtcbiAgICAgICAgdmFyIGlzR25iciA9IHVBZ2VudC5tYXRjaCgvR05CUi9pKTtcbiAgICAgICAgdmFyIGlzV2VpeGluID0gdUFnZW50Lm1hdGNoKC9NaWNyb01lc3Nlbmdlci9pKTtcbiAgICAgICAgdmFyIHdGc2l6ZTtcbiAgICAgICAgdmFyIHdXaWR0aCA9IChzY3JlZW4ud2lkdGggPiAwKSA/ICh3aW5kb3cuaW5uZXJXaWR0aCA+PSBzY3JlZW4ud2lkdGggfHwgd2luZG93LmlubmVyV2lkdGggPT0gMCkgPyBzY3JlZW4ud2lkdGggOlxuICAgICAgICAgICAgd2luZG93LmlubmVyV2lkdGggOiB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgdmFyIHdIZWlnaHQgPSAoc2NyZWVuLmhlaWdodCA+IDApID8gKHdpbmRvdy5pbm5lckhlaWdodCA+PSBzY3JlZW4uaGVpZ2h0IHx8IHdpbmRvdy5pbm5lckhlaWdodCA9PSAwKSA/XG4gICAgICAgICAgICBzY3JlZW4uaGVpZ2h0IDogd2luZG93LmlubmVySGVpZ2h0IDogd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICBpZiAoaXNJT1MpIHtcbiAgICAgICAgICAgIHdXaWR0aCA9IHNjcmVlbi53aWR0aDtcbiAgICAgICAgICAgIHdIZWlnaHQgPSBzY3JlZW4uaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGlmICh3V2lkdGggPiB3SGVpZ2h0KSB7XG4gICAgICAgICAgICB3SGVpZ2h0ID0gd1dpZHRoO1xuICAgICAgICB9XG4gICAgICAgIHdGc2l6ZSA9IHdIZWlnaHQgLyAxMy4zNDtcbiAgICAgICAgaWYgKGlzWUlYSU4gfHwgaXMyMzQ1IHx8IGlzaGFvc291IHx8IGlzU29nb3UgfHwgaXNMaWViYW8gfHwgaXNHbmJyIHx8IGlzV2VpeGluKSB7IC8vWUlYSU4g5ZKMIDIzNDUg6L+Z6YeM5pyJ5Liq5Yia6LCD55So57O757uf5rWP6KeI5Zmo5pe25YCZ55qEYnVn77yM6ZyA6KaB5LiA54K55bu26L+f5p2l6I635Y+WXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHdIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCB8fCBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodDtcbiAgICAgICAgICAgICAgICB3V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggfHwgZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcbiAgICAgICAgICAgICAgICBpZiAod1dpZHRoID4gd0hlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICB3SGVpZ2h0ID0gd1dpZHRoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3RnNpemUgPSB3SGVpZ2h0IC8gMTMuMzQ7XG4gICAgICAgICAgICAgICAgLy8gd0ZzaXplID0gd0ZzaXplID4gMzIgPyB3RnNpemUgOiAzMjtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaHRtbCcpWzBdLnN0eWxlLmZvbnRTaXplID0gd0ZzaXplICsgJ3B4JztcbiAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaHRtbCcpWzBdLnN0eWxlLmZvbnRTaXplID0gd0ZzaXplICsgJ3B4JztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGF0O1xuXG4gICAgfSxcbiAgICBldmVudEluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbihlKSB7fSwgZmFsc2UpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIHRoYXQ7XG4gICAgfSxcbiAgICBjc3NJbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICAvKlxuICAgICAgICB0aGF0LnJvb3RSZXNpemUxKCk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwib25vcmllbnRhdGlvbmNoYW5nZVwiIGluIHdpbmRvdyA/IFwib3JpZW50YXRpb25jaGFuZ2VcIiA6IFwicmVzaXplXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5vcmllbnRhdGlvbiA9PSA5MCB8fCB3aW5kb3cub3JpZW50YXRpb24gPT0gLTkwKSB7XG4gICAgICAgICAgICAgICAgLy/mqKrlsY9cbiAgICAgICAgICAgICAgICAvL18ucmVuZGVyU2h1cGluZygpO1xuICAgICAgICAgICAgICAgIHRoYXQucm9vdFJlc2l6ZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvL+erluWxj1xuICAgICAgICAgICAgICAgIC8vXy5jbG9zZVNodXBpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICAqL1xuICAgICAgICB2YXIgbm9DaGFuZ2VDb3VudFRvRW5kID0gMTAwLFxuICAgICAgICAgICAgbm9FbmRUaW1lb3V0ID0gMTAwMDtcbiAgICAgICAgdGhhdC5yb290UmVzaXplMigpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9ub3JpZW50YXRpb25jaGFuZ2VcIiBpbiB3aW5kb3cgPyBcIm9yaWVudGF0aW9uY2hhbmdlXCIgOiBcInJlc2l6ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBpbnRlcnZhbCxcbiAgICAgICAgICAgICAgICB0aW1lb3V0LFxuICAgICAgICAgICAgICAgIGVuZCxcbiAgICAgICAgICAgICAgICBsYXN0SW5uZXJXaWR0aCxcbiAgICAgICAgICAgICAgICBsYXN0SW5uZXJIZWlnaHQsXG4gICAgICAgICAgICAgICAgbm9DaGFuZ2VDb3VudDtcbiAgICAgICAgICAgIGVuZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIC8vIFwib3JpZW50YXRpb25jaGFuZ2VlbmRcIlxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgICAgICAgICBpbnRlcnZhbCA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhhdC5yb290UmVzaXplMSgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID09PSBsYXN0SW5uZXJXaWR0aCAmJiB3aW5kb3cuaW5uZXJIZWlnaHQgPT09IGxhc3RJbm5lckhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICBub0NoYW5nZUNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub0NoYW5nZUNvdW50ID09PSBub0NoYW5nZUNvdW50VG9FbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSBpbnRlcnZhbCByZXNvbHZlZCB0aGUgaXNzdWUgZmlyc3QuXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxhc3RJbm5lcldpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIGxhc3RJbm5lckhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgbm9DaGFuZ2VDb3VudCA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGUgdGltZW91dCBoYXBwZW5lZCBmaXJzdC5cbiAgICAgICAgICAgICAgICBlbmQoKTtcbiAgICAgICAgICAgIH0sIG5vRW5kVGltZW91dCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGF0O1xuICAgIH1cbn07XG4vLyB3aW5kb3cuaDUuY3NzSW5pdCgpLmV2ZW50SW5pdCgpO1xuLy8gd2luZG93Lmg1LmluaXRQaXhpKCk7XG53aW5kb3cuaDUuaW5pdFBoYXNlcigpO1xuXG5cbmZ1bmN0aW9uIHNob3dTdGF0cygpIHtcbiAgICB2YXIgc3RhdHMgPSBuZXcgU3RhdHMoKTtcbiAgICBzdGF0cy5zaG93UGFuZWwoMCk7IC8vIDA6IGZwcywgMTogbXMsIDI6IG1iLCAzKzogY3VzdG9tXG4gICAgdmFyIGZzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZnMuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIGZzLnN0eWxlLmxlZnQgPSAwO1xuICAgIGZzLnN0eWxlLnRvcCA9IDA7XG4gICAgZnMuc3R5bGUuekluZGV4ID0gOTk5O1xuICAgIGZzLmFwcGVuZENoaWxkKHN0YXRzLmRvbUVsZW1lbnQpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZnMpO1xuXG4gICAgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICAgICAgc3RhdHMuYmVnaW4oKTtcbiAgICAgICAgLy8gbW9uaXRvcmVkIGNvZGUgZ29lcyBoZXJlXG4gICAgICAgIHN0YXRzLmVuZCgpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgfVxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbn1cbnNob3dTdGF0cygpOyJdfQ==