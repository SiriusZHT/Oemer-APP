FROM python:3.7

WORKDIR /app

# RUN pip3 install -i https://pypi.tuna.tsinghua.edu.cn/simple --upgrade pip
# RUN pip3 install --upgrade setuptools
# RUN pip3 install -i https://pypi.tuna.tsinghua.edu.cn/simple oemer

RUN /usr/local/bin/python -m pip install --upgrade pip
RUN pip3 install -i --upgrade pip
RUN pip3 install --upgrade setuptools
RUN pip3 install -i https://pypi.tuna.tsinghua.edu.cn/simple oemer

RUN apt-get update
RUN apt-get install -y nodejs
RUN apt-get install -y npm 
RUN apt-get install -y wget
RUN apt-get install -y curl 

RUN npm install -g n
RUN n 17
RUN n stable
# RUN ln -sf /usr/local/n/versions/node/16.15.0/bin/node /usr/bin/node

RUN npm cache clean -f
# RUN npm config set registry https://registry.npmmirror.com/ && npm update 

COPY package.json .
RUN npm install --only=prod

COPY . .
# RUN rm -rf /usr/local/lib/python3.7/site-packages/oemer
# RUN rm -rf /usr/local/lib/python3.7/site-packages/oemer-0.1.2.dist-info
# COPY oemer /usr/local/lib/python3.7/site-packages/oemer
# COPY oemer-0.1.2.dist-info /usr/local/lib/python3.7/site-packages/oemer-0.1.2.dist-info

# SHELL ["/bin/bash"]
CMD ["npm", "start"]