FROM node:16
RUN git clone https://github.com/DEXTER-BOTS/RCD-MD /root/DEXTER-BOTS
WORKDIR /root/DEXTER-BOTS
RUN npm install
EXPOSE 3000
CMD ["npm","start" ] 
#FULL BOT 
