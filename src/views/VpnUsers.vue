<script setup>
import { ref } from 'vue'
import { useVPNUserStore } from '@/stores/vpn_users'
import { storeToRefs } from 'pinia'

const store = useVPNUserStore();
let currentVpnUserIndex = ref(1);

function changeNextUserPassword(value) {
  const vpn_user = store.vpn_users?.[currentVpnUserIndex.value-1]

  if (vpn_user !== undefined) {
    vpn_user.password = value
    currentVpnUserIndex.value++
  }
}

</script>

<template>
  <button @click="changeNextUserPassword('Ha ha !')">Change user n°{{ currentVpnUserIndex }} password with "Ha ha !"</button>

  <table>
    <tr>
      <th>User</th>
      <th>Password</th>
    </tr>
    <tr v-for="vpn_user in store.vpn_users">
      <td>{{ vpn_user.hash }}</td>
      <td>{{ vpn_user.password }}</td>
    </tr>
  </table>
</template>
