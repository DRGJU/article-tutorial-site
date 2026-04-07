const articles = [
  {
    id: 1,
    title: 'Docker 安装与配置完全指南',
    slug: 'docker-installation-guide',
    excerpt: '从零开始学习 Docker，包含完整的安装步骤、配置优化和最佳实践',
    content: `# Docker 安装与配置完全指南

本教程将带你从零开始学习 Docker，包含完整的安装步骤、配置优化和最佳实践。

## 1. Docker 简介

Docker 是一个开源的应用容器引擎，让开发者可以打包他们的应用以及依赖包到一个可移植的容器中。

### 什么是容器？

容器是一种轻量级的虚拟化技术，它允许我们在一个隔离的环境中运行应用程序。与传统的虚拟机相比，容器具有以下优势：

- **更轻量**：容器共享主机内核，不需要运行完整的操作系统
- **更快速**：容器可以在秒级启动和停止
- **更高效**：容器占用更少的系统资源
- **更便携**：容器可以在任何支持 Docker 的环境中运行

## 2. 安装 Docker

### Ubuntu 系统安装

\`\`\`bash
# 更新软件包索引
sudo apt-get update

# 安装必要的依赖包
sudo apt-get install apt-transport-https ca-certificates curl software-properties-common

# 添加 Docker 官方 GPG 密钥
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

# 设置 Docker 稳定版仓库
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"

# 安装 Docker CE
sudo apt-get update
sudo apt-get install docker-ce

# 验证安装
docker --version
\`\`\`

### Windows 系统安装

1. 访问 Docker Desktop 官网下载页面
2. 下载 Docker Desktop for Windows
3. 运行安装程序，按照提示完成安装
4. 安装完成后重启计算机
5. 启动 Docker Desktop

## 3. 配置 Docker

### 配置镜像加速器

在国内使用 Docker 时，配置镜像加速器可以显著提高下载速度。

编辑 \`/etc/docker/daemon.json\` 文件：

\`\`\`json
{
  "registry-mirrors": [
    "https://docker.mirrors.ustc.edu.cn",
    "https://registry.docker-cn.com"
  ]
}
\`\`\`

重启 Docker 服务：

\`\`\`bash
sudo systemctl daemon-reload
sudo systemctl restart docker
\`\`\`

## 4. 常用 Docker 命令

### 容器操作

\`\`\`bash
# 运行容器
docker run hello-world

# 交互式运行容器
docker run -it ubuntu bash

# 查看运行中的容器
docker ps

# 查看所有容器（包括已停止的）
docker ps -a

# 停止容器
docker stop <container_id>

# 启动已停止的容器
docker start <container_id>

# 删除容器
docker rm <container_id>

# 查看容器日志
docker logs <container_id>

# 进入运行中的容器
docker exec -it <container_id> bash
\`\`\`

### 镜像操作

\`\`\`bash
# 搜索镜像
docker search nginx

# 拉取镜像
docker pull nginx

# 查看本地镜像
docker images

# 删除镜像
docker rmi <image_id>

# 构建镜像
docker build -t my-image .
\`\`\`

## 5. Docker Compose

Docker Compose 是用于定义和运行多容器 Docker 应用程序的工具。

### 安装 Docker Compose

\`\`\`bash
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
\`\`\`

### 使用示例

创建 \`docker-compose.yml\` 文件：

\`\`\`yaml
version: '3'
services:
  web:
    image: nginx
    ports:
      - "80:80"
    volumes:
      - ./html:/usr/share/nginx/html
  db:
    image: mysql
    environment:
      MYSQL_ROOT_PASSWORD: example
\`\`\`

启动服务：

\`\`\`bash
docker-compose up -d
\`\`\`

## 6. 最佳实践

1. **使用官方镜像**：优先使用官方维护的镜像
2. **最小化镜像大小**：使用 Alpine 等轻量级基础镜像
3. **使用 .dockerignore**：排除不需要的文件
4. **多阶段构建**：减少最终镜像大小
5. **不要以 root 用户运行**：提高安全性
6. **合理管理镜像层**：合并 RUN 指令减少层数

## 7. 总结

通过本教程，你已经学习了 Docker 的安装、配置和基本使用方法。Docker 是一个强大的工具，可以大大提高开发和部署效率。建议多加实践，深入理解容器化技术。`,
    coverImage: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800',
    categoryId: 1,
    category: {
      id: 1,
      name: '技术教程',
      slug: 'tutorials',
      description: '各种技术相关的教程和指南',
      articleCount: 15,
      order: 1,
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
    },
    authorId: 1,
    author: {
      id: 1,
      username: 'admin',
      email: 'admin@example.com',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
      role: 'admin',
      createdAt: '2024-01-01T00:00:00Z',
    },
    tags: [
      { id: 1, name: 'Docker', slug: 'docker', articleCount: 5, createdAt: '2024-01-01T00:00:00Z' },
      { id: 2, name: '容器化', slug: 'containerization', articleCount: 3, createdAt: '2024-01-01T00:00:00Z' },
    ],
    viewCount: 1234,
    likeCount: 89,
    commentCount: 12,
    isPublished: true,
    isFeatured: true,
    publishedAt: '2024-03-31T00:00:00Z',
    createdAt: '2024-03-30T00:00:00Z',
    updatedAt: '2024-03-31T00:00:00Z',
  },
  {
    id: 2,
    title: '计算机科学导论',
    slug: 'introduction-to-computer-science',
    excerpt: '全面系统的计算机科学入门教程，涵盖计算机基础、编程、算法、数据结构等核心知识',
    content: `# 计算机科学导论

全面系统的计算机科学入门教程，涵盖计算机基础、编程、算法、数据结构等核心知识。

## 1. 计算机基础

### 1.1 计算机的发展历史

计算机的发展经历了以下几个重要阶段：

- **机械计算机时代**（1822-1944）：巴贝奇的差分机和分析机
- **电子管计算机时代**（1946-1957）：ENIAC 的诞生
- **晶体管计算机时代**（1958-1964）：体积缩小，可靠性提高
- **集成电路计算机时代**（1965-1970）：成本降低，性能提升
- **大规模集成电路时代**（1971 至今）：微型计算机和互联网的普及

### 1.2 计算机的工作原理

计算机的基本工作原理可以概括为：

1. **输入**：接收外部数据和指令
2. **存储**：将数据和指令存入存储器
3. **处理**：CPU 执行指令，处理数据
4. **输出**：将处理结果输出

## 2. 编程基础

### 2.1 编程语言分类

- **机器语言**：二进制代码，计算机直接执行
- **汇编语言**：使用助记符表示机器指令
- **高级语言**：接近自然语言，如 C、Java、Python

### 2.2 基本概念

\`\`\`python
# 变量
name = "计算机科学"
version = 1.0

# 数据类型
age = 25          # 整数
price = 99.99     # 浮点数
is_student = True # 布尔值
message = "Hello" # 字符串

# 控制结构
if age >= 18:
    print("成年人")
else:
    print("未成年人")

# 循环
for i in range(5):
    print(i)

# 函数
def greet(name):
    return f"Hello, {name}!"
\`\`\`

## 3. 数据结构

### 3.1 基本数据结构

1. **数组（Array）**：连续内存空间存储相同类型元素
2. **链表（Linked List）**：节点通过指针连接
3. **栈（Stack）**：后进先出（LIFO）
4. **队列（Queue）**：先进先出（FIFO）
5. **树（Tree）**：层次结构，如二叉树、平衡树
6. **图（Graph）**：节点和边的集合

### 3.2 时间复杂度

常见算法的时间复杂度：

- O(1)：常数时间，如数组访问
- O(log n)：对数时间，如二分查找
- O(n)：线性时间，如遍历数组
- O(n log n)：如快速排序、归并排序
- O(n²)：如冒泡排序、选择排序

## 4. 算法

### 4.1 排序算法

\`\`\`python
# 冒泡排序
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr

# 快速排序
def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)
\`\`\`

### 4.2 搜索算法

- **线性搜索**：逐个检查元素
- **二分搜索**：在有序数组中折半查找
- **深度优先搜索（DFS）**：图的遍历算法
- **广度优先搜索（BFS）**：图的层次遍历

## 5. 计算机系统

### 5.1 操作系统

操作系统的主要功能：

- **进程管理**：调度 CPU 时间
- **内存管理**：分配和回收内存
- **文件系统**：管理文件存储
- **设备管理**：控制硬件设备
- **用户接口**：提供交互界面

### 5.2 计算机网络

网络分层模型（OSI 七层模型）：

1. 物理层
2. 数据链路层
3. 网络层
4. 传输层
5. 会话层
6. 表示层
7. 应用层

## 6. 学习建议

1. **打好基础**：深入理解基本概念
2. **多实践**：编写代码解决实际问题
3. **阅读经典**：学习优秀的开源项目
4. **持续学习**：技术更新快，保持学习状态
5. **参与社区**：与他人交流，共同进步

## 7. 总结

计算机科学是一个广阔而深远的领域。本教程只是介绍了基础知识，建议你继续深入学习各个方向的专业知识。`,
    coverImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800',
    categoryId: 1,
    category: {
      id: 1,
      name: '技术教程',
      slug: 'tutorials',
      description: '各种技术相关的教程和指南',
      articleCount: 15,
      order: 1,
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
    },
    authorId: 1,
    author: {
      id: 1,
      username: 'admin',
      email: 'admin@example.com',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
      role: 'admin',
      createdAt: '2024-01-01T00:00:00Z',
    },
    tags: [
      { id: 3, name: '计算机科学', slug: 'cs', articleCount: 8, createdAt: '2024-01-01T00:00:00Z' },
      { id: 4, name: '编程', slug: 'programming', articleCount: 12, createdAt: '2024-01-01T00:00:00Z' },
    ],
    viewCount: 2156,
    likeCount: 156,
    commentCount: 23,
    isPublished: true,
    isFeatured: true,
    publishedAt: '2024-03-30T00:00:00Z',
    createdAt: '2024-03-29T00:00:00Z',
    updatedAt: '2024-03-30T00:00:00Z',
  },
  {
    id: 3,
    title: 'Python 编程：从入门到实践',
    slug: 'python-programming-guide',
    excerpt: '从零开始系统讲解 Python 编程的基础知识和实践项目',
    content: `# Python 编程：从入门到实践

Python 是一门简洁、易读且功能强大的编程语言，非常适合初学者学习编程。

## 1. Python 简介

Python 由 Guido van Rossum 于 1989 年发明，第一个公开发行版发行于 1991 年。

### Python 的特点

- **简洁易读**：语法简洁，代码可读性强
- **跨平台**：支持 Windows、Linux、macOS 等
- **丰富的库**：拥有庞大的标准库和第三方库
- **广泛的应用**：Web 开发、数据分析、人工智能等

## 2. 环境搭建

### 安装 Python

\`\`\`bash
# Windows
# 访问 python.org 下载安装程序

# macOS
brew install python

# Ubuntu/Debian
sudo apt-get install python3
\`\`\`

### 验证安装

\`\`\`bash
python3 --version
pip3 --version
\`\`\`

## 3. 基础语法

### 变量和数据类型

\`\`\`python
# 变量定义（无需声明类型）
name = "Python"
version = 3.9
is_awesome = True

# 数值类型
age = 25           # int
price = 99.99      # float
complex_num = 3+4j # complex

# 字符串
message = "Hello, Python!"
multiline = """这是
多行
字符串"""

# 列表
fruits = ["apple", "banana", "orange"]

# 元组（不可变）
coordinates = (10, 20)

# 字典
person = {"name": "Alice", "age": 25}

# 集合
unique_numbers = {1, 2, 3, 3, 4}  # {1, 2, 3, 4}
\`\`\`

### 控制结构

\`\`\`python
# 条件语句
age = 18
if age < 13:
    print("儿童")
elif age < 18:
    print("青少年")
else:
    print("成年人")

# for 循环
for i in range(5):
    print(i)

# while 循环
count = 0
while count < 5:
    print(count)
    count += 1

# 列表推导式
squares = [x**2 for x in range(10)]
even_squares = [x**2 for x in range(10) if x % 2 == 0]
\`\`\`

### 函数

\`\`\`python
# 定义函数
def greet(name, greeting="Hello"):
    """问候函数"""
    return f"{greeting}, {name}!"

# 调用函数
print(greet("Alice"))
print(greet("Bob", "Hi"))

# 可变参数
def sum_all(*args):
    return sum(args)

print(sum_all(1, 2, 3, 4))  # 10

# Lambda 函数
square = lambda x: x ** 2
print(square(5))  # 25
\`\`\`

## 4. 面向对象编程

\`\`\`python
class Person:
    """人类"""
    
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def introduce(self):
        return f"我是{self.name}，今年{self.age}岁"
    
    @staticmethod
    def is_adult(age):
        return age >= 18

# 创建对象
person = Person("小明", 20)
print(person.introduce())
print(Person.is_adult(20))
\`\`\`

## 5. 常用模块

### 标准库

\`\`\`python
import os
import sys
import datetime
import json
import math
import random

# 日期时间
now = datetime.datetime.now()
print(now.strftime("%Y-%m-%d %H:%M:%S"))

# JSON 处理
data = {"name": "Python", "version": 3.9}
json_str = json.dumps(data)
parsed = json.loads(json_str)

# 随机数
print(random.randint(1, 100))
\`\`\`

## 6. 实践项目

### 简易待办事项应用

\`\`\`python
class TodoApp:
    def __init__(self):
        self.todos = []
    
    def add(self, task):
        self.todos.append({"task": task, "done": False})
    
    def complete(self, index):
        if 0 <= index < len(self.todos):
            self.todos[index]["done"] = True
    
    def show(self):
        for i, todo in enumerate(self.todos):
            status = "✓" if todo["done"] else "○"
            print(f"{i}. [{status}] {todo['task']}")

# 使用示例
app = TodoApp()
app.add("学习 Python")
app.add("编写代码")
app.complete(0)
app.show()
\`\`\`

## 7. 学习资源

1. **官方文档**：docs.python.org
2. **Real Python**：realpython.com
3. **Python Cookbook**：经典书籍
4. **LeetCode**：算法练习

## 8. 总结

Python 是一门优秀的编程语言，适合各个水平的开发者。通过不断实践和项目练习，你将能够快速掌握 Python 编程。`,
    coverImage: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800',
    categoryId: 1,
    category: {
      id: 1,
      name: '技术教程',
      slug: 'tutorials',
      description: '各种技术相关的教程和指南',
      articleCount: 15,
      order: 1,
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
    },
    authorId: 1,
    author: {
      id: 1,
      username: 'admin',
      email: 'admin@example.com',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
      role: 'admin',
      createdAt: '2024-01-01T00:00:00Z',
    },
    tags: [
      { id: 5, name: 'Python', slug: 'python', articleCount: 6, createdAt: '2024-01-01T00:00:00Z' },
      { id: 4, name: '编程', slug: 'programming', articleCount: 12, createdAt: '2024-01-01T00:00:00Z' },
    ],
    viewCount: 1876,
    likeCount: 134,
    commentCount: 18,
    isPublished: true,
    isFeatured: false,
    publishedAt: '2024-03-28T00:00:00Z',
    createdAt: '2024-03-27T00:00:00Z',
    updatedAt: '2024-03-28T00:00:00Z',
  },
];

export default articles;
