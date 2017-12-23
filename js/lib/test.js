/**
 * Created by 0291 on 2017/11/20.
 * desc: 通讯录按中英文数字排序
 */


export default function compare(val1,val2) {
  // 转换为拼音
  val1 = Pinyin.getFullChars(val1.customer).toLowerCase();
  val2 = Pinyin.getFullChars(val2.customer).toLowerCase();

  // 获取较长的拼音的长度
  var length =  val1.length > val2.length ? val1.length:val2.length ;

  // 依次比较字母的unicode码，相等时返回0，小于时返回-1，大于时返回1
  for(var i = 0; i < length; i++ ) {
    var differ = val1.charCodeAt(i) - val2.charCodeAt(i);
    if(differ == 0) {
      continue;
    }else {
      if(val1.charAt(i) == '_' ) {
        return -1;
      }
      return differ;
    }
  }
  if(i == length) {
    return val1.length - val2.length;
  }
}
