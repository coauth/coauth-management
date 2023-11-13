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

</script>

<template>
  <LayoutAuthenticated>
    <SectionMain>
      <SectionTitleLineWithButton title="Time Based OTP" main/>
      <div class="flex items-center p-4 text-sm text-gray-800 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300" role="alert">
  <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
  </svg>
  <div>
    <span class="font-medium">TOTP stands for Time based OTP, which can be used as an alternative to SMS / Email OTP</span>
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
              <span class="font-medium">Note:</span> Configuring these notifications will affect existing users.
            </div>
          </div>

          <form>
            <div class="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Generation
                  duration in secs. (recommended: 30 seconds)</label>
                <input type="text" id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value="30" placeholder="John" required>
                <p id="helper-text-explanation" class="mt-2 text-sm text-gray-500 dark:text-gray-400">A 30 second duration
                  is accepted on most authenticator apps</p>
              </div>
              <div>
                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Allowed
                  Discrepancy (recommended: 2)</label>
                <input type="text" id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John" value="2" required>
                <p id="helper-text-explanation" class="mt-2 text-sm text-gray-500 dark:text-gray-400">No. 2 allows a range
                  of plus and minus 30 seconds for timezone and request delays</p>
              </div>
              <div>
                <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">No. of digits
                  (recommended: 6)</label>
                <input type="text" id="last_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Doe" value="6" required>
                <p id="helper-text-explanation" class="mt-2 text-sm text-gray-500 dark:text-gray-400">Total digits for
                  accepting TOTP</p>
              </div>
              <div>
                <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Block after 'x'
                  failed attempts</label>
                <input type="text" id="company"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Flowbite" value="5" required>
                <p id="helper-text-explanation" class="mt-2 text-sm text-gray-500 dark:text-gray-400">TOTP usage for this
                  app will be blocked after the specific failed attempts</p>
              </div>
              <div>
                <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Auto Re-enable (in
                  hours)
                  number</label>
                <input type="tel" id="phone"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="1" value="-1" required>
                <p id="helper-text-explanation" class="mt-2 text-sm text-gray-500 dark:text-gray-400">Use -1 for never.
                </p>
              </div>

            </div>


            <button type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
          </form>


        </fwb-tab>
        <fwb-tab name="second" title="Events & Notifications">

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
              <span class="font-medium">Note:</span> Configuring these notifications will send alerts to users on the
              actions.
            </div>
          </div>
          <div class="grid gap-6 mb-6 md:grid-cols-3">
            <h5 class="text-2xl font-bold dark:text-white col-span-3">Registration events</h5>
            <div class="flex">
              <div class="flex items-center h-5">
                <input id="helper-checkbox" aria-describedby="helper-checkbox-text" type="checkbox" value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
              </div>
              <div class="ms-2 text-sm">
                <label for="helper-checkbox" class="font-medium text-gray-900 dark:text-gray-300">On request
                  creation</label>
                <p id="helper-checkbox-text" class="text-xs font-normal text-gray-500 dark:text-gray-300">When a request
                  is first created</p>
              </div>
            </div>
            <div class="flex">
              <div class="flex items-center h-5">
                <input id="helper-checkbox" aria-describedby="helper-checkbox-text" type="checkbox" value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
              </div>
              <div class="ms-2 text-sm">
                <label for="helper-checkbox" class="font-medium text-gray-900 dark:text-gray-300">On failed
                  attempt</label>
                <p id="helper-checkbox-text" class="text-xs font-normal text-gray-500 dark:text-gray-300">When an invalid
                  entry is entered by user</p>
              </div>
            </div>
            <div class="flex">
              <div class="flex items-center h-5">
                <input id="helper-checkbox" aria-describedby="helper-checkbox-text" type="checkbox" value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
              </div>
              <div class="ms-2 text-sm">
                <label for="helper-checkbox" class="font-medium text-gray-900 dark:text-gray-300">On successful
                  attempt</label>
                <p id="helper-checkbox-text" class="text-xs font-normal text-gray-500 dark:text-gray-300">When totp has
                  been successfuly validated</p>
              </div>
            </div>
            <hr
            class="my-2 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100 col-span-3" />
            <h5 class="text-2xl font-bold dark:text-white col-span-3">Verification events</h5>

            <div class="flex">
              <div class="flex items-center h-5">
                <input id="helper-checkbox" aria-describedby="helper-checkbox-text" type="checkbox" value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
              </div>
              <div class="ms-2 text-sm">
                <label for="helper-checkbox" class="font-medium text-gray-900 dark:text-gray-300">On request
                  creation</label>
                <p id="helper-checkbox-text" class="text-xs font-normal text-gray-500 dark:text-gray-300">When a request
                  is first created</p>
              </div>
            </div>
            <div class="flex">
              <div class="flex items-center h-5">
                <input id="helper-checkbox" aria-describedby="helper-checkbox-text" type="checkbox" value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
              </div>
              <div class="ms-2 text-sm">
                <label for="helper-checkbox" class="font-medium text-gray-900 dark:text-gray-300">On failed
                  attempt</label>
                <p id="helper-checkbox-text" class="text-xs font-normal text-gray-500 dark:text-gray-300">When an invalid
                  entry is entered by user</p>
              </div>
            </div>
            <div class="flex">
              <div class="flex items-center h-5">
                <input id="helper-checkbox" aria-describedby="helper-checkbox-text" type="checkbox" value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
              </div>
              <div class="ms-2 text-sm">
                <label for="helper-checkbox" class="font-medium text-gray-900 dark:text-gray-300">On successful
                  attempt</label>
                <p id="helper-checkbox-text" class="text-xs font-normal text-gray-500 dark:text-gray-300">When totp has
                  been successfuly validated</p>
              </div>
            </div>
            <hr
            class="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100 col-span-3" />
        </div>
      </fwb-tab>
      <fwb-tab name="third" title="Notification Templates">
        Coming soon
      </fwb-tab>
      <fwb-tab name="fourth" title="UI Customization">
        Coming soon
      </fwb-tab>
    </fwb-tabs>

  </SectionMain>
</LayoutAuthenticated></template>
