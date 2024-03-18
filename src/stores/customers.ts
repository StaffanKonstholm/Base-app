import { defineStore } from 'pinia'
// https://runthatline.com/pinia-typescript-type-state-actions-getters/
export type Customer = {
  id: string
  fullName: string
  isActive: boolean
  totalSpending: number
}

type State = {
  customers: Customer[]
  isRequestLoading: boolean
}

export const useCustomers = defineStore('customers', {
  state: (): State => ({
    customers: [
      {
        id: '1',
        fullName: 'Mark Smith',
        isActive: false,
        totalSpending: 1000,
      },
      {
        id: '2',
        fullName: 'Mary Smith',
        isActive: true,
        totalSpending: 2000,
      },
      {
        id: '3',
        fullName: 'Joe Johnson',
        isActive: true,
        totalSpending: 3000,
      },
      {
        id: '4',
        fullName: 'Jane Johnson',
        isActive: true,
        totalSpending: 4000,
      },

    ],
    isRequestLoading: false,
  }),
  getters: {
    activeCustomersCount({ customers }): number {
      return customers.filter(({ isActive }) => isActive).length
    },
    getCustomerById({ customers }): (id: string) => Customer | undefined {
      return (id: string): Customer | undefined => {
        return customers.find((customer) => customer.id === id)
      }
    },
    
  },
  actions: {
    
    //When it comes to actions, they are usually used for side effects. mostly to perform async tasks
    async pushCustomer(name: string): Promise <void> {
      const promise: Promise<void> = new Promise((resolve) => {
        const customer: Customer = { 
          id: '5',
          fullName: name,
          isActive: true,
          totalSpending: 5000
        }
        this.$state.customers.push(customer);
        resolve();
      })
    },
  },
})

