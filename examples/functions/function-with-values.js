let launchMissiles = function(value) {
    missilesSystem.lauch("now");
};

if (safeMode) {
    launchMissiles = function(value) {
        
    }
}