import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import VPN_USER_STUB from '@/stub/vpn_users.json'

export const useVpnUserStore = defineStore('vpn_users', () => {
  let vpn_users = ref(VPN_USER_STUB);

  return { vpn_users }
})
