FROM alpine

WORKDIR /tmp/

# Runtime dependencies
RUN apk add libgcc libstdc++

# Dev/Compile dependencies
RUN apk add git make alpine-sdk

RUN git clone https://github.com/Marneus68/cxxsay.git

RUN cd cxxsay && make install

CMD ["cxxsay", "Hello World!"]
