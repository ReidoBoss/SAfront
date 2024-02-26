<template>

        <div>
          <label class="block text-base font-medium text-gray-900 mt-5" for="propertyname"
            >Description:</label
          >
          <input
            v-model="description"
            id="description"
            type="text"
            class="block w-full px-4 py-2 mt-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
          />
        </div>
   
          <div>
            <label class="block text-base font-medium text-gray-900 mt-5" for="propertyname"
              >emergency type:</label
            >
            <select v-model="emergency" id="emergency" class="block w-full px-4 py-2 mt-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none">
                <option value="fire">fire</option>
                <option value="flood">flood</option>
                <option value="medical">medical</option>
                <option value="crime">crime</option>
              </select>
          </div>
          <div>
            <label class="block text-base font-medium text-gray-900 mt-5" for="propertyname"
              >city:</label
            >
            <input
              v-model="city"
              id="city"
              type="text"
              class="block w-full px-4 py-2 mt-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
            />
          </div>
          <div>
            <label class="block text-base font-medium text-gray-900 mt-5" for="propertyname"
              >zipcode:</label
            >
            <input
              v-model="zipcode"
              id="zipcode"
              type="text"
              class="block w-full px-4 py-2 mt-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
            />
          </div>         
           <div>
            <label class="block text-base font-medium text-gray-900 mt-5" for="propertyname"
              >address:</label
            >
            <input
              v-model="address"
              id="address"
              type="text"
              class="block w-full px-4 py-2 mt-2 rounded-md text-gray-950 shadow-sm ring-1 ring-inset ring-gray-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:outline-none"
            />
          </div>
          <div class="flex justify-end mt-6">
            <button
              @click="submitPost"
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

const description = ref("ang kalayo ni kalatkat sa balumbong tabang!");
const emergency = ref();
const city = ref("Lapu-Lapu");
const zipcode = ref("6015");
const address = ref("Masiwa Marigondon");

const submitPost = async () => {
  try {

    const formData = new FormData();
    formData.append("description",description.value);
    formData.append("emergency_type",emergency.value);
    formData.append("city",city.value);
    formData.append("zipcode",zipcode.value);
    formData.append("address",address.value);

    const response = await axios.post("http://localhost:8080/addPost", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  } catch (error) {
    console.error("Error uploading image:", error.message || "Unknown error");
  }
};

</script>