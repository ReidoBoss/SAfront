decoy.vue

<template>
  <!--GENERAL-->
  <h1>OPERATOR YEAH!</h1>
  <Tab title="create post">
    <section class="max-w-4xl p-6 mx-auto">
      <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
        <!--Property Name-->
        <div>
          <label class="block text-base font-medium text-gray-900 mt-5" for="propertyname"
            >Username:</label
          >
          <input
            v-model="username"
            id="username"
            type="text"
            class="block w-full px-4 py-2 mt-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
          />
        </div>
        <!--YEAH Name-->

        <!--Property Name-->
        <div>
          <label class="block text-base font-medium text-gray-900 mt-5" for="propertyname"
            >password:</label
          >
          <input
            v-model="password"
            id="password"
            type="password"
            class="block w-full px-4 py-2 mt-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
          />
        </div>
        <!--YEAH Name-->
      </div>
    </section>
  </Tab>

  <!--Upload Image-->
  <div>
    <label class="block text-sm font-medium text-black"> Upload an Image </label>
    <div
      class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
    >
      <div class="space-y-1 text-center">
        <svg
          class="mx-auto h-12 w-12 text-black"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 48 48"
          aria-hidden="true"
        >
          <path
            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <div class="flex text-sm text-black">
          <label
            for="image"
            class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
          >
            <span class="">Upload a file</span>
            <input
              @change="handleFileChange"
              id="image"
              name="image"
              type="file"
              class="sr-only"
            />
          </label>
          <p class="pl-1">or drag and drop</p>
        </div>
        <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF</p>
      </div>
    </div>
  </div>

  <!--Property Name-->
  <div>
    <label class="block text-base font-medium text-gray-900 mt-5" for="propertyname"
      >First Name:</label
    >
    <input
      v-model="firstname"
      id="firstname"
      type="text"
      class="block w-full px-4 py-2 mt-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
    />
  </div>
  <!--YEAH Name-->
  <!--Property Name-->
  <div>
    <label class="block text-base font-medium text-gray-900 mt-5" for="propertyname"
      >Last Name:</label
    >
    <input
      v-model="lastname"
      id="lastname"
      type="text"
      class="block w-full px-4 py-2 mt-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
    />
  </div>
  <!--YEAH Name-->
  <!-- Status -->
  <div>
    <label class="text-white dark:text-black font-medium" for="propertystatus"
      >Status</label
    >
    <select
      v-model="gender"
      id="gender"
      class="block w-full px-4 py-2 mt-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
    >
      <option value="male">male</option>
      <option value="female">female</option>
      <option value="rather not say">rather not to say</option>
    </select>
  </div>
  <!-- Status -->
  <div>
    <label class="text-white dark:text-black font-medium" for="birthdate"
      >Birthdate</label
    >
    <input
      v-model="birthdate"
      type="date"
      id="birthdate"
      class="block w-full px-4 py-2 mt-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
    />
  </div>

  <!--Property Name-->
  <div>
    <label class="block text-base font-medium text-gray-900 mt-5" for="propertyname"
      >ADDRESS :</label
    >
    <input
      v-model="address"
      id="address"
      type="text"
      class="block w-full px-4 py-2 mt-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
    />
  </div>
  <!--YEAH Name-->
  <!--Property Name-->
  <div>
    <label class="block text-base font-medium text-gray-900 mt-5" for="propertyname"
      >Email:</label
    >
    <input
      v-model="email"
      id="email"
      type="text"
      class="block w-full px-4 py-2 mt-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
    />
  </div>
  <!--YEAH Name-->

  <div class="flex justify-end mt-6">
    <button
      @click="submitOperator"
      class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-[#E67E23] rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600 mr-4"
      id="saveAgent"
    >
      Save
    </button>
  </div>



  <h1>Responder Yeah!</h1>
  <!--GENERAL-->
  <Tab title="create post">
    <section class="max-w-4xl p-6 mx-auto">
      <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
        <!--Property Name-->
        <div>
          <label class="block text-base font-medium text-gray-900 mt-5" for="propertyname"
            >Username:</label
          >
          <input
            v-model="r_username"
            id="username"
            type="text"
            class="block w-full px-4 py-2 mt-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
          />
        </div>
        <!--YEAH Name-->

        <!--Property Name-->
        <div>
          <label class="block text-base font-medium text-gray-900 mt-5" for="propertyname"
            >password:</label
          >
          <input
            v-model="r_password"
            id="password"
            type="password"
            class="block w-full px-4 py-2 mt-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
          />
        </div>
        <!--YEAH Name-->
      </div>
    </section>
  </Tab>

  <!--Upload Image-->
  <div>
    <label class="block text-sm font-medium text-black"> Upload an Image </label>
    <div
      class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
    >
      <div class="space-y-1 text-center">
        <svg
          class="mx-auto h-12 w-12 text-black"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 48 48"
          aria-hidden="true"
        >
          <path
            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <div class="flex text-sm text-black">
          <label
            for="image"
            class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
          >
            <span class="">Upload a file</span>
            <input
              @change="handleFileChangeResponder"
              id="image"
              name="image"
              type="file"
              class="sr-only"
            />
          </label>
          <p class="pl-1">or drag and drop</p>
        </div>
        <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF</p>
      </div>
    </div>
  </div>

  <!--Property Name-->
  <div>
    <label class="block text-base font-medium text-gray-900 mt-5" for="propertyname"
      >Department:</label
    >
      <select v-model="r_department" id="r_department">
        <option value="flood">flood</option>
        <option value="medical">medical</option>
        <option value="crime">crime</option>
        <option value="fire">fire</option>
      </select>
  </div>
  <!--YEAH Name-->
  <!--Property Name-->
  <div>
    <label class="block text-base font-medium text-gray-900 mt-5" for="propertyname"
      >Institution:</label
    >
    <input
      v-model="r_institution"
      id="lastname"
      type="text"
      class="block w-full px-4 py-2 mt-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
    />
  </div>
  <!--YEAH Name-->
  <!-- Status -->
  <div>
    <label class="block text-base font-medium text-gray-900 mt-5" for="propertyname"
      >Institution:</label
    >
    <input
      v-model="r_mobile_number"
      id="lastname"
      type="text"
      class="block w-full px-4 py-2 mt-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
    />
  </div>
  <!-- Status -->
  <div>
    <label class="block text-base font-medium text-gray-900 mt-5" for="propertyname"
      >Institution:</label
    >
    <input
      v-model="r_email"
      id="lastname"
      type="text"
      class="block w-full px-4 py-2 mt-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
    />
  </div>

  <!--Property Name-->
  <div>
    <label class="block text-base font-medium text-gray-900 mt-5" for="propertyname"
      >City :</label
    >
    <input
      v-model="r_city"
      id="address"
      type="text"
      class="block w-full px-4 py-2 mt-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
    />
  </div>
  <!--YEAH Name-->
  <!--Property Name-->
  <div>
    <label class="block text-base font-medium text-gray-900 mt-5" for="propertyname"
      >Email:</label
    >
    <input
      v-model="r_zipcode"
      id="email"
      type="text"
      class="block w-full px-4 py-2 mt-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
    />
  </div>
  <div>
    <label class="block text-base font-medium text-gray-900 mt-5" for="propertyname"
      >Address:</label
    >
    <input
      v-model="r_address"
      id="email"
      type="text"
      class="block w-full px-4 py-2 mt-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
    />
  </div>
  <!--YEAH Name-->

  <div class="flex justify-end mt-6">
    <button
      @click="submitResponder"
      class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-[#E67E23] rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600 mr-4"
      id="saveAgent"
    >
      Save
    </button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import axios from "axios";

const imageFileOperator = ref(null);
const username = ref("test");
const password = ref("test");
const firstname = ref("test");
const lastname = ref("test");
const gender = ref("test");
const birthdate = ref("");
const address = ref("test");
const email = ref("test");

const handleFileChange = (event) => {
  const file = (event.target.files || [])[0];
  if (file) {
    imageFileOperator.value = file;
  }
};

const submitOperator = async () => {
  try {
    // if (!imageFile.value) {
    //   throw { message: "Image file is required" };
    // }

    const formData = new FormData();
    formData.append("username", username.value);
    formData.append("password", password.value);
    formData.append("first_name", firstname.value);
    formData.append("last_name", lastname.value);
    formData.append("gender", gender.value);
    formData.append("birthdate", birthdate.value);
    formData.append("address", address.value);
    formData.append("email", email.value);
    formData.append("image", imageFileOperator.value);

    const response = await axios.post("http://localhost:8080/addOperator", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  } catch (error) {
    console.error("Error uploading image:", error.message || "Unknown error");
  }
};



const imageFileResponder = ref(null);
const r_username = ref("test");
const r_password = ref("test");
const r_department = ref("test");
const r_institution = ref("test");
const r_mobile_number = ref("test");
const r_email = ref("bryansagarino222@gmail.com");
const r_city = ref("test");
const r_zipcode = ref("test");
const r_address = ref("test");


const handleFileChangeResponder = (event) => {
  const file = (event.target.files || [])[0];
  if (file) {
    imageFileResponder.value = file;
  }
};


const submitResponder = async () => {
  try {


    const formData = new FormData();
    formData.append("username", username.value);
    formData.append("password", password.value);
    formData.append("department", r_department.value);
    formData.append("institution", r_institution.value);
    formData.append("mobile_number", r_mobile_number.value);
    formData.append("email", r_email.value);
    formData.append("city", r_city.value);
    formData.append("zipcode", r_zipcode.value);
    formData.append("address", r_address.value);



    formData.append("image", imageFileOperator.value);

    const response = await axios.post("http://localhost:8080/addResponder", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  } catch (error) {
    console.error("Error uploading image:", error.message || "Unknown error");
  }
};
</script>
