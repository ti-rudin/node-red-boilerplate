module.exports = function(RED) {
  function HelloNode(config) {
    RED.nodes.createNode(this, config);
    this.topic = config.topic;
    this.world = RED.nodes.getNode(config.server).world;

    const node = this;

    node.on("input", function() {
      node.send({
        topic: node.topic,
        payload: {
          hello: node.world
        }
      });
    });
  }
  RED.nodes.registerType("hello-node", HelloNode);
};
