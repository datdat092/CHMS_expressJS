<template>
  <div>
    <h2>Employees</h2>
    <ul>
      <li v-for="emp in employees" :key="emp._id">
        {{ emp.name }} — {{ emp.role }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      employees: [],
    };
  },
  created() {
    axios.get('http://localhost:5000/api/employees')
      .then(response => {
        this.employees = response.data;
      });
  },
};
</script>
