from twisted.internet import reactor, defer,utils,task,protocol
from twisted.protocols.policies import TimeoutMixin
import queue,random
import re
import pymssql

from echoserv import YibinProto,YibinFactory
from MsgRecvThread import MsgRecvThread
from MsgSendThread import MsgSendThread


class MainTask():
    def __init__(self):
        self.clients={}
        self.players={} #playerid,class_player
        self.groups={} #聊天组

        self.msgRecvQueue=queue.Queue(1000) #创建长度1000的消息对列

        self.msgSendQueue=queue.Queue(1000) #创建长度1000的消息对列
        # self.msgSendThread=MsgSendThread(self,"msgsend Thread")
        self.threadArr=[]
        for idx in range(4):
            self.threadArr.append(MsgRecvThread(self,"msg recv Thread %d" %(idx)))
        for idx in range(2):
            self.threadArr.append(MsgSendThread(self,"msg send Thread %d" %(idx)))
        

        pass

    #连接数据库
    # def conn(self):
    #     connect = pymssql.connect('127.0.0.1', 'sa', 's0217', 'game_Player') #服务器名,账户,密码,数据库名
    #     if connect:
    #         print("连接成功!")
    #         return connect

    # def creatL(self,conn):
    #     cursor = conn.cursor()   #创建一个游标对象,python里的sql语句都要通过cursor来执行
    #     cursor.execute("create table P_name(name varchar(20) primary key)")   #执行sql语句
    #     conn.commit()  #提交
    #     cursor.close()   #关闭游标
    #     # conn.close()  #关闭连接

    # def addP(self,conn,name):
    #     cursor = conn.cursor()   #创建一个游标对象,python里的sql语句都要通过cursor来执行
    #     sql = "insert into P_name (name) values(mame)"
    #     cursor.execute(sql)   #执行sql语句
    #     conn.commit()  #提交
    #     cursor.close()   
    #     conn.close() 

    # def exists_of_table(self,conn,table_name): #判断表格是否已经存在
    #     cursor = conn.cursor()
    #     sql = "SELECT table_name, table_type FROM information_schema.tables;"
    #     cursor.execute(sql)
    #     tables = [cursor.fetchall()] #返回表格名

    #     table_list = re.findall('(\'.*?\')',str(tables)) #固定语句
    #     table_list = [re.sub("'",'',each) for each in table_list]
    #     if table_name in table_list:
    #         cursor.close()
    #         return 1
    #     else:
    #         cursor.close()
    #         return 0

    def register(self,client,data):
        self.clients[client]=(client,data) #player

        pass

    def unregister(self,client):
        xx=self.clients.pop(client)
        if not xx:
            xx.transport.loseConnection()
        pass

    def findPlayerByName(self,data):
        for key in self.clients:
            if self.clients[key][1]==data:
                return key
        return None
    def getPlayersInGroup(self,groupName):
        clt_list=[] #组内玩家的连接列表
        for pName in self.groups[groupName]:
            x=self.findPlayerByName(pName)
            if not x: #如果玩家已经登录。（没登录的玩家不需要发信息）
                clt_list.append(x)
        return clt_list

    def tcpServer(self,port):
        reactor.listenTCP(port,YibinFactory(self,700))
    
    def start(self,port=9000):
        self.tcpServer(port)
        for th in self.threadArr:
            th.start()

if __name__ == "__main__":
    m=MainTask()
    m.start()
    reactor.run()
    
    pass
