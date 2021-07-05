<template>
  <div class="page-container">
    <div class="row">
      <div class="col-12 col-md-8 col-md-offset-2">
        <div class="panel panel-primary">
          <div class="panel-body">
            <tabs>
              <template v-for="plan in user.user.plans">
                <tab :label="plan.name" style="margin-top: 1em" v-html="plan.description">
                </tab>
              </template>
            </tabs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tabs from '@/components/global/Tabs/Tabs';
import Tab from '@/components/global/Tabs/Tab';

export default {
  name: 'Programs',
  components: {
    Tabs,
    Tab
  },
  props: {
    user: {
      type: Object,
      default: {
        user: {
          plans: [
            { name : "planName1", description: "description1"},
            { name : "planName2", description: "description2"},
            { name : "planName3", description: "description3"}
          ]
        },
      }
    }
  },
}
</script>

