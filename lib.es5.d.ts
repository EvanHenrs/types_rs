
interface RSHttp {
    /**
     * http请求
     * @param method 请求方法,GET POST PUT...
     * @param url 请求URL
     * @param data 请求数据
     * @param headers 请求头
     */
    request(method: string,url: string, data: string | object, headers:string | object): string | ArrayBuffer;
    /**
     * http get请求
     * @param url 请求URL
     * @param data 请求数据
     * @param headers 请求头
     */
    get(url: string, data: string | object, headers:string | object): string | ArrayBuffer;
     /**
     * http post请求
     * @param url 请求URL
     * @param data 请求数据
     * @param headers 请求头
     */
    post(url: string, data: string | object, headers:string | object): string | ArrayBuffer;
     /**
     *删除请求头
     * @param key 要删除http头的键值,为空删除全部
     */
    deleteReqHeader(key?: string): void;
     /**
     *读取返回的HTTP头
     * @param key 要读取http头的键值,为空读取全部
     */
    getRspHeader(key?: string): void;
    /**
     * 是否自动补充一些必要的HTTP头,Accept,Accept-Language,Accept-Encoding,Connection
     * @param isAuto false or true 默认为true
     */
    autoHeader(isAuto: boolean): void;
    /**
    * 设置超时时间.单位毫秒
    * @param connect_timeout 连接超时
    * @param recv_timeout 接收超时
    */
    setTimeout(connect_timeout: number, recv_timeout: number): void;
    /**
    * 返回响应Unix时间戳,单位秒
    */
    getRspTime(): number;   
    /**
    * 返回响应字符串
    */
    getRspText(): string;
     /**
     * 设置底层libcurl的选项
     * @param key 选项key
     * @param value 选项值
     */
    setOption(key: number, value: number | string): void;
     /**
     * 取当前组件Cookie
     * @param key 指定读取的cookie键值,为空读取全部
     */
    getCookie(key?: string): string ;  
     /**
     * 设置请求头
     * @param key 头部key
     * @param value 头部值值
     */
    setReqHeader(key: string, value: string): void;   
     /**
     * 设置请求头
     * @param key_value 多个头使用换行符号\r\n分割
     */
    setReqHeaders(key_value: string): void;   
     /**
     * 设置请求头的顺序
     * @param key_order_list 一个数组,存放请求头的key,发送时会按此顺序发送HTTP头
     */
    setReqHeaderOrder(key_order_list: Array<string>): void;  
    /**
     * 是否带Orgin协议头
     * @param isAllow false or true 默认为true
    */
    allowOrigin(isAllow: boolean): void;     
     /**
      * 删除Cookie
      * @param key 要删除cookie的键,为空删除全部
    */
    deleteCookie(key?: string): void;   
    /**
      * 自动应用系统代理(IE)
      * @param isAuto false or true 默认为false
    */
    autoProxy(isAuto: boolean): void;   
}
/** Http组件,底层使用libcurl */
declare var RSHttp: RSHttp;


interface RSV8Opt {
    /** 设置网络代理,所有的网络请求都会走此代理
     * 当为字符串的时候,形式为 "127.0.0.1:1111"
     * 当为对象的时候,形式为 {ip:"127.0.0.1:1111", user_pwd:代理账户:密码, type:代理类型(0=HTTP,5=SOCKS5)}
     */
    httpProxy: string | object;
    /** 设置当前环境userAgent
     *  你不能直接使用navigator.userAgent设置此值
     */
    userAgent: string;    
    /** 设置当前环境平台类型,
     *  0:PC, 1:安卓,默认为0
     */
    platform: number; 
    /** 设置当前根目录,一些需要用到路径的地方如果传递了相对路径,则会使用此根目录
     */
    rootPath: string;  
     /** 异步阈值
     *  当setTimeout指定的时间值比此值小,所设置异步会被自动执行
     */
    timeout: number;   
    /** 赋予XMLHttpRequest请求网络的能力
     *  如果为true,XMLHttpRequest会像浏览器一样,发送HTTP请求,
     *  如果为false,那么XMLHttpRequest的相关数据会被保存在RSXMLData类里,
     *  默认为false
     */
    autoHttp: boolean;  
    /** 是否自动执行JSONP请求
     *  如果为true,当脚本元素src链接被赋值且元素被加入到文档,
     *  则会自动请求该脚本并执行,默认为false
     */
    autoScript: boolean;  
}
/** V8选项配置 */
declare var RSV8Opt: RSV8Opt;



