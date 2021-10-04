
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



interface RSXMLData {
  /**
   * 发送数据的xhr实例类
   */
   xml: XMLHttpRequest;
  /**
   * 请求的链接地址
   */
   url: string;
  /**
   * 请求的数据体
   */
   data: string;
  /**
   * 请求的方法
   */
   method: string;
  /**
   * 请求的HTTP头
   */
   headers: string;      
}
/** 通过XMLHttpRequest发送的参数会被保存到此对象 */
declare var RSXMLData: RSXMLData;


/** websocket类 */
interface RSWebSocket {
    /**
     * 连接服务器
     * @param url 地址
     */
    connect(url: string ): boolean;
    /**
     * 发送数据
     * @param data 要发送的数据
     */
    send(data: string | ArrayBuffer | ArrayBufferView ): boolean;
    /**
     * 接收数据,同步方法
     * @param wait_time 等待时间,单位毫秒,-1=永久等待
     */
    recv(wait_time: number ): ArrayBuffer;
    /**
     * 接收字符串数据,同步方法
     * @param wait_time 等待时间,单位毫秒,-1=永久等待
     */
    recvText(wait_time: number ): string;
    /**
     * 设置代理服务器
     * @param ip_config 设置参考RSV8Opt.httpProxy
     */
    setProxy(ip_config: string | object ): void;    
    /**
     * 是否已连接
     */
    isConnect(): boolean; 
    /**
     * 设置协议头
     * @param key 请求头key
     * @param value 请求头value
     */
    setReqHeader(key: string, value: string ): void;     
    /**
     * 关闭连接
     */
    close(): void;    
    
    /** 消息回调函数,如果设置了此函数,则为异步形式,同步函数 recv将不能在使用*/
    onmessage: Function;
    
}

interface RSWebSocketConstructor {
  /**
  * 创建一个websocket客户端
  */    
  new(): RSWebSocket;
}

declare var RSWebSocket: RSWebSocketConstructor;



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
     *  如果为false,那么XMLHttpRequest的相关数据会被保存在RSXMLData 类里,
     *  默认为false
     */
    autoHttp: boolean;  
    /** 是否自动执行JSONP请求
     *  如果为true,当脚本元素src链接被赋值且元素被加入到文档,
     *  则会自动请求该脚本并执行,默认为false
     */
    autoScript: boolean;  

     /** 
      * 解析HTML,innerHTML or ourterHTML,默认为false
     */
    parseHTML: boolean;    
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

     /**
     * 将16进制字符串转成ArrayBuffer
     */
    decodeHex(): ArrayBuffer;

     /**
     * 将Base64字符串转成ArrayBuffer
     */
    decodeBase64(): ArrayBuffer;    

     /**
     * 取出中间文本
     * @param left 左边字符串
     * @param right 右边字符串
     * @param start_pos 查询的开始位置,默认为0
     */
    mid(left:string, right:string, start_pos ?: number): string;    
    
}
declare var String: StringConstructor;

/** 通过addEventListener添加的事件参数会被保存到此对象 */
declare var RSEventList: object;


/** 当前环境是否是VSCode */
declare var env_vs: boolean;





/** 通过setTimeout设置的参数会被保存到此数组 */
declare var RSTimeoutList: Array<Object>;

/** 通过setInterval设置的参数会被保存到此数组 */
declare var RSIntervalList: Array<Object>;


interface RSJsonpList {
    /**
     * 返回字符串的ArrayBuffer数据
     */
     length: number;
     /**
     * 查找列表每一个元素的src属性是否包含关键字key,如果包含,则返回第一个匹配的元素,否则返回null
     */
     find(key:string): Element;  
     /**
     * 清空此列表
     */
     clear(): void;  
     /**
     * 查找列表每一个元素的src属性是否包含关键字key,如果包含,选中此元素.
     * 如果该元素是script,则请求该元素src指向的链接,并执行返回的代码,
     * 如果元素下绑定有onload..函数,则此函数会被执行.（同步方式）
     * @param key 关键字
     * @param ret_rsp 如果元素是script,此参数标明是否返回请求的内容
     * @param need_cache 如果元素是script,此参数标明是否缓存脚本代码
     */
     load(key:string, ret_rsp:boolean,need_cache:boolean): any;     
}



/** jsonp保存列表*/
declare var RSJsonpList: RSJsonpList;

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

/** 根据下标生成一个全局队列,相同的下标生成的队列是同一个,即使在不同的V8实例之间,线程安全
 * @param index 下标
*/
declare function RSGlobalDeque(index:number): RSDeque


interface DLLInstance {

}

interface RSDLL {
    /**
    * 加载一个DLL实例,
    * @param path DLL路径
    * @param method_list 要加载的方法名称列表,为空自动读取DLL导出的函数
    * @param init_fn 初始化函数,这个函数全局只会调用一次,会传递一个DLL实例参数
    */
   load(path:string, method_list:Array<string>,init_fn:Function): DLLInstance
}
/** DLL管理类,线程安全*/
declare var RSDLL: RSDLL;

/** 睡眠,单位毫秒
 * @param sleep 要睡眠的时间
*/
declare function RSSleep(sleep: number): void;

/** MD5*/
declare function md5(data: string): string;

/** sha256*/
declare function sha256(data: string): string;


/** 异步运行函数*/
declare function RSScriptDone(fn: Function): any;


/** 新建一个事件参数*/
declare function RSEvent(type: string): any;

interface RSVM {
    /**
    * 执行一个JS文件,当path指定的文件名在全局存储器里存在相应的key时,会直接加载对应的值
    * @param path JS文件路径,可以为网络文件,也可以为本地文件(可以为相对路径)
    * @param need_cache 是否需要缓存代码,如果为true,代码被缓存到全局存储器,key为path
    * @param src_name 此参数设置document.currentScript.src的值,如果为网络文件,不用设置(网络文件自动配置)
    */
   import(path:string, need_cache:boolean, src_name:string): any

    /**
    * 执行JS代码
    * @param jscode js代码
    */
   compile(jscode:string):any;
}
/** vm*/
declare var RSVM: RSVM;


interface RSContext {

    /**
    * 执行一个JS文件,当path指定的文件名在全局存储器里存在相应的key时,会直接加载对应的值
    * @param path JS文件路径,可以为网络文件,也可以为本地文件(可以为相对路径)
    * @param need_cache 是否需要缓存代码,如果为true,代码被缓存到全局存储器,key为path
    */
   import(path:string, need_cache:boolean): any

    /**
    * 执行JS代码
    * @param jscode js代码
    */
    eval(jscode:string):any;


    /**
    * 返回环境所属的全局变量
    */
    global():object;

}



interface RSContextConstructor {
    /**
    * 创建一个独立的JS环境
    */    
    new(): RSContext;
}
declare var RSContext: RSContextConstructor;


interface Date {
    /**
    * 增加本地时间
    * @param time 要增加的时间,单位毫秒
    */
     adTime(time:number);  
    /**
    * 调整本地时间
    * @param time 要调整的时间,单位毫秒
    */
     chTime(time:number); 
    /**
    * 取格式化时间, 以指定参数格式化当前时间并返回  %Y年%m月%d日%H时%M分%S秒
    * @param format
    */
     format(format:string): string; 


}

declare var Date: Date;



