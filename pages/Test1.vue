<template>
  <div
    :class="isSidebarOpen || isFixedSidebar ? 'min-h-screen flex relative lg:static bg-[#f8fafc]' : 'min-h-screen flex relative lg:static bg-[#f8fafc]'">
    <div id="app-sidebar-10"
      class="h-full lg:h-auto flex-shrink-0 left-0 top-0 z-20 border-r border-surface transition-all duration-300"
      :class="isFixedSidebar ? 'w-[300px]' : 'w-0'" @mouseenter="openSidebar" @mouseleave="handleMouseLeave">
      <div class="flex h-full">
        <div class="flex flex-col primary_color h-full  flex-shrink-0 select-none border-r-2 border-dotted">
          <div class="flex items-center justify-between flex-shrink-0 h-[60px] mx-5">

            <div class="flex items-center justify-center">
              <svg height="36" viewBox="0 0 48 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M33.1548 9.65956L23.9913 4.86169L5.54723 14.5106L0.924465 12.0851L23.9913 0L37.801 7.23403L33.1548 9.65956ZM23.9931 19.3085L42.4255 9.65955L47.0717 12.0851L23.9931 24.1595L10.1952 16.9361L14.8297 14.5106L23.9931 19.3085ZM4.6345 25.8937L0 23.4681V37.9149L23.0669 50V45.1489L4.6345 35.4894V25.8937ZM18.4324 28.2658L0 18.6169V13.7658L23.0669 25.8403V40.2977L18.4324 37.8615V28.2658ZM38.7301 23.468V18.6169L24.9205 25.8403V49.9999L29.555 47.5743V28.2659L38.7301 23.468ZM43.3546 35.4892V16.1914L48.0008 13.7659V37.9148L34.1912 45.1488V40.2977L43.3546 35.4892Z"
                  class="fill-white" />
              </svg>
            </div>
          </div>
          <div class="overflow-y-auto mt-4">
            <ul class="list-none py-4 px-2 m-0">
              <li class="flex justify-center" v-for="(item, index) in menuItems" :key="index">
                <div :class="[
                  {
                    'bg-white text-[#0d2d5e]': activeTab2 === index,
                    'text-white hover:bg-white hover:text-[#0d2d5e]': activeTab2 !== index
                  },
                  clickedIndex === index ? 'blue-wave' : ''
                ]" @click="handleClick(index, $event)"
                  class="w-12 h-12 rounded-md flex items-center mt-5 cursor-pointer justify-center duration-150 transition-colors relative overflow-hidden">
                  <i :class="item.icon" class="rounded-lg" style="font-size: 2rem;"></i>
                </div>
              </li>
            </ul>


          </div>
          <div class="mt-auto">
            <hr class="mb-4 mx-2 border-t border-0 border-[#FFFFFF]/20" />
            <a
              class="m-4 flex items-center rounded-lg cursor-pointer p-2 justify-center hover:bg-white rounded-border text-white hover:text-[#0d2d5e] duration-150 transition-colors">
              <i class="pi pi-sign-out" style="font-size: 2rem;"></i>
            </a>
          </div>
        </div>
        <div id="app-sidebar-10"
          class="h-full lg:h-auto flex-shrink-0 left-0 top-0 z-20 border-r border-surface bg-[#fff] px-1 py-6" :class="{
            'w-[230px] opacity-100 fade-in': isSidebarOpen || isFixedSidebar, // When open, full width and fully visible
            'w-0 opacity-0 fade-out delay-150': !isSidebarOpen && !isFixedSidebar, // When closed, zero width and fully transparent
            'transition-all duration-500 ease-in-out': isSidebarOpen || isFixedSidebar, // 0.5-second smooth transition for all properties
            'lg:block': isFixedSidebar || isSidebarOpen, // Show for large screens when sidebar is open
            'lg:hidden': !isFixedSidebar && !isSidebarOpen // Hide for large screens when sidebar is closed
          }" @mouseenter="openSidebar" @mouseleave="handleMouseLeave">


          <div class="justify-end  flex justify-between px-4 ">
            <div>
              <div v-if="activeTab2 === 0" class=" font-semibold text-lg text-[#484e59]"> Dashboard</div>
              <div v-if="activeTab2 === 1" class=" font-semibold text-lg text-[#484e59]"> Bookmarks</div>
              <div v-if="activeTab2 === 2" class=" font-semibold text-lg text-[#484e59]"> Team</div>
              <div v-if="activeTab2 === 3" class=" font-semibold text-lg text-[#484e59]"> Messages</div>
              <div v-if="activeTab2 === 4" class=" font-semibold text-lg text-[#484e59]"> Calender</div>
            </div>

            <div class="flex items-center
            ">














              <Checkbox inputId="size_normal" name="size" :value="true" v-model="isFixedSidebar" size="small"
                @change="toggleSidebar" />
            </div>



          </div>
          <div class="rounded-border flex-auto cols-span-10">
            <div class="px-4 font-semibold text-lg text-[#484e59]" :class="{ hidden: activeTab2 !== 0 }">
              <!-- Dashboard -->
              <div v-show="activeTab2 === 0"
                class="flex-col justify-center text-sm my-5 transition-all duration-500 ease-in-out opacity-0"
                :class="{ 'opacity-100': activeTab2 === 0, 'opacity-0': activeTab2 !== 0, 'translate-y-0': activeTab2 === 0, 'translate-y-10': activeTab2 !== 0 }"
                style="animation: slideDown 0.5s ease-out forwards;">

                <div v-for="(item, index) in menuItems2" :key="index" @click="selectComponent(item.name)"
                  class="flex py-3 px-4 rounded-lg duration-200 hover:scale-105 text-[#4b4d59] custom font-sans hover:bg-[#dfeafa] "
                  :style="{ opacity: 0, animation: 'fadeIn ' + (0.5 + index * 0.2) + 's ease-out forwards, expandSize 0.5s ease-out forwards' }">

                  <span class="group">
                    <!-- Icon rendering -->
                    <div v-html="item.icon"></div>
                  </span>

                  <!-- Menu Item Name -->
                  <span class="px-2">
                    {{ item.name }}
                  </span>
                </div>
              </div>



            </div>
            <div class=" px-4 font-semibold text-lg text-[#484e59]" :class="{ hidden: activeTab2 !== 1 }">
              <!-- Bookmarks -->

              <div v-show="activeTab2 === 1"
                class="flex-col justify-center text-sm my-5 transition-all duration-500 ease-in-out opacity-0"
                :class="{ 'opacity-100': activeTab2 === 0, 'opacity-0': activeTab2 !== 0, 'translate-y-0': activeTab2 === 0, 'translate-y-10': activeTab2 !== 0 }"
                style="animation: slideDown 0.5s ease-out forwards;">

                <div v-for="(item, index) in menuItems3" :key="index"
                  class="flex py-3 px-4 rounded-lg duration-200 hover:scale-105  text-[#4b4d59] custom font-sans hover:bg-[#dfeafa]  "
                  :style="{ opacity: 0, animation: 'fadeIn ' + (0.5 + index * 0.2) + 's ease-out forwards, expandSize 0.5s ease-out forwards' }">

                  <span class="group">
                    <!-- Icon rendering -->
                    <div v-html="item.icon"></div>
                  </span>

                  <!-- Menu Item Name -->
                  <span class="px-2">
                    {{ item.name }}
                  </span>
                </div>
              </div>

            </div>
            <div class=" px-4 font-semibold text-lg text-[#484e59]" :class="{ hidden: activeTab2 !== 2 }">
              <!-- Team -->



              <div v-show="activeTab2 === 2"
                class="flex-col justify-center text-sm my-10 transition-all duration-500 ease-in-out opacity-0"
                :class="{ 'opacity-100': activeTab2 === 0, 'opacity-0': activeTab2 !== 0, 'translate-y-0': activeTab2 === 0, 'translate-y-10': activeTab2 !== 0 }"
                style="animation: slideDown 0.5s ease-out forwards;">

                <div v-for="(item, index) in menuItems4" :key="index"
                  class="flex py-3 px-4 rounded-lg  duration-200 hover:scale-105  text-gray-400 hover:bg-[#dfeafa] "
                  :style="{ opacity: 0, animation: 'fadeIn ' + (0.5 + index * 0.2) + 's ease-out forwards, expandSize 0.5s ease-out forwards' }">

                  <!-- <span class="group">
                   
                    <svg v-if="item.icon" xmlns="http://www.w3.org/2000/svg" :width="item.icon.width"
                      :height="item.icon.height" :viewBox="item.icon.viewBox"
                      class="transition-transform duration-300 
                       ">
                      <g v-for="(path, idx) in item.icon.paths" :key="idx" :fill="path.fill || 'none'"
                        :stroke="path.stroke || 'currentColor'" :stroke-linecap="path.strokeLinecap || 'round'"
                        :stroke-linejoin="path.strokeLinejoin || 'round'" :stroke-width="path.strokeWidth || 2">
                        <path :d="path.d" />
                      </g>
                    </svg>
                  </span> -->
                  <span class="inline-flex items-center   flex-grow-0"><svg xmlns="http://www.w3.org/2000/svg"
                      fill="none" viewBox="0 0 20 20" class=" h-5 w-5">
                      <g fill="currentColor" clip-path="url(#graph_svg__clip0_4314_12611)">
                        <path
                          d="M2.174 19.153c-.697-.017-1.225-.437-1.282-1.132a22 22 0 0 1-.059-1.771c0-.784.025-1.356.06-1.772.056-.695.584-1.114 1.281-1.132.305-.008.687-.013 1.16-.013s.853.005 1.158.013c.697.018 1.225.437 1.282 1.132.034.416.06.989.06 1.772s-.026 1.355-.06 1.771c-.057.695-.585 1.115-1.282 1.132-.305.008-.686.013-1.159.013-.472 0-.854-.005-1.159-.013M15.704 19.15c-.812-.033-1.381-.604-1.434-1.415-.054-.84-.104-2.207-.104-4.402 0-2.194.05-3.56.104-4.402.053-.81.622-1.382 1.434-1.414q.4-.016.962-.017.563.001.963.017c.812.032 1.381.603 1.434 1.414.055.842.104 2.208.104 4.402s-.05 3.561-.104 4.402c-.053.811-.622 1.382-1.434 1.414q-.4.017-.963.018-.561 0-.962-.018M8.98 19.152c-.778-.023-1.345-.534-1.4-1.31A41 41 0 0 1 7.5 15c0-1.328.035-2.232.08-2.842.055-.777.622-1.287 1.4-1.31a33.672 33.672 0 0 1 2.039 0c.779.023 1.346.533 1.402 1.31.044.61.079 1.514.079 2.842s-.035 2.23-.08 2.841c-.055.777-.622 1.288-1.4 1.311-.28.009-.617.014-1.02.014s-.74-.005-1.02-.014"
                          opacity="0.35"></path>
                        <path
                          d="M17.467 5.042c-.042.824-.825 1.133-1.432.576a47 47 0 0 1-1-.949 536 536 0 0 0-3.91 3.595c-.431.4-1.132.356-1.509-.096A96 96 0 0 0 7.36 5.543a37 37 0 0 0-4.124 3.528 1.042 1.042 0 0 1-1.473-1.474C3.338 6.023 5.066 4.546 6.92 3.303l.003-.002a1.04 1.04 0 0 1 1.314.13c.807.806 1.536 1.694 2.274 2.563a530 530 0 0 1 3.052-2.8 45 45 0 0 1-.845-.895c-.558-.607-.248-1.39.575-1.432 1.05-.053 2.13-.084 3.167.11.468.088.81.43.898.898.194 1.038.163 2.117.11 3.167">
                        </path>
                      </g>
                    </svg></span>

                  <span class="px-2">
                    {{ item.name }}
                  </span>
                </div>




              </div>
            </div>
            <div class=" px-4 font-semibold text-lg text-[#484e59]" :class="{ hidden: activeTab2 !== 3 }">
              <!-- Messages -->

              <div class=" flex justify-center text-xs  my-10
              ">

              </div>
            </div>
            <div class=" px-4 font-semibold text-lg text-[#484e59]" :class="{ hidden: activeTab2 !== 4 }">
              <!-- Calendar -->

              <div class=" flex justify-center text-xs  my-10
              ">


              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
    <div class="min-h-screen flex flex-col relative flex-auto"
      :class="isSidebarOpen || isFixedSidebar ? '' : 'w-[100%]'">
      <div
        class="h-[60px] flex justify-between lg:justify-start items-center px-8 bg-[#ffffff] border-b border-surface relative">
      </div>
      <div class="p-8 flex flex-col flex-auto">
        <div class="border-2 border-dashed rounded-border border-surface bg-[#ffffff] flex-auto p-5"
          :class="{ 'w-[calc(100%-5px)] ': isFixedSidebar, ' ml-20': !isFixedSidebar }">
          <!-- <Dashboard :client-name="clientName.value" :client-code="clientcode.value" /> -->
          <component :is="currentComponent" :customValue="clientcode" />

        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, watch, onMounted } from 'vue';
