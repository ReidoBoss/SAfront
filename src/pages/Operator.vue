<template>


    <div v-for="(post, index) in postData" :key="index" :post_id="post.post_id" :description="post.description" :emergency_type="post.emergency_type" :city="post.city" :zipcode="post.zipcode" :address="post.address" :status="post.status">
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
                <th style="width: 50%; border: 1px solid #ddd; padding: 8px; text-align: left;">
                    <div v-if="post.status == 'pending'">
                        <strong>PENDING</strong><br>
                        DESCRIPTION: {{post.description}}<br>
                        EMERGENCY TYPE: {{post.emergency_type}}<br>
                        CITY: {{post.city}}<br>
                        ZIPCODE: {{post.zipcode}}<br>
                        ADDRESS: {{post.address}}<br>
                        <button @click=acknowledge(post.post_id) style="background-color: green; color: white; margin-top: 10px;">Acknowledge</button>
                        <button @click=deny(post.post_id) style="background-color: red; color: white; margin-top: 10px;">Decline</button>
                    </div>
                </th>
                <th style="width: 50%; border: 1px solid #ddd; padding: 8px; text-align: left;">
                    <div v-if="post.status == 'acknowledged'">
                        <strong>Acknowledged</strong><br>
                        DESCRIPTION: {{post.description}}<br>
                        EMERGENCY TYPE: {{post.emergency_type}}<br>
                        CITY: {{post.city}}<br>
                        ZIPCODE: {{post.zipcode}}<br>
                        ADDRESS: {{post.address}}<br>

                    </div>
                </th>
            </tr>
        </table>
    </div>
    
  </template>

  <script lang="ts" setup>
  import { onMounted, ref } from "vue";
  import axios from "axios";

  onMounted(() => {
      initializeDataFetching();
  });
  
  interface Post {
      description: string;
      emergency_type: string;
      city: string;
      zipcode: string;
      address: string;
      post_id: number;
      status: string;

  }
  
  var postData = ref<Post[]>([]);
  
  const fetchData = async () => {
      try {
          const response = await axios.get<Post[]>("http://localhost:8080/getPost");

          const previousLength = postData.value.length; 
          postData.value = response.data; 
          const currentLength = postData.value.length; 

          if (currentLength > previousLength) { 
            console.log("New data added:", postData.value[currentLength - 1]); 

            const audio = new Audio(`src/assets/omg.mp3`); 
            console.log("test");
            audio.play();
          }
      } catch (error) {
          console.error("Error fetching data:", error);
      }
  };
  
  const initializeDataFetching = async () => {
      await fetchData();
      setInterval(fetchData, 1000); 
  };
  



  const acknowledge = async (id: number) => {
  try {
    const response = await axios.put(`http://localhost:8080/acknowledgePost/${id}`);
  } catch (error) {
    console.error("Error acknowledging post:", error.message || "Unknown error");
  }
};


const deny = async (id: number) => {
  try {
    const response = await axios.put(`http://localhost:8080/denyPost/${id}`);
  } catch (error) {
    console.error("Error acknowledging post:", error.message || "Unknown error");
  }
};

  </script>
  
  


<style scoped>

  






</style>