
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