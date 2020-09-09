# Docker Basics - S01E02

## Prerequisites

* Make sure you have done _preq_docker_1_

## Steps

### Dockerfile

It's a file with it's own little language describing how to build a docker image.
Once built a docker image can be used to create containers and can also be shared.
Let's go through some of the things available to us to build a docker image:

### FROM

Let's start from an existing image like an ubuntu linux. As said earlier, images can be shared (we will see that in another episode).
Here we say that we want to compose an image by starting from an existing image and we will add things.

### COPY

We can copy files from the current context and put them into the image.
What is the context, in this case it is the same folder as the folder containing the Dockerfile.
Let's create a simple bash script that echoes some stuff.
That's the program we want to include in a docker image to make it portable.

COPY script.sh /bin/script.sh

### CMD

We can decide which command the container will execute.
Let's make sure our docker image runs our script.

CMD /bin/script.sh

### docker build

How to build this image

### docker run

How to run the image

### RUN

We can run commands inside the docker image... to modify that image.
For instance, I'd like our script to be nicer, I'd really like to have a cow saying that "hello world", because I love cows.
Let's for install something `cowsay` with `apt-get` (if you don't know ubuntu, nor debian, nor apt-get don't worry ... very short comment on apt-get)
This starts to be a more realistic example of why docker is great.
Now our script depends on that "cowsay" command, but we want to be able to share our image without people having to install that command themselves
We want to ship our script to be shipped ALONG WITH its dependencies, easily.

modify the script, add the RUN `apt-get install`

### Rebuild

Rebuild this image

```
docker build ....
```

### Run the image again

```
docker run ...
```

### outro

Now that we have an image, we would like to share it: next episode
