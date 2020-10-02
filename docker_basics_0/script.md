Docker Basics - 0

A bit of theory first... I'm assuming everyone watching this video has at least some basic understanding of *nix systems, programs, processes, etc.

First of all Docker is just ONE specific implementation of what we call "containers", in the context of a Linux environment.
Containers are Virtual Environments.
You might find many tutorials and documentation online that make a parallel between docker and virtual machines.
This parallel is interesting, but it's theoretically very different.

Docker, and containers are Virtual Environments, compared to virtual machines. 

Docker is a technology on top of some low-level foundation of the Linux kernel features: LXC. 
Docker technology is not a replacement for LXC. “LXC” refers to capabilities of the Linux kernel (specifically namespaces and control groups) which allow sandboxing processes from one another, and controlling their resource allocations. 

The Linux kernel provides the cgroups functionality that allows limitation and prioritization of resources (CPU, memory, block I/O, network, etc.) without the need for starting any virtual machines, and also namespace isolation functionality that allows complete isolation of an application's view of the operating environment, including process trees, networking, user IDs and mounted file systems.[3]