
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

