import NRP from 'node-redis-pubsub';
const config = {
  port: 6379, // Port of your locally running Redis server
  scope: 'simple' // Use a scope to prevent two NRPs from sharing messages
};

const nrp = new NRP(config); // This is the NRP client

export default nrp;
