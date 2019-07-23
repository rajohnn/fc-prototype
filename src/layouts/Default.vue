<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-white text-grey-8 q-py-xs">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />

        <q-btn flat no-caps no-wrap class="q-ml-xs" v-if="$q.screen.gt.xs">
          <q-icon name="laptop" color="grey" size="26px" />
          <q-toolbar-title shrink>
            Freelance Caddy
          </q-toolbar-title>
        </q-btn>

        <q-space />

        <div class="YL__toolbar-input-container row no-wrap">

        </div>

        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn round dense flat color="grey-8" icon="format_list_numbered" v-if="$q.screen.gt.sm">
            <q-tooltip>TODO List</q-tooltip>
          </q-btn>
          <q-btn round dense flat color="grey-8" icon="launch" v-if="$q.screen.gt.sm">
            <q-tooltip>Tasks</q-tooltip>
          </q-btn>
          <q-btn round dense flat color="grey-8" icon="contact_phone" v-if="$q.screen.gt.sm">
            <q-tooltip>Leads/Referral</q-tooltip>
          </q-btn>
          <q-btn round dense flat color="grey-8" icon="schedule">
            <q-tooltip>Scheduler</q-tooltip>
          </q-btn>
          <q-btn round dense flat color="grey-8" icon="notifications">
            <q-badge color="red" text-color="white" floating>
              2
            </q-badge>
            <q-tooltip>Notifications</q-tooltip>
          </q-btn>
          <q-btn round flat>
            <q-avatar size="26px">
              <img src="https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914_960_720.png"/>
            </q-avatar>
            <q-tooltip>Account</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      show-if-above
      content-class="bg-grey-2"
      :width="240"
    >
      <q-scroll-area class="fit">
        <q-list padding>
          <q-item v-for="link in links1" :key="link.text" :to="link.to" v-ripple clickable>
            <q-item-section avatar>
              <q-icon color="grey" :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator class="q-my-md" />

          <q-item v-for="link in links2" :key="link.text" :to="link.to" v-ripple clickable>
            <q-item-section avatar>
              <q-icon color="grey" :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>
          <q-separator class="q-mt-md q-mb-xs" />
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false,
      links1: [
        { icon: 'dashboard', text: 'Dashboard', to: '/' },
        { icon: 'assignment', text: 'Projects', to: 'projects' },
        { icon: 'contacts', text: 'Contacts', to: 'contacts' }
      ],
      links2: [
        { icon: 'folder_shared', text: 'Clients', to: 'clients' },
        { icon: 'account_balance', text: 'Billing', to: 'billing' },
        { icon: 'find_in_page', text: 'Find Resource', to: 'resources' },
        { icon: 'bar_chart', text: 'Reports', to: 'reports' }
      ]
    }
  }
}
</script>

<style lang="stylus">
  .YL
    &__toolbar-input-container
      min-width 100px
      width 55%

    &__toolbar-input-btn
      border-radius 0
      border-style solid
      border-width 1px 1px 1px 0
      border-color rgba(0,0,0,.24)
      max-width 60px
      width 100%

    &__drawer-footer-link
      color inherit
      text-decoration none
      font-weight 500
      font-size .75rem

      &:hover
        color #000
</style>