import Checkbox from 'primevue/checkbox';
import 'primeicons/primeicons.css';
import ChatIcon from '~/components/ChatIcon.vue';
import BookmarkIcon from '~/components/BookmarkIcon.vue';
import CalenderIcon from '~/components/CalenderIcon.vue';
import UserIcon from '~/components/UserIcon.vue';
import CommentsIcon from '~/components/CommentsIcon.vue';
import Analytics from '~/components/Analytics.vue';
import Ecommerce from '~/components/Ecommerce.vue';
import Business from '~/components/Business.vue';
import Trades from '~/components/Trades.vue';
import Funds from '~/components/Funds.vue';
import Tooltip from 'primevue/tooltip';
import ProfitLoss from '~/components/ProfitLoss.vue';
import NKYC from '~/components/nkyctemp.vue';
import ipo from '~/components/ipo.vue';
import payin from '~/components/payin.vue';
import { useRoute, useRouter } from 'vue-router';

const activeTab2 = ref(0);
const isSidebarOpen = ref(false);
const isFixedSidebar = ref(false);
let currentComponent = ref('Dashboard');
const clickedIndex = ref(null)
const clientName = ref('');
const clientcode = ref('');

const selectComponent = (name) => {
  const selectedItem = menuItems2.find(item => item.name === name);
  if (selectedItem) {
    currentComponent.value = selectedItem.component;
    toggleSidebar();
    console.log(currentComponent, "currentComponent")
  }
}

