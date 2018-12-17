# less-demo
关于less的一些实践(:red_car:[查看demo点这里](https://holidaying.github.io/less-demo/index.html))
##客户端安装情况
* 1.建立index.html
* 2.下载less.js
* 3.引入less.js

### 页面目录
![Paste_Image.png](http://upload-images.jianshu.io/upload_images/2604175-1f895de8f743e4ad.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

##项目中用到的基本语法
* 1.变量，请注意 LESS 中的变量为完全的 ‘常量’ ，所以只能定义一次。有助于项目公用一些颜色，字体大小，边距等，更有利于主题的制作。用@定义
```
//变量
@main_color: #722872;
@light_gray: #aaa;
@mid_gray: #888;
@dark_gray: #666;
@link_color: #bbb;
@dark_white: #ffffff;
@max_width: 1024px;

//声明式变量
@shadow:{box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.2);};
```
* 2.嵌套,我们可以在一个选择器中嵌套另一个选择器来实现继承，这样很大程度减少了代码量，并且代码看起来更加的清晰。与html标签相同的嵌套，逻辑更加清晰有助于阅读和样式污染。变量作用于明显。
```
#header {
  height: 80px;
  background-color: @main_color;
  border-color: @main_color;
  @shadow();
  .container {                                  //嵌套规则的使用
    width: 95%;
    max-width: @max_width;
    margin-top: 20px;
    margin-right: -400px;
    &::before, &::after {                       //使用&选择伪元素
      display: none
    }
  }
}
```
* 3.混合，变量允许我们单独定义一系列通用的样式，然后在需要的时候去调用。所以在做全局样式调整的时候我们可能只需要修改几行代码就可以了。
```
//无参数混合的定义
.transition {
  -webkit-transition: all .3s;
  -moz-transition: all .3s;
  transition: all .3s;
}

nav {
  font-size: 22px;
  background-color: @main_color;
  .transition;                                  //无参数混合的使用
  @media (max-width: 768px) {
    .active a {
      .link;
    }
  }
  li {
    height: 100%;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 2px;
    display: inline-flex;
    a {
      color: @dark_white;
      padding: 10px 20px;
      &:hover {
        .link;
      }
    }
  }
}
```
* 4.&串联选择器，而不是写后代选择器，就可以用到&了. 这点对伪类尤其有用如 :hover 和 :focus.
```
.button {
  color: @dark_white;
  border: solid 2px @dark_white;
  .border-radius(percentage(0.5));              //函数的使用
  display: inline-block;
  width: 50px;
  height: 50px;
  text-align: center;
  font-size: 20px;
  line-height: 48px;
  transition: all .3s ease-in-out;
  &:hover {                                    //&就代表.button
    border: solid 2px @dark_white;
    color: @main_color;
    background: @dark_white;
  }
}
```
* Math 函数（项目中很少用到）
LESS提供了一组方便的数学函数，你可以使用它们处理一些数字类型的值:
round(1.67); // returns `2`
ceil(2.4);   // returns `3`
floor(2.6);  // returns `2`
如果你想将一个值转化为百分比，你可以使用percentage 函数:
percentage(0.5); // returns `50%`

* Color 函数（有10个颜色处理的函数，LESS 提供了一系列的颜色运算函数. 颜色会先被转化成 HSL 色彩空间, 然后在通道级别操作。怎么计算的正在研究）
```
lighten(@color, 10%);     // return a color which is 10% *lighter* than @color
darken(@color, 10%);      // return a color which is 10% *darker* than @color
saturate(@color, 10%);    // return a color 10% *more* saturated than @color
desaturate(@color, 10%);  // return a color 10% *less* saturated than @color
fadein(@color, 10%);      // return a color 10% *less* transparent than @color
fadeout(@color, 10%);     // return a color 10% *more* transparent than @color
fade(@color, 50%);        // return @color with 50% transparency
spin(@color, 10);         // return a color with a 10 degree larger in hue than @color
spin(@color, -10);        // return a color with a 10 degree smaller hue than @color
mix(@color1, @color2);    // return a mix of @color1 and @color2
```
  

