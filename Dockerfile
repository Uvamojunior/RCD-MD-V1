FROM node:16
RUN git clone https://github.com/RCD-MD/RCD-MD-V1/root/RCD-MD
WORKDIR /root/RCD-MD
RUN npm install
EXPOSE 3000
CMD ["npm","start" ] 
#FULL BOT 
