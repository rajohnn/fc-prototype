<template>
  <q-page style="padding:15px 9px">
    <div class="row">
        <div class="col-md-3">
            <ContactSearch/>
        </div>
        <div class="col-md-9">
          <ContactDashboard/>
        </div>
    </div>
  </q-page>
</template>

<script>

import ContactSearch from '@/components/Contacts/ContactSearch'
import ContactDashboard from '@/components/Contacts/ContactDashboard'

export default {
  name: 'Contacts',
  components: {
    ContactSearch,
    ContactDashboard
  }
}
</script>