interface RSUtil {
     /**
     * 返回被bind的函数的原始值
     * @param bind_fuc 被bind的函数
     */
    unbind(bind_fuc: Function): Function;
     /**
     * 写数据到磁盘文件
     * @param path 文件路径
     * @param data 要写入的data
     */
    writeFile(path: string, data:string | ArrayBuffer): void;
    /**
     * 从磁盘文件读入数据
     * @param path 文件路径
     */
    readFile(isAuto: boolean): ArrayBuffer;
    /**
    * 基于opencv的通用缺口识别模块,此函数的运行需要借助RSOpencv.dll,返回缺口位置信息{x,y}
    * @param img 大图
    * @param min_img 小图
    * @param opt 可选,为true提高精度,但速度变慢
    */
    findGap(img: ArrayBuffer, min_img: ArrayBuffer, opt?:boolean): object;
    /**
    * 生成一段鼠标轨迹,[[8,1,16],...]
    * @param x_end 终点位置
    * @param wieght 重力,y方向上的偏移范围大小,一般为50
    * @param speed  加速度,一般为10-13
    */
    move(x_end:number, wieght:number, speed:number): Array<Array<number>>;   
    /**
    * 生成uuid字符串
    */
    uuid(): string;
     /**
     * MD5
     * @param data 要计算MD5的数据
     */
    md5(data: string): string; 
    /**
     * 返回一段随机字符串
     * @param length 要生成的随机字符串的长度
     */
    randstr(length: number): string;    
}
/** 工具类 */
declare var RSUtil: RSUtil;

interface ArrayBuffer {
    /**
     * 返回UTF8字符串,原数据是ansi编码
     */
    toStrFromAnsi(): string;       
    /**
     * 返回UTF8字符串,原数据是Utf8编码
     */
    toStrFromUtf8(): string;      
    /**
     * 返回16进制字符串
     */
    toHex(): string;     
    /**
     * 返回int类型
     */
    toInt32(): number;       
    /**
      * 返回uint类型
      */
    toUint32(): number;      
     /**
      * 返回number类型,双精度
      */
    toNumber(): number;    
    /**
     * 返回base64字符串
     */
    toBase64(): string;  
    /**
     * 如果数据是一张图片,此方法会创建一个窗口,并且显示该图片.
     * 你还可以添加标题, ab.title="123",ob.show();
     * @param type 显示类型,0=>点击图片后销毁窗口,返回点击的位置数组[x,y].1=>可多次点击图片,通过x按钮销毁窗口,返回多个位置[[x,y],[x,y]].2=>在编辑框里输入数据,销毁窗口后返回输入的数据,[数据],默认为0
     * @param img 要额外显示的图片,此参数可以叠加,不限个数
     */
    show(type ?:number, img?:ArrayBuffer,): Array<any>;      
}

interface String {
    /**
     * 返回字符串的ArrayBuffer数据
     */
     buffer: ArrayBuffer;
     /**
     * 拷贝指定指针的数据然后返回该字符串
     * @param ptr 以\0结尾的字符串指针
     */
     fromPtr(ptr:number): string;
}
declare var String: String;

/** 通过addEventListener添加的事件参数会被保存到此对象 */
declare var RSEventList: object;

/** 通过XMLHttpRequest发送的参数会被保存到此对象 */
declare var RSXMLData: object;

/** 通过setTimeout设置的参数会被保存到此数组 */
declare var RSTimeoutList: Array<Object>;

/** 通过setInterval设置的参数会被保存到此数组 */
declare var RSIntervalList: Array<Object>;

/** jsonp保存列表*/
declare var RSJsonpList: Array<object>;

/** 所有的异常信息会被保存到此数组*/
declare var RSGlobalExceptions: Array<Error>;


interface RSLocalStorage {
     /**
     * 读取项目值
     * @param key 要读取的key
     */
    getItem(key:string): string;
     /**
     * 设置项目数据
     * @param key 要设置的key
     * @param value 要设置的值
     */
    setItem(key:string,value:string): void;
     /**
     * 移除项目值
     * @param key 要移除的key
     */
    removeItem(key:string): string;
     /**
     * 清空项目
     */
    clear(): void;
    /**
     * 读取项目值
     * @param key 要读取的key
     */
    getItem(key:string): string;   
    /**
     * 返回指定下标的key值
     * @param index 下标
     */
    key(index:number): string;   

    /** 长度 */
    readonly length:number
}
/** 全局键值存储器, 所有V8实例对象共享,线程安全*/
declare var RSLocalStorage: RSLocalStorage;

interface RSDeque {
     /**
     * 弹出队尾元素
     */
    pop(): string
    /**
     * 压入元素到队尾,返回队列长度
     * @param data 要压入的数据
     */
    push(data:string): number
     /**
     * 弹出队首元素
     */
    shift(): string
    /**
     * 压入元素到队首,返回队列长度
     * @param data 要压入的数据
     */
    unshift(data:string): number
     /**
      * 清空队列
      */
    clear(): void
     /**
      * 保存所有元素到磁盘文件
      * @param path 文件路径
      */
    save(path:string): void      
     /**
      * 加载磁盘文件到队列,返回队列长度
      * @param path 文件路径
      */
    load(path:string): number    

    /** 长度 */
    readonly length:number
    
}

interface RSLocalDeque {
     /**
     * 根据下标生成一个全局队列,相同的下标生成的队列是同一个,即使在不同的V8实例之间
     * @param index 下标
     */
    get(index:number): RSDeque

}
/** 全局队列管理器,线程安全*/
declare var RSLocalDeque: RSLocalDeque;




