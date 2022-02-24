const axios = require('axios')
const colors = require('colors')
require('dotenv').config()

module.exports = async function querySubgraph(tokenId) {
   try {
      const result = await axios.post(
			process.env.SUBGRAPH_ENDPOINT,
			{
				query: `{
					tokens(where:{tokenID: ${tokenId}}) {
						id
						tokenID
						fusionCount
						faction
						generation
						owner {
							id
						}
					}
				}`,
			}
		)

      return result.data.data.tokens[0]
   } catch (error) {
      console.error(`${error}`.red.inverse)
   }
}