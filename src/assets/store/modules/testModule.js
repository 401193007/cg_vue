import { newsListAction } from '../actions/NewsAction'
import { newsListGetter } from '../getters/NewsGetter'
import { newsListMutation } from '../mutations/NewsMutation'

export default {
    state: {
        isFetching: false,
        data: []
    },
    actions: newsListAction,
    getters: newsListGetter,
    mutations: newsListMutation
}