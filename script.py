print('hello from python')
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
fig = plt.figure()
x = np.array([1,2,3,4,5])
y = np.array([5,4,3,2,1])
axes1 = fig.add_axes([0.1,0.1,0.8,0.8])
axes1.scatter(x,y)
# fig.show()
from unicodedata import normalize
print(fig)
# table_MN = pd.read_html('https://zigy.in')
# print(table_MN)