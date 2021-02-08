<template>
  <div class="ds-rows">
    <div class="ds-heading--large">
      {{ $t('eventList.heading') }}
    </div>
    <div class="ds-text--small">
      {{ $t('eventList.description') }}
    </div>
    <div>
      <button class="ds-button">{{ $t('eventList.button.create') }}</button>
      <button class="ds-button">{{ $t('eventList.button.delete') }}</button>
    </div>
    <table class="ds-datatable">
      <thead>
        <tr>
          <th> {{ $t('eventList.table.column.eventName') }} </th>
          <th> {{ $t('eventList.table.column.status') }} </th>
          <!-- <th> {{ $t('eventList.table.column.target') }} </th> -->
          <th> {{ $t('eventList.table.column.rule') }} </th>
          <th> {{ $t('eventList.table.column.actions') }} </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="event in eventList" v-bind:key="event.handlerId">
          <td>
            {{ event.name }}
          </td>
          <td>
            <i v-if="event.status === 'active'"
              class="ds-icon--icon-online ds-icon--medium ds-icon--success"></i>
            <i v-if="event.status === 'inactive'"
              class="ds-icon--icon-offline ds-icon--medium ds-icon--alert"></i>
          </td>
          <td>
            {{ event.ruleConfig.type }}
          </td>
          <td>
            <div
              class="ds-card--small"
              v-for="action in event.actionConfigList"
              v-bind:key="action.type">
              {{ action.type }}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { EventConfig } from '@/types/event-config';
import eventListJson from '../assets/mock-data/event-list.json';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

interface Data {
  eventList: EventConfig[];
  loading: boolean;
  error: string | object | null;
}

export default Vue.extend({
  name: 'EventList',
  data(): Data {
    return {
      eventList: [],
      loading: true,
      error: null,
    };
  },
  mounted() {
    this.eventList = [...eventListJson];
    this.loading = false;
  },
});
</script>
