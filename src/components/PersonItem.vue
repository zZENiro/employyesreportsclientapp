<template>
    <div class="list-group-item">
        <div class="row" >
             
            <div class="my-1 mx-1 col-md-1">
                {{personData.id}}
            </div>

            <div class="my-1 mx-1 col-md-3">{{personData.name}}</div>
            <div class="my-1 mx-1 col-md-3">{{personData.secondname}}</div>
            
            <div class="mx-2 col-md-2">
                 <router-link to="/update">
                    <b-button variant="warning" v-bind:settings="personData" onclick="this.blur();">Update</b-button>
                </router-link>
            </div>
          
            <div class="mx-2 col-md-2" v-on:click="deletePerson">
                <b-button variant="danger"  onclick="this.blur();">Delete</b-button>
            </div>
        </div>
    </div>
</template>

<script>
import PersonSettings from '@/components/PersonSettings'

export default {
    props: ['personData'],
    components:
    {
        PersonSettings
    },
    methods:
    {
        deletePerson: function()
        {
            // call api deletion

            this.$emit("deletePerson", this.personData)
        }
    }
}
</script>