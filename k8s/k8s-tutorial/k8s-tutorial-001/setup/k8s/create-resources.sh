cd setup/k8s;
kubectl apply -f 01-svc.yml; 
kubectl apply -f 02-deploy.yml; 
kubectl apply -f 03-ingress.yml; 
sudo vim /etc/hosts; 
cat /etc/hosts;

wait_secs=30
echo "Waiting $wait_secs secs for ingress to start"; 
sleep $wait_secs;

command="curl my-app.com;"
echo " You can execute: $command to test the APP "

curl my-app.com;