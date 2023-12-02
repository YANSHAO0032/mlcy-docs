---
title: Java集合

---

### 1.Java中常用的容器有哪些？

Collection接口：

- 存储单个元素集合：Collection表示一组对象的根接口，它用于存储一组对象，这些对象可以是重复的，并且它们没有键值对的关系
- 继承关系：Collection接口是所有集合类的父接口，它派生了许多子接口，如List、Set、和Queue，以及对应的实现类，如ArrayList、HashSet、LinkedList
- 主要实现类：一些主要的Collection实现类包括ArrayList(动态数组)、LinkedList(双向链表)、HashSet(哈希集合)等
- 主要方法：add(添加元素)、remove(移除元素)、contains(检查是否包含元素)、size(获取集合大小)等

Map接口：

- 存储键值对：Map接口表示键值对的集合，每个元素都是一个键值对，其中键是唯一的，而值是可以重复的，每个键关联一个值
- 继承关系：Map不是Collection的子接口，但是它是Collection框架中的一部分，它的主要实现有HashMap、TreeMap和LinkedHashMap
- 主要实现类：一些主要的Map实现类包括HashMap(基于哈希表)、TreeMap(基于红黑树)和LinedHashMap(操持插入顺序)
- 主要方法:put(放置键值对)、get(根据键获取值)、remove(根据键移除键值对)、containsKey(检查是否包含键)

