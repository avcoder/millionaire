<template>
  <div>
    <section class="section">
      <button id="fifty_fifty" class="button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-divide-square"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="8" y1="12" x2="16" y2="12"></line>
          <line x1="12" y1="16" x2="12" y2="16"></line>
          <line x1="12" y1="8" x2="12" y2="8"></line>
        </svg>
      </button>
      <button id="ask_audience" class="button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-bar-chart-2"
        >
          <line x1="18" y1="20" x2="18" y2="10"></line>
          <line x1="12" y1="20" x2="12" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="14"></line>
        </svg>
      </button>
      <button id="phone_friend" class="button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-phone-call"
        >
          <path
            d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
          ></path>
        </svg>
      </button>
    </section>
  </div>
</template>

<style>
.section {
  text-align: center;
  min-width: 250px;
}
.section .button {
  cursor: pointer;
  border-radius: 10px 20px;
  margin: 10px;
  color: #fff;

  /* taken from https://uigradients.com/#Lawrencium */
  background: #000428; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #004e92,
    #000428
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom, #004e92, #000428);
}

#fifty_fifty {
  color: white;
  background-color: white;
}
</style>
