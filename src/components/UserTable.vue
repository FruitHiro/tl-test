<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      field: '',
      ascending: true
    }
  },
  computed: {
    ...mapGetters([
      'filteredUsers'
    ]),
    sortedUsers() {
      if (!this.field) {
        return this.filteredUsers
      } else {
        return this.filteredUsers.sort((a, b) => {
          if (this.ascending) {
            return a[this.field] > b[this.field] ? 1 : -1
          } else {
            return a[this.field] > b[this.field] ? -1 : 1
          }
        })
      }
    },
    sortClass() {
      return this.ascending ? 'ascending' : 'descending'
    }
  },
  methods: {
    changeSort(field) {
      console.log(field, this.ascending)
      if (this.field !== field) {
        this.field = field
        this.ascending = true
      } else {
        this.ascending = !this.ascending
      }
    }
  }
}
</script>

<template>
  <div class="user-table">
    <table>
      <tr>
        <th @click="changeSort('id')" :class="this.field === 'id' ? this.sortClass: ''">Место</th>
        <th @click="changeSort('login')" :class="this.field === 'login' ? this.sortClass: ''">Логин</th>
        <th @click="changeSort('orders')" :class="this.field === 'orders' ? this.sortClass: ''">Подтвержденные заказы</th>
        <th @click="changeSort('status')" :class="this.field === 'status' ? this.sortClass: ''">Статус</th>
      </tr>
      <tr v-for="(user, index) in sortedUsers" :key="index">
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
  padding-right: 1.5rem;
  cursor: pointer;
  font-weight: bold;
  position: relative;
}

th:after,
th:before {
  display: block;
  content: '';
  border: .25rem solid transparent;
  height: 0;
  width: 0;
  position: absolute;
  right: .5rem;
}

th:after {
  border-top-color: grey;
  bottom: .75rem;
}

th:before {
  border-bottom-color: grey;
  top: .75rem;
}

th.descending:after {
  border-top-color: green;
}

th.ascending:before {
  border-bottom-color: green;
}

@media (min-width: 768px) {
  th, td {
    border: 1px solid #000;
    text-align: left;
    padding: .5rem 1rem;
  }
  th:after {
    bottom: .5rem;
  }

  th:before {
    top: .5rem;
  }
}
</style>
