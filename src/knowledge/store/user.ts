import { ActionContext } from 'vuex'
import { IRootState } from './index'

interface IUser {
  id: number;
  name: string;
  age: number;
}

type IList = IUser[];

export interface IUserState {
  list: IList;
  select: IUser;
}

interface IUserMutationPayload {
  list: IList;
  select: IUser;
}

const LIST = [
  {
    id: 0,
    name: 'name1',
    age: 20
  },
  {
    id: 1,
    name: 'name2',
    age: 22
  }
]

export default {
  namespaced: true,
  state: {
    list: [],
    select: {
      id: null,
      name: null,
      age: null
    }
  },
  mutations: {
    list (state: IUserState, { list }:IUserMutationPayload) {
      state.list = list
    },
    select (state: IUserState, { select }:IUserMutationPayload) {
      state.select = select
    },
    change (state: IUserState, id: number) {
      state.select.id = id
    },
    changeLastOneInList (state: IUserState) {
      state.list[0].name = 'name2+222'
    }
  },
  actions: {
    init ({ commit }: ActionContext<IUserState, IRootState>) {
      commit('list', { list: LIST })

      const select = LIST[0]
      commit('select', { select })
    },
    change ({ commit }: ActionContext<IUserState, IRootState>, id: number) {
      commit('change', id)
    },
    changeLastOneInList ({ commit }: ActionContext<IUserState, IRootState>) {
      commit('changeLastOneInList')
    }
  }
}
