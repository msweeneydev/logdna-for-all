function convertToDNA(zeitLog) {
    const dnaLog = {
        deploymentId: zeitLog.payload.deploymentId,
        data: zeitLog.payload.text,
        id: clientToHandle.configurationId
    }

    return dnaLog;
}


module.exports = {
    convertToDNA
}