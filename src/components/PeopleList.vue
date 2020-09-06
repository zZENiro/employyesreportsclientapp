<template>  
    <div class="my-4 container list-group">
        <PersonItem v-for="person in peopleData" :key="person.id" 
                    v-bind:personData="person"
                    @deletePerson="removeFromCollection"/>
    </div>
</template>

<script>
import PersonItem from '@/components/PersonItem'

export default {
    props: ["peopleData"],
    components:
    {
        PersonItem
    },
    methods:
    {
        removeFromCollection: function(ea)
        {
            this.peopleData = this.peopleData.filter(person => person.id != ea.id);
        }
    }
}
</script>