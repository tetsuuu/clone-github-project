/**
 * Clone by repository info { body, name, sourceId, targetOwnerId }
 * プロジェクトボードの複製 { body, name, sourceId, targetOwnerId }を受け取って作成
 * @param {string} body - The project board description
 * @param {string} name - The project board title
 * @param {string} id - The preview project board ID
 * @param {string} ownerId - The project board owner ID
 */
const projectMutation = (body, name, id, ownerId) => (
	`mutation {
        cloneProject(input:{
            body:${body},
            name:${name},
            sourceId:${id},
            targetOwnerId:${ownerId},
            includeWorkflows:true
        })
        {
            project {
                state
                name
                body
                id
            }
        }
    }`
);

export default projectMutation;
