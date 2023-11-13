<script setup>
import { mdiMonitorCellphone, mdiTableBorder, mdiTableOff, mdiGithub } from '@mdi/js'
import SectionMain from '@/components/SectionMain.vue'
import NotificationBar from '@/components/NotificationBar.vue'
import TableSampleClients from '@/components/TableSampleClients.vue'
import CardBox from '@/components/CardBox.vue'
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton.vue'
import BaseButton from '@/components/BaseButton.vue'
import CardBoxComponentEmpty from '@/components/CardBoxComponentEmpty.vue'
import { ref } from 'vue'
import { FwbTab, FwbTabs, FwbInput } from 'flowbite-vue'

const activeTab = ref('first')


const expiryTime = ref('')
const noOfAttempts = ref('')

const keyList=[
  {
    apiKey:"Xgyjgd.******************TyHJ",
    domain:"banking.coauth.dev",
    description:"Internet Banking"
  },{
    apiKey:"Jyuthd.******************UsjG",
    domain:"cards.coauth.dev",
    description:"Cards Application"
  }
]

</script>

<template>
  <LayoutAuthenticated>
    <SectionMain>
      <SectionTitleLineWithButton title="API Keys" main />
      <div class="flex items-center p-4 text-sm text-gray-800 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300"
        role="alert">
        <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
          fill="currentColor" viewBox="0 0 20 20">
          <path
            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <div>
          <span class="font-medium">Manage API keys and domains that can use this application's configuration</span>
        </div>
      </div>

      <fwb-tabs v-model="activeTab" class="p-5">
        <fwb-tab name="first" title="Settings">
          <div
            class="flex items-center p-4 mb-4 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800"
            role="alert">
            <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
              fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span class="sr-only">Info</span>
            <div>
              <span class="font-medium">Note:</span> Configuring these keys will affect existing applications.
            </div>
          </div>

          <form>
            <div class="grid gap-6 mb-2 md:grid-cols-8">
              <div class="col-span-3">
                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">API Key</label>
                <p id="helper-text-explanation" class="mt-2 text-sm text-gray-500 dark:text-gray-400">Keep this key confidential</p>
              </div>
              <div  class="col-span-3">
                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Domain</label>
                
                <p id="helper-text-explanation" class="mt-2 text-sm text-gray-500 dark:text-gray-400">Domains that can use this key from browser</p>
              </div>
              <div  class="col-span-2"><label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Action</label></div>
              <div v-for="key in keyList" class="col-span-8 grid gap-6 mb-2 md:grid-cols-8  ">
                <hr
            class="my-0 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100 col-span-8" />
                <div class="col-span-3">
                <input type="text" id="last_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Doe" :value="key.apiKey" required>
              </div>
              <div class="col-span-3">
                <input type="text" id="company"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Flowbite" :value="key.domain" required>
                <p id="helper-text-explanation" class="mt-2 text-sm text-gray-500 dark:text-gray-400">{{key.description}}</p>
              </div>
              <div class="col-span-2">
                <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Revoke Key</button>

              </div>
            </div>

            </div>


            <button type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Generate new key</button>
          </form>


        </fwb-tab>
      
      </fwb-tabs>

    </SectionMain>
</LayoutAuthenticated></template>
