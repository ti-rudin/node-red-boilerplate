module.exports = function(RED) {
    function ConfigNode(n) {
        RED.nodes.createNode(this,n);
        this.world = n.world;
    }
    RED.nodes.registerType("config-node",ConfigNode);
}