/**
 * Return to cards data from colmun { body, name, sourceId, targetOwnerId }
 * カードIDを返す { body, name, sourceId, targetOwnerId }
 * @param {object} githubContext - The current issue or pull request data
 */
const getCardsQuery = githubContext => {
	const {eventName, payload} = githubContext;
	if (eventName !== 'pull_request' && eventName !== 'issues') {
		throw new Error(`Only pull requests or issues allowed, received:\n${eventName}`);
	}

	const githubData = eventName === 'issues' ?
		payload.issue :
		payload.pull_request;

	return {
		eventName,
		action: payload.action,
		nodeId: githubData.node_id,
		url: githubData.html_url
	};
};

module.exports = getCardsQuery;
