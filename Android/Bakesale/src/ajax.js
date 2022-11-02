const APIHost = 'https://bakesaleforgood.com'

export default {
    async fetchInitialDeals() {
        try {
            const response = await fetch(APIHost + '/api/deals');
            const responseJson = await response.json();
            return responseJson
        } catch (error) {
            console.error(error);
        }
    },
    async fetchDealDetail(dealId) {
        try {
            const response = await fetch(APIHost + '/api/deals/' + dealId);
            const responseJson = await response.json();
            return responseJson
        } catch (error) {
            console.error(error);
        }
    },
    async fetchDealSearchResult(searchTerm) {
        try {
            const response = await fetch(APIHost + '/api/deals?searchTerm=' + searchTerm);
            const responseJson = await response.json();
            return responseJson
        } catch (error) {
            console.error(error);
        }
    },
};