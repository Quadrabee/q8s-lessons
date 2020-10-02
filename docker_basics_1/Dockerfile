FROM ubuntu:latest

COPY ./script.sh /usr/bin/script.sh

RUN apt-get update && apt-get install cowsay

CMD /usr/bin/script.sh