<template>
  <q-card class="my-card" style="margin-left:10px">
    <q-card-section class="bg-grey-8 text-white">
      <div class="text-h6">Sanj Lalchandani</div>
      <div class="text-subtitle2">Subscriber</div>
    </q-card-section>
    <q-card-section>
      <div class="row">
          <div class="col-lg-6">
             <ContactInformation class="card-padding"/>
          </div>
          <div class="col-lg-6">
            <ContactType class="card-padding"/>
          </div>
      </div>
      <div class="row">
          <div class="col-lg-6">
             <TeamRole class="card-padding" />
          </div>
          <div class="col-lg-6">
            <LeadSourceRole class="card-padding"/>
          </div>
      </div>
      <div class="row">
          <div class="col-lg-6">
             <ClientRole class="card-padding"/>
          </div>
          <div class="col-lg-6">
            <ReferrerRole class="card-padding"/>
          </div>
      </div>
    </q-card-section>
  </q-card>
</template>
<script>

import ClientRole from '@/components/Contacts/Dashboard/ClientRole'
import ContactInformation from '@/components/Contacts/Dashboard/ContactInformation'
import ContactType from '@/components/Contacts/Dashboard/ContactType'
import LeadSourceRole from '@/components/Contacts/Dashboard/LeadSourceRole'
import ReferrerRole from '@/components/Contacts/Dashboard/ReferrerRole'
import TeamRole from '@/components/Contacts/Dashboard/TeamRole'

export default {
  name: 'ContactDashboard',
  data () {
    return {

    }
  },
  components: {
    ClientRole,
    ContactInformation,
    ContactType,
    LeadSourceRole,
    ReferrerRole,
    TeamRole
  }
}
</script>

<style>
  .card-padding {
    padding: 10px;
  }
</style>

