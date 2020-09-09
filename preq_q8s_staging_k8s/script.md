# Q8S Staging

## Prerequisites

* Make sure you have done _preq_q8s_keycloak_
* Ping @llambeau so that he knows you're starting this session, he'll send you the zip file needed for this.

## Goal

In this session we are going to setup your workstation to access our staging Q8S cluster.

## Steps

### Kubectl

Please install kubectl following the instructions available at https://kubernetes.io/docs/tasks/tools/install-kubectl/

### Kubelogin

Please install the kubectl plugin "kubelogin", following the instructions available at https://github.com/int128/kubelogin

### Configure the access to the cluster

Please create a `~/.kube/config` file based the template available in this session's zip file. Make sure to adapt the context section to put your nickname for the namespace value.

:warning: If you already have a ~/.kube/config file on your computer, make sure you add the q8s-staging cluster, keycloak user and the q8s-staging context in the relevant sections :warning:

```
apiVersion: v1
kind: Config
clusters:
- cluster:
    certificate-authority-data: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUM1ekNDQWMrZ0F3SUJBZ0lCQURBTkJna3Foa2lHOXcwQkFRc0ZBREFWTVJNd0VRWURWUVFERXdwcmRXSmwKY201bGRHVnpNQjRYRFRJd01Ea3dNekV5TWpBeE5Wb1hEVE13TURrd01URXlNakF4TlZvd0ZURVRNQkVHQTFVRQpBeE1LYTNWaVpYSnVaWFJsY3pDQ0FTSXdEUVlKS29aSWh2Y05BUUVCQlFBRGdnRVBBRENDQVFvQ2dnRUJBT21TCi9TV0tvcjVMSkhmSUpmU0toa1dCM1R0N2hTZjUvelhpNTRrbjJGV3RvNE9RNHlPMmVJcUFTcCtEZHgrTnBsd1EKUG54bmFpYzNUS0dXdEdaVHhiMnVFcDc4dTdOUVowRnFYYi9oRlVGOUUyc1BVZDRsdHhDYXVoeHM1TWZoNWgxVwpTZWlHZ3p2NVRDaEl1dC8vakE1NFlLMmdxdG8zNElick8xRGdsbW9CZldUeloyKzhWamlpc0JCS2RUaTZ6SmNnCnJRRU5ZaE5XbnZ2K2l4ZVZiYmlpTytQS1JjelJmd0JURmcyNGY2TEQvNFBEMjJnZE93SW5yMWlrTVgyaU1JSTIKZWh1OVhTVS91eTUvTzZrK2c4b2ZyNndpOWxhQjVDblRYcUp3UWlzTm1LaFhOdGNmb1FWNkNlOGx0ZWN0RkhVMApsSElKVHA2K3NVNWVXaG5DLzMwQ0F3RUFBYU5DTUVBd0RnWURWUjBQQVFIL0JBUURBZ0trTUE4R0ExVWRFd0VCCi93UUZNQU1CQWY4d0hRWURWUjBPQkJZRUZDWlZUckYyQXdCTXhIK3BZcjB5VXJDRU52cENNQTBHQ1NxR1NJYjMKRFFFQkN3VUFBNElCQVFBRElobWc1YXlNNlN2dU9SUkk5TDhkUm0zUi9rUU5xaXdkR3NDZmwySUZ6NXJiOEprZwozY09qZEtqbGV4Y1hZSSsyOEtDM2d3dWZDRko2YWNBMU0yNW1lcVVWRjVIaVhFREd5UlNXbEU4S0p3QldMWFV3Cmh5RFBULzc3QXgrWFhyNnJxK1NkNlZLWVk1dHYwNWthMlNKczVLRjFiSVRIYXYwQklUSnptTmRVZFBySWtBQUMKOE9jc1UrNU41UWVsUkp3WnZkaGtwRUhBN3F2MXpzTUZudFRZeUV5ZitYMVV0em5pZldNVlpOMytCNk5oRnBaKwp4WUwzdjZ4cVBJWThjcDR3eUN0RHVyUUxrRWFWV3k0R0NWWC9vejFYOGlBelRKaHA2ME1PbUM0T3U5ZGRwU0doCmpmc2d1cExvVWYyV1dMSm9QSTNReHRxRlBYaGVPSU5CUCtoQwotLS0tLUVORCBDRVJUSUZJQ0FURS0tLS0tCg==
    server: https://selene.quadrabee.com:6443
  name: q8s-staging
contexts:
- context:
    cluster: q8s-staging
    user: keycloak
    namespace: <your nickname here>
  name: q8s-staging
current-context: q8s-staging
users:
- name: keycloak
  user:
    exec:
      apiVersion: client.authentication.k8s.io/v1beta1
      args:
      - oidc-login
      - get-token
      - --oidc-issuer-url=https://keycloak.q8s.quadrabee.com/auth/realms/quadrabee
      - --oidc-client-id=kubernetes-staging
      - --oidc-client-secret=aa64906d-5826-40fb-9ef9-fccf73b35ff6
      command: kubectl
      env: null
```