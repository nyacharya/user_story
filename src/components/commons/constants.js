export const sampleData = [
  {
    id: 1,
    status: 'completed',
    priority: 2,
    column: 'first',
    task: 'build cards first prio 2',
    created_at: '2019-03-21T07:47',
    user_id: 2
  },
  {
    id: 2,
    status: 'initiated',
    priority: 1,
    column: 'first',
    task: 'build cards name prio 1',
    created_at: '2020-01-02T17:47',
    user_id: 2
  },
  {
    id: 3,
    status: 'backlog',
    priority: 3,
    column: 'second',
    task: 'build cards for backlog prio 3',
    created_at: '2021-08-21T17:47',
    user_id: 2
  },
  {
    id: 4,
    status: 'completed',
    priority: 4,
    column: 'third',
    task: 'build cards third prioii 4',
    created_at: '2021-08-21T17:47',
    user_id: 3
  },
  {
    id: 5,
    status: 'completed',
    priority: 5,
    column: 'third',
    task: 'build cards third prio 5',
    created_at: '2021-08-21T17:47',
    user_id: 3
  }
]

export const cardColor = {
  completed: 'green',
  initiated: 'yellow',
  backlog: 'red'
}

export const COLUMNS = ['first', 'second', 'third']

export const STATUS = ['completed', 'initiated', 'backlog']

