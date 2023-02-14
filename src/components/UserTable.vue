<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {

    }
  },
  computed: mapGetters([
    'filteredUsers'
  ])
}
</script>

<template>
  <div class="user-table">
    <table>
      <tr>
        <th>Место</th>
        <th>Логин</th>
        <th>Подтвержденные заказы</th>
        <th>Статус</th>
      </tr>
      <tr v-for="(user, index) in filteredUsers" :key="index">
        <td>{{ user.id }}</td>
        <td>{{ user.login }}</td>
        <td>{{ user.orders }}</td>
        <td>{{ user.status }}</td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
table {
  border: none;
  border-collapse: collapse;
  width: 100%;
}

th, td {
  border: 1px solid #000;
  text-align: left;
  padding: .25rem .5rem;
}

th {
  cursor: pointer;
  font-weight: bold;
}

@media (min-width: 768px) {
  th, td {
    border: 1px solid #000;
    text-align: left;
    padding: .5rem 1rem;
  }
}
</style>
