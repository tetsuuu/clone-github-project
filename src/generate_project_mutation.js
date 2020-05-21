/**
 * Clone by repository info { body, name, sourceId, targetOwnerId }
 * プロジェクトボードの複製 { body, name, sourceId, targetOwnerId }を受け取って作成
 * @param {any} body - The project board description
 * @param {any} name - The project board title
 * @param {any} id - The preview project board ID
 * @param {any} ownerId - The project board owner ID
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

module.exports = projectMutation;