// const menuItems = [
//   { component: ChatIcon, name: 'Dashboard' }, // Chat icon component
//   { component: BookmarkIcon, name: "Bookmarks" },
//   { component: UserIcon, name: "Team" },
//   { component: CommentsIcon, name: "Messages" },
//   { component: CalenderIcon, name: "Calender" },  // Bookmark icon component

// ];

const menuItems = [
  { icon: 'pi pi-home', name: 'Dashboard' },
  { icon: 'pi pi-bookmark', name: 'Bookmarks' },
  { icon: 'pi pi-users', name: 'Team' },
  { icon: 'pi pi-comments', name: 'Messages' },
  { icon: 'pi pi-calendar', name: 'Calendar' },
];


function handleClick(index, event) {
  activeTab2.value = index;
  clickedIndex.value = index;

  const target = event.currentTarget;
  const circle = document.createElement('span');
  const diameter = Math.max(target.clientWidth, target.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.offsetX - radius}px`;
  circle.style.top = `${event.offsetY - radius}px`;
  circle.classList.add('ripple');

  const ripple = target.getElementsByClassName('ripple')[0];
  if (ripple) {
    ripple.remove();
  }

  target.appendChild(circle);
}

const menuItems2 = [
  {
    name: 'Ledger',
    component: Analytics, // Reference to the Analytics component
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" class=" h-5 w-5"><path fill="currentColor" fill-rule="evenodd" d="M3.436 1.87c.995-.102 2.651-.203 5.314-.203s4.319.1 5.314.203c.85.088 1.47.718 1.567 1.567.102.886.202 2.224.202 4.063 0 1.84-.1 3.177-.202 4.063-.098.85-.716 1.48-1.567 1.568-.879.09-2.273.18-4.421.199a1.26 1.26 0 0 0-.887.373l-1.41 1.43c-.611.62-1.669.26-1.775-.605l-.111-.91a.42.42 0 0 0-.397-.367 33 33 0 0 1-1.626-.12c-.85-.088-1.47-.719-1.568-1.568-.102-.886-.202-2.224-.202-4.063s.1-3.177.202-4.063c.098-.849.717-1.48 1.567-1.567M5.833 5a.833.833 0 1 0 0 1.667h5.834a.833.833 0 1 0 0-1.667zm0 3.75a.833.833 0 1 0 0 1.667h3.334a.833.833 0 1 0 0-1.667z" clip-rule="evenodd" opacity="0.35"></path><path fill="currentColor" d="M5 5.833c0-.46.372-.833.833-.833h5.833a.833.833 0 0 1 0 1.667H5.833a.833.833 0 0 1-.834-.834M5 9.583c0-.46.372-.833.833-.833h3.333a.833.833 0 1 1 0 1.667H5.833a.833.833 0 0 1-.834-.834M8.355 14.11l.4-.406c.234-.238.554-.371.887-.374 2.148-.02 3.543-.109 4.422-.2.85-.087 1.469-.718 1.566-1.567.067-.578.133-1.35.17-2.329.423.025.756.055 1.015.084.52.059.903.435.968.956.068.544.133 1.393.133 2.643s-.065 2.1-.133 2.643c-.065.521-.448.897-.969.956-.348.04-.83.079-1.484.108a.42.42 0 0 0-.394.337l-.143.722a.625.625 0 0 1-1.026.348l-1.207-1.065a1.27 1.27 0 0 0-.81-.314 27 27 0 0 1-2.315-.136 1.07 1.07 0 0 1-.969-.955 17 17 0 0 1-.111-1.452"></path></svg>'
  },
  {
    name: 'Withdraw',
    component: Ecommerce, // Reference to the Ecommerce component
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" class=" h-5 w-5"><path fill="currentColor" d="M3.333 8.296V4.167a2.5 2.5 0 0 1 2.5-2.5h8.334a2.5 2.5 0 0 1 2.5 2.5v4.13c0 .545-.266 1.055-.722 1.354-1.41.924-4.52 2.85-5.945 2.85s-4.535-1.926-5.945-2.85a1.61 1.61 0 0 1-.722-1.355" opacity="0.35"></path><path fill="currentColor" d="M3.333 5.209c-.425.315-.8.603-1.101.839-.502.392-.816.97-.859 1.606-.058.865-.124 2.316-.124 4.43 0 1.997.119 3.404.23 4.282.09.724.575 1.298 1.29 1.446 1.146.237 3.334.521 7.23.521s6.085-.284 7.23-.521c.716-.148 1.2-.722 1.291-1.446.111-.878.23-2.285.23-4.283 0-2.113-.067-3.564-.125-4.429a2.23 2.23 0 0 0-.858-1.606 56 56 0 0 0-1.101-.839v3.087c0 .545-.265 1.055-.722 1.354-1.41.925-4.52 2.85-5.945 2.85s-4.534-1.925-5.945-2.85a1.61 1.61 0 0 1-.721-1.354z"></path><path fill="currentColor" d="M5.833 4.792c0-.345.28-.625.625-.625h3.75a.625.625 0 1 1 0 1.25h-3.75a.625.625 0 0 1-.625-.625M5.833 7.708c0-.345.28-.625.625-.625h6.25a.625.625 0 1 1 0 1.25h-6.25a.625.625 0 0 1-.625-.625"></path></svg>'
  },
  {
    name: 'FA Summary',
    component: Business, // Reference to the Business component
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18" class=" h-5 w-5"><path fill="currentColor" d="M12.492.667H5.508C2.475.667.667 2.475.667 5.509v6.983c0 3.033 1.808 4.842 4.841 4.842h6.984c3.033 0 4.841-1.809 4.841-4.842V5.509c0-3.034-1.808-4.842-4.841-4.842" opacity="0.35"></path><path fill="#475569" d="M14.258 6.392a.624.624 0 0 1-.625.625H9.258a.63.63 0 0 1-.625-.625.63.63 0 0 1 .625-.625h4.375c.35 0 .625.283.625.625M7.308 5.584 5.433 7.46a.62.62 0 0 1-.441.183.6.6 0 0 1-.442-.183l-.625-.625a.614.614 0 0 1 0-.883.63.63 0 0 1 .883 0l.184.183 1.433-1.433a.63.63 0 0 1 .883 0 .63.63 0 0 1 0 .883M14.258 12.226a.624.624 0 0 1-.625.625H9.258a.63.63 0 0 1-.625-.625.63.63 0 0 1 .625-.625h4.375c.35 0 .625.283.625.625M7.308 11.417l-1.875 1.875a.62.62 0 0 1-.441.184.6.6 0 0 1-.442-.184l-.625-.625a.614.614 0 0 1 0-.883.63.63 0 0 1 .883 0l.184.183 1.433-1.433a.63.63 0 0 1 .883 0 .63.63 0 0 1 0 .883"></path></svg>'
  },
  {
    name: 'Trades',
    component: Trades, // Reference to the Business component
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" class=" h-5 w-5"><path fill="currentColor" d="M5.8 1.667c.348 0 .63.258.63.577v1.165c.558-.01 1.185-.01 1.89-.01h3.36c.705 0 1.33 0 1.89.01V2.244c0-.319.282-.577.63-.577s.63.258.63.577v1.215c1.208.088 2.003.306 2.586.84s.82 1.26.917 2.368V7.5H1.667v-.833c.096-1.108.334-1.833.917-2.368.584-.534 1.377-.752 2.586-.84V2.244c0-.319.283-.577.63-.577"></path><path fill="currentColor" d="M18.333 11.667V10c0-.7-.01-1.946-.021-2.5H1.672c-.011.554 0 1.8 0 2.5v1.667c0 3.142 0 4.714.975 5.69.977.976 2.548.976 5.69.976h3.333c3.142 0 4.712 0 5.688-.976.975-.976.975-2.548.975-5.69" opacity="0.35"></path><path fill="currentColor" d="M15 13.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0"></path></svg>'
  },
  {
    name: 'Profit / Loss',
    component: ProfitLoss, // Reference to the Business component
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" class=" h-5 w-5"><path fill="currentColor" d="M16.667 6.875V15c0 2.5-1.492 3.334-3.334 3.334H6.667c-1.842 0-3.334-.834-3.334-3.334V6.875c0-2.708 1.492-3.333 3.334-3.333 0 .517.208.983.55 1.325.341.342.808.55 1.325.55h2.916a1.88 1.88 0 0 0 1.875-1.875c1.842 0 3.334.625 3.334 3.333" opacity="0.35"></path><path fill="currentColor" d="M13.333 3.542a1.88 1.88 0 0 1-1.875 1.875H8.542c-.517 0-.984-.208-1.325-.55a1.86 1.86 0 0 1-.55-1.325c0-1.033.841-1.875 1.875-1.875h2.916c.517 0 .984.208 1.325.55.342.342.55.808.55 1.325M10 11.458H6.667a.63.63 0 0 1-.625-.625.63.63 0 0 1 .625-.625H10a.63.63 0 0 1 .625.625.63.63 0 0 1-.625.625M13.333 14.792H6.667a.63.63 0 0 1-.625-.625.63.63 0 0 1 .625-.625h6.666a.63.63 0 0 1 .625.625.63.63 0 0 1-.625.625"></path></svg>'
  },
  {
    name: 'Funds',
    component: Funds, // Reference to the Business component
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" class=" h-5 w-5"><path fill="currentColor" d="M10 4.417v13.358a.84.84 0 0 1-.408-.092l-.034-.016c-1.6-.875-4.391-1.792-6.2-2.034l-.241-.033c-.8-.1-1.45-.85-1.45-1.65V3.883a1.64 1.64 0 0 1 1.8-1.658c1.75.142 4.4 1.025 5.883 1.95l.208.125a.9.9 0 0 0 .442.117" opacity="0.35"></path><path fill="currentColor" d="M18.333 3.891V13.95c0 .8-.65 1.55-1.45 1.65l-.275.033c-1.816.242-4.616 1.167-6.216 2.05a.74.74 0 0 1-.392.092V4.416a.9.9 0 0 0 .442-.116l.141-.092c1.484-.933 4.142-1.825 5.892-1.975h.05a1.642 1.642 0 0 1 1.808 1.658M6.458 7.7H4.583a.63.63 0 0 1-.625-.625.63.63 0 0 1 .625-.625h1.875a.63.63 0 0 1 .625.625.63.63 0 0 1-.625.625M7.083 10.2h-2.5a.63.63 0 0 1-.625-.625.63.63 0 0 1 .625-.625h2.5a.63.63 0 0 1 .625.625.63.63 0 0 1-.625.625"></path></svg>'
  },
  {
    name: 'NKYC',
    component: NKYC, // Reference to the Business component
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" class=" h-5 w-5"><path fill="currentColor" d="M10 4.417v13.358a.84.84 0 0 1-.408-.092l-.034-.016c-1.6-.875-4.391-1.792-6.2-2.034l-.241-.033c-.8-.1-1.45-.85-1.45-1.65V3.883a1.64 1.64 0 0 1 1.8-1.658c1.75.142 4.4 1.025 5.883 1.95l.208.125a.9.9 0 0 0 .442.117" opacity="0.35"></path><path fill="currentColor" d="M18.333 3.891V13.95c0 .8-.65 1.55-1.45 1.65l-.275.033c-1.816.242-4.616 1.167-6.216 2.05a.74.74 0 0 1-.392.092V4.416a.9.9 0 0 0 .442-.116l.141-.092c1.484-.933 4.142-1.825 5.892-1.975h.05a1.642 1.642 0 0 1 1.808 1.658M6.458 7.7H4.583a.63.63 0 0 1-.625-.625.63.63 0 0 1 .625-.625h1.875a.63.63 0 0 1 .625.625.63.63 0 0 1-.625.625M7.083 10.2h-2.5a.63.63 0 0 1-.625-.625.63.63 0 0 1 .625-.625h2.5a.63.63 0 0 1 .625.625.63.63 0 0 1-.625.625"></path></svg>'
  },
  {
    name: 'IPO',
    component: ipo, // Reference to the Business component
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" class=" h-5 w-5"><path fill="currentColor" d="M10 4.417v13.358a.84.84 0 0 1-.408-.092l-.034-.016c-1.6-.875-4.391-1.792-6.2-2.034l-.241-.033c-.8-.1-1.45-.85-1.45-1.65V3.883a1.64 1.64 0 0 1 1.8-1.658c1.75.142 4.4 1.025 5.883 1.95l.208.125a.9.9 0 0 0 .442.117" opacity="0.35"></path><path fill="currentColor" d="M18.333 3.891V13.95c0 .8-.65 1.55-1.45 1.65l-.275.033c-1.816.242-4.616 1.167-6.216 2.05a.74.74 0 0 1-.392.092V4.416a.9.9 0 0 0 .442-.116l.141-.092c1.484-.933 4.142-1.825 5.892-1.975h.05a1.642 1.642 0 0 1 1.808 1.658M6.458 7.7H4.583a.63.63 0 0 1-.625-.625.63.63 0 0 1 .625-.625h1.875a.63.63 0 0 1 .625.625.63.63 0 0 1-.625.625M7.083 10.2h-2.5a.63.63 0 0 1-.625-.625.63.63 0 0 1 .625-.625h2.5a.63.63 0 0 1 .625.625.63.63 0 0 1-.625.625"></path></svg>'
  },
  {
    name: 'PAYIN',
    component: payin, // Reference to the Business component
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" class=" h-5 w-5"><path fill="currentColor" d="M10 4.417v13.358a.84.84 0 0 1-.408-.092l-.034-.016c-1.6-.875-4.391-1.792-6.2-2.034l-.241-.033c-.8-.1-1.45-.85-1.45-1.65V3.883a1.64 1.64 0 0 1 1.8-1.658c1.75.142 4.4 1.025 5.883 1.95l.208.125a.9.9 0 0 0 .442.117" opacity="0.35"></path><path fill="currentColor" d="M18.333 3.891V13.95c0 .8-.65 1.55-1.45 1.65l-.275.033c-1.816.242-4.616 1.167-6.216 2.05a.74.74 0 0 1-.392.092V4.416a.9.9 0 0 0 .442-.116l.141-.092c1.484-.933 4.142-1.825 5.892-1.975h.05a1.642 1.642 0 0 1 1.808 1.658M6.458 7.7H4.583a.63.63 0 0 1-.625-.625.63.63 0 0 1 .625-.625h1.875a.63.63 0 0 1 .625.625.63.63 0 0 1-.625.625M7.083 10.2h-2.5a.63.63 0 0 1-.625-.625.63.63 0 0 1 .625-.625h2.5a.63.63 0 0 1 .625.625.63.63 0 0 1-.625.625"></path></svg>'
  },
];

const menuItems3 = [
  {
    name: 'Home',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" class=" h-5 w-5"><path fill="currentColor" fill-rule="evenodd" d="M3.436 1.87c.995-.102 2.651-.203 5.314-.203s4.319.1 5.314.203c.85.088 1.47.718 1.567 1.567.102.886.202 2.224.202 4.063 0 1.84-.1 3.177-.202 4.063-.098.85-.716 1.48-1.567 1.568-.879.09-2.273.18-4.421.199a1.26 1.26 0 0 0-.887.373l-1.41 1.43c-.611.62-1.669.26-1.775-.605l-.111-.91a.42.42 0 0 0-.397-.367 33 33 0 0 1-1.626-.12c-.85-.088-1.47-.719-1.568-1.568-.102-.886-.202-2.224-.202-4.063s.1-3.177.202-4.063c.098-.849.717-1.48 1.567-1.567M5.833 5a.833.833 0 1 0 0 1.667h5.834a.833.833 0 1 0 0-1.667zm0 3.75a.833.833 0 1 0 0 1.667h3.334a.833.833 0 1 0 0-1.667z" clip-rule="evenodd" opacity="0.35"></path><path fill="currentColor" d="M5 5.833c0-.46.372-.833.833-.833h5.833a.833.833 0 0 1 0 1.667H5.833a.833.833 0 0 1-.834-.834M5 9.583c0-.46.372-.833.833-.833h3.333a.833.833 0 1 1 0 1.667H5.833a.833.833 0 0 1-.834-.834M8.355 14.11l.4-.406c.234-.238.554-.371.887-.374 2.148-.02 3.543-.109 4.422-.2.85-.087 1.469-.718 1.566-1.567.067-.578.133-1.35.17-2.329.423.025.756.055 1.015.084.52.059.903.435.968.956.068.544.133 1.393.133 2.643s-.065 2.1-.133 2.643c-.065.521-.448.897-.969.956-.348.04-.83.079-1.484.108a.42.42 0 0 0-.394.337l-.143.722a.625.625 0 0 1-1.026.348l-1.207-1.065a1.27 1.27 0 0 0-.81-.314 27 27 0 0 1-2.315-.136 1.07 1.07 0 0 1-.969-.955 17 17 0 0 1-.111-1.452"></path></svg>'
  },
  {
    name: 'Messages',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" class=" h-5 w-5"><path fill="currentColor" d="M3.333 8.296V4.167a2.5 2.5 0 0 1 2.5-2.5h8.334a2.5 2.5 0 0 1 2.5 2.5v4.13c0 .545-.266 1.055-.722 1.354-1.41.924-4.52 2.85-5.945 2.85s-4.535-1.926-5.945-2.85a1.61 1.61 0 0 1-.722-1.355" opacity="0.35"></path><path fill="currentColor" d="M3.333 5.209c-.425.315-.8.603-1.101.839-.502.392-.816.97-.859 1.606-.058.865-.124 2.316-.124 4.43 0 1.997.119 3.404.23 4.282.09.724.575 1.298 1.29 1.446 1.146.237 3.334.521 7.23.521s6.085-.284 7.23-.521c.716-.148 1.2-.722 1.291-1.446.111-.878.23-2.285.23-4.283 0-2.113-.067-3.564-.125-4.429a2.23 2.23 0 0 0-.858-1.606 56 56 0 0 0-1.101-.839v3.087c0 .545-.265 1.055-.722 1.354-1.41.925-4.52 2.85-5.945 2.85s-4.534-1.925-5.945-2.85a1.61 1.61 0 0 1-.721-1.354z"></path><path fill="currentColor" d="M5.833 4.792c0-.345.28-.625.625-.625h3.75a.625.625 0 1 1 0 1.25h-3.75a.625.625 0 0 1-.625-.625M5.833 7.708c0-.345.28-.625.625-.625h6.25a.625.625 0 1 1 0 1.25h-6.25a.625.625 0 0 1-.625-.625"></path></svg>'
  },
  {
    name: 'Notifications',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" class=" h-5 w-5"><path fill="currentColor" d="M18.333 8.75c0 2.255-.06 4.022-.117 5.168-.038.781-.794 1.341-1.568 1.237-1.27-.171-3.415-.363-6.648-.363s-5.377.192-6.648.363c-.774.104-1.53-.456-1.568-1.237a107 107 0 0 1-.117-5.168c0-2.255.06-4.021.117-5.168.038-.78.794-1.34 1.568-1.236 1.27.17 3.416.363 6.648.363 3.233 0 5.378-.192 6.648-.363.774-.105 1.53.456 1.568 1.236.056 1.147.117 2.913.117 5.168" opacity="0.32"></path><path fill="currentColor" d="M4.659 15.008a27 27 0 0 0-.779 2.075c-.073.227.064.465.3.488.387.038.8.02 1.116-.007.345-.03.647-.227.834-.517.492-.762.969-1.556 1.352-2.213-1.123.04-2.059.103-2.823.174M12.518 14.834c.383.657.86 1.451 1.352 2.213.187.29.49.487.834.517a6.4 6.4 0 0 0 1.116.007c.237-.023.373-.262.3-.488a27 27 0 0 0-.779-2.075c-.764-.07-1.7-.134-2.823-.174"></path></svg>'
  },
  {
    name: 'Settings',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" class=" h-5 w-5"><path fill="currentColor" d="M16.667 6.875V15c0 2.5-1.492 3.334-3.334 3.334H6.667c-1.842 0-3.334-.834-3.334-3.334V6.875c0-2.708 1.492-3.333 3.334-3.333 0 .517.208.983.55 1.325.341.342.808.55 1.325.55h2.916a1.88 1.88 0 0 0 1.875-1.875c1.842 0 3.334.625 3.334 3.333" opacity="0.35"></path><path fill="currentColor" d="M13.333 3.542a1.88 1.88 0 0 1-1.875 1.875H8.542c-.517 0-.984-.208-1.325-.55a1.86 1.86 0 0 1-.55-1.325c0-1.033.841-1.875 1.875-1.875h2.916c.517 0 .984.208 1.325.55.342.342.55.808.55 1.325M10 11.458H6.667a.63.63 0 0 1-.625-.625.63.63 0 0 1 .625-.625H10a.63.63 0 0 1 .625.625.63.63 0 0 1-.625.625M13.333 14.792H6.667a.63.63 0 0 1-.625-.625.63.63 0 0 1 .625-.625h6.666a.63.63 0 0 1 .625.625.63.63 0 0 1-.625.625"></path></svg>'
  }
];

const menuItems4 = [
  {
    name: 'Dashboard',
    icon: {
      width: 24,
      height: 24,
      viewBox: '0 0 24 24',
      paths: [
        { d: "M3 3h18v18H3z" },
        { d: "M3 9h18" },
        { d: "M9 3v18" }
      ]
    }
  },
  {
    name: 'Users',
    icon: {
      width: 24,
      height: 24,
      viewBox: '0 0 24 24',
      paths: [
        { d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4Z" },
        { d: "M8 14c-1.11 0-2 .89-2 2s.89 2 2 2h8c1.11 0 2-.89 2-2s-.89-2-2-2H8Z" }
      ]
    }
  },
  {
    name: 'Calendar',
    icon: {
      width: 24,
      height: 24,
      viewBox: '0 0 24 24',
      paths: [
        { d: "M3 5h18V3h-2V1h-2v2h-8V1h-2v2H3z" },
        { d: "M3 7h18v14H3z" },
        { d: "M3 7v14h18V7" }
      ]
    }
  },
  {
    name: 'Reports',
    icon: {
      width: 24,
      height: 24,
      viewBox: '0 0 24 24',
      paths: [
        { d: "M5 3h14v18H5z" },
        { d: "M5 7h14" },
        { d: "M5 11h14" },
        { d: "M5 15h14" }
      ]
    }
  }
];

const toggleSidebar = () => {


  if (isFixedSidebar.value) {
    isSidebarOpen.value = true;
  } else {
    isSidebarOpen.value = false;
  }
};

const openSidebar = () => {
  if (!isFixedSidebar.value) {
    isSidebarOpen.value = true;
  }
};

const handleMouseLeave = (event) => {
  const sidebar = document.getElementById('app-sidebar-10');
  const isOutside = !sidebar.contains(event.relatedTarget);
  if (isOutside && !isFixedSidebar.value) {
    isSidebarOpen.value = false;
  }
};

const changeActiveTab = (index) => {
  activeTab2.value = index;
};

watch(isFixedSidebar, (newValue) => {
  if (Array.isArray(newValue) && newValue.includes(true)) {
    isSidebarOpen.value = true;
  } else {
    isSidebarOpen.value = false;
    isFixedSidebar.value = false;
  }
});

onMounted(async () => {
  const route = useRoute();
  const router = useRouter(); // Get the router instance

  clientName.value = route.query.clientName ? route.query.clientName : "";
  clientcode.value = route.query.clientcode ? route.query.clientcode : "";
  console.log(clientcode.value, "clientcode.value");

  // Clear the query parameters using router.replace
  await router.replace({ path: route.path, query: {} });
});

</script>

<style>
* {
  font-family: 'Inter', sans-serif;
}

.hidden {
  transform: translateX(-100%);
}

.p-checkbox-checked .p-checkbox-box {
  border-color: #2f449d !important;
  background: #2f449d !important;
}

.p-menu-item .focus {
  border-color: #2f449d !important;
  background: #2f449d !important;
  color: #2f449d !important;

}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
    transform: translateX(0);
  }

  to {
    opacity: 0;
    transform: translateX(-20px);
  }
}

.fade-in {
  animation: fadeIn 0.3s forwards;
}

.fade-out {
  animation: fadeOut 0.3s forwards;
}

:root {
  font-family: 'Inter', sans-serif;
}

#app-sidebar-10 {
  font-family: 'Inter', sans-serif;
}

@keyframes slideDown {
  0% {
    transform: translateY(-50px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes expandSize {
  from {
    transform: scale(0.9);
  }

  to {
    transform: scale(1);
  }
}

.custom {
  font-weight: 600;
  font-family: 'Inter', sans-serif;
}


.fade-animation {
  animation: fade 0.4s ease-in-out;
}

@keyframes fade {
  0% {
    opacity: 0.3;
    transform: scale(0.9);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}


.ripple {
  position: absolute;
  border-radius: 50%;
  transform: scale(0);
  animation: ripple-animation 600ms linear;
  background-color: rgba(119, 118, 118, 0.6);
  pointer-events: none;
  z-index: 0;
}

@keyframes ripple-animation {
  to {
    transform: scale(4);
    opacity: 0;
  }
}

</style>