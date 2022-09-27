import numpy as np # 수학 연산 수행을 위한 모듈
import pandas as pd # 데이터 처리를 위한 모듈
import seaborn as sns # 데이터 시각화 모듈
import matplotlib.pyplot as plt # 데이터 시각화 모듈

def read_csv(f):
    return pd.read_csv(f)

data_frame = read_csv('a.csv') # read csv

data_frame.info() # information
print(data_frame.head(5)) # 5번째까지 프린트