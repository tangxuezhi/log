#JSON与字符串的转换
---

---
JSON的两个方法：
1. stringify： 把JSON object转化成字符串。例如：
```
var jsonObj = {
"name": "Noah"
}
JSON.stringify(jsonObj);
// jsonObj: "{"name": "Noah"}"
```
2. parse: 把字符串类型的JSON object转化成JSON object。需要注意的是，被转化的字符串类型中需用双引号，不能用单引号或是单双混用。
```
var jsonObj = "{
"name": "Noah"
}"
JSON.parse(jsonObj);
// jsonObj: {"name": "Noah"}
```
