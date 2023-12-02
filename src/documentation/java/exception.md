---
title: Java异常

---

### 1.finally块中的代码什么时候被执行

如果在try{}语句块中有return语句，而finally{}语句块中没有return语句时，finally{}块中的代码在return语句前执行

finally一般在try catch之后，无论出现什么情况，finally都会被执行；如果finally前有return，finally后的代码也会执行

在字节码中finally中的代码被复制了三份，分别放入try流程，catch流程以及catch剩余的异常类型流程，即catch块捕获不到的异常finally也要执行

### 2.try-catch-finally中，如果catch中return了，finally还会执行吗

会执行，并且在return之前执行，catch中的return暂存数据，等到finally执行完再返回

### 3.Error和Exception的区别？

Error类一般是指与虚拟机相关的问题，如果系统崩溃，虚拟机错误，内存空间不足，方法调用栈溢出等，如StackOverflow和OutOfMemory，对于这类错误，Java编译器不去检查他们，对于这类错误导致的应用程序中断，仅靠程序本身无法恢复和预防，遇到这样的错误，建议终止程序运行

Exception类表示程序可以处理的异常，可以捕获且可能恢复，遇到这类异常，应该尽可能处理异常，使程序恢复运行，而不应该随意终止异常

### 4.throw和throws的区别？

throw：在方法内部，用来抛出一个异常对象，将这个异常对象传递到调用者处，并结束当前方法的执行

throws：在方法声明后，表示如果抛出异常，由调用该方法的调用者处理


