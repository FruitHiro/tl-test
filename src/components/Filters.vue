<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      data: null
    }
  },
  computed: mapState([
    'login',
    'orders',
    'status'
  ]),
  methods: mapMutations([
      'setLogin',
      'setOrders',
      'setStatus'
  ])
}
</script>

<template>
  <div class="filters">
    <div>
      <label>Логин</label>
      <input :value="login" @input="setLogin($event.target.value)" type="text" placeholder="Логин" />
    </div>
    <div>
      <label>Подтвержденные заказы</label>
      <input :value="orders" @input="setOrders($event.target.value)" type="number" placeholder="Кол-во" />
    </div>
    <div>
      <label>Статус</label>
      <input :value="status" @input="setStatus($event.target.value)" type="text" placeholder="Статус" />
    </div>
  </div>
</template>

<style scoped>
.filters {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
}

input {
  padding: .5rem 1rem;
  border: 1px solid #000;
  /*border-radius: .25rem;*/
}

label {
  display: block;
  margin-bottom: .5rem;
}

@media (min-width: 768px) {
  .filters {
    flex-direction: row;
  }
}
</style>
