# Docker Basics - S01E02

## Prerequisites

* Make sure you have done _docker_basics_1_
* Make sure you have done _preq_q8s_registry_

## Steps

### Rebuild image with official name

docker build -t q8s.quadrabee.com/<user>/<project> .

### Push image

docker push q8s.quadrabee.com/<user>/moo

### Download image from a team member

Check the status of card to find another user that has published the image

docker pull q8s.quadrabee.com/<otheruser>/moo

### Run image from team member

docker run q8s.quadrabee.com/<otheruser>/moo

## outrou

....