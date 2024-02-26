<template>

      YOU ARE CURRENTLY A <strong>{{ responderATM }}</strong> RESPONDER



      <div v-for="(post, index) in postData" 
      :key="index" 
      :post_id="post.post_id" 
      :description="post.description" 
      :emergency_type="post.emergency_type" 
      :city="post.city" 
      :zipcode="post.zipcode" 
      :address="post.address" 
      :status="post.status">

      <div v-if="post.emergency_type===responderATM">
        ------------------------------------------------------------------------------------------------<br>
        DESCRIPTION: {{post.description}}<br>
        <strong>EMERGENCY TYPE:  {{post.emergency_type}}<br></strong>
        CITY: {{post.city}}<br>
        ZIPCODE: {{post.zipcode}}<br>
        ADDRESS: {{post.address}}<br>
        ------------------------------------------------------------------------------------------------<br>

      </div>


      </div>









</template>

<script lang="ts" setup>
import { ref , onMounted} from "vue";
import axios from "axios";

const responder_choice = ref<string>('');
const responderATM = localStorage.getItem('responder_department');




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

  


</script>