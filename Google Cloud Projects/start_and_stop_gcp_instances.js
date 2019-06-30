const gce = require('@google-cloud/compute')({
    projectID: 'msds434'
});
const zone = gce.zone('us-east4-c');

console.log('Fetching your VMs for you...');

zone.getVMs().then((data) => {
    data[0].forEach((vm) => {
        console.log('Found a VM called', vm.name);
        console.log("Let's go ahead and stop", vm.name, "...");
        vm.stop((err, operation) => {
            operation.on('complete', (err) => {
                console.log("Finished stopping", vm.name);
            });
        });
    });
});