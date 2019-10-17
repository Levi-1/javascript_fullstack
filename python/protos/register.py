import os,json
import sys
cur_dir = os.path.abspath(os.path.dirname(__file__))
pro_dir = os.path.split(cur_dir)[0]
sys.path.append(pro_dir)

class Proto_01():
  @staticmethod
  def register(recvData):
    # (mainTask,client,data) #连接数据
    data=json.loads(recvData[2])
    username=data["data"]["username"]
    password=data["data"]["password"]
    print('hi',username)
    # 查询数据库，查看用户是否存在
    # 在，返回用户重复错误
    # 不在，创建player
    # 存储player
    pass

  @staticmethod
  def login():
    pass

  @staticmethod
  def useskill():
    pass