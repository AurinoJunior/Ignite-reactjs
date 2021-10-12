import { createServer, Model } from 'miragejs'

export const mirage = () => {
  createServer({
    models: {
      transactions: Model,
    },

    seeds(server){
      server.db.loadData({
        transactions: [
          {
            id: 1,
            title: "Desenvolvimento de site",
            value: 12000,
            type: "income",
            category: "Job",
            createdAt: new Date('2021-02-12 21:16:00'),
          },
          {
            id: 2,
            title: "Monitor gamer",
            value: 800,
            type: "outcome",
            category: "Venda",
            createdAt: new Date('2021-02-14 10:26:00'),
          }
        ]
      })
    },

    routes() {
      this.namespace = 'api'

      this.get('/transactions', () => {
        return this.schema.all('transactions')
      })

      this.post('/transactions', (schema, request) => {
        const data = JSON.parse(request.requestBody);

        return schema.create('transactions', {
          ...data,
          id: Math.random()*1000,
          createdAt: new Date()
        });
      })
    }
  })
}
