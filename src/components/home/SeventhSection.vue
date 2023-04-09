<template>
  <div class="flex flex-col items-center justify-center mt-24">
    <div class="space-y-4 lg:space-y-12">
      <!--- Text Div Section --->
      <div class="space-y-3">
        <h3 data-aos="fade-up" data-aos-duration="3000"
          style="font-family: 'Montserrat', sans-serif"
          class="text-xl md:text-3xl text-center font-medium text-gray-800 tracking-wider"
        >
          Frequently Asked Questions
        </h3>

        <p data-aos="zoom-in-up" data-aos-duration="3000"
          style="font-family: 'Montserrat', sans-serif"
          class="text-xs md:text-sm font-medium tracking-wider text-center text-gray-800 px-4 md:px-0 md:w-5/12 mx-auto"
        >
          There are some questions I usually get when conversing with my clients. Click to
          toggle the answers, and if you've' got some more questions , shoot me a message
          in the contact section!
        </p>
      </div>

      <!--- Grid Box --->
      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="3000"  class="grid grid-cols-1 gap-8 px-4 md:grid md:grid-cols-2 md:gap-8 md:px-14">
        <!--- Box 1 --->
          <div class="tab w-full overflow-hidden border-t">
            <input
              class="absolute opacity-0"
              id="tab-multi-one"
              type="checkbox"
              name="tabs"
            />
            <label class="block p-5 leading-normal text-gray-800  cursor-pointer" for="tab-multi-one"
              >What do you need to start working on my project?</label
            >
            <div
              class="tab-content overflow-hidden border-l-2 bg-gray-100 border-[#4e6d9c] leading-normal"
            >
              <p class="p-5">
                It mostly depends on the type of project. But in general, you need a fair idea of what you want ,
                 then we can pick it up from there.
              </p>
            </div>
          </div>
          <!--- Box 2 --->
          <div class="tab w-full overflow-hidden border-t">
            <input
              class="absolute opacity-0"
              id="tab-multi-two"
              type="checkbox"
              name="tabs"
            />
            <label class="block p-5 leading-normal text-gray-800  cursor-pointer" for="tab-multi-two"
              >How long will it my project take to complete?</label
            >
            <div
              class="tab-content overflow-hidden border-l-2 bg-gray-100 border-[#4e6d9c] leading-normal"
            >
              <p class="p-5">
                These greatly depends on the complexity of the project, your availability and your payment.
                 Once you have sorted out, I will give you a completion date.
              </p>
            </div>
          </div>
          <!--- Box 3 --->
          <div class="tab w-full overflow-hidden border-t">
            <input
              class="absolute opacity-0"
              id="tab-multi-three"
              type="checkbox"
              name="tabs"
            />
            <label class="block p-5 leading-normal text-gray-800  cursor-pointer" for="tab-multi-three"
              >Is the hosting and domain registration inclusive in the pricing?</label
            >
            <div
              class="tab-content overflow-hidden border-l-2 bg-gray-100 border-[#4e6d9c] leading-normal"
            >
              <p class="p-5">
                No! Hosting and domain registration is not inclusive in the pricing.
                 You can choose to pay for it or take care of it if you know how to.
              </p>
            </div>
          </div>
          <!--- Box 4 --->
          <div class="tab w-full overflow-hidden border-t">
            <input
              class="absolute opacity-0"
              id="tab-multi-four"
              type="checkbox"
              name="tabs"
            />
            <label class="block p-5 leading-normal text-gray-800  cursor-pointer" for="tab-multi-four"
              >How much do you charge for an average website or app?</label
            >
            <div
              class="tab-content overflow-hidden border-l-2 bg-gray-100 border-[#4e6d9c] leading-normal"
            >
              <p class="p-5">
                Once again these depends on the complexity of the app or website.
                 But in general, my prices are very affordable and pocket friendly.
              </p>
            </div>
          </div>
          <!--- Box 5 --->
          <div class="tab w-full overflow-hidden border-t">
            <input
              class="absolute opacity-0"
              id="tab-multi-five"
              type="checkbox"
              name="tabs"
            />
            <label class="block p-5 leading-normal text-gray-800  cursor-pointer" for="tab-multi-five"
              >What is your payment plan?</label
            >
            <div
              class="tab-content overflow-hidden border-l-2 bg-gray-100 border-[#4e6d9c] leading-normal"
            >
              <p class="p-5">
                Payment is divided into 3. 40% upfront payment to get me started once all the details of the project is set,
                 40% once the project is completed, and 20% once the project is delivered.
              </p>
            </div>
          </div>
          <!--- Box 6 --->
          <div class="tab w-full overflow-hidden border-t">
            <input
              class="absolute opacity-0"
              id="tab-multi-six"
              type="checkbox"
              name="tabs"
            />
            <label class="block p-5 leading-normal text-gray-800  cursor-pointer" for="tab-multi-six"
              >What happens if the project doesn't turn out well?</label
            >
            <div
              class="tab-content overflow-hidden border-l-2 bg-gray-100 border-[#4e6d9c] leading-normal"
            >
              <p class="p-5">
                You will be part of the process from start to finish. And I will ensure to give you my very best.
              </p>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Tab content - closed */
.tab-content {
  max-height: 0;
  -webkit-transition: max-height 0.35s;
  -o-transition: max-height 0.35s;
  transition: max-height 0.35s;
}
/* :checked - resize to full height */
.tab input:checked ~ .tab-content {
  max-height: 100vh;
}
/* Label formatting when open */
.tab input:checked + label {
  /*@apply text-xl p-5 border-l-2 border-indigo-500 bg-gray-100 text-indigo*/
  font-size: 1.25rem; /*.text-xl*/
  padding: 1.25rem; /*.p-5*/
  border-left-width: 2px; /*.border-l-2*/
  border-color: #114ba1; /*.border-indigo*/
  background-color: #f8fafc; /*.bg-gray-100 */
  color: #114ba1; /*.text-indigo*/
}
/* Icon */
.tab label::after {
  float: right;
  right: 0;
  top: 0;
  display: block;
  width: 1.5em;
  height: 1.5em;
  line-height: 1.5;
  font-size: 1.25rem;
  text-align: center;
  -webkit-transition: all 0.35s;
  -o-transition: all 0.35s;
  transition: all 0.35s;
}
/* Icon formatting - closed */
.tab input[type="checkbox"] + label::after {
  content: "+";
  font-weight: bold; /*.font-bold*/
  border-width: 1px; /*.border*/
  border-radius: 9999px; /*.rounded-full */
  border-color: #b8c2cc; /*.border-grey*/
}
.tab input[type="radio"] + label::after {
  content: "\25BE";
  font-weight: bold; /*.font-bold*/
  border-width: 1px; /*.border*/
  border-radius: 9999px; /*.rounded-full */
  border-color: #b8c2cc; /*.border-grey*/
}
/* Icon formatting - open */
.tab input[type="checkbox"]:checked + label::after {
  transform: rotate(315deg);
  background-color: #114ba1; /*.bg-indigo*/
  color: #f8fafc; /*.text-grey-lightest*/
}
.tab input[type="radio"]:checked + label::after {
  transform: rotateX(180deg);
  background-color: #114ba1; /*.bg-indigo*/
  color: #f8fafc; /*.text-grey-lightest*/
}
</style>
