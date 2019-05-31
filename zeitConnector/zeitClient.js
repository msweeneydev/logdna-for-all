const constants = require('./common/constants');

module.exports = withUiHook(async ({
    payload, zeitClient 
}) => {
    
    console.log("Start");

    const {projectId} = payload;
	let apiUrl = `/v4/now/deployments?limit=10`;
	if (projectId) {
		apiUrl += `&projectId=${projectId}`
	}

    const {deployments} = await zeitClient.fetchAndThrow(apiUrl, {method: 'GET'});
    
    console.log(deployments);

    const logs = await zeitClient.fetchAndThrow("/v2/now/deployments/" + "dpl_8qZ3rjJtDAK7E5DUoJN9ybz5rEem" + "/events", {method: 'GET'});
    
    console.log(logs.length);

    const {
        clientState,
        action
    } = payload;
    count += 1
    return htm`
    <Page>
    <P>project: ${p}</P>
    <P>client: ${u}</P>
    <P>client: ${t}</P>
      <P>Counter: ${count}</P>
      <Button>Count Me</Button>
    </Page>
  `
})