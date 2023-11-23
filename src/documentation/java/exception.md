---
title: Java异常

---

### 1.finally块中的代码什么时候被执行

如果在try{}语句块中有return语句，而finally{}语句块中没有return语句时，finally{}块中的代码在return语句前执行

### 2.try-catch-finally中，如果catch中return了，finally还会执行吗

会执行，并且在return之前执行

