# eslint学习记录

----
## 项目安装eslint
    1.npm install eslint --save-dev (--save-dev 开发依赖)
    2.eslint init 初始化eslint (利用package.json的script脚本运行执行)

        How would you like to use ESLint?
        To check syntax only    (仅检查语法)
        To check syntax and find problems   (检查语法并发现问题)
        To check syntax, find problems, and enforce code style  (检查语法、查找问题和执行代码样式)

        What type of modules does your project use?  (您的项目使用什么类型的模块?(用箭头键))
        JavaScript modules (import/export)
        CommonJS (require/exports)
        None of these   (以上均不)

        Which framework does your project use?  (您的项目使用哪个框架?)

        Where does your code run? (Press <space> to select, <a> to toggle all, <i> to invert selection)
        (你的代码在哪里运行?按<space>空格选择， 按<a>全选和全不选， 按<i>反向选择)

        How would you like to define a style for your project? 
        (您希望如何为您的项目定义样式?)
        Use a popular style guide 使用流行的风格指南
        Answer questions about your style 回答关于你的风格的问题
        Inspect your JavaScript file(s) 检查你的JavaScript文件

        Which style guide do you want to follow?    你想遵循哪种风格的指南?

        What format do you want your config file to be in?  您希望配置文件的格式是什么?

    3.在package.json中配置eslintConfig模块

----
## eslint命令使用记录
    1.eslilnt file.js 指定目录文件 
        eslint . 检查所有文件
    2.(.eslintignore文件)指定忽略文件
    3.eslint --fix 修复文件

----
## eslint中使用扩展 (扩展配置规则)
  extends:airbnb-base 
  https://www.jianshu.com/p/221d55a9170c 
  https://github.com/airbnb/javascript

----
## eslint规则使用记录
    0 = off, 1 = warn, 2 = error
    warn 发出警告，不终止程序
    error 发出错误，终止程序

    no-console  不使用console.log